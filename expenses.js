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
import { toHome, ratesInfo, ensureCurrencies, isSupported } from "./fx.js";
import { ensureCountries, countryName } from "./countries.js";
import { COUNTRIES, byCode } from "./data/index.js";

const SDK = "https://www.gstatic.com/firebasejs/10.12.2";

const CATEGORIES = [
  { id: "food",      label: "Food",       icon: "🍜" },
  { id: "lodging",   label: "Lodging",    icon: "🏨" },
  { id: "transport", label: "Transport",  icon: "🚆" },
  { id: "activity",  label: "Activities", icon: "🎟️" },
  { id: "shopping",  label: "Shopping",   icon: "🛍️" },
  { id: "other",     label: "Other",      icon: "•"  },
];
const catOf = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[CATEGORIES.length - 1];

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
const UNASSIGNED = { code: "", name: "Unassigned", flag: "🌍", color: "#8a97a5" };

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
  new Intl.NumberFormat(undefined, { style: "currency", currency: cur || "EUR" }).format(n);

const todayISO = () => new Date().toISOString().slice(0, 10);

// A back-to-home top bar, reused across every state below.
function topbar() {
  const bar = el(`<div class="topbar"><span class="back">← All countries</span></div>`);
  bar.querySelector(".back").addEventListener("click", () => (location.hash = "#/"));
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
    deleteDoc: store.deleteDoc,
    doc: store.doc,
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
      <h1>Expenses</h1>
      <p class="exp-sub">Not connected yet</p>
    </div>`), el(`
    <div class="panel exp-notice">
      <p>The expense dashboard needs a free Firebase project. It takes a few
      minutes to set up once.</p>
      <p>Follow the steps in <code>EXPENSES_SETUP.md</code>, paste your project's
      config into <code>firebase-config.js</code>, and this screen turns into a
      working shared tracker.</p>
    </div>`));
}

function signInScreen(onSignIn, note) {
  const hero = el(`
    <div class="exp-hero">
      <div class="exp-emoji">💰</div>
      <h1>Expenses</h1>
      <p class="exp-sub">Private to you and your wife</p>
    </div>`);
  const panel = el(`
    <div class="panel exp-signin">
      ${note ? `<p class="exp-warn">${esc(note)}</p>` : ""}
      <button class="btn-google" type="button">
        <span class="g">G</span> Sign in with Google
      </button>
      <p class="exp-fine">Only approved Google accounts can see the data.</p>
    </div>`);
  panel.querySelector(".btn-google").addEventListener("click", onSignIn);
  screen(hero, panel);
}

function notAllowedScreen(email, onSignOut) {
  const panel = el(`
    <div class="panel exp-signin">
      <p class="exp-warn">The account <strong>${esc(email)}</strong> isn't
      authorized to view these expenses.</p>
      <button class="btn-ghost" type="button">Sign out &amp; try another account</button>
    </div>`);
  panel.querySelector("button").addEventListener("click", onSignOut);
  screen(el(`
    <div class="exp-hero"><div class="exp-emoji">🔒</div><h1>Expenses</h1></div>`), panel);
}

/* ── Dashboard ────────────────────────────────────────────────────────────── */
// Sums can't mix currencies, so everything is grouped by currency.
function totalsByCurrency(items) {
  const byCur = {};
  for (const e of items) {
    const cur = e.currency || "EUR";
    const g = (byCur[cur] ||= { total: 0, byPerson: {}, byCat: {} });
    g.total += e.amount;
    g.byPerson[e.paidBy] = (g.byPerson[e.paidBy] || 0) + e.amount;
    g.byCat[e.category] = (g.byCat[e.category] || 0) + e.amount;
  }
  return byCur;
}

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
    const v = toHome(e.amount, e.currency || HOME_CURRENCY);
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
  if (owed < 0.01) return `<div class="exp-settle even">✓ You're even</div>`;
  return `<div class="exp-settle">${esc(nameFor(debtor))} owes ${esc(nameFor(creditor))}
    <strong>${esc(fmt(owed, HOME_CURRENCY))}</strong> to even up</div>`;
}

