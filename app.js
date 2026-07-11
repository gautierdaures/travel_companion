import { COUNTRIES, byCode } from "./data/index.js";
import { GEO } from "./data/geo.js";
import { wikiInfo, wikiThumb } from "./wiki.js";

const app = document.getElementById("app");

const CATS = {
  architecture: { label: "Architecture", color: "var(--cat-architecture)", icon: "🏛️" },
  history:      { label: "History",      color: "var(--cat-history)",      icon: "🏰" },
  nature:       { label: "Nature",       color: "var(--cat-nature)",       icon: "⛰️" },
  food:         { label: "Food",         color: "var(--cat-food)",         icon: "🍜" },
  offbeat:      { label: "Off-beat",     color: "var(--cat-offbeat)",      icon: "🧭" },
};

// Kinds of dated events, and how they read on the page.
const EVENT_KINDS = {
  go:    { label: "Worth timing", color: "var(--ev-go)",    icon: "🎉" },
  avoid: { label: "Avoid",        color: "var(--ev-avoid)", icon: "🚫" },
  note:  { label: "Heads-up",     color: "var(--ev-note)",  icon: "⚠️" },
};

// Places and Map lead; the reference material follows.
const SECTIONS = [
  { id: "places", label: "Places" },
  { id: "map", label: "Map" },
  { id: "languages", label: "Language" },
  { id: "history", label: "History" },
  { id: "climate", label: "When to go" },
  { id: "events", label: "Events" },
  { id: "books", label: "Books" },
  { id: "meals", label: "Food" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/* ── tiny helpers ──────────────────────────────────────────────────────── */
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Each free-form country tag renders as an emoji (with the word kept as a
// hover title for accessibility). Unmapped tags fall back to a generic label.
const TAG_EMOJI = {
  history:        "🏰",
  architecture:   "🏛️",
  nature:         "⛰️",
  food:           "🍜",
  trek:           "🥾",
  beach:          "🏖️",
  diving:         "🤿",
  temples:        "🛕",
  "river life":   "🛶",
  "slow travel":  "🐌",
  rail:           "🚂",
  winter:         "❄️",
  cities:         "🏙️",
  motorbiking:    "🏍️",
  ruins:          "🏺",
  bazaars:        "🛍️",
  nomads:         "🐎",
  wildlife:       "🐾",
};

// A country's "what can I do here" tags (nature, history, trek, beach…),
// shown as emojis on the home cards and the country hero. Empty when none set.
function countryTags(c, { limit = 0 } = {}) {
  let tags = c.tags || [];
  if (limit > 0) tags = tags.slice(0, limit);
  if (!tags.length) return "";
  return `<div class="ctags">${tags
    .map(
      (t) =>
        `<span class="ctag" title="${esc(t)}"><span class="ctag-emoji">${TAG_EMOJI[t] || "🏷️"}</span></span>`
    )
    .join("")}</div>`;
}

/* ── Home view ─────────────────────────────────────────────────────────── */
function renderHome() {
  document.title = "Trip Companion";
  app.innerHTML = "";

  const head = el(`
    <header class="home-head">
      <div class="home-top">
        <h1>Trip Companion 🌍</h1>
        <a class="exp-link" href="#/expenses" title="Private expense dashboard">💰 Expenses</a>
      </div>
      <p>${COUNTRIES.length} countries · tap a card for its ID card</p>
      <input class="search" type="search" placeholder="Search country or region…"
             autocomplete="off" autocorrect="off" spellcheck="false" />
    </header>
  `);
  const grid = el(`<div class="grid"></div>`);

  function paint(q = "") {
    const term = q.trim().toLowerCase();
    const list = COUNTRIES.filter(
      (c) =>
        !term ||
        c.name.toLowerCase().includes(term) ||
        c.region.toLowerCase().includes(term)
    );
    grid.innerHTML = list.length
      ? list
          .map(
            (c) => `
        <a class="card" href="#/${c.code}">
          <div class="flag">${c.flag}</div>
          <div class="name">${esc(c.name)}</div>
          <div class="region">${esc(c.region)}</div>
          ${countryTags(c)}
        </a>`
          )
          .join("")
      : `<div class="empty" style="grid-column:1/-1">No match for “${esc(q)}”.</div>`;
  }

  head.querySelector(".search").addEventListener("input", (e) => paint(e.target.value));
  app.append(head, grid);
  paint();
}

/* ── Section renderers ─────────────────────────────────────────────────── */
function languagesBlock(c) {
  const L = c.languages;
  return `
    <section class="block" id="sec-languages">
      <h2>Language · ${esc(L.name)}</h2>
      <div class="panel">
        ${L.note ? `<p class="note">${esc(L.note)}</p>` : ""}
        ${L.phrases
          .map(
            (p) => `
          <div class="phrase">
            <span class="en">${esc(p.en)}</span>
            <span class="right">
              <span class="local">${esc(p.local)}</span>
              ${p.pron ? `<div class="pron">${esc(p.pron)}</div>` : ""}
            </span>
          </div>`
          )
          .join("")}
      </div>
    </section>`;
}

function historyBlock(c) {
  const H = c.history;
  return `
    <section class="block" id="sec-history">
      <h2>History</h2>
      <div class="panel">
        <p class="prose">${esc(H.summary)}</p>
        <ul class="timeline">
          ${H.timeline
            .map(
              (t) =>
                `<li><span class="era">${esc(t.era)}</span> — <span class="ev">${esc(t.text)}</span></li>`
            )
            .join("")}
        </ul>
      </div>
    </section>`;
}

function booksBlock(c) {
  return `
    <section class="block" id="sec-books">
      <h2>Books to read</h2>
      <div class="panel">
        ${c.books
          .map(
            (b) => `
          <div class="item">
            <div class="t">${esc(b.title)}</div>
            <div class="sub">${esc(b.author)}${b.year ? ` · ${esc(b.year)}` : ""}</div>
            ${b.note ? `<div class="d">${esc(b.note)}</div>` : ""}
          </div>`
          )
          .join("")}
      </div>
    </section>`;
}

function mealsBlock(c) {
  return `
    <section class="block" id="sec-meals">
      <h2>Typical meals</h2>
      <div class="panel">
        ${c.meals
          .map(
            (m) => `
          <div class="item">
            <div class="t">${esc(m.name)}</div>
            <div class="d">${esc(m.description)}</div>
            ${m.tip ? `<div class="tip">💡 ${esc(m.tip)}</div>` : ""}
          </div>`
          )
          .join("")}
      </div>
    </section>`;
}

function placesBlock(c) {
  return `
    <section class="block" id="sec-places">
      <h2>Places to visit</h2>
      <div class="panel">
        ${c.places
          .map((p, i) => {
            const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
            return `
          <a class="place" id="place-${c.code}-${i}" href="#/${c.code}/place/${i}">
            <div class="place-thumb" ${p.wiki ? `data-wiki="${esc(p.wiki)}"` : ""}>
              <span class="place-thumb-ph">${cat.icon}</span>
            </div>
            <div class="place-body">
              <div class="head">
                ${p.coords ? `<span class="num" data-i="${i}" title="Show on map">${i + 1}</span>` : ""}
                <span class="t">${esc(p.name)}</span>
                <span class="tag" style="background:${cat.color}">${cat.icon} ${cat.label}</span>
              </div>
              ${p.region ? `<div class="region">${esc(p.region)}</div>` : ""}
              <div class="d">${esc(p.description)}</div>
              <span class="more">Full guide →</span>
            </div>
          </a>`;
          })
          .join("")}
      </div>
    </section>`;
}

// Fill in each place's list thumbnail from Wikipedia. Works through the rows
// top-to-bottom with a small concurrency limit — gentle on the API and, unlike
// an IntersectionObserver, it runs even when the tab isn't in the foreground.
// Fails soft: a missing image just leaves the category-icon placeholder.
function loadThumbs(scope) {
  const boxes = [...scope.querySelectorAll(".place-thumb[data-wiki]")];
  if (!boxes.length) return;

  const fill = async (box) => {
    try {
      const src = await wikiThumb(box.dataset.wiki);
      if (!src || !box.isConnected) return;
      const img = new Image();
      img.alt = "";
      img.decoding = "async";
      img.onload = () => box.classList.add("has-img");
      img.src = src;
      box.prepend(img);
    } catch {
      /* offline or unknown title — keep the placeholder */
    }
  };

  let next = 0;
  const worker = async () => {
    while (next < boxes.length) await fill(boxes[next++]);
  };
  for (let i = 0; i < Math.min(3, boxes.length); i++) worker();
}

/* ── Weather (monthly temperature chart) ───────────────────────────────── */
// A month is rated by how good it is to visit, not by how hot it is:
//   best → green, acceptable → orange, avoid → red.
const RATINGS = {
  best:   { color: "#3fbf6a", tint: "rgba(63,191,106,0.15)",  label: "Best" },
  ok:     { color: "#f2a53c", tint: "rgba(242,165,60,0.15)",  label: "Acceptable" },
  avoid:  { color: "#ec5a5a", tint: "rgba(236,90,90,0.15)",   label: "Avoid" },
};

// Look up a month's rating (1–12). Anything not flagged best/avoid is acceptable.
function monthRating(cl, month) {
  if ((cl.best || []).includes(month)) return "best";
  if ((cl.avoid || []).includes(month)) return "avoid";
  return "ok";
}

// Turn [11,12,1,2] into "Nov–Feb"; handles wrap-around and gaps.
function bestMonthsLabel(best = []) {
  const set = new Set(best);
  if (set.size === 0) return "";
  if (set.size === 12) return "Year-round";
  const on = MONTHS.map((_, i) => set.has(i + 1));
  const runs = [];
  for (let i = 0; i < 12; i++) {
    if (on[i] && (i === 0 || !on[i - 1])) {
      let j = i;
      while (j + 1 < 12 && on[j + 1]) j++;
      runs.push([i, j]);
    }
  }
  // Merge a Dec→Jan run that wraps the year end.
  if (runs.length > 1 && on[0] && on[11]) {
    const first = runs.shift();
    runs[runs.length - 1][1] = first[1] + 12; // encode wrap for labelling
  }
  return runs
    .map(([a, b]) => (a === b ? MONTHS[a] : `${MONTHS[a % 12]}–${MONTHS[b % 12]}`))
    .join(" · ");
}

// One region as a 12-month strip: each month is a tile tinted by its rating,
// showing the mean temperature and (when present) rainfall as a value with a
// droplet that fades on dry months. rainMax is shared so droplets compare.
function regionChart(r, rainMax) {
  const M = r.months;

  const cells = M.map((m, i) => {
    const rt = RATINGS[monthRating(r, i + 1)];
    const hasRain = m.rain != null && rainMax > 0;
    const op = hasRain ? (0.3 + 0.7 * Math.min(1, m.rain / rainMax)).toFixed(2) : 1;
    return `
      <div class="month-cell" style="--r:${rt.color};background:${rt.tint}">
        <div class="mc-name">${MONTHS[i]}</div>
        <div class="mc-temp"><span class="mc-avg">avg</span>${Math.round(m.mean)}°</div>
        ${m.rain != null ? `<div class="mc-rain"><span class="mc-drop" style="opacity:${op}">💧</span>${m.rain}</div>` : ""}
      </div>`;
  }).join("");

  const bestLabel = bestMonthsLabel(r.best);

  return `
    <div class="climate-region">
      ${r.name ? `<h3 class="region-name">📍 ${esc(r.name)}</h3>` : ""}
      ${bestLabel ? `<div class="best-line">☀️ Best months: <strong>${esc(bestLabel)}</strong></div>` : ""}
      <div class="month-grid">${cells}</div>
      ${r.note ? `<p class="note region-note">${esc(r.note)}</p>` : ""}
    </div>`;
}

function climateBlock(c) {
  const cl = c.climate;
  if (!cl) return "";
  const unit = cl.unit || "°C";

  // A country is either one implicit region (best/avoid/months on the climate
  // object) or several named ones under `regions` — e.g. China, Russia.
  const regions = (cl.regions && cl.regions.length)
    ? cl.regions
    : [{ name: null, best: cl.best, avoid: cl.avoid, months: cl.months }];
  const valid = regions.filter((r) => r.months && r.months.length === 12);
  if (!valid.length) return "";

  // A rainfall scale shared across regions so the droplet strength compares.
  const rainPeak = Math.max(0, ...valid.flatMap((r) => r.months.map((m) => m.rain || 0)));
  const rainMax = rainPeak > 0 ? Math.ceil(rainPeak / 50) * 50 : 0;

  const charts = valid.map((r) => regionChart(r, rainMax)).join("");

  return `
    <section class="block" id="sec-climate">
      <h2>When to go · weather</h2>
      <div class="panel climate-panel${valid.length > 1 ? " multi" : ""}">
        <div class="climate-legend legend-key">
          <span><i class="sw" style="background:${RATINGS.best.color}"></i> ${RATINGS.best.label}</span>
          <span><i class="sw" style="background:${RATINGS.ok.color}"></i> ${RATINGS.ok.label}</span>
          <span><i class="sw" style="background:${RATINGS.avoid.color}"></i> ${RATINGS.avoid.label}</span>
          ${rainMax > 0 ? `<span><span class="rain-key">💧</span> Rainfall (mm)</span>` : ""}
          <span class="unit">avg temp ${esc(unit)} · rain mm</span>
        </div>
        ${charts}
        ${cl.note ? `<p class="note climate-note">${esc(cl.note)}</p>` : ""}
      </div>
    </section>`;
}

/* ── Events (festivals & timing) ───────────────────────────────────────── */
function eventsBlock(c) {
  if (!c.events || !c.events.length) return "";
  return `
    <section class="block" id="sec-events">
      <h2>Events · festivals &amp; timing</h2>
      <div class="panel">
        ${c.events
          .map((ev) => {
            const k = EVENT_KINDS[ev.kind] || EVENT_KINDS.note;
            return `
          <div class="event" style="--ev:${k.color}">
            <div class="head">
              <span class="ev-tag" style="background:${k.color}">${k.icon} ${k.label}</span>
              <span class="t">${esc(ev.name)}</span>
            </div>
            ${ev.when ? `<div class="when">🗓️ ${esc(ev.when)}</div>` : ""}
            <div class="d">${esc(ev.description)}</div>
          </div>`;
          })
          .join("")}
      </div>
    </section>`;
}

/* ── Offline map (SVG outline + pins) ──────────────────────────────────── */
// A FIXED viewBox width keeps the on-screen scale — and therefore the pin
// size — identical for every country, regardless of its shape.
const VB_W = 1000;
const MAX_VB_H = 1150; // cap height so tall, narrow countries (Vietnam) aren't huge
const PAD = 30;

// Build an equirectangular projector fitted to a country's bounding box.
function projector(geo) {
  const [minLng, minLat, maxLng, maxLat] = geo.bbox;
  const midLat = (minLat + maxLat) / 2;
  const kx = Math.cos((midLat * Math.PI) / 180); // squash longitude toward the pole
  const wc = (maxLng - minLng) * kx;
  const hc = maxLat - minLat;

  // Fit to the fixed width, then clamp the scale if the result is too tall.
  let s = (VB_W - PAD * 2) / wc;
  if (hc * s + PAD * 2 > MAX_VB_H) s = (MAX_VB_H - PAD * 2) / hc;

  const contentW = wc * s;
  const W = VB_W; // constant
  const H = hc * s + PAD * 2;
  const offX = (W - contentW) / 2; // center horizontally

  const toXY = (lng, lat) => {
    if (lng < minLng) lng += 360; // antimeridian safety (Russia)
    return [offX + (lng - minLng) * kx * s, PAD + (maxLat - lat) * s];
  };
  return { toXY, W, H };
}

// Nudge apart pins that would otherwise overlap (e.g. the three Angkor temples).
function declutter(nodes, minDist) {
  for (let iter = 0; iter < 40; iter++) {
    let moved = false;
    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        let dx = nodes[b].x - nodes[a].x;
        let dy = nodes[b].y - nodes[a].y;
        let d = Math.hypot(dx, dy);
        if (d < minDist) {
          moved = true;
          if (d < 0.01) {
            // coincident points: separate deterministically along the golden angle
            const ang = nodes[b].i * 2.399963;
            dx = Math.cos(ang);
            dy = Math.sin(ang);
            d = 1;
          }
          const push = (minDist - d) / 2;
          nodes[a].x -= (dx / d) * push;
          nodes[a].y -= (dy / d) * push;
          nodes[b].x += (dx / d) * push;
          nodes[b].y += (dy / d) * push;
        }
      }
    }
    if (!moved) break;
  }
}

function mapBlock(c) {
  const geo = GEO[c.code];
  if (!geo) return "";
  const { toXY, W, H } = projector(geo);

  const land = geo.rings
    .map(
      (r) =>
        "M" +
        r
          .map(([lng, lat]) => {
            const [x, y] = toXY(lng, lat);
            return `${x.toFixed(1)} ${y.toFixed(1)}`;
          })
          .join("L") +
        "Z"
    )
    .join(" ");

  // Project each place, then spread out any pins that would overlap.
  const nodes = [];
  c.places.forEach((p, i) => {
    if (!p.coords) return;
    const [lat, lng] = p.coords;
    const [x, y] = toXY(lng, lat);
    nodes.push({ i, x, y, cat: CATS[p.category] || { color: "var(--text-dim)" } });
  });
  declutter(nodes, 64);
  const pins = nodes
    .map(
      (n) => `<g class="pin" data-i="${n.i}" transform="translate(${n.x.toFixed(1)},${n.y.toFixed(1)})">
          <circle class="pin-hit" r="46"></circle>
          <circle class="pin-dot" r="28" style="fill:${n.cat.color}"></circle>
          <text class="pin-num">${n.i + 1}</text>
        </g>`
    )
    .join("");

  return `
    <section class="block" id="sec-map">
      <h2>Map · where the places are</h2>
      <div class="panel map-panel">
        <svg class="map-svg" viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}"
             preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path class="map-land" d="${land}"></path>
          ${pins}
        </svg>
        <p class="map-hint">Tap a numbered pin to jump to that place ↓</p>
      </div>
    </section>`;
}

// Briefly highlight an element (adds a class, then removes it).
function flash(elm, cls) {
  if (!elm) return;
  elm.classList.remove(cls);
  void elm.getBoundingClientRect(); // restart the animation
  elm.classList.add(cls);
  setTimeout(() => elm.classList.remove(cls), 1400);
}

/* ── Country view ──────────────────────────────────────────────────────── */
function renderCountry(code) {
  const c = byCode(code);
  if (!c) {
    location.hash = "#/";
    return;
  }
  document.title = `${c.name} · Trip Companion`;
  app.innerHTML = "";

  const topbar = el(`
    <div class="topbar"><span class="back">← All countries</span></div>
  `);
  topbar.querySelector(".back").addEventListener("click", () => (location.hash = "#/"));

  const hero = el(`
    <div class="hero">
      <div class="flag">${c.flag}</div>
      <h1>${esc(c.name)}</h1>
      <div class="region">${esc(c.region)}</div>
      ${c.tagline ? `<div class="tagline">${esc(c.tagline)}</div>` : ""}
      ${countryTags(c)}
    </div>
  `);

  const jump = el(`
    <nav class="jump">
      ${SECTIONS.map((s) => `<a href="#/${c.code}/${s.id}">${s.label}</a>`).join("")}
    </nav>
  `);
  // Smooth-scroll without changing the hash route
  jump.querySelectorAll("a").forEach((a, i) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .getElementById(`sec-${SECTIONS[i].id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const body = el(`<div>
    ${placesBlock(c)}
    ${mapBlock(c)}
    ${languagesBlock(c)}
    ${historyBlock(c)}
    ${climateBlock(c)}
    ${eventsBlock(c)}
    ${booksBlock(c)}
    ${mealsBlock(c)}
    <div class="footer">Offline ID card · edit content in the <code>data/</code> folder</div>
  </div>`);

  // Pin → scroll to place card. Card number → scroll to map, flash the pin.
  const svg = body.querySelector(".map-svg");
  if (svg) {
    svg.querySelectorAll(".pin").forEach((pin) => {
      pin.addEventListener("click", () => {
        const card = body.querySelector(`#place-${c.code}-${pin.dataset.i}`);
        card?.scrollIntoView({ behavior: "smooth", block: "center" });
        flash(card, "flash");
      });
    });
    // The number badge lives inside the place link; keep its click from
    // opening the detail page — it jumps to the map instead.
    body.querySelectorAll(".place .num").forEach((num) => {
      num.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("sec-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
        flash(svg.querySelector(`.pin[data-i="${num.dataset.i}"]`), "pin-flash");
      });
    });
  }

  app.append(topbar, hero, jump, body);
  loadThumbs(body);
  window.scrollTo(0, 0);

  // Arriving back from a place's detail page via "Show on map": jump to the
  // map and ping the pin so you can see where it sits.
  const focus = sessionStorage.getItem("tc_focusPin");
  if (focus !== null && svg) {
    sessionStorage.removeItem("tc_focusPin");
    requestAnimationFrame(() => {
      document.getElementById("sec-map")?.scrollIntoView({ block: "start" });
      flash(svg.querySelector(`.pin[data-i="${focus}"]`), "pin-flash");
    });
  }
}

