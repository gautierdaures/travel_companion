import { COUNTRIES, byCode } from "./data/index.js";
import { GEO } from "./data/geo.js";

const app = document.getElementById("app");

const CATS = {
  architecture: { label: "Architecture", color: "var(--cat-architecture)", icon: "🏛️" },
  history:      { label: "History",      color: "var(--cat-history)",      icon: "🏰" },
  nature:       { label: "Nature",       color: "var(--cat-nature)",       icon: "⛰️" },
  food:         { label: "Food",         color: "var(--cat-food)",         icon: "🍜" },
  offbeat:      { label: "Off-beat",     color: "var(--cat-offbeat)",      icon: "🧭" },
};

const SECTIONS = [
  { id: "languages", label: "Language" },
  { id: "history", label: "History" },
  { id: "books", label: "Books" },
  { id: "meals", label: "Food" },
  { id: "map", label: "Map" },
  { id: "places", label: "Places" },
];

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

/* ── Home view ─────────────────────────────────────────────────────────── */
function renderHome() {
  document.title = "Trip Companion";
  app.innerHTML = "";

  const head = el(`
    <header class="home-head">
      <h1>Trip Companion 🌍</h1>
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
      <h2>Key places to visit</h2>
      <div class="panel">
        ${c.places
          .map((p, i) => {
            const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
            return `
          <div class="place" id="place-${c.code}-${i}">
            <div class="head">
              ${p.coords ? `<span class="num" data-i="${i}" title="Show on map">${i + 1}</span>` : ""}
              <span class="t">${esc(p.name)}</span>
              <span class="tag" style="background:${cat.color}">${cat.icon} ${cat.label}</span>
            </div>
            ${p.region ? `<div class="region">${esc(p.region)}</div>` : ""}
            <div class="d">${esc(p.description)}</div>
          </div>`;
          })
          .join("")}
      </div>
    </section>`;
}

/* ── Offline map (SVG outline + pins) ──────────────────────────────────── */
const MAP_W = 1000; // target drawing size of the longer axis, in SVG units

// Build an equirectangular projector fitted to a country's bounding box.
function projector(geo) {
  const [minLng, minLat, maxLng, maxLat] = geo.bbox;
  const midLat = (minLat + maxLat) / 2;
  const kx = Math.cos((midLat * Math.PI) / 180); // squash longitude toward the pole
  const wc = (maxLng - minLng) * kx;
  const hc = maxLat - minLat;
  const s = MAP_W / Math.max(wc, hc);
  const pad = 30;
  const W = wc * s + pad * 2;
  const H = hc * s + pad * 2;
  const toXY = (lng, lat) => {
    if (lng < minLng) lng += 360; // antimeridian safety (Russia)
    return [pad + (lng - minLng) * kx * s, pad + (maxLat - lat) * s];
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
  declutter(nodes, 42);
  const pins = nodes
    .map(
      (n) => `<g class="pin" data-i="${n.i}" transform="translate(${n.x.toFixed(1)},${n.y.toFixed(1)})">
          <circle class="pin-hit" r="28"></circle>
          <circle class="pin-dot" r="17" style="fill:${n.cat.color}"></circle>
          <text class="pin-num" y="5.5">${n.i + 1}</text>
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
    ${languagesBlock(c)}
    ${historyBlock(c)}
    ${booksBlock(c)}
    ${mealsBlock(c)}
    ${mapBlock(c)}
    ${placesBlock(c)}
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
    body.querySelectorAll(".place .num").forEach((num) => {
      num.addEventListener("click", () => {
        document.getElementById("sec-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
        flash(svg.querySelector(`.pin[data-i="${num.dataset.i}"]`), "pin-flash");
      });
    });
  }

  app.append(topbar, hero, jump, body);
  window.scrollTo(0, 0);
}

/* ── Router ────────────────────────────────────────────────────────────── */
function route() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return renderHome();
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