// A single combined total in the home currency, using live FX rates. Shown
// whenever any expense is in a foreign currency (otherwise it'd just repeat the
// one home-currency card below).
function homeSummaryCard(items) {
  const hasForeign = items.some((e) => (e.currency || "EUR") !== HOME_CURRENCY);
  if (!hasForeign) return "";

  const info = ratesInfo();
  if (info.source === "none") {
    return `<div class="panel exp-summary exp-home">
      <div class="exp-total"><span class="exp-total-num">${esc(HOME_CURRENCY)}</span>
      <span class="exp-total-lbl">converting…</span></div></div>`;
  }
  if (info.source === "unavailable") {
    // Offline and rates were never fetched — don't invent a number. The
    // per-currency totals below are exact; this fills in once back online.
    return `<div class="panel exp-summary exp-home">
      <div class="exp-rate-note pending">💱 Combined ${esc(HOME_CURRENCY)} total is pending —
      you're offline and rates haven't been fetched yet. It'll appear automatically
      once you're back online.</div></div>`;
  }

  let total = 0;
  const byPerson = {};
  const unknown = new Set();
  for (const e of items) {
    const v = toHome(e.amount, e.currency || HOME_CURRENCY);
    if (v == null) { unknown.add(e.currency); continue; }
    total += v;
    byPerson[e.paidBy] = (byPerson[e.paidBy] || 0) + v;
  }

  const people = Object.entries(byPerson).sort((a, b) => b[1] - a[1]);
  const settle = settleHTML(items);

  const note = info.stale
    ? `≈ last fetched rates${info.date ? " · " + esc(info.date) : ""} (offline)`
    : `live rates${info.date ? " · " + esc(info.date) : ""}`;

  return `
    <div class="panel exp-summary exp-home">
      <div class="exp-total">
        <span class="exp-total-num">${esc(fmt(total, HOME_CURRENCY))}</span>
        <span class="exp-total-lbl">all in ${esc(HOME_CURRENCY)}</span>
      </div>
      <div class="exp-people">
        ${people.map(([who, amt]) => `
          <div class="exp-person">
            <span class="who">${esc(nameFor(who))}</span>
            <span class="amt">${esc(fmt(amt, HOME_CURRENCY))}</span>
          </div>`).join("")}
      </div>
      ${settle}
      <div class="exp-rate-note">${note}</div>
      ${unknown.size ? `<div class="exp-rate-note warn">⚠ no rate for ${esc([...unknown].join(", "))} — excluded from this total</div>` : ""}
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
    const v = toHome(e.amount, e.currency || HOME_CURRENCY);
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
      a.name.localeCompare(b.name))
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
    <svg class="exp-pie" viewBox="0 0 240 240" role="img" aria-label="Spend by country">
      ${slices}
      <text x="${cx}" y="${cy - 4}" class="exp-pie-total" text-anchor="middle">${esc(fmt(total, HOME_CURRENCY))}</text>
      <text x="${cx}" y="${cy + 16}" class="exp-pie-sub" text-anchor="middle">total</text>
    </svg>`;
}