/* ── Place detail: "Plan your visit" facts + slow-travel notes ──────────── */
// A compact facts table — entrance fee, hours, time to allow, how to get
// there, the trailhead for a hike, etc. Anything the data file provides.
function practicalBlock(p) {
  const rows = (p.practical || []).filter((f) => f && f.label && f.value);
  if (!rows.length) return "";
  return `
    <section class="pd-facts">
      <h3>🧭 Plan your visit</h3>
      <dl class="fact-list">
        ${rows
          .map(
            (f) => `
          <div class="fact">
            <dt>${esc(f.label)}</dt>
            <dd>${esc(f.value)}</dd>
          </div>`
          )
          .join("")}
      </dl>
    </section>`;
}

// The "slow trip" section — where to base yourself: guest houses, homestays,
// the sleepy village worth an extra night, and any hands-on tips.
function stayBlock(p) {
  const hasStay = !!(p.stay && p.stay.trim());
  const tips = (p.tips || []).filter(Boolean);
  if (!hasStay && !tips.length) return "";
  const paras = hasStay
    ? p.stay
        .split(/\n\n+/)
        .map((para) => `<p>${esc(para.trim())}</p>`)
        .join("")
    : "";
  const tipList = tips.length
    ? `<ul class="pd-tips">${tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
    : "";
  return `
    <section class="pd-stay">
      <h3>🛖 Stay &amp; slow travel</h3>
      ${paras ? `<div class="pd-prose">${paras}</div>` : ""}
      ${tipList}
    </section>`;
}

/* ── Place detail view ─────────────────────────────────────────────────── */
function renderPlaceDetail(code, i) {
  const c = byCode(code);
  const p = c && c.places[i];
  if (!p) {
    location.hash = c ? `#/${code}` : "#/";
    return;
  }
  const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
  document.title = `${p.name} · ${c.name}`;
  app.innerHTML = "";

  const topbar = el(`
    <div class="topbar"><span class="back">← ${esc(c.name)}</span></div>
  `);
  topbar.querySelector(".back").addEventListener("click", () => (location.hash = `#/${code}`));

  const longHtml = (p.long || p.description || "")
    .split(/\n\n+/)
    .map((para) => `<p>${esc(para.trim())}</p>`)
    .join("");

  const view = el(`
    <article class="place-detail">
      <div class="pd-hero">
        <span class="tag" style="background:${cat.color}">${cat.icon} ${cat.label}</span>
        <h1>${esc(p.name)}</h1>
        ${p.region ? `<div class="region">📍 ${esc(p.region)}</div>` : ""}
      </div>
      <div class="pd-gallery" hidden></div>
      <div class="pd-prose">${longHtml}</div>
      ${practicalBlock(p)}
      ${stayBlock(p)}
      <div class="pd-actions">
        ${p.coords ? `<button class="pd-btn pd-map">🗺️ Show on map</button>` : ""}
        <a class="pd-btn pd-wiki" hidden target="_blank" rel="noopener">📖 Read more on Wikipedia ↗</a>
      </div>
      <div class="footer">Photos via Wikipedia · prices &amp; hours are rough guides — confirm locally</div>
    </article>
  `);

  // "Show on map" → back to the country page, then ping the pin there.
  view.querySelector(".pd-map")?.addEventListener("click", () => {
    sessionStorage.setItem("tc_focusPin", String(i));
    location.hash = `#/${code}`;
  });

  // Pull photos + the article link from Wikipedia. We no longer surface the
  // Wikipedia summary text here — the hand-written guide above tells the story;
  // the link is there for anyone who wants the full article.
  if (p.wiki) {
    const gallery = view.querySelector(".pd-gallery");
    const wikiLink = view.querySelector(".pd-wiki");
    wikiInfo(p.wiki, { extra: 1 })
      .then((info) => {
        if (info.images.length) {
          gallery.innerHTML = info.images
            .map((src) => `<div class="pd-shot"><img decoding="async" alt="" src="${esc(src)}"></div>`)
            .join("");
          gallery.hidden = false;
          // Reveal each shot only once its photo actually loads; drop failures.
          // (Keeps an empty grey box from showing while a photo loads or 404s.)
          gallery.querySelectorAll("img").forEach((img) => {
            const reveal = () => img.closest(".pd-shot")?.classList.add("ready");
            const drop = () => img.closest(".pd-shot")?.remove();
            if (img.complete) return img.naturalWidth > 0 ? reveal() : drop();
            img.onload = reveal;
            img.onerror = drop;
          });
        }
        if (info.url) {
          wikiLink.href = info.url;
          wikiLink.hidden = false;
        }
      })
      .catch(() => {});
  }

  app.append(topbar, view);
  window.scrollTo(0, 0);
}

/* ── Router ────────────────────────────────────────────────────────────── */
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return renderHome();
  if (parts[0] === "expenses") {
    // Loaded on demand so Firebase never touches the offline country pages.
    return import("./expenses.js").then((m) => m.renderExpenses());
  }
  // #/<code>/place/<i> → a single place's full guide.
  if (parts[1] === "place" && parts[2] != null) {
    return renderPlaceDetail(parts[0], Number(parts[2]));
  }
  return renderCountry(parts[0]);
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
route();

/* ── Service worker (offline) ──────────────────────────────────────────── */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
