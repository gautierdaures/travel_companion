// ── Expenses dashboard ───────────────────────────────────────────────────────
// A private, shared expense tracker for two people, backed by Firebase
// (Google sign-in + Firestore). The country ID-cards stay fully offline; this
// screen needs a connection because the data is shared and lives in the cloud.
//
// Security model: anyone can load this page (it's on GitHub Pages), but only the
// Google accounts in ALLOWED_EMAILS can read or write, enforced server-side by
// firestore.rules. The Firebase config is public by design.

import {
  firebaseConfig, ALLOWED_EMAILS, COMMON_ACCOUNT, isConfigured, nameFor,
  HOME_CURRENCY, TRIP_BUDGET, TRIP_START, TRIP_END,
} from "./firebase-config.js";
import { toHome, ratesInfo, ensureCurrencies, isSupported, marketRate, rateAt } from "./fx.js";
import { ensureCountries, countryName } from "./countries.js";
import { COUNTRIES, byCode } from "./data/index.js";

const SDK = "https://www.gstatic.com/firebasejs/10.12.2";

const CATEGORIES = [
  { id: "food",      label: "Repas",       icon: "🍜" },
  { id: "lodging",   label: "Logement",    icon: "🏨" },
  { id: "transport", label: "Transport",   icon: "🚆" },
  { id: "activity",  label: "Activités",   icon: "🎟️" },
  { id: "shopping",  label: "Achats",      icon: "🛍️" },
  { id: "other",     label: "Autre",       icon: "•"  },
];
const catOf = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1];

// ── Planner link ─────────────────────────────────────────────────────────────
// An expense can also spawn a booking in the Planner (see planner.js). These
// mirror planner.js's TYPES/PLATFORMS so the two stay in step. Only a few
// booking-specific fields are asked for here — the rest (amount, currency,
// country, date, who paid, note) come straight from the expense.
const PLAN_TYPES = [
  { id: "transport",  label: "🚆 Transport"   },
  { id: "lodging",    label: "🏨 Logement"    },
  { id: "restaurant", label: "🍽️ Restaurant"  },
  { id: "activity",   label: "🎟️ Activité"    },
  { id: "other",      label: "📌 Autre"       },
];
// Expense category → default booking type (best guess; user can change it).
const CAT_TO_PLANTYPE = {
  transport: "transport", lodging: "lodging", food: "restaurant",
  activity: "activity", shopping: "other", other: "other",
};
const PLAN_PLATFORMS = [
  "Booking.com", "Airbnb", "Agoda", "Hostelworld", "Expedia",
  "Trainline", "Omio", "12Go", "Flixbus", "Trip.com", "Skyscanner",
  "Kiwi.com", "GetYourGuide", "En direct",
];

// Currency picker: the full catalogue is fetched from the FX API (see fx.js) and
// cached here once loaded. These trip currencies float to the top for quick
// access; the rest follow alphabetically.
const COMMON_CUR = ["EUR", "USD", "GBP", "RUB", "CNY", "VND", "LAK", "KHR", "THB"];
let CURRENCIES = null; // [{ code, name }] once ensureCurrencies() resolves

// Country breakdown: each expense carries a `country` code — an ISO 3166-1
// alpha-2 code (the trip countries in COUNTRIES already use these: vn, cn, …),
// or "" when unassigned. Currency is deliberately independent of country: you
// might pay in USD in Japan, so the picker offers EVERY country, not just the
// trip ones. These colours are assigned to the pie slices / legend.
const COUNTRY_COLORS = ["#6ea8fe", "#ffd166", "#06d6a0", "#ef476f", "#c792ea", "#f78c6b", "#78c6d0"];
const UNASSIGNED = { code: "", name: "Non attribué", flag: "🌍", color: "#8a97a5" };

// The full country catalogue, fetched from an API (see countries.js) and cached
// here once it resolves. null until then — the picker shows the trip countries
// in the meantime and re-renders when the list lands.
let COUNTRIES_ALL = null;

// ISO alpha-2 code → flag emoji (two regional-indicator letters). This is an
// algorithm, not a list, so it works for any country the catalogue returns.
function flagOf(code) {
  if (!code || !/^[a-zA-Z]{2}$/.test(code)) return "🌍";
  return String.fromCodePoint(...[...code.toUpperCase()].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));
}

// Name + flag for any country code (trip countries keep their curated flag;
// others get their name from the fetched catalogue, falling back to the code).
function countryOf(code) {
  if (!code) return UNASSIGNED;
  const trip = byCode(code);
  if (trip) return { code: trip.code, name: trip.name, flag: trip.flag };
  return { code, name: countryName(code) || code.toUpperCase(), flag: flagOf(code) };
}

// Rank a code so trip countries sort first (in trip order), then everyone else.
const tripRank = (code) => { const i = COUNTRIES.findIndex((c) => c.code === code); return i < 0 ? 99 : i; };

// Remember the last country/currency used so the next expense defaults to them
// (you're usually adding several in the same place).
const LS_LAST = "trip-exp-last";
const readLast = () => { try { return JSON.parse(localStorage.getItem(LS_LAST)) || {}; } catch { return {}; } };
const writeLast = (obj) => { try { localStorage.setItem(LS_LAST, JSON.stringify({ ...readLast(), ...obj })); } catch { /* private mode */ } };

/* ── tiny helpers ─────────────────────────────────────────────────────────── */
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const fmt = (n, cur) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: cur || "EUR" }).format(n);

const todayISO = () => new Date().toISOString().slice(0, 10);

// The rates page lives under the expenses route (same sign-in and listeners).
const RATES_HASH = "#/expenses/taux";
const onRatesPage = () => location.hash.startsWith(RATES_HASH);

// A back top bar, reused across every state below: home, or the dashboard when
// on the rates page.
function topbar() {
  const [label, hash] = onRatesPage() ? ["← Dépenses", "#/expenses"] : ["← Tous les pays", "#/"];
  const bar = el(`<div class="topbar"><span class="back">${label}</span></div>`);
  bar.querySelector(".back").addEventListener("click", () => (location.hash = hash));
  return bar;
}

/* ── Firebase (lazy-loaded, only when this screen opens) ───────────────────── */
let fb = null; // { auth, db, ...fns } once loaded

// Set while the dashboard is open; called when the network comes back so a
// pending currency conversion fetches and fills in on its own.
let fxRetry = null;
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    if (fxRetry && location.hash.startsWith("#/expenses")) fxRetry();
  });
}

// Live listeners (auth, Firestore, FX refresh) of the current visit to this
// screen. Torn down when it's opened again (e.g. dashboard ⇄ rates page) or the
// route leaves #/expenses, so a late snapshot can't repaint over another page.
let stopLive = () => {};
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", () => {
    if (!location.hash.startsWith("#/expenses")) stopLive();
  });
}