function countrySpendCard(items) {
  if (!items.length) return "";

  const hasForeign = items.some((e) => (e.currency || HOME_CURRENCY) !== HOME_CURRENCY);
  const info = ratesInfo();
  if (hasForeign && info.source === "none")
    return `<div class="panel exp-country"><h2>By country</h2>
      <p class="exp-rate-note pending">💱 converting…</p></div>`;
  if (hasForeign && info.source === "unavailable")
    return `<div class="panel exp-country"><h2>By country</h2>
      <p class="exp-rate-note pending">💱 The by-country breakdown needs exchange rates —
      you're offline and they haven't been fetched yet. It'll appear once you're back online.</p></div>`;

  const { groups, total, unconvertible } = spendByCountry(items);
  if (total <= 0)
    return `<div class="panel exp-country"><h2>By country</h2>
      <p class="exp-empty">No convertible spend yet.</p></div>`;

  const legend = groups.map((g) => `
    <div class="exp-legend-row">
      <span class="sw" style="background:${g.color}"></span>
      <span class="lg-name">${g.flag} ${esc(g.name)}</span>
      <span class="lg-amt">${esc(fmt(g.total, HOME_CURRENCY))}</span>
      <span class="lg-pct">${(g.total / total * 100).toFixed(0)}%</span>
    </div>`).join("");

  return `
    <div class="panel exp-country">
      <h2>By country</h2>
      <div class="exp-country-body">
        ${pieSVG(groups, total)}
        <div class="exp-legend">${legend}</div>
      </div>
      ${unconvertible ? `<div class="exp-rate-note warn">⚠ ${unconvertible} expense${unconvertible > 1 ? "s" : ""} in a currency with no rate — excluded</div>` : ""}
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
    const v = toHome(e.amount, e.currency || HOME_CURRENCY);
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
      verdict = "Not started"; vClass = "ok";
      if (spent > 0) note = `${esc(fmt(spent, HOME_CURRENCY))} pre-booked`;
    } else {
      if (spent > budget) { verdict = "Over budget"; vClass = "over"; }
      else if (spent <= expected * 1.05) { verdict = "On track"; vClass = "ok"; }
      else { verdict = "Ahead of pace"; vClass = "warn"; }

      const bits = [`expected by today ≈ <strong>${esc(fmt(expected, HOME_CURRENCY))}</strong>`];
      if (elapsed > 0 && elapsed < 1)
        bits.push(`projected total <strong>${esc(fmt(spent / elapsed, HOME_CURRENCY))}</strong>`);
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
        <div><span class="k">Spent</span><span class="v">${esc(fmt(spent, HOME_CURRENCY))}</span></div>
        <div><span class="k">${remaining >= 0 ? "Remaining" : "Over by"}</span>
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
  const hasForeign = items.some((e) => (e.currency || HOME_CURRENCY) !== HOME_CURRENCY);
  const pending = hasForeign && info.source !== "live";

  const { spent } = spentByPerson(items);

  // Where we are in the trip — the same pace applies to both people.
  const start = Date.parse(TRIP_START), end = Date.parse(TRIP_END), now = Date.now();
  let elapsed = null, phase = "none", paceNote = "";
  if (!Number.isNaN(start) && !Number.isNaN(end) && end > start) {
    elapsed = Math.min(Math.max((now - start) / (end - start), 0), 1);
    if (now < start) {
      phase = "pre";
      const d = Math.max(0, Math.ceil((start - now) / 86400000));
      paceNote = `trip starts in ${d} day${d === 1 ? "" : "s"}`;
    } else {
      phase = "during";
      const d = Math.max(0, Math.ceil((end - now) / 86400000));
      if (now < end) paceNote = `${d} day${d === 1 ? "" : "s"} left`;
    }
  }

  const blocks = ALLOWED_EMAILS
    .map((p) => personBudgetBlock(nameFor(p), spent[p], perBudget, elapsed, phase))
    .join("");

  return `
    <div class="panel exp-budget">
      <div class="exp-budget-head">
        <h2>Budget</h2>
        <span class="exp-budget-sub">${esc(fmt(perBudget, HOME_CURRENCY))} each${paceNote ? ` · ${esc(paceNote)}` : ""}</span>
      </div>
      ${blocks}
      ${pending ? `<div class="exp-rate-note warn">⚠ some foreign expenses aren't converted yet — spend is understated until rates load</div>` : ""}
    </div>`;
}

function summaryCards(items) {
  const groups = totalsByCurrency(items);
  const curs = Object.keys(groups).sort();
  if (!curs.length) return `<div class="panel exp-empty">No expenses yet — add the first one below.</div>`;

  const perCurrency = curs.map((cur) => {
    const g = groups[cur];
    const people = Object.entries(g.byPerson).sort((a, b) => b[1] - a[1]);
    const cats = Object.entries(g.byCat).sort((a, b) => b[1] - a[1]);
    const max = Math.max(...cats.map(([, v]) => v), 1);
    return `
      <div class="panel exp-summary">
        <div class="exp-total">
          <span class="exp-total-num">${esc(fmt(g.total, cur))}</span>
          <span class="exp-total-lbl">total</span>
        </div>
        <div class="exp-people">
          ${people.map(([who, amt]) => `
            <div class="exp-person">
              <span class="who">${esc(nameFor(who))}</span>
              <span class="amt">${esc(fmt(amt, cur))}</span>
            </div>`).join("")}
        </div>
        <div class="exp-bars">
          ${cats.map(([id, amt]) => {
            const c = catOf(id);
            return `
            <div class="exp-bar-row">
              <span class="exp-bar-lbl">${c.icon} ${esc(c.label)}</span>
              <span class="exp-bar-track"><span class="exp-bar-fill" style="width:${(amt / max * 100).toFixed(1)}%"></span></span>
              <span class="exp-bar-amt">${esc(fmt(amt, cur))}</span>
            </div>`;
          }).join("")}
        </div>
      </div>`;
  }).join("");

  // homeSummaryCard carries the settle-up, but only renders when there's foreign
  // spend. When everything is already in the home currency it's suppressed, so
  // surface the who-owes-whom line on its own instead.
  const hasForeign = items.some((e) => (e.currency || HOME_CURRENCY) !== HOME_CURRENCY);
  const solo = hasForeign ? "" : settleHTML(items);
  const settleCard = solo ? `<div class="panel exp-summary exp-settle-solo">${solo}</div>` : "";

  return homeSummaryCard(items) + settleCard + perCurrency;
}

// The list can grow to hundreds of entries, so it isn't all rendered at once:
// only the first PAGE rows go into the DOM, and "Show more" reveals the next
// batch. `expShown` persists across the re-renders that a new Firestore
// snapshot triggers (so adding an expense doesn't collapse an expanded list);
// renderExpenses() resets it when the screen is opened fresh.
const PAGE = 50;
let expShown = PAGE;

// Pretty day header from an ISO date ("2026-07-10" → "Wed 10 Jul 2026").
function dayHeading(iso) {
  const d = new Date(`${iso}T00:00:00`);
  if (!iso || Number.isNaN(d.getTime())) return "Undated";
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

function expenseRows(items, onDelete) {
  if (!items.length) return "";

  const list = el(`
    <div class="panel exp-list">
      <h2>All expenses</h2>
      <div class="exp-rows"></div>
      <div class="exp-more"></div>
    </div>`);
  const body = list.querySelector(".exp-rows");
  const moreWrap = list.querySelector(".exp-more");

  const render = () => {
    const shown = Math.min(expShown, items.length);
    // Group into day sections (items already arrive sorted by date, newest
    // first), dropping a subheading each time the date changes.
    let html = "", curDay = null;
    for (const e of items.slice(0, shown)) {
      if (e.date !== curDay) {
        curDay = e.date;
        html += `<div class="exp-day">${esc(dayHeading(e.date))}</div>`;
      }
      const c = catOf(e.category);
      // Only call out the split when it isn't the default "both" — a "just for
      // X" expense is worth flagging in the row.
      const forTag = e.split && e.split !== "both" ? ` · for ${esc(nameFor(e.split))}` : "";
      html += `
        <div class="exp-row" data-id="${esc(e.id)}">
          <span class="exp-cat" title="${esc(c.label)}">${c.icon}</span>
          <span class="exp-row-main">
            <span class="exp-note">${esc(e.note || c.label)}</span>
            <span class="exp-row-sub">${esc(nameFor(e.paidBy))}${forTag}</span>
          </span>
          <span class="exp-amt">${esc(fmt(e.amount, e.currency))}</span>
          <button class="exp-del" title="Delete" aria-label="Delete">✕</button>
        </div>`;
    }
    body.innerHTML = html;

    const remaining = items.length - shown;
    moreWrap.innerHTML = remaining > 0
      ? `<button class="btn-more" type="button">Show ${Math.min(PAGE, remaining)} more<span class="exp-more-of"> · ${remaining} of ${items.length} hidden</span></button>`
      : (items.length > PAGE ? `<div class="exp-count">${items.length} expenses</div>` : "");

    body.querySelectorAll(".exp-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".exp-row").dataset.id;
        if (confirm("Delete this expense?")) onDelete(id);
      });
    });
    const more = moreWrap.querySelector(".btn-more");
    if (more) more.addEventListener("click", () => { expShown += PAGE; render(); });
  };

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
    <optgroup label="Common">
      ${common.map((c) => opt(c, label(byCode.get(c)))).join("")}
    </optgroup>
    <optgroup label="All currencies">
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
    <optgroup label="Trip">
      ${COUNTRIES.map((c) => opt(c.code, `${c.flag} ${c.name}`)).join("")}
    </optgroup>
    ${opt("", "🌍 Other / unassigned")}
    ${others.length ? `<optgroup label="All countries">
      ${others.map((c) => opt(c.code, `${flagOf(c.code)} ${c.name}`)).join("")}
    </optgroup>` : ""}`;
}

