// ── Next Stop ────────────────────────────────────────────────────────────────
// "Where should I go next?" — ranks the curated places (data/) from where you
// are right now. Inputs: live GPS (works offline) + your live Polarsteps trip,
// fetched through the little proxy in proxy/ (see NEXTSTOP_SETUP.md) so the
// token never touches this public app. The last sync is kept in localStorage,
// so the screen keeps working with no signal — the whole point of this app.
//
// The ranking itself is local and deterministic, tuned to PREFERENCES.md:
// close-by beats far away (the traveler doesn't fly — overland continuity
// matters), in-season beats off-season, festivals count, places already
// stepped on Polarsteps drop out, and the list mixes categories.

import { COUNTRIES } from "./data/index.js";
import { PROXY_URL, isConfigured } from "./nextstop-config.js";

// Mirrors CATS in app.js (kept local, like expenses.js does with its lists).
const CATS = {
  architecture: { label: "Architecture", color: "var(--cat-architecture)", icon: "🏛️" },
  history:      { label: "History",      color: "var(--cat-history)",      icon: "🏰" },
  nature:       { label: "Nature",       color: "var(--cat-nature)",       icon: "⛰️" },
  food:         { label: "Food",         color: "var(--cat-food)",         icon: "🍜" },
  offbeat:      { label: "Off-beat",     color: "var(--cat-offbeat)",      icon: "🧭" },
};

/* ── tuning ──────────────────────────────────────────────────────────────── */
const VISITED_KM = 25;     // a Polarsteps step this close = "been there"
const FLIGHT_KM = 1500;    // beyond this, overland stops being realistic
const DECAY_KM = 300;      // proximity half-life-ish: exp(-km/DECAY_KM)
const SHOWN = 8;           // ranked list length
// Modifiers scale the proximity score (score = prox × (1 + Σmod)) so distance
// stays the backbone: an off-season place nearby still beats a neutral one
// three countries away — the traveler moves overland, not by plane.
const W = { season: 0.5, offSeason: -0.5, event: 0.35, eventAvoid: -0.6, direction: 0.25, flight: 0.3 };

/* ── storage ─────────────────────────────────────────────────────────────── */
const LS_SYNC = "trip-next-sync"; // { at, trip:{name}, steps:[{name,lat,lon,t,cc}] }
const LS_FIX = "trip-next-fix";   // { lat, lon, at }
const LS_KEY = "trip-next-key";   // proxy passphrase — typed once, lives only on this device
const read = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