async function loadFirebase() {
  if (fb) return fb;
  const [{ initializeApp }, auth, store] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-auth.js`),
    import(`${SDK}/firebase-firestore.js`),
  ]);
  const app = initializeApp(firebaseConfig);
  fb = {
    auth: auth.getAuth(app),
    db: store.getFirestore(app),
    // auth fns
    GoogleAuthProvider: auth.GoogleAuthProvider,
    signInWithPopup: auth.signInWithPopup,
    signInWithRedirect: auth.signInWithRedirect,
    getRedirectResult: auth.getRedirectResult,
    onAuthStateChanged: auth.onAuthStateChanged,
    signOut: auth.signOut,
    // firestore fns
    collection: store.collection,
    query: store.query,
    orderBy: store.orderBy,
    onSnapshot: store.onSnapshot,
    addDoc: store.addDoc,
    updateDoc: store.updateDoc,
    deleteDoc: store.deleteDoc,
    doc: store.doc,
    writeBatch: store.writeBatch,
    serverTimestamp: store.serverTimestamp,
  };
  return fb;
}

/* ── State screens ────────────────────────────────────────────────────────── */
function screen(...children) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(topbar(), ...children);
  window.scrollTo(0, 0);
}

function setupNeededScreen() {
  screen(el(`
    <div class="exp-hero">
      <div class="exp-emoji">💰</div>
      <h1>Dépenses</h1>
      <p class="exp-sub">Pas encore connecté</p>
    </div>`), el(`
    <div class="panel exp-notice">
      <p>Le tableau de bord des dépenses a besoin d’un projet Firebase gratuit.
      Quelques minutes suffisent pour le configurer, une fois pour toutes.</p>
      <p>Suivez les étapes de <code>EXPENSES_SETUP.md</code>, collez la configuration
      de votre projet dans <code>firebase-config.js</code>, et cet écran devient un
      vrai suivi partagé.</p>
    </div>`));
}

function signInScreen(onSignIn, note) {
  const hero = el(`
    <div class="exp-hero">
      <div class="exp-emoji">💰</div>
      <h1>Dépenses</h1>
      <p class="exp-sub">Privé, rien que pour vous deux</p>
    </div>`);
  const panel = el(`
    <div class="panel exp-signin">
      ${note ? `<p class="exp-warn">${esc(note)}</p>` : ""}
      <button class="btn-google" type="button">
        <span class="g">G</span> Se connecter avec Google
      </button>
      <p class="exp-fine">Seuls les comptes Google autorisés peuvent voir les données.</p>
    </div>`);
  panel.querySelector(".btn-google").addEventListener("click", onSignIn);
  screen(hero, panel);
}

function notAllowedScreen(email, onSignOut) {
  const panel = el(`
    <div class="panel exp-signin">
      <p class="exp-warn">Le compte <strong>${esc(email)}</strong> n’est pas
      autorisé à voir ces dépenses.</p>
      <button class="btn-ghost" type="button">Se déconnecter et essayer un autre compte</button>
    </div>`);
  panel.querySelector("button").addEventListener("click", onSignOut);
  screen(el(`
    <div class="exp-hero"><div class="exp-emoji">🔒</div><h1>Dépenses</h1></div>`), panel);
}

/* ── Frozen rates ─────────────────────────────────────────────────────────── */
// A rate is only true at a moment, so a foreign expense carries the rate of its
// own date, frozen on it when saved: fxRate ("1 € = fxRate foreign") and fxDate
// (the day that rate was published; null when typed in by hand). Rates moving
// later never rewrite past spending. An expense not frozen yet (saved offline,
// or from before this) uses today's rate until it's backfilled.
const isForeign = (e) => (e.currency || HOME_CURRENCY) !== HOME_CURRENCY;

function homeValue(e) {
  if (!isForeign(e)) return e.amount;
  return e.fxRate > 0 ? e.amount / e.fxRate : toHome(e.amount, e.currency);
}

// Do any of these still depend on today's rates (foreign and not frozen)?
const needsLiveRates = (items) => items.some((e) => isForeign(e) && !(e.fxRate > 0));

// "1 € = 27012,5 VND · taux du 2026-10-10" — for a row's tooltip.
function frozenRateLabel(e) {
  if (!(e.fxRate > 0)) return "taux d’aujourd’hui (pas encore figé)";
  return `1 ${HOME_CURRENCY} = ${rateTxt(e.fxRate)} ${e.currency} · ${e.fxDate ? `taux du ${e.fxDate}` : "taux saisi à la main"}`;
}

// A rate for editing: 6 significant digits, decimal comma, no grouping so it
// edits cleanly ("27012,5"); rateTxt groups digits for reading ("27 012,5").
// parseRate takes "27 000" or "1.08".
const rateNum = (n, digits = 6) =>
  new Intl.NumberFormat("fr-FR", { maximumSignificantDigits: digits, useGrouping: false }).format(n);
const rateTxt = (n, digits = 6) =>
  new Intl.NumberFormat("fr-FR", { maximumSignificantDigits: digits }).format(n);
const parseRate = (s) => Number(String(s).replace(/[\s\u00a0\u202f]/g, "").replace(",", "."));

/* ── Dashboard ────────────────────────────────────────────────────────────── */
// ── Settle-up ────────────────────────────────────────────────────────────────
// Net balance per person in the home currency, under the "joint account is owned
// 50/50" model. An expense has two independent sides:
//   • who PAID (source of money) — credited to that person, in full for a
//     personal payment or split half-each when it came from the shared account;
//   • who it's FOR (how the cost splits) — charged to whoever benefits: 50/50
//     when it's for both of you, or entirely to one person for a "just for them"
//     expense (a solo gift, a personal purchase, …).
// balance = paid − owed. Positive → that person fronted more than their share and
// is owed money; for two people the balances are equal and opposite. So a gift
// bought on the shared card for one person leaves them owing the other half.
function settleBalances(items) {
  const bal = Object.fromEntries(ALLOWED_EMAILS.map((e) => [e, 0]));
  const share = (v) => v / ALLOWED_EMAILS.length;
  for (const e of items) {
    const v = homeValue(e);
    if (v == null) continue; // no rate yet — leave it out rather than guess
    // Who fronted the money.
    if (e.paidBy === COMMON_ACCOUNT) ALLOWED_EMAILS.forEach((p) => (bal[p] += share(v)));
    else if (e.paidBy in bal) bal[e.paidBy] += v;
    // Who the cost is for ("both"/unknown → shared evenly).
    const split = e.split || "both";
    if (split in bal) bal[split] -= v;
    else ALLOWED_EMAILS.forEach((p) => (bal[p] -= share(v)));
  }
  return bal;
}

// The "who owes whom" line for a two-person ledger (or "" if it doesn't apply).
function settleHTML(items) {
  if (ALLOWED_EMAILS.length !== 2) return "";
  const bal = settleBalances(items);
  const ranked = ALLOWED_EMAILS.map((p) => [p, bal[p]]).sort((a, b) => b[1] - a[1]);
  const [creditor, owed] = ranked[0];
  const debtor = ranked[ranked.length - 1][0];
  if (owed < 0.01) return `<div class="exp-settle even">✓ Vous êtes quittes</div>`;
  return `<div class="exp-settle">${esc(nameFor(debtor))} doit
    <strong>${esc(fmt(owed, HOME_CURRENCY))}</strong> à ${esc(nameFor(creditor))} pour équilibrer</div>`;
}

// The one total card: everything summed into the home currency (each foreign
// expense at its frozen rate), split by who paid, plus the who-owes-whom line.
function homeSummaryCard(items) {
  const hasForeign = items.some(isForeign);
  const live = needsLiveRates(items);
  const info = ratesInfo();
  if (live && info.source === "none") {
    return `<div class="panel exp-summary exp-home">
      <div class="exp-total"><span class="exp-total-num">${esc(HOME_CURRENCY)}</span>
      <span class="exp-total-lbl">conversion…</span></div></div>`;
  }
  if (live && info.source === "unavailable") {
    // Offline and rates were never fetched — don't invent a number; this fills
    // in once back online.
    return `<div class="panel exp-summary exp-home">
      <div class="exp-rate-note pending">💱 Le total combiné en ${esc(HOME_CURRENCY)} est en attente —
      vous êtes hors ligne et les taux n’ont pas encore été récupérés. Il s’affichera
      automatiquement dès votre retour en ligne.</div></div>`;
  }

  let total = 0;
  const byPerson = {};
  const unknown = new Set();
  for (const e of items) {
    const v = homeValue(e);
    if (v == null) { unknown.add(e.currency); continue; }
    total += v;
    byPerson[e.paidBy] = (byPerson[e.paidBy] || 0) + v;
  }

  const people = Object.entries(byPerson).sort((a, b) => b[1] - a[1]);
  const settle = settleHTML(items);

  const note = !hasForeign ? ""
    : !live ? "chaque dépense au taux de sa date"
    : info.stale ? "certaines dépenses aux derniers taux récupérés, en attendant d’être figées"
    : "certaines dépenses au taux d’aujourd’hui, en attendant d’être figées";

  return `
    <div class="panel exp-summary exp-home">
      <div class="exp-total">
        <span class="exp-total-num">${esc(fmt(total, HOME_CURRENCY))}</span>
        <span class="exp-total-lbl">tout en ${esc(HOME_CURRENCY)}</span>
      </div>
      <div class="exp-people">
        ${people.map(([who, amt]) => `
          <div class="exp-person">
            <span class="who">${esc(nameFor(who))}</span>
            <span class="amt">${esc(fmt(amt, HOME_CURRENCY))}</span>
          </div>`).join("")}
      </div>
      ${settle}
      <div class="exp-rate-note">${note ? `${note} · ` : ""}<a class="exp-rate-link" href="${RATES_HASH}">💱 Taux de change</a></div>
      ${unknown.size ? `<div class="exp-rate-note warn">⚠ pas de taux pour ${esc([...unknown].join(", "))} — exclu de ce total</div>` : ""}
    </div>`;
}

/* ── Spend by country (pie) ────────────────────────────────────────────────── */
// Everything summed into the home currency, grouped by country (any ISO code,
// not just trip ones). Ordered trip-countries → others (alphabetical) →
// unassigned; palette colours are assigned in that order, unassigned always grey.
function spendByCountry(items) {
  const by = new Map();
  let unconvertible = 0;
  for (const e of items) {
    const v = homeValue(e);
    if (v == null) { unconvertible += 1; continue; }
    const key = e.country || "";
    by.set(key, (by.get(key) || 0) + v);
  }
  const tier = (code) => (code === "" ? 3 : tripRank(code) < 99 ? 1 : 2);
  const groups = [...by.entries()]
    .filter(([, total]) => total > 0)
    .map(([code, total]) => { const c = countryOf(code); return { code, total, name: c.name, flag: c.flag }; })
    .sort((a, b) =>
      tier(a.code) - tier(b.code) ||
      tripRank(a.code) - tripRank(b.code) ||
      a.name.localeCompare(b.name, "fr"))
    .map((g, i) => ({ ...g, color: g.code === "" ? UNASSIGNED.color : COUNTRY_COLORS[i % COUNTRY_COLORS.length] }));
  const total = groups.reduce((s, g) => s + g.total, 0);
  return { groups, total, unconvertible };
}

// One donut wedge from startDeg→endDeg (12 o'clock = 0°, clockwise).
function donutArc(cx, cy, r, ri, startDeg, endDeg) {
  const pol = (rad, deg) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [(cx + rad * Math.cos(a)).toFixed(2), (cy + rad * Math.sin(a)).toFixed(2)];
  };
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const [x1, y1] = pol(r, endDeg);
  const [x2, y2] = pol(r, startDeg);
  const [x3, y3] = pol(ri, startDeg);
  const [x4, y4] = pol(ri, endDeg);
  return `M${x1} ${y1} A${r} ${r} 0 ${large} 0 ${x2} ${y2} L${x3} ${y3} A${ri} ${ri} 0 ${large} 1 ${x4} ${y4} Z`;
}

function pieSVG(groups, total) {
  const cx = 120, cy = 120, r = 100, ri = 62;
  let slices;
  if (groups.length === 1) {
    // A single 100% slice: a 360° arc is degenerate, so draw a full ring.
    slices = `<circle cx="${cx}" cy="${cy}" r="${(r + ri) / 2}" fill="none"
                stroke="${groups[0].color}" stroke-width="${r - ri}" />`;
  } else {
    let a = 0;
    slices = groups.map((g) => {
      const start = a, end = a + (g.total / total) * 360;
      a = end;
      return `<path d="${donutArc(cx, cy, r, ri, start, end)}" fill="${g.color}" />`;
    }).join("");
  }
  return `
    <svg class="exp-pie" viewBox="0 0 240 240" role="img" aria-label="Dépenses par pays">
      ${slices}
      <text x="${cx}" y="${cy - 4}" class="exp-pie-total" text-anchor="middle">${esc(fmt(total, HOME_CURRENCY))}</text>
      <text x="${cx}" y="${cy + 16}" class="exp-pie-sub" text-anchor="middle">total</text>
    </svg>`;
}

function countrySpendCard(items) {
  if (!items.length) return "";

  const live = needsLiveRates(items);
  const info = ratesInfo();
  if (live && info.source === "none")
    return `<div class="panel exp-country"><h2>Par pays</h2>
      <p class="exp-rate-note pending">💱 conversion…</p></div>`;
  if (live && info.source === "unavailable")
    return `<div class="panel exp-country"><h2>Par pays</h2>
      <p class="exp-rate-note pending">💱 La répartition par pays a besoin des taux de change —
      vous êtes hors ligne et ils n’ont pas encore été récupérés. Elle s’affichera dès votre retour en ligne.</p></div>`;

  const { groups, total, unconvertible } = spendByCountry(items);
  if (total <= 0)
    return `<div class="panel exp-country"><h2>Par pays</h2>
      <p class="exp-empty">Aucune dépense convertible pour l’instant.</p></div>`;

  const legend = groups.map((g) => `
    <div class="exp-legend-row">
      <span class="sw" style="background:${g.color}"></span>
      <span class="lg-name">${g.flag} ${esc(g.name)}</span>
      <span class="lg-amt">${esc(fmt(g.total, HOME_CURRENCY))}</span>
      <span class="lg-pct">${(g.total / total * 100).toFixed(0)}\u00a0%</span>
    </div>`).join("");

  return `
    <div class="panel exp-country">
      <h2>Par pays</h2>
      <div class="exp-country-body">
        ${pieSVG(groups, total)}
        <div class="exp-legend">${legend}</div>
      </div>
      ${unconvertible ? `<div class="exp-rate-note warn">⚠ ${unconvertible} dépense${unconvertible > 1 ? "s" : ""} dans une devise sans taux — exclue${unconvertible > 1 ? "s" : ""}</div>` : ""}
    </div>`;
}

/* ── Spend by category ─────────────────────────────────────────────────────── */
// Everything summed into the home currency (each expense at its frozen rate),
// one bar per category, biggest first.
function categorySpendCard(items) {
  if (!items.length) return "";

  const live = needsLiveRates(items);
  const info = ratesInfo();
  if (live && info.source === "none")
    return `<div class="panel exp-cats"><h2>Par catégorie</h2>
      <p class="exp-rate-note pending">💱 conversion…</p></div>`;
  if (live && info.source === "unavailable")
    return `<div class="panel exp-cats"><h2>Par catégorie</h2>
      <p class="exp-rate-note pending">💱 La répartition par catégorie a besoin des taux de change —
      vous êtes hors ligne et ils n’ont pas encore été récupérés. Elle s’affichera dès votre retour en ligne.</p></div>`;

  const byCat = new Map();
  let unconvertible = 0;
  for (const e of items) {
    const v = homeValue(e);
    if (v == null) { unconvertible += 1; continue; }
    byCat.set(e.category, (byCat.get(e.category) || 0) + v);
  }
  const cats = [...byCat].filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]);
  if (!cats.length) return "";
  const max = cats[0][1];

  return `
    <div class="panel exp-cats">
      <h2>Par catégorie</h2>
      <div class="exp-bars">
        ${cats.map(([id, amt]) => {
          const c = catOf(id);
          return `
          <div class="exp-bar-row">
            <span class="exp-bar-lbl">${c.icon} ${esc(c.label)}</span>
            <span class="exp-bar-track"><span class="exp-bar-fill" style="width:${(amt / max * 100).toFixed(1)}%"></span></span>
            <span class="exp-bar-amt">${esc(fmt(amt, HOME_CURRENCY))}</span>
          </div>`;
        }).join("")}
      </div>
      ${unconvertible ? `<div class="exp-rate-note warn">⚠ ${unconvertible} dépense${unconvertible > 1 ? "s" : ""} dans une devise sans taux — exclue${unconvertible > 1 ? "s" : ""}</div>` : ""}
    </div>`;
}

/* ── Budget tracker ────────────────────────────────────────────────────────── */
// "Are we on track?" — each of you has their own slice of the trip budget
// (TRIP_BUDGET split evenly), and each bar counts the cost attributed to that
// person: half of every shared expense plus all of their solo ones, regardless
// of who actually paid or which card — the same "owed" share the settle-up uses.
// Spend is compared against what you'd expect to have used by today if the
// budget were spread evenly across the trip dates. Optional: no budget → no card.

// Cost attributed to each person, in the home currency: a "just for them"
// expense lands fully on them, a shared one splits evenly. Independent of who
// paid. `pending` flags foreign expenses with no rate yet (left out for now).
function spentByPerson(items) {
  const spent = Object.fromEntries(ALLOWED_EMAILS.map((e) => [e, 0]));
  const share = (v) => v / ALLOWED_EMAILS.length;
  let pending = false;
  for (const e of items) {
    const v = homeValue(e);
    if (v == null) { pending = true; continue; }
    const split = e.split || "both";
    if (split in spent) spent[split] += v;
    else ALLOWED_EMAILS.forEach((p) => (spent[p] += share(v)));
  }
  return { spent, pending };
}

// One person's budget block: the numbers, a progress bar with a pace marker,
// and a verdict. `elapsed`/`phase` describe where we are in the trip and are
// shared across people (computed once in budgetCard).
function personBudgetBlock(name, spent, budget, elapsed, phase) {
  const remaining = budget - spent;
  const usedPct = Math.min((spent / budget) * 100, 100);

  let expected = null, verdict = "", vClass = "ok", note = "";
  if (elapsed != null) {
    expected = budget * elapsed;
    if (phase === "pre") {
      // Pre-trip: pace hasn't started, but anything already spent (e.g. train
      // tickets booked ahead) still counts and shows as pre-booked.
      verdict = "Pas commencé"; vClass = "ok";
      if (spent > 0) note = `${esc(fmt(spent, HOME_CURRENCY))} réservés à l’avance`;
    } else {
      if (spent > budget) { verdict = "Budget dépassé"; vClass = "over"; }
      else if (spent <= expected * 1.05) { verdict = "Dans les clous"; vClass = "ok"; }
      else { verdict = "En avance sur le rythme"; vClass = "warn"; }

      const bits = [`prévu à ce jour ≈ <strong>${esc(fmt(expected, HOME_CURRENCY))}</strong>`];
      if (elapsed > 0 && elapsed < 1)
        bits.push(`total projeté <strong>${esc(fmt(spent / elapsed, HOME_CURRENCY))}</strong>`);
      note = bits.join(" · ");
    }
  }

  return `
    <div class="exp-budget-person">
      <div class="exp-budget-prow">
        <span class="exp-budget-name">${esc(name)}</span>
        ${verdict ? `<span class="exp-verdict ${vClass}">${esc(verdict)}</span>` : ""}
      </div>
      <div class="exp-budget-nums">
        <div><span class="k">Dépensé</span><span class="v">${esc(fmt(spent, HOME_CURRENCY))}</span></div>
        <div><span class="k">${remaining >= 0 ? "Restant" : "Dépassement"}</span>
             <span class="v${remaining < 0 ? " over" : ""}">${esc(fmt(Math.abs(remaining), HOME_CURRENCY))}</span></div>
        <div><span class="k">Budget</span><span class="v">${esc(fmt(budget, HOME_CURRENCY))}</span></div>
      </div>
      <div class="exp-budget-bar">
        <div class="exp-budget-fill${spent > budget ? " over" : ""}" style="width:${usedPct.toFixed(1)}%"></div>
        ${expected != null ? `<div class="exp-budget-mark" style="left:${Math.min((expected / budget) * 100, 100).toFixed(1)}%"></div>` : ""}
      </div>
      <div class="exp-budget-scale"><span>${esc(fmt(0, HOME_CURRENCY))}</span><span>${esc(fmt(budget, HOME_CURRENCY))}</span></div>
      ${note ? `<div class="exp-rate-note">▲ ${note}</div>` : ""}
    </div>`;
}

function budgetCard(items) {
  if (!(TRIP_BUDGET > 0)) return "";
  const perBudget = TRIP_BUDGET / ALLOWED_EMAILS.length; // each person's own slice

  const info = ratesInfo();
  const pending = needsLiveRates(items) && info.source !== "live";

  const { spent } = spentByPerson(items);

  // Where we are in the trip — the same pace applies to both people.
  const start = Date.parse(TRIP_START), end = Date.parse(TRIP_END), now = Date.now();
  let elapsed = null, phase = "none", paceNote = "";
  if (!Number.isNaN(start) && !Number.isNaN(end) && end > start) {
    elapsed = Math.min(Math.max((now - start) / (end - start), 0), 1);
    if (now < start) {
      phase = "pre";
      const d = Math.max(0, Math.ceil((start - now) / 86400000));
      paceNote = `départ dans ${d} jour${d > 1 ? "s" : ""}`;
    } else {
      phase = "during";
      const d = Math.max(0, Math.ceil((end - now) / 86400000));
      if (now < end) paceNote = `${d} jour${d > 1 ? "s" : ""} restant${d > 1 ? "s" : ""}`;
    }
  }

  const blocks = ALLOWED_EMAILS
    .map((p) => personBudgetBlock(nameFor(p), spent[p], perBudget, elapsed, phase))
    .join("");

  return `
    <div class="panel exp-budget">
      <div class="exp-budget-head">
        <h2>Budget</h2>
        <span class="exp-budget-sub">${esc(fmt(perBudget, HOME_CURRENCY))} chacun${paceNote ? ` · ${esc(paceNote)}` : ""}</span>
      </div>
      ${blocks}
      ${pending ? `<div class="exp-rate-note warn">⚠ certaines dépenses en devises ne sont pas encore converties — le total est sous-estimé jusqu’au chargement des taux</div>` : ""}
    </div>`;
}

function summaryCards(items) {
  if (!items.length) return `<div class="panel exp-empty">Aucune dépense pour l’instant — ajoutez la première ci-dessus.</div>`;
  return homeSummaryCard(items);
}

// The list can grow to hundreds of entries, so it isn't all rendered at once:
// only the PAGE most recent rows go into the DOM, and "Show more" reveals the
// next batch. `expShown` persists across the re-renders that a new Firestore
// snapshot triggers (so adding an expense doesn't collapse an expanded list);
// renderExpenses() resets it when the screen is opened fresh.
const PAGE = 20;
let expShown = PAGE;

// Live filter/search state, kept module-level for the same reason as expShown:
// a snapshot update mustn't wipe what you've typed or picked. "" (or ALL for the
// dropdowns) means "no constraint". renderExpenses() clears it on a fresh open.
const ALL = "__all";
const expFilter = { q: "", category: ALL, country: ALL, paidBy: ALL };
const filterActive = () =>
  expFilter.q.trim() !== "" || expFilter.category !== ALL ||
  expFilter.country !== ALL || expFilter.paidBy !== ALL;

// Lower-case and accent-free, so "repas", "viet" or "chloe" match "Repas", "Viêt Nam", "Chloé".
const norm = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// Does one expense pass the current filter? Text search spans the note plus the
// category, country and payer labels so "repas", "vietnam" or a name all work.
function matchesFilter(e) {
  if (expFilter.category !== ALL && e.category !== expFilter.category) return false;
  if (expFilter.paidBy !== ALL && e.paidBy !== expFilter.paidBy) return false;
  if (expFilter.country !== ALL && (e.country || "") !== expFilter.country) return false;
  const q = norm(expFilter.q).trim();
  if (q) {
    const hay = norm([e.note, catOf(e.category).label,
      countryOf(e.country || "").name, nameFor(e.paidBy)].join(" "));
    if (!hay.includes(q)) return false;
  }
  return true;
}

// Pretty day header from an ISO date ("2026-07-10" → "ven. 10 juil. 2026").
function dayHeading(iso) {
  const d = new Date(`${iso}T00:00:00`);
  if (!iso || Number.isNaN(d.getTime())) return "Sans date";
  return d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

// Per-day totals for the list headers: the sum in each currency spent that day,
// plus the whole day converted to the home currency (null if a rate is missing).
function dayTotals(items) {
  const days = new Map();
  for (const e of items) {
    let t = days.get(e.date);
    if (!t) days.set(e.date, (t = { byCur: new Map(), home: 0 }));
    const cur = e.currency || HOME_CURRENCY;
    t.byCur.set(cur, (t.byCur.get(cur) || 0) + e.amount);
    const v = homeValue(e);
    t.home = v == null || t.home == null ? null : t.home + v;
  }
  return days;
}

// "450 000 ₫ + 12,00 € · ≈ 28,67 €" — the home-currency total only when the day
// has foreign spend (otherwise it would just repeat the sum).
function dayTotalHTML(t) {
  const parts = [...t.byCur].map(([cur, amt]) => fmt(amt, cur));
  const foreign = [...t.byCur.keys()].some((c) => c !== HOME_CURRENCY);
  const home = foreign && t.home != null ? ` · ≈ ${fmt(t.home, HOME_CURRENCY)}` : "";
  return esc(parts.join(" + ") + home);
}

// The filter bar: a search box plus category / country / payer dropdowns. The
// country and payer options are built from what's actually present in the data.
function filterBarHTML(items) {
  const optsFor = (list, sel) => list
    .map(([val, label]) => `<option value="${esc(val)}"${val === sel ? " selected" : ""}>${esc(label)}</option>`)
    .join("");

  const catOpts = [[ALL, "Toutes catégories"],
    ...CATEGORIES.map((c) => [c.id, `${c.icon} ${c.label}`])];

  const tier = (code) => (code === "" ? 3 : tripRank(code) < 99 ? 1 : 2);
  const countries = [...new Set(items.map((e) => e.country || ""))]
    .map((code) => { const c = countryOf(code); return { code, name: c.name, flag: c.flag }; })
    .sort((a, b) => tier(a.code) - tier(b.code) || tripRank(a.code) - tripRank(b.code) || a.name.localeCompare(b.name, "fr"));
  const countryOpts = [[ALL, "Tous les pays"],
    ...countries.map((c) => [c.code, `${c.flag} ${c.name}`])];

  const people = [...new Set(items.map((e) => e.paidBy))];
  const paidByOpts = [[ALL, "Tout le monde"],
    ...people.map((p) => [p, nameFor(p)])];

  return `
    <div class="exp-filter">
      <input class="exp-search" type="search" name="q" placeholder="Rechercher une dépense…"
             autocomplete="off" value="${esc(expFilter.q)}" aria-label="Rechercher une dépense" />
      <div class="exp-filter-row">
        <select class="exp-fsel" name="category" aria-label="Filtrer par catégorie">${optsFor(catOpts, expFilter.category)}</select>
        <select class="exp-fsel" name="country" aria-label="Filtrer par pays">${optsFor(countryOpts, expFilter.country)}</select>
        <select class="exp-fsel" name="paidBy" aria-label="Filtrer par payeur">${optsFor(paidByOpts, expFilter.paidBy)}</select>
      </div>
    </div>`;
}

// A compact inline form to attach a booking to an EXISTING expense. It only asks
// for the booking-specific fields — everything else (amount, currency, country,
// date, who paid, note) is inherited from the expense. On save it builds the plan
// payload and hands it to onSave, which cross-links the two.
function bookingLinkForm(expense, onSave, onCancel) {
  const form = el(`
    <form class="exp-linkform">
      <div class="exp-grid">
        <label class="exp-field type">
          <span>Type</span>
          <select name="planType">${PLAN_TYPES.map((t) =>
            `<option value="${t.id}"${CAT_TO_PLANTYPE[expense.category] === t.id ? " selected" : ""}>${esc(t.label)}</option>`).join("")}</select>
        </label>
        <label class="exp-field status">
          <span>Statut</span>
          <select name="planStatus"><option value="booked">✅ Réservé</option><option value="todo">📝 À faire</option></select>
        </label>
        <label class="exp-field platform">
          <span>Plateforme</span>
          <input name="planPlatform" type="text" maxlength="40" list="exp-link-platforms" placeholder="Booking, Flixbus…" />
          <datalist id="exp-link-platforms">${PLAN_PLATFORMS.map((p) => `<option value="${esc(p)}"></option>`).join("")}</datalist>
        </label>
        <label class="exp-field stime">
          <span>Heure de début</span>
          <input name="planStartTime" type="time" />
        </label>
        <label class="exp-field edate">
          <span>Date de fin</span>
          <input name="planEndDate" type="date" />
        </label>
        <label class="exp-field etime">
          <span>Heure de fin</span>
          <input name="planEndTime" type="time" />
        </label>
      </div>
      <div class="exp-linkform-actions">
        <button type="button" class="btn-ghost small exp-linkform-cancel">Annuler</button>
        <button type="submit" class="btn-add exp-linkform-save">Ajouter la réservation</button>
      </div>
    </form>`);

  form.querySelector(".exp-linkform-cancel").addEventListener("click", onCancel);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = form.elements;
    const startTime = f.planStartTime.value || "";
    const endDate = f.planEndDate.value || "";
    const endTime = f.planEndTime.value || "";
    if (endDate) {
      const s = `${expense.date}T${startTime || "00:00"}`;
      const en = `${endDate}T${endTime || (endDate === expense.date ? startTime || "00:00" : "23:59")}`;
      if (en < s) { alert("La fin de la réservation est avant son début — vérifiez les dates."); return; }
    }
    const plan = {
      type: f.planType.value,
      title: expense.note || catOf(expense.category).label,
      startDate: expense.date, startTime, endDate, endTime,
      country: expense.country || "",
      platform: f.planPlatform.value.trim(),
      bookedBy: expense.paidBy,
      status: f.planStatus.value,
      ref: "", note: "",
      amount: expense.amount, currency: expense.currency,
    };
    const btn = form.querySelector(".exp-linkform-save");
    btn.disabled = true;
    try { await onSave(plan); }
    catch (err) { alert("Enregistrement impossible : " + (err?.message || err)); btn.disabled = false; }
  });
  return form;
}

function expenseRows(items, actions) {
  if (!items.length) return "";

  const list = el(`
    <div class="panel exp-list">
      <div class="exp-list-head">
        <h2>Toutes les dépenses</h2>
        <button class="exp-clear" type="button" hidden>Effacer les filtres</button>
      </div>
      ${filterBarHTML(items)}
      <div class="exp-rows"></div>
      <div class="exp-more"></div>
    </div>`);
  const body = list.querySelector(".exp-rows");
  const moreWrap = list.querySelector(".exp-more");
  const clearBtn = list.querySelector(".exp-clear");
  const search = list.querySelector(".exp-search");

  const render = () => {
    const filtered = filterActive() ? items.filter(matchesFilter) : items;
    clearBtn.hidden = !filterActive();

    if (!filtered.length) {
      body.innerHTML = `<p class="exp-empty">Aucune dépense ne correspond — essayez une autre recherche ou un autre filtre.</p>`;
      moreWrap.innerHTML = "";
      return;
    }

    const shown = Math.min(expShown, filtered.length);
    // Group into day sections (items already arrive sorted by date, newest
    // first), dropping a subheading each time the date changes. A day's total
    // covers all of its (filtered) expenses, even when the page cut falls mid-day.
    const days = dayTotals(filtered);
    let html = "", curDay = null;
    for (const e of filtered.slice(0, shown)) {
      if (e.date !== curDay) {
        curDay = e.date;
        html += `<div class="exp-day"><span>${esc(dayHeading(e.date))}</span>
          <span class="exp-day-total">${dayTotalHTML(days.get(e.date))}</span></div>`;
      }
      const c = catOf(e.category);
      // Only call out the split when it isn't the default "both" — a "just for
      // X" expense is worth flagging in the row.
      const forTag = e.split && e.split !== "both" ? ` · pour ${esc(nameFor(e.split))}` : "";
      const bookedTag = e.linkedPlanId ? ` · 🗓️ réservé` : "";
      // Foreign amounts also show their home-currency value, at the rate frozen
      // on the expense (hover/long-press shows it).
      const v = isForeign(e) ? homeValue(e) : null;
      const homeAmt = v == null ? ""
        : `<span class="exp-amt-home" title="${esc(frozenRateLabel(e))}">≈ ${esc(fmt(v, HOME_CURRENCY))}</span>`;
      html += `
        <div class="exp-row" data-id="${esc(e.id)}">
          <span class="exp-cat" title="${esc(c.label)}">${c.icon}</span>
          <span class="exp-row-main">
            <span class="exp-note">${esc(e.note || c.label)}</span>
            <span class="exp-row-sub">${esc(nameFor(e.paidBy))}${forTag}${bookedTag}</span>
          </span>
          <span class="exp-amt">${esc(fmt(e.amount, e.currency))}${homeAmt}</span>
          <button class="exp-edit" title="Modifier" aria-label="Modifier">✎</button>
          ${e.linkedPlanId ? "" : `<button class="exp-addbook" title="Ajouter une réservation liée" aria-label="Ajouter une réservation">🗓️+</button>`}
          <button class="exp-del" title="Supprimer" aria-label="Supprimer">✕</button>
        </div>`;
    }
    body.innerHTML = html;

    const remaining = filtered.length - shown;
    const countNote = filterActive() ? ` sur ${items.length}` : "";
    moreWrap.innerHTML = remaining > 0
      ? `<button class="btn-more" type="button">Afficher ${Math.min(PAGE, remaining)} de plus<span class="exp-more-of"> · ${remaining} sur ${filtered.length} masquées</span></button>`
      : (filtered.length > PAGE || filterActive() ? `<div class="exp-count">${filtered.length}${countNote} dépense${filtered.length > 1 ? "s" : ""}</div>` : "");

    body.querySelectorAll(".exp-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".exp-row").dataset.id;
        const item = items.find((x) => x.id === id);
        if (item) actions.remove(item);
      });
    });
    // "Edit" — toggle an inline form under the row to change the expense in place.
    body.querySelectorAll(".exp-edit").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".exp-row");
        const next = row.nextElementSibling;
        if (next && next.classList.contains("exp-editform")) { next.remove(); return; }
        if (next && next.classList.contains("exp-linkform")) next.remove(); // don't stack the two
        const item = items.find((x) => x.id === row.dataset.id);
        if (!item) return;
        const form = editExpenseForm(
          item,
          async (patch) => { await actions.update(item, patch); }, // snapshot re-render clears the form
          () => form.remove(),
        );
        row.after(form);
      });
    });
    // "Add booking" — toggle a small inline form under the row that links a fresh
    // Planner booking to this existing expense.
    body.querySelectorAll(".exp-addbook").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".exp-row");
        const existing = row.nextElementSibling;
        if (existing && existing.classList.contains("exp-linkform")) { existing.remove(); return; }
        const item = items.find((x) => x.id === row.dataset.id);
        if (!item) return;
        const form = bookingLinkForm(
          item,
          async (planData) => { await actions.linkPlan(item, planData); }, // snapshot re-render clears the form
          () => form.remove(),
        );
        row.after(form);
      });
    });
    const more = moreWrap.querySelector(".btn-more");
    if (more) more.addEventListener("click", () => { expShown += PAGE; render(); });
  };

  // Changing any filter restarts paging from the top of the new result set.
  const onFilterChange = () => { expShown = PAGE; render(); };
  search.addEventListener("input", () => { expFilter.q = search.value; onFilterChange(); });
  list.querySelectorAll(".exp-fsel").forEach((sel) => {
    sel.addEventListener("change", () => { expFilter[sel.name] = sel.value; onFilterChange(); });
  });
  clearBtn.addEventListener("click", () => {
    expFilter.q = ""; expFilter.category = ALL; expFilter.country = ALL; expFilter.paidBy = ALL;
    search.value = "";
    list.querySelectorAll(".exp-fsel").forEach((sel) => { sel.value = ALL; });
    onFilterChange();
  });

  render();
  return list;
}

// Build the <option>s for the currency <select>. Before the catalogue loads we
// still show the common trip currencies so the form is usable immediately; it
// re-renders with the full list once ensureCurrencies() resolves.
function currencyOptionsHTML(selected) {
  const opt = (code, label) =>
    `<option value="${esc(code)}"${code === selected ? " selected" : ""}>${esc(label)}</option>`;

  if (!CURRENCIES) {
    return COMMON_CUR.map((c) => opt(c, c)).join("");
  }

  const byCode = new Map(CURRENCIES.map((x) => [x.code, x]));
  const common = COMMON_CUR.filter((c) => byCode.has(c));
  const commonSet = new Set(common);
  const rest = CURRENCIES.filter((x) => !commonSet.has(x.code));
  const label = (x) => `${x.code} — ${x.name}`;

  return `
    <optgroup label="Courantes">
      ${common.map((c) => opt(c, label(byCode.get(c)))).join("")}
    </optgroup>
    <optgroup label="Toutes les devises">
      ${rest.map((x) => opt(x.code, label(x))).join("")}
    </optgroup>`;
}

// Options for the country <select>: the trip countries first, then an
// "unassigned" choice, then every other country from the fetched catalogue
// (name from the API, flag derived from the code). Before the catalogue loads
// only the trip group shows; the form re-renders once it lands.
function countryOptionsHTML(selected) {
  const opt = (code, label) =>
    `<option value="${esc(code)}"${code === selected ? " selected" : ""}>${esc(label)}</option>`;
  const tripCodes = new Set(COUNTRIES.map((c) => c.code));
  const others = (COUNTRIES_ALL || []).filter((c) => !tripCodes.has(c.code));
  return `
    <optgroup label="Voyage">
      ${COUNTRIES.map((c) => opt(c.code, `${c.flag} ${c.name}`)).join("")}
    </optgroup>
    ${opt("", "🌍 Autre / non attribué")}
    ${others.length ? `<optgroup label="Tous les pays">
      ${others.map((c) => opt(c.code, `${flagOf(c.code)} ${c.name}`)).join("")}
    </optgroup>` : ""}`;
}

// Shared <option> builders for the category / payer / split selects, so the add
// form and the inline edit form (below) stay in step.
function categoryOptionsHTML(selected) {
  return CATEGORIES
    .map((c) => `<option value="${c.id}"${c.id === selected ? " selected" : ""}>${c.icon} ${esc(c.label)}</option>`)
    .join("");
}
function payerOptionsHTML(selected) {
  return ALLOWED_EMAILS
    .map((em) => `<option value="${esc(em)}"${em === selected ? " selected" : ""}>${esc(nameFor(em))}</option>`)
    .join("") +
    `<option value="${esc(COMMON_ACCOUNT)}"${COMMON_ACCOUNT === selected ? " selected" : ""}>🤝 ${esc(nameFor(COMMON_ACCOUNT))} (partagé)</option>`;
}
// "For whom" — who the cost is split between. Defaults to both of you (the usual
// case); pick one person for something only they benefit from (a solo gift, a
// personal purchase) so it doesn't land on the other's half.
function splitOptionsHTML(selected) {
  const sel = selected || "both";
  return `<option value="both"${sel === "both" ? " selected" : ""}>👫 Nous deux</option>` +
    ALLOWED_EMAILS.map((em) => `<option value="${esc(em)}"${em === sel ? " selected" : ""}>${esc(nameFor(em))} uniquement</option>`).join("");
}

function addForm(user, onAdd) {
  const peopleOpts = payerOptionsHTML(user.email);
  const catOpts = categoryOptionsHTML();
  const splitOpts = splitOptionsHTML();

  // Default the currency/country to whatever was used last (falling back to the
  // home currency and the first trip country) so repeat entries are quick.
  const last = readLast();
  const defaultCur = last.currency || HOME_CURRENCY;
  const defaultCountry = last.country != null ? last.country : (COUNTRIES[0]?.code ?? "");

  const form = el(`
    <form class="panel exp-form">
      <h2>Ajouter une dépense</h2>
      <div class="exp-grid">
        <label class="exp-field amt">
          <span>Montant</span>
          <input name="amount" type="number" inputmode="decimal" step="0.01" min="0" required placeholder="0,00" />
        </label>
        <label class="exp-field cur">
          <span>Devise</span>
          <select name="currency" required>${currencyOptionsHTML(defaultCur)}</select>
        </label>
        <label class="exp-field cat">
          <span>Catégorie</span>
          <select name="category">${catOpts}</select>
        </label>
        <label class="exp-field country">
          <span>Pays</span>
          <select name="country">${countryOptionsHTML(defaultCountry)}</select>
        </label>
        <label class="exp-field who">
          <span>Payé par</span>
          <select name="paidBy">${peopleOpts}</select>
        </label>
        <label class="exp-field forwhom">
          <span>Pour</span>
          <select name="split">${splitOpts}</select>
        </label>
        <label class="exp-field date">
          <span>Date</span>
          <input name="date" type="date" value="${todayISO()}" required />
        </label>
        <label class="exp-field note">
          <span>Note</span>
          <input name="note" type="text" maxlength="80" placeholder="ex. dîner à Hanoï" />
        </label>
      </div>
      <label class="plan-alsoexp">
        <input name="alsoPlan" type="checkbox" />
        <span>Ajouter aussi au Planning comme réservation</span>
      </label>
      <div class="exp-plan-extra" hidden>
        <div class="exp-grid">
          <label class="exp-field type">
            <span>Type</span>
            <select name="planType">${PLAN_TYPES.map((t) => `<option value="${t.id}">${esc(t.label)}</option>`).join("")}</select>
          </label>
          <label class="exp-field status">
            <span>Statut</span>
            <select name="planStatus">
              <option value="booked">✅ Réservé</option>
              <option value="todo">📝 À faire</option>
            </select>
          </label>
          <label class="exp-field platform">
            <span>Plateforme</span>
            <input name="planPlatform" type="text" maxlength="40" list="exp-plan-platforms" placeholder="Booking, Flixbus…" />
            <datalist id="exp-plan-platforms">${PLAN_PLATFORMS.map((p) => `<option value="${esc(p)}"></option>`).join("")}</datalist>
          </label>
          <label class="exp-field stime">
            <span>Heure de début</span>
            <input name="planStartTime" type="time" />
          </label>
          <label class="exp-field edate">
            <span>Date de fin</span>
            <input name="planEndDate" type="date" />
          </label>
          <label class="exp-field etime">
            <span>Heure de fin</span>
            <input name="planEndTime" type="time" />
          </label>
        </div>
      </div>
      <button class="btn-add" type="submit">Ajouter la dépense</button>
    </form>`);

  // Reveal the booking fields only when "also add to Planner" is ticked, and
  // default the booking type from the chosen expense category.
  const alsoPlan = form.elements.alsoPlan;
  const planExtra = form.querySelector(".exp-plan-extra");
  const planType = form.elements.planType;
  alsoPlan.addEventListener("change", () => {
    planExtra.hidden = !alsoPlan.checked;
    if (alsoPlan.checked) planType.value = CAT_TO_PLANTYPE[form.elements.category.value] || "other";
  });
  form.elements.category.addEventListener("change", () => {
    if (alsoPlan.checked) planType.value = CAT_TO_PLANTYPE[form.elements.category.value] || "other";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = form.elements;
    const amount = parseFloat(f.amount.value);
    if (!(amount > 0)) return;
    const currency = (f.currency.value || HOME_CURRENCY).toUpperCase().trim();
    // Safety net: the picker only offers convertible codes, but never store one
    // we couldn't later turn into euros.
    if (!isSupported(currency)) {
      alert(`Impossible d’utiliser « ${currency} » — aucune conversion en ${HOME_CURRENCY} n’est disponible. Choisissez une autre devise.`);
      return;
    }
    const date = f.date.value || todayISO();
    const note = f.note.value.trim();

    // Optional: also spin up a linked booking in the Planner. The booking reuses
    // the expense's amount/currency/country/date/payer/note; only the type,
    // platform, status and (optional) end date/time are booking-specific.
    let planExtra = null;
    if (f.alsoPlan.checked) {
      const endDate = f.planEndDate.value || "";
      const startTime = f.planStartTime.value || "";
      const endTime = f.planEndTime.value || "";
      if (endDate) {
        const s = `${date}T${startTime || "00:00"}`;
        const en = `${endDate}T${endTime || (endDate === date ? startTime || "00:00" : "23:59")}`;
        if (en < s) { alert("La fin de la réservation est avant son début — vérifiez les dates."); return; }
      }
      planExtra = {
        type: f.planType.value,
        title: note || catOf(f.category.value).label,
        startDate: date, startTime, endDate, endTime,
        country: f.country.value,
        platform: f.planPlatform.value.trim(),
        bookedBy: f.paidBy.value,
        status: f.planStatus.value,
        ref: "", note: "",
        amount, currency,
      };
    }

    const btn = form.querySelector(".btn-add");
    btn.disabled = true;
    try {
      await onAdd({
        amount,
        currency,
        category: f.category.value,
        country: f.country.value,
        paidBy: f.paidBy.value,
        split: f.split.value,
        date,
        note,
      }, planExtra);
      writeLast({ currency, country: f.country.value }); // default the next entry here
      f.amount.value = "";
      f.note.value = "";
      f.alsoPlan.checked = false;
      planExtra = null;
      form.querySelector(".exp-plan-extra").hidden = true;
      f.amount.focus();
    } catch (err) {
      alert("Enregistrement impossible : " + (err?.message || err));
    } finally {
      btn.disabled = false;
    }
  });
  return form;
}

// A compact inline form to EDIT an existing expense in place — the same core
// fields as the add form, pre-filled from the row. On save it hands a patch to
// actions.update; the Firestore snapshot then re-renders the list (clearing the
// form). Editing is deliberately kept to the expense's own fields — its linked
// booking, if any, isn't reshaped here beyond the cost snapshot (see update()).
function editExpenseForm(item, onSave, onCancel) {
  const form = el(`
    <form class="exp-editform">
      <div class="exp-grid">
        <label class="exp-field amt">
          <span>Montant</span>
          <input name="amount" type="number" inputmode="decimal" step="0.01" min="0" required value="${esc(item.amount)}" />
        </label>
        <label class="exp-field cur">
          <span>Devise</span>
          <select name="currency" required>${currencyOptionsHTML(item.currency || HOME_CURRENCY)}</select>
        </label>
        <label class="exp-field cat">
          <span>Catégorie</span>
          <select name="category">${categoryOptionsHTML(item.category)}</select>
        </label>
        <label class="exp-field country">
          <span>Pays</span>
          <select name="country">${countryOptionsHTML(item.country || "")}</select>
        </label>
        <label class="exp-field who">
          <span>Payé par</span>
          <select name="paidBy">${payerOptionsHTML(item.paidBy)}</select>
        </label>
        <label class="exp-field forwhom">
          <span>Pour</span>
          <select name="split">${splitOptionsHTML(item.split)}</select>
        </label>
        <label class="exp-field date">
          <span>Date</span>
          <input name="date" type="date" value="${esc(item.date || todayISO())}" required />
        </label>
        <label class="exp-field fxrate">
          <span>Taux : 1 ${esc(HOME_CURRENCY)} = … <span class="exp-fx-cur"></span></span>
          <input name="fxRate" type="text" inputmode="decimal" autocomplete="off" />
        </label>
        <label class="exp-field note">
          <span>Note</span>
          <input name="note" type="text" maxlength="80" value="${esc(item.note || "")}" placeholder="ex. dîner à Hanoï" />
        </label>
      </div>
      <div class="exp-linkform-actions">
        <button type="button" class="btn-ghost small exp-editform-cancel">Annuler</button>
        <button type="submit" class="btn-add exp-editform-save">Enregistrer</button>
      </div>
    </form>`);

  // The frozen rate, editable (e.g. the exchange office's real rate). It starts
  // as the expense's own; changing the currency or date re-fetches the rate of
  // that day. `auto` is what we last filled in — if the field still shows it,
  // the exact rate (and its date) is saved, otherwise the typed value is.
  const rateLbl = form.querySelector(".exp-field.fxrate");
  const rateIn = form.elements.fxRate;
  let auto = item.fxRate > 0 ? { rate: item.fxRate, date: item.fxDate ?? null } : null;
  const showRate = () => {
    rateIn.value = auto ? rateNum(auto.rate) : "";
    rateIn.placeholder = auto ? "" : "hors ligne — figé au retour en ligne";
  };
  const syncCur = () => {
    const cur = form.elements.currency.value;
    rateLbl.hidden = cur === HOME_CURRENCY;
    rateLbl.querySelector(".exp-fx-cur").textContent = cur;
  };
  let refreshing = Promise.resolve();
  const refreshRate = () => {
    syncCur();
    const cur = form.elements.currency.value, day = form.elements.date.value || todayISO();
    if (cur === HOME_CURRENCY) { auto = null; return; }
    refreshing = rateAt(cur, day).catch(() => null).then((fx) => { auto = fx; showRate(); });
  };
  syncCur();
  showRate();
  if (!auto && isForeign(item)) refreshRate(); // not frozen yet — offer its day's rate
  form.elements.currency.addEventListener("change", refreshRate);
  form.elements.date.addEventListener("change", refreshRate);

  form.querySelector(".exp-editform-cancel").addEventListener("click", onCancel);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = form.elements;
    const amount = parseFloat(f.amount.value);
    if (!(amount > 0)) return;
    const currency = (f.currency.value || HOME_CURRENCY).toUpperCase().trim();
    if (!isSupported(currency)) {
      alert(`Impossible d’utiliser « ${currency} » — aucune conversion en ${HOME_CURRENCY} n’est disponible. Choisissez une autre devise.`);
      return;
    }
    await refreshing; // a currency/date change may still be fetching its rate
    let fx = { fxRate: null, fxDate: null };
    if (currency !== HOME_CURRENCY) {
      const typed = f.fxRate.value.trim();
      if (auto && typed === rateNum(auto.rate)) fx = { fxRate: auto.rate, fxDate: auto.date };
      else if (typed) {
        const rate = parseRate(typed);
        if (!(rate > 0 && Number.isFinite(rate))) { alert("Taux invalide — par ex. 27000 ou 1,08."); return; }
        // A slipped zero is easy on a phone keyboard — double-check big jumps.
        const ref = auto?.rate || marketRate(currency);
        const gap = ref ? Math.abs(rate / ref - 1) : 0;
        if (gap > 0.5 && !confirm(`Ce taux s’écarte de ${Math.round(gap * 100)} % du taux du marché (${rateTxt(ref)}). L’enregistrer quand même ?`)) return;
        fx = { fxRate: rate, fxDate: null };
      }
    }
    const patch = {
      ...fx,
      amount,
      currency,
      category: f.category.value,
      country: f.country.value,
      paidBy: f.paidBy.value,
      split: f.split.value,
      date: f.date.value || todayISO(),
      note: f.note.value.trim(),
    };
    const btn = form.querySelector(".exp-editform-save");
    btn.disabled = true;
    try { await onSave(patch); }
    catch (err) { alert("Enregistrement impossible : " + (err?.message || err)); btn.disabled = false; }
  });
  return form;
}

function dashboard(user, items, actions) {
  const head = el(`
    <div class="exp-hero exp-hero-live">
      <div>
        <h1>💰 Dépenses</h1>
        <p class="exp-sub">${esc(nameFor(user.email))} · registre partagé en direct</p>
      </div>
      <button class="btn-ghost small exp-out" type="button">Se déconnecter</button>
    </div>`);
  head.querySelector(".exp-out").addEventListener("click", actions.signOut);

  const summary = el(`<div>${budgetCard(items)}${countrySpendCard(items)}${categorySpendCard(items)}${summaryCards(items)}</div>`);
  const rows = expenseRows(items, actions);
  const form = addForm(user, actions.add);

  const nodes = [head, form, summary];
  if (rows) nodes.push(rows);
  screen(...nodes);
}

/* ── Exchange rates page ──────────────────────────────────────────────────── */
// The rates in use: today's rate for each currency (what a new expense gets
// frozen with) and, for those you've spent in, the average rate actually applied
// to your expenses. Fixing one expense's rate is done on the expense itself (✎).
function ratesScreen(items) {
  document.title = "Taux de change · Compagnon de voyage";

  // Per currency: how many expenses, and their totals in that currency and in
  // the home one — the ratio is the average rate applied.
  const used = new Map();
  for (const e of items) {
    if (!isForeign(e)) continue;
    const u = used.get(e.currency) || { n: 0, amount: 0, home: 0 };
    const v = homeValue(e);
    u.n += 1;
    if (v != null) { u.amount += e.amount; u.home += v; }
    used.set(e.currency, u);
  }
  // Currencies you've spent in (most used first), then the common trip ones.
  const codes = new Set([...used.keys(), ...COMMON_CUR]);
  codes.delete(HOME_CURRENCY);
  const list = [...codes].sort((a, b) => (used.get(b)?.n || 0) - (used.get(a)?.n || 0) || a.localeCompare(b));
  const nameOf = (code) => CURRENCIES?.find((x) => x.code === code)?.name || "";

  const info = ratesInfo();
  const sourceNote = info.source === "live"
    ? `Taux du marché du ${esc(info.date || "jour")}${info.stale ? " (derniers récupérés, hors ligne)" : ""}`
    : info.source === "none" ? "Chargement des taux du marché…" : "Taux du marché indisponibles hors ligne";

  const row = (cur) => {
    const today = marketRate(cur), u = used.get(cur);
    const avg = u && u.home > 0 ? u.amount / u.home : null;
    return `
      <div class="exp-rate-row">
        <div class="exp-rate-head">
          <span class="exp-rate-code">${esc(cur)}</span>
          <span class="exp-rate-name">${esc(nameOf(cur))}</span>
          ${u ? `<span class="exp-rate-uses">${u.n} dépense${u.n > 1 ? "s" : ""}</span>` : ""}
        </div>
        <div class="exp-rate-val">${today
          ? `1 ${esc(HOME_CURRENCY)} = <strong>${esc(rateTxt(today))}</strong> ${esc(cur)}
             <span class="exp-rate-inv">· 1 ${esc(cur)} ≈ ${esc(rateTxt(1 / today, 3))} ${esc(HOME_CURRENCY)}</span>`
          : `<span class="exp-rate-inv">${info.source === "none" ? "…" : "indisponible"}</span>`}</div>
        ${avg ? `<div class="exp-rate-meta">appliqué à vos dépenses : 1 ${esc(HOME_CURRENCY)} = ${esc(rateTxt(avg))} ${esc(cur)} en moyenne</div>` : ""}
      </div>`;
  };

  const hero = el(`
    <div class="exp-hero">
      <h1>💱 Taux de change</h1>
      <p class="exp-sub">${sourceNote}</p>
    </div>`);
  const panel = el(`
    <div class="panel exp-rates">
      <p class="exp-fine exp-rates-intro">Chaque dépense garde le taux de sa date : quand le taux
      bouge, les dépenses déjà saisies ne changent pas. Ci-dessous, le taux d’aujourd’hui (celui
      que prendra une nouvelle dépense). Pour corriger le taux d’une dépense
      (bureau de change, retrait…), touchez ✎ sur la dépense.</p>
      ${list.map(row).join("")}
    </div>`);
  screen(hero, panel);
}

/* ── Entry point ──────────────────────────────────────────────────────────── */
export async function renderExpenses() {
  stopLive(); // a fresh open replaces the previous visit's listeners
  let live = true;
  const offs = [];
  stopLive = () => { live = false; fxRetry = null; offs.splice(0).forEach((off) => off()); };

  document.title = "Dépenses · Compagnon de voyage";
  expShown = PAGE; // collapse the list back to the first page on a fresh open
  expFilter.q = ""; expFilter.category = ALL; expFilter.country = ALL; expFilter.paidBy = ALL;

  if (!isConfigured()) return setupNeededScreen();

  // Loading placeholder while the SDK downloads.
  screen(el(`<div class="panel exp-empty">Connexion…</div>`));

  let f;
  try {
    f = await loadFirebase();
  } catch (err) {
    return screen(el(`<div class="panel exp-notice">
      <p class="exp-warn">Impossible de joindre Firebase. Le tableau de bord des dépenses
      a besoin d’une connexion internet.</p></div>`));
  }
  if (!live) return; // left (or reopened) while the SDK was loading

  const provider = new f.GoogleAuthProvider();
  const doSignIn = async () => {
    try {
      await f.signInWithPopup(f.auth, provider);
    } catch (err) {
      // Popups are unreliable inside installed iOS PWAs — fall back to redirect.
      if (String(err?.code).includes("popup")) {
        await f.signInWithRedirect(f.auth, provider);
      } else {
        alert("Échec de la connexion : " + (err?.message || err));
      }
    }
  };
  const doSignOut = () => f.signOut(f.auth);

  // Complete any redirect-based sign-in that bounced back to the app.
  f.getRedirectResult(f.auth).catch(() => {});

  let unsub = null; // active Firestore listener, cleared on sign-out / route change
  offs.push(() => { if (unsub) { unsub(); unsub = null; } });

  offs.push(f.onAuthStateChanged(f.auth, (user) => {
    if (unsub) { unsub(); unsub = null; }

    // Left the expenses route while signed in — stop listening, do nothing.
    if (!location.hash.startsWith("#/expenses")) return;

    if (!user) return signInScreen(doSignIn);
    if (!ALLOWED_EMAILS.includes(user.email)) return notAllowedScreen(user.email, doSignOut);

    const col = f.collection(f.db, "expenses");
    const plansCol = f.collection(f.db, "plans");
    const q = f.query(col, f.orderBy("date", "desc"));
    // A new foreign expense is saved with the rate of its date (see homeValue).
    // No rate to be had (offline) → saved without one and frozen later.
    const withRate = async (data) => {
      if (!isForeign(data) || data.fxRate > 0) return data;
      const fx = await rateAt(data.currency, data.date).catch(() => null);
      return fx ? { ...data, fxRate: fx.rate, fxDate: fx.date } : data;
    };
    const addExp = async (data) =>
      f.addDoc(col, { ...(await withRate(data)), uid: user.uid, createdAt: f.serverTimestamp() });
    const actions = {
      // Add an expense, optionally cross-linked to a fresh Planner booking.
      add: async (data, planExtra) => {
        if (!planExtra) return addExp(data);
        const expRef = await addExp({ ...data, linkedPlanId: null });
        const planRef = await f.addDoc(plansCol, {
          ...planExtra, linkedExpenseId: expRef.id, uid: user.uid, createdAt: f.serverTimestamp(),
        });
        return f.updateDoc(f.doc(f.db, "expenses", expRef.id), { linkedPlanId: planRef.id });
      },
      // Edit an expense in place. If it's linked to a booking, keep that
      // booking's display-only cost snapshot (amount/currency) in step.
      update: async (item, patch) => {
        await f.updateDoc(f.doc(f.db, "expenses", item.id), patch);
        if (item.linkedPlanId) {
          await f.updateDoc(f.doc(f.db, "plans", item.linkedPlanId),
            { amount: patch.amount, currency: patch.currency }).catch(() => {});
        }
      },
      // Delete an expense; if it's linked to a booking, offer to remove that too.
      remove: async (item) => {
        if (item.linkedPlanId) {
          if (!confirm("Supprimer cette dépense ? La réservation liée sera aussi supprimée.")) return;
          await f.deleteDoc(f.doc(f.db, "plans", item.linkedPlanId)).catch(() => {});
        } else if (!confirm("Supprimer cette dépense ?")) return;
        return f.deleteDoc(f.doc(f.db, "expenses", item.id));
      },
      // Attach a fresh Planner booking to an existing expense (both directions
      // stay in sync via the cross-reference).
      linkPlan: async (expense, planData) => {
        const planRef = await f.addDoc(plansCol, {
          ...planData, linkedExpenseId: expense.id, uid: user.uid, createdAt: f.serverTimestamp(),
        });
        return f.updateDoc(f.doc(f.db, "expenses", expense.id), { linkedPlanId: planRef.id });
      },
      signOut: doSignOut,
    };

    let lastItems = null;

    // Draw whichever page the route asks for. A repaint of the rates page keeps
    // its scroll position.
    let painted = null;
    const paint = () => {
      if (!live || !lastItems) return;
      const view = onRatesPage() ? "rates" : "dashboard";
      const y = window.scrollY;
      if (view === "rates") ratesScreen(lastItems);
      else dashboard(user, lastItems, actions);
      if (view === "rates" && painted === "rates") window.scrollTo(0, y);
      painted = view;
    };

    // Foreign expenses with no frozen rate yet (saved offline, or from before
    // rates were frozen) get the rate of their own date, in one batch.
    const freezing = new Set(); // ids in flight, so a snapshot doesn't redo them
    const freezeMissing = async () => {
      const todo = (lastItems || []).filter((e) => isForeign(e) && !(e.fxRate > 0) && !freezing.has(e.id));
      if (!todo.length) return;
      todo.forEach((e) => freezing.add(e.id));
      const fxs = await Promise.all(todo.map((e) => rateAt(e.currency, e.date).catch(() => null)));
      const batch = f.writeBatch(f.db);
      let n = 0;
      todo.forEach((e, i) => {
        if (fxs[i] && live) { batch.update(f.doc(f.db, "expenses", e.id), { fxRate: fxs[i].rate, fxDate: fxs[i].date }); n += 1; }
        else freezing.delete(e.id); // offline — retried on the next snapshot / reconnect
      });
      if (n) await batch.commit().catch(() => todo.forEach((e) => freezing.delete(e.id)));
    };

    // Load the currency + country catalogues (and FX rates) in the background;
    // re-render once they land so the combined home-currency total and the full
    // currency/country pickers fill in. ensureCurrencies() awaits the rates
    // internally. If we're offline now, the "online" listener below retries when
    // the connection returns. The trip countries are passed as an offline-only
    // fallback so the picker still works before the first fetch.
    const tripFallback = COUNTRIES.map((c) => ({ code: c.code, name: c.name }));
    const refreshFx = () => Promise.all([
      ensureCurrencies(),
      ensureCountries(tripFallback),
    ]).then(([curs, countries]) => {
      CURRENCIES = curs;
      COUNTRIES_ALL = countries;
      paint();
      freezeMissing();
    });
    fxRetry = refreshFx;
    refreshFx();

    unsub = f.onSnapshot(
      q,
      (snap) => {
        // Firestore orders by date only; within a day, put the latest-added
        // first so the first page really is the most recent spending. A local
        // write has no server timestamp yet — it's the newest of all.
        const added = (e) => e.createdAt?.toMillis?.() ?? Number.MAX_SAFE_INTEGER;
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.date || "").localeCompare(a.date || "") || added(b) - added(a));
        lastItems = items;
        paint();
        freezeMissing();
      },
      (err) => screen(el(`<div class="panel exp-notice">
        <p class="exp-warn">Impossible de charger les dépenses&nbsp;: ${esc(err.message)}</p>
        <p class="exp-fine">Si le message indique «&nbsp;permission denied&nbsp;», vérifiez que
        votre e-mail figure bien dans <code>firestore.rules</code>.</p></div>`))
    );
  }));
}