function addForm(user, onAdd) {
  const peopleOpts = ALLOWED_EMAILS
    .map((em) => `<option value="${esc(em)}"${em === user.email ? " selected" : ""}>${esc(nameFor(em))}</option>`)
    .join("") +
    `<option value="${esc(COMMON_ACCOUNT)}">🤝 ${esc(nameFor(COMMON_ACCOUNT))} (shared)</option>`;
  const catOpts = CATEGORIES.map((c) => `<option value="${c.id}">${c.icon} ${c.label}</option>`).join("");

  // "For whom" — who the cost is split between. Defaults to both of you (the
  // usual case); pick one person for something only they benefit from (a solo
  // gift, a personal purchase) so it doesn't land on the other's half.
  const splitOpts = `<option value="both">👫 Both of us</option>` +
    ALLOWED_EMAILS.map((em) => `<option value="${esc(em)}">${esc(nameFor(em))} only</option>`).join("");

  // Default the currency/country to whatever was used last (falling back to the
  // home currency and the first trip country) so repeat entries are quick.
  const last = readLast();
  const defaultCur = last.currency || HOME_CURRENCY;
  const defaultCountry = last.country != null ? last.country : (COUNTRIES[0]?.code ?? "");

  const form = el(`
    <form class="panel exp-form">
      <h2>Add an expense</h2>
      <div class="exp-grid">
        <label class="exp-field amt">
          <span>Amount</span>
          <input name="amount" type="number" inputmode="decimal" step="0.01" min="0" required placeholder="0.00" />
        </label>
        <label class="exp-field cur">
          <span>Currency</span>
          <select name="currency" required>${currencyOptionsHTML(defaultCur)}</select>
        </label>
        <label class="exp-field cat">
          <span>Category</span>
          <select name="category">${catOpts}</select>
        </label>
        <label class="exp-field country">
          <span>Country</span>
          <select name="country">${countryOptionsHTML(defaultCountry)}</select>
        </label>
        <label class="exp-field who">
          <span>Paid by</span>
          <select name="paidBy">${peopleOpts}</select>
        </label>
        <label class="exp-field forwhom">
          <span>For</span>
          <select name="split">${splitOpts}</select>
        </label>
        <label class="exp-field date">
          <span>Date</span>
          <input name="date" type="date" value="${todayISO()}" required />
        </label>
        <label class="exp-field note">
          <span>Note</span>
          <input name="note" type="text" maxlength="80" placeholder="e.g. dinner in Hanoi" />
        </label>
      </div>
      <button class="btn-add" type="submit">Add expense</button>
    </form>`);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = form.elements;
    const amount = parseFloat(f.amount.value);
    if (!(amount > 0)) return;
    const currency = (f.currency.value || HOME_CURRENCY).toUpperCase().trim();
    // Safety net: the picker only offers convertible codes, but never store one
    // we couldn't later turn into euros.
    if (!isSupported(currency)) {
      alert(`Can't use "${currency}" — no ${HOME_CURRENCY} conversion is available for it. Pick another currency.`);
      return;
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
        date: f.date.value || todayISO(),
        note: f.note.value.trim(),
      });
      writeLast({ currency, country: f.country.value }); // default the next entry here
      f.amount.value = "";
      f.note.value = "";
      f.amount.focus();
    } catch (err) {
      alert("Couldn't save: " + (err?.message || err));
    } finally {
      btn.disabled = false;
    }
  });
  return form;
}