/* ── tiny helpers (idiom of app.js) ──────────────────────────────────────── */
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const ago = (ts) => {
  const m = Math.round((Date.now() - ts) / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m} min ago`;
  if (m < 48 * 60) return `${Math.round(m / 60)} h ago`;
  return `${Math.round(m / 1440)} days ago`;
};

/* ── geometry ────────────────────────────────────────────────────────────── */
const rad = (d) => (d * Math.PI) / 180;

function km([lat1, lon1], [lat2, lon2]) {
  const a =
    Math.sin(rad(lat2 - lat1) / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(rad(lon2 - lon1) / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function bearing([lat1, lon1], [lat2, lon2]) {
  const y = Math.sin(rad(lon2 - lon1)) * Math.cos(rad(lat2));
  const x =
    Math.cos(rad(lat1)) * Math.sin(rad(lat2)) -
    Math.sin(rad(lat1)) * Math.cos(rad(lat2)) * Math.cos(rad(lon2 - lon1));
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

const angleDiff = (a, b) => { const d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; };

// Strip accents/case so "Hạ Long Bay" matches a step called "Ha Long".
const norm = (s = "") => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().trim();

/* ── Polarsteps sync ─────────────────────────────────────────────────────── */
async function syncTrip(key) {
  const res = await fetch(`${PROXY_URL}/trip`, { headers: { "X-Proxy-Key": key || "" } });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401) { const e = new Error(data.error || "Wrong proxy key."); e.badKey = true; throw e; }
  if (!res.ok || data.error) throw new Error(data.error || `Proxy answered ${res.status}`);
  const sync = { at: Date.now(), trip: data.trip, steps: data.steps || [] };
  write(LS_SYNC, sync);
  return sync;
}

/* ── scoring ─────────────────────────────────────────────────────────────── */
// Current month against a country's climate — for multi-climate countries,
// judge by the region chart nearest to the place itself.
function seasonOf(country, coords) {
  let cl = country.climate;
  if (!cl) return 0;
  if (cl.regions?.length) {
    cl = cl.regions.reduce((best, r) =>
      !best || km(coords, r.coords) < km(coords, best.coords) ? r : best, null);
  }
  const month = new Date().getMonth() + 1;
  if (cl.best?.includes(month)) return 1;
  if (cl.avoid?.includes(month)) return -1;
  return 0;
}

function monthEvents(country) {
  const month = new Date().getMonth() + 1;
  return (country.events || []).filter((e) => e.months?.includes(month) && e.kind !== "note");
}

// A step "covers" a place when it's physically close or shares its name.
function stepFor(place, steps) {
  const pn = norm(place.name);
  return steps.find((s) => {
    if (km([s.lat, s.lon], place.coords) <= VISITED_KM) return true;
    const sn = norm(s.name);
    return sn.length >= 4 && pn.length >= 4 && (sn.includes(pn) || pn.includes(sn));
  });
}

// The direction you've been moving lately (or null if there's no usable trail).
function travelBearing(steps) {
  const recent = steps.filter((s) => s.t);
  if (recent.length < 2) return null;
  const [a, b] = recent.slice(-2).map((s) => [s.lat, s.lon]);
  if (km(a, b) < 5) return null; // camped — no direction to speak of
  return bearing(a, b);
}

function rank(here, steps) {
  const heading = travelBearing(steps);
  const scored = [];
  const visited = [];

  for (const c of COUNTRIES) {
    (c.places || []).forEach((p, i) => {
      if (!p.coords) return;
      const step = stepFor(p, steps);
      if (step) { visited.push({ c, p, i, step }); return; }

      const d = km(here, p.coords);
      const season = seasonOf(c, p.coords);
      const events = monthEvents(c);
      const needsFlight = d > FLIGHT_KM;
      const onWay = heading != null && d > 30 && angleDiff(heading, bearing(here, p.coords)) <= 60;

      let mod = season > 0 ? W.season : season < 0 ? W.offSeason : 0;
      for (const e of events) mod += e.kind === "go" ? W.event : W.eventAvoid;
      if (onWay) mod += W.direction;
      let score = Math.exp(-d / DECAY_KM) * (1 + Math.max(-0.9, mod));
      if (needsFlight) score *= W.flight;

      const reasons = [`📏 ${d < 100 ? Math.round(d) : Math.round(d / 10) * 10} km`];
      if (needsFlight) reasons.push("✈️ needs a flight");
      if (onWay) reasons.push("➡️ on your way");
      if (season > 0) reasons.push("☀️ in season");
      if (season < 0) reasons.push("🌧️ off season");
      for (const e of events) reasons.push(`${e.kind === "go" ? "🎉" : "🚫"} ${e.name}`);

      scored.push({ c, p, i, d, score, reasons });
    });
  }

  scored.sort((a, b) => a.score < b.score ? 1 : -1);

  // Mix categories: walk the ranking, but hold back a category once it already
  // placed two picks — all five themes are equally loved (PREFERENCES.md).
  const picks = [];
  const perCat = {};
  const overflow = [];
  for (const s of scored) {
    if (picks.length >= SHOWN) break;
    if ((perCat[s.p.category] || 0) >= 2) { overflow.push(s); continue; }
    perCat[s.p.category] = (perCat[s.p.category] || 0) + 1;
    picks.push(s);
  }
  while (picks.length < SHOWN && overflow.length) picks.push(overflow.shift());

  return { picks, visited };
}

/* ── view ────────────────────────────────────────────────────────────────── */
const app = document.getElementById("app");

const chipRow = (reasons) =>
  `<div class="next-chips">${reasons.map((r) => `<span class="next-chip">${esc(r)}</span>`).join("")}</div>`;

function heroCard({ c, p, i, reasons }) {
  const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
  return `
    <a class="next-hero panel" href="#/${c.code}/place/${i}">
      <div class="next-hero-top">
        <span class="tag" style="background:${cat.color}">${cat.icon} ${cat.label}</span>
        <span class="next-flag">${c.flag}</span>
      </div>
      <h2>${esc(p.name)}</h2>
      <div class="next-where">${esc(p.region || c.name)} · ${esc(c.name)}</div>
      ${chipRow(reasons)}
      <p class="next-desc">${esc(p.description || "")}</p>
    </a>`;
}

function rowCard({ c, p, i, reasons }) {
  const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
  return `
    <a class="next-row panel" href="#/${c.code}/place/${i}">
      <div class="next-row-head">
        <span class="next-row-name">${c.flag} ${esc(p.name)}</span>
        <span class="tag" style="background:${cat.color}">${cat.icon} ${cat.label}</span>
      </div>
      ${chipRow(reasons)}
    </a>`;
}

export function renderNextStop() {
  document.title = "Next Stop · Trip Companion";

  // Session state — persisted bits come from localStorage, the rest lives
  // only while the screen is open.
  let sync = read(LS_SYNC);
  let fix = read(LS_FIX);
  let key = read(LS_KEY); // the proxy gate — see NEXTSTOP_SETUP.md
  let syncNote = "";   // one-line outcome of the last fetch attempt
  let gpsNote = "";

  function paint() {
    app.innerHTML = "";

    const topbar = el(`<div class="topbar"><span class="back">← All countries</span></div>`);
    topbar.querySelector(".back").addEventListener("click", () => (location.hash = "#/"));

    // Where "here" is: fresh GPS beats the last Polarsteps step.
    const lastStep = sync?.steps?.length ? sync.steps[sync.steps.length - 1] : null;
    const here = fix ? [fix.lat, fix.lon] : lastStep ? [lastStep.lat, lastStep.lon] : null;
    const hereLabel = fix
      ? `📍 GPS fix ${ago(fix.at)}`
      : lastStep
      ? `👣 last step: ${esc(lastStep.name || "—")}`
      : "❓ no position yet";

    const stepsLabel = sync
      ? `🛰️ ${esc(sync.trip?.name || "trip")} · ${sync.steps.length} steps · synced ${ago(sync.at)}`
      : isConfigured()
      ? "🛰️ Polarsteps: not synced yet"
      : "🛰️ Polarsteps: not configured";

    const status = el(`
      <div class="panel next-status">
        <div class="next-status-line">${stepsLabel}</div>
        <div class="next-status-line">${hereLabel}</div>
        ${syncNote ? `<div class="next-note">${esc(syncNote)}</div>` : ""}
        ${gpsNote ? `<div class="next-note">${esc(gpsNote)}</div>` : ""}
        <div class="pd-actions">
          <button class="pd-btn next-gps">📍 Use my location</button>
          ${isConfigured() && key ? `<button class="pd-btn next-sync">🔄 Sync Polarsteps</button>` : ""}
        </div>
        ${isConfigured() && !key ? `
          <div class="next-keyform">
            <input class="next-key" type="password" placeholder="Proxy key…"
                   autocomplete="off" autocapitalize="off" spellcheck="false" />
            <button class="pd-btn next-key-save">Unlock</button>
          </div>
          <p class="next-note">The passphrase you set with <code>wrangler secret put PROXY_KEY</code> — asked once, kept only on this phone.</p>` : ""}
        ${!isConfigured() ? `<p class="next-note">Live Polarsteps needs a one-time setup — see <code>NEXTSTOP_SETUP.md</code>. GPS works without it.</p>` : ""}
      </div>
    `);

    status.querySelector(".next-key-save")?.addEventListener("click", () => {
      const v = status.querySelector(".next-key").value.trim();
      if (!v) return;
      key = v;
      write(LS_KEY, key);
      doSync(true);
    });

    status.querySelector(".next-gps").addEventListener("click", () => {
      gpsNote = "Getting a fix…";
      paint();
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fix = { lat: pos.coords.latitude, lon: pos.coords.longitude, at: Date.now() };
          write(LS_FIX, fix);
          gpsNote = "";
          paint();
        },
        () => {
          gpsNote = "GPS unavailable — using your last Polarsteps step instead.";
          paint();
        },
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
      );
    });

    status.querySelector(".next-sync")?.addEventListener("click", () => doSync(true));

    const head = el(`
      <header class="next-head">
        <h1>🧭 Next Stop</h1>
        <p>Ranked from your position, your Polarsteps trail, and the season — overland first.</p>
      </header>
    `);

    const body = el(`<div></div>`);
    if (!here) {
      body.append(
        el(`<div class="empty">Tap <b>📍 Use my location</b> (or sync Polarsteps) and I'll rank every place in the app from wherever you are.</div>`)
      );
    } else {
      const { picks, visited } = rank(here, sync?.steps || []);
      const [top, ...rest] = picks;
      if (top) body.append(el(`<section class="block"><h2>Go here next</h2>${heroCard(top)}</section>`));
      if (rest.length)
        body.append(el(`<section class="block"><h2>Then maybe…</h2>${rest.map(rowCard).join("")}</section>`));
      if (visited.length)
        body.append(
          el(`
          <details class="next-visited">
            <summary>✅ Already visited (${visited.length}) — matched to your steps</summary>
            ${visited
              .map(
                ({ c, p, step }) =>
                  `<div class="next-visited-row">${c.flag} ${esc(p.name)} <span class="next-dim">· step “${esc(step.name || "—")}”</span></div>`
              )
              .join("")}
          </details>`)
        );
      if (!top) body.append(el(`<div class="empty">Nothing left to recommend — you've been everywhere! 🎉</div>`));
    }

    body.append(el(`<div class="footer">Recommendations are computed on the phone — works offline from the last sync</div>`));
    app.append(topbar, head, status, body);
    window.scrollTo(0, 0);
  }

  function doSync(manual) {
    if (!isConfigured() || !key || !navigator.onLine) {
      if (manual && isConfigured() && key) { syncNote = "Offline — using the last sync."; paint(); }
      return;
    }
    if (manual) { syncNote = "Syncing…"; paint(); }
    syncTrip(key)
      .then((s) => { sync = s; syncNote = ""; paint(); })
      .catch((e) => {
        if (e.badKey) {
          // Wrong passphrase — forget it so the unlock form comes back.
          key = null;
          localStorage.removeItem(LS_KEY);
          syncNote = "The proxy rejected the key — try again.";
        } else {
          syncNote = sync
            ? `Sync failed (${e.message}) — showing the last sync from ${ago(sync.at)}.`
            : `Sync failed: ${e.message}`;
        }
        paint();
      });
  }

  paint();
  doSync(false); // freshen quietly on open; the screen already painted from cache
}
