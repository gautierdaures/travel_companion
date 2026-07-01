import { COUNTRIES, byCode } from "./data/index.js";

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
          .map((p) => {
            const cat = CATS[p.category] || { label: p.category, color: "var(--text-dim)", icon: "📍" };
            return `
          <div class="place">
            <div class="head">
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
    ${placesBlock(c)}
    <div class="footer">Offline ID card · edit content in the <code>data/</code> folder</div>
  </div>`);

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