function dashboard(user, items, actions) {
  const head = el(`
    <div class="exp-hero exp-hero-live">
      <div>
        <h1>💰 Expenses</h1>
        <p class="exp-sub">${esc(nameFor(user.email))} · live shared ledger</p>
      </div>
      <button class="btn-ghost small exp-out" type="button">Sign out</button>
    </div>`);
  head.querySelector(".exp-out").addEventListener("click", actions.signOut);

  const summary = el(`<div>${budgetCard(items)}${countrySpendCard(items)}${summaryCards(items)}</div>`);
  const rows = expenseRows(items, actions.remove);
  const form = addForm(user, actions.add);

  const nodes = [head, form, summary];
  if (rows) nodes.push(rows);
  screen(...nodes);
}

/* ── Entry point ──────────────────────────────────────────────────────────── */
export async function renderExpenses() {
  document.title = "Expenses · Trip Companion";
  expShown = PAGE; // collapse the list back to the first page on a fresh open

  if (!isConfigured()) return setupNeededScreen();

  // Loading placeholder while the SDK downloads.
  screen(el(`<div class="panel exp-empty">Connecting…</div>`));

  let f;
  try {
    f = await loadFirebase();
  } catch (err) {
    return screen(el(`<div class="panel exp-notice">
      <p class="exp-warn">Couldn't reach Firebase. The expense dashboard needs an
      internet connection.</p></div>`));
  }

  const provider = new f.GoogleAuthProvider();
  const doSignIn = async () => {
    try {
      await f.signInWithPopup(f.auth, provider);
    } catch (err) {
      // Popups are unreliable inside installed iOS PWAs — fall back to redirect.
      if (String(err?.code).includes("popup")) {
        await f.signInWithRedirect(f.auth, provider);
      } else {
        alert("Sign-in failed: " + (err?.message || err));
      }
    }
  };
  const doSignOut = () => f.signOut(f.auth);

  // Complete any redirect-based sign-in that bounced back to the app.
  f.getRedirectResult(f.auth).catch(() => {});

  let unsub = null; // active Firestore listener, cleared on sign-out / route change

  f.onAuthStateChanged(f.auth, (user) => {
    if (unsub) { unsub(); unsub = null; }

    // Left the expenses route while signed in — stop listening, do nothing.
    if (!location.hash.startsWith("#/expenses")) return;

    if (!user) return signInScreen(doSignIn);
    if (!ALLOWED_EMAILS.includes(user.email)) return notAllowedScreen(user.email, doSignOut);

    const col = f.collection(f.db, "expenses");
    const q = f.query(col, f.orderBy("date", "desc"));
    const actions = {
      add: (data) => f.addDoc(col, { ...data, uid: user.uid, createdAt: f.serverTimestamp() }),
      remove: (id) => f.deleteDoc(f.doc(f.db, "expenses", id)),
      signOut: doSignOut,
    };

    let lastItems = null;
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
      if (lastItems) dashboard(user, lastItems, actions);
    });
    fxRetry = refreshFx;
    refreshFx();

    unsub = f.onSnapshot(
      q,
      (snap) => {
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        lastItems = items;
        dashboard(user, items, actions);
      },
      (err) => screen(el(`<div class="panel exp-notice">
        <p class="exp-warn">Couldn't load expenses: ${esc(err.message)}</p>
        <p class="exp-fine">If this says "permission denied", double-check that
        your email is in <code>firestore.rules</code>.</p></div>`))
    );
  });
}
