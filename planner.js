// ── Planner / Schedule ───────────────────────────────────────────────────────
// A shared travel planner for two people: what's already booked (transport,
// lodging, restaurants, activities) and what's still to do. Backed by the same
// Firebase project + Google sign-in as the Expenses dashboard; the `plans`
// collection is gated to the same two accounts (firestore.rules).
//
// A booking and an expense can be linked BOTH ways — enter it once, see it in
// both tabs. Adding a booking with a cost can also create the matching expense;
// adding an expense (over in expenses.js) can also create the matching booking.
// The plan keeps its own display-only `amount` snapshot; the linked EXPENSE is
// the one that counts toward the budget / settle-up, never the plan.

import {
  firebaseConfig, ALLOWED_EMAILS, COMMON_ACCOUNT, isConfigured, nameFor, HOME_CURRENCY,
} from "./firebase-config.js";
import { toHome, ratesInfo, ensureCurrencies, isSupported } from "./fx.js";
import { ensureCountries, countryName } from "./countries.js";
import { COUNTRIES, byCode } from "./data/index.js";

const SDK = "https://www.gstatic.com/firebasejs/10.12.2";

// Booking kinds. `cat` maps to an Expenses category (see CATEGORIES in
// expenses.js) for the linked expense; `ranged` kinds default to showing an end
// date/time (a train arrives, a hotel checks out) — a restaurant is one moment.
const TYPES = [
  { id: "transport",  label: "Transport",  icon: "🚆", cat: "transport", ranged: true,  color: "#6ea8fe" },
  { id: "lodging",    label: "Lodging",    icon: "🏨", cat: "lodging",   ranged: true,  color: "#c792ea" },
  { id: "restaurant", label: "Restaurant", icon: "🍽️", cat: "food",      ranged: false, color: "#ff8a8a" },
  { id: "activity",   label: "Activity",   icon: "🎟️", cat: "activity",  ranged: false, color: "#ffd166" },
  { id: "other",      label: "Other",      icon: "📌", cat: "other",     ranged: false, color: "#5ac8d8" },
];
const typeOf = (id) => TYPES.find((t) => t.id === id) || TYPES[TYPES.length - 1];

// Quick-pick platforms — a datalist, so any other name still types through.
const PLATFORMS = [
  "Booking.com", "Airbnb", "Agoda", "Hostelworld", "Expedia",
  "Trainline", "Omio", "12Go", "Flixbus", "Trip.com", "Skyscanner",
  "Kiwi.com", "GetYourGuide", "Direct",
];

// Currency picker: trip currencies float to the top, the rest follow once the
// full catalogue loads (see fx.js). Mirrors expenses.js.
const COMMON_CUR = ["EUR", "USD", "GBP", "RUB", "CNY", "VND", "LAK", "KHR", "THB"];
let CURRENCIES = null;      // [{ code, name }] once ensureCurrencies() resolves
let COUNTRIES_ALL = null;   // full country catalogue once ensureCountries() resolves

// Remember the last country/currency/platform used so the next booking defaults
// to them (you often book several in a row on the same platform).
const LS_LAST = "trip-plan-last";
const readLast = () => { try { return JSON.parse(localStorage.getItem(LS_LAST)) || {}; } catch { return {}; } };
const writeLast = (obj) => { try { localStorage.setItem(LS_LAST, JSON.stringify({ ...readLast(), ...obj })); } catch { /* private mode */ } };

/* ── tiny helpers (idiom of app.js / expenses.js) ──────────────────────────── */
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

// ISO alpha-2 → flag emoji (an algorithm, works for any country). From expenses.js.
function flagOf(code) {
  if (!code || !/^[a-zA-Z]{2}$/.test(code)) return "🌍";
  return String.fromCodePoint(...[...code.toUpperCase()].map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65));
}

const UNASSIGNED = { code: "", name: "Anywhere", flag: "🌍" };
function countryOf(code) {
  if (!code) return UNASSIGNED;
  const trip = byCode(code);
  if (trip) return { code: trip.code, name: trip.name, flag: trip.flag };
  return { code, name: countryName(code) || code.toUpperCase(), flag: flagOf(code) };
}
const tripRank = (code) => { const i = COUNTRIES.findIndex((c) => c.code === code); return i < 0 ? 99 : i; };

// A back-to-home top bar, reused across every state below.
function topbar() {
  const bar = el(`<div class="topbar"><span class="back">← All countries</span></div>`);
  bar.querySelector(".back").addEventListener("click", () => (location.hash = "#/"));
  return bar;
}

function screen(...children) {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.append(topbar(), ...children);
  window.scrollTo(0, 0);
}

/* ── date / time formatting ────────────────────────────────────────────────── */
// "2026-07-10" → "Wed 10 Jul 2026" (or "" for a missing/invalid date).
function dayLabel(iso) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

// The calendar-style "when" line for a booking: a single moment, a same-day
// time range, or a multi-day span — with times when they're set.
function whenLabel(p) {
  const sd = p.startDate, ed = p.endDate, st = p.startTime, et = p.endTime;
  if (!sd) return "Undated";
  const start = dayLabel(sd) + (st ? ` · ${esc(st)}` : "");
  if (!ed || ed === sd) {
    if (et && et !== st) return `${start} → ${esc(et)}`; // same-day range
    return start;
  }
  return `${start} → ${dayLabel(ed)}${et ? ` · ${esc(et)}` : ""}`;
}

// Sort key: start date then start time (chronological, soonest first).
const whenKey = (p) => `${p.startDate || "9999"}T${p.startTime || "00:00"}`;

// ── Calendar helpers ─────────────────────────────────────────────────────────
// All date maths use LOCAL components (never toISOString, which would shift the
// day across time zones). Week starts on Monday.
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const isoOf = (y, m, d) => `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const partsOf = (iso) => { const [y, m, d] = iso.split("-").map(Number); return { y, m: m - 1, d }; };
// The last day a booking occupies (its end, or its start when open-ended).
const endOf = (p) => (p.endDate && p.endDate >= p.startDate ? p.endDate : p.startDate);

// Which month + selected day the calendar is showing. Kept module-level so a
// Firestore snapshot re-render doesn't reset your place; renderPlanner() clears
// it on a fresh open so it re-centres on the next booking.
let calState = null; // { y, m, sel }

// Centre the calendar on the soonest upcoming booking (else the latest, else today).
function initCalState(items) {
  const today = todayISO();
  const dates = items.filter((p) => p.status === "booked" && p.startDate).map((p) => p.startDate).sort();
  const base = dates.find((d) => d >= today) || dates[dates.length - 1] || today;
  const { y, m } = partsOf(base);
  return { y, m, sel: base };
}

/* ── Firebase (lazy-loaded, only when this screen opens) ───────────────────── */
let fb = null;

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
    GoogleAuthProvider: auth.GoogleAuthProvider,
    signInWithPopup: auth.signInWithPopup,
    signInWithRedirect: auth.signInWithRedirect,
    getRedirectResult: auth.getRedirectResult,
    onAuthStateChanged: auth.onAuthStateChanged,
    signOut: auth.signOut,
    collection: store.collection,
    query: store.query,
    orderBy: store.orderBy,
    onSnapshot: store.onSnapshot,
    addDoc: store.addDoc,
    updateDoc: store.updateDoc,
    deleteDoc: store.deleteDoc,
    doc: store.doc,
    serverTimestamp: store.serverTimestamp,
  };
  return fb;
}

/* ── State screens ─────────────────────────────────────────────────────────── */
function setupNeededScreen() {
  screen(el(`
    <div class="exp-hero">
      <div class="exp-emoji">🗓️</div>
      <h1>Planner</h1>
      <p class="exp-sub">Not connected yet</p>
    </div>`), el(`
    <div class="panel exp-notice">
      <p>The planner shares the Expenses dashboard's Firebase project. Once that's
      set up, this screen turns into a working shared schedule.</p>
      <p>Follow the steps in <code>EXPENSES_SETUP.md</code> and paste your config
      into <code>firebase-config.js</code>.</p>
    </div>`));
}

function signInScreen(onSignIn, note) {
  const hero = el(`
    <div class="exp-hero">
      <div class="exp-emoji">🗓️</div>
      <h1>Planner</h1>
      <p class="exp-sub">Private to you and your wife</p>
    </div>`);
  const panel = el(`
    <div class="panel exp-signin">
      ${note ? `<p class="exp-warn">${esc(note)}</p>` : ""}
      <button class="btn-google" type="button">
        <span class="g">G</span> Sign in with Google
      </button>
      <p class="exp-fine">Only approved Google accounts can see the schedule.</p>
    </div>`);
  panel.querySelector(".btn-google").addEventListener("click", onSignIn);
  screen(hero, panel);
}

function notAllowedScreen(email, onSignOut) {
  const panel = el(`
    <div class="panel exp-signin">
      <p class="exp-warn">The account <strong>${esc(email)}</strong> isn't
      authorized to view this planner.</p>
      <button class="btn-ghost" type="button">Sign out &amp; try another account</button>
    </div>`);
  panel.querySelector("button").addEventListener("click", onSignOut);
  screen(el(`
    <div class="exp-hero"><div class="exp-emoji">🔒</div><h1>Planner</h1></div>`), panel);
}

/* ── Option builders (currency / country) — mirror expenses.js ─────────────── */
function currencyOptionsHTML(selected) {
  const opt = (code, label) =>
    `<option value="${esc(code)}"${code === selected ? " selected" : ""}>${esc(label)}</option>`;
  if (!CURRENCIES) return COMMON_CUR.map((c) => opt(c, c)).join("");
  const byCode = new Map(CURRENCIES.map((x) => [x.code, x]));
  const common = COMMON_CUR.filter((c) => byCode.has(c));
  const commonSet = new Set(common);
  const rest = CURRENCIES.filter((x) => !commonSet.has(x.code));
  const label = (x) => `${x.code} — ${x.name}`;
  return `
    <optgroup label="Common">${common.map((c) => opt(c, label(byCode.get(c)))).join("")}</optgroup>
    <optgroup label="All currencies">${rest.map((x) => opt(x.code, label(x))).join("")}</optgroup>`;
}

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

/* ── Summary ───────────────────────────────────────────────────────────────── */
function summaryCard(items) {
  const booked = items.filter((p) => p.status === "booked");
  const todo = items.filter((p) => p.status !== "booked");

  // Committed spend = booked items with a cost, summed in the home currency.
  let committed = 0, pending = false;
  for (const p of booked) {
    if (!(p.amount > 0)) continue;
    const v = toHome(p.amount, p.currency || HOME_CURRENCY);
    if (v == null) { pending = true; continue; }
    committed += v;
  }
  const spendLine = committed > 0
    ? `<div class="plan-stat"><span class="v">${esc(fmt(committed, HOME_CURRENCY))}</span><span class="k">committed${pending ? " +" : ""}</span></div>`
    : "";

  return `
    <div class="panel plan-summary">
      <div class="plan-stat"><span class="v">${booked.length}</span><span class="k">booked</span></div>
      <div class="plan-stat"><span class="v">${todo.length}</span><span class="k">to do</span></div>
      ${spendLine}
    </div>`;
}

/* ── Booking cards ─────────────────────────────────────────────────────────── */
// The shared inner markup (icon, title, when, meta chips, cost). `extra` slots
// action buttons in per list.
function bookingBody(p) {
  const t = typeOf(p.type);
  const co = countryOf(p.country || "");
  const cost = p.amount > 0 ? fmt(p.amount, p.currency || HOME_CURRENCY) : "";
  const chips = [];
  if (p.platform) chips.push(`<span class="plan-chip">🔖 ${esc(p.platform)}</span>`);
  if (p.country) chips.push(`<span class="plan-chip">${co.flag} ${esc(co.name)}</span>`);
  chips.push(`<span class="plan-chip">👤 ${esc(nameFor(p.bookedBy))}</span>`);
  if (p.linkedExpenseId) chips.push(`<span class="plan-chip linked">💰 in expenses</span>`);
  if (p.ref) chips.push(`<span class="plan-chip">#${esc(p.ref)}</span>`);
  return `
    <span class="plan-icon" title="${esc(t.label)}">${t.icon}</span>
    <span class="plan-main">
      <span class="plan-title">${esc(p.title || t.label)}</span>
      <span class="plan-when">🗓️ ${whenLabel(p)}</span>
      <span class="plan-chips">${chips.join("")}</span>
      ${p.note ? `<span class="plan-note">${esc(p.note)}</span>` : ""}
    </span>
    ${cost ? `<span class="plan-cost">${esc(cost)}</span>` : ""}`;
}

// A tiny inline form to attach an expense to an EXISTING booking. Everything else
// (category from type, country, date, who paid, note) comes from the booking, so
// it only asks for the amount + currency (pre-filled from the booking's own cost
// snapshot when it has one). On save it cross-links the two.
function costLinkForm(plan, onSave, onCancel) {
  const form = el(`
    <form class="plan-linkform">
      <input class="plan-linkform-amt" name="amount" type="number" inputmode="decimal" step="0.01" min="0"
             required placeholder="0.00" value="${plan.amount > 0 ? esc(plan.amount) : ""}" />
      <select class="plan-linkform-cur" name="currency">${currencyOptionsHTML(plan.currency || HOME_CURRENCY)}</select>
      <button type="submit" class="plan-linkform-save">Add expense</button>
      <button type="button" class="plan-linkform-cancel" aria-label="Cancel">✕</button>
    </form>`);
  form.querySelector(".plan-linkform-cancel").addEventListener("click", onCancel);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const amount = parseFloat(form.elements.amount.value);
    if (!(amount > 0)) return;
    const currency = (form.elements.currency.value || HOME_CURRENCY).toUpperCase().trim();
    if (!isSupported(currency)) {
      alert(`Can't use "${currency}" — no ${HOME_CURRENCY} conversion is available. Pick another currency.`);
      return;
    }
    const btn = form.querySelector(".plan-linkform-save");
    btn.disabled = true;
    try { await onSave({ amount, currency }); }
    catch (err) { alert("Couldn't save: " + (err?.message || err)); btn.disabled = false; }
  });
  return form;
}

// A Google-Calendar-style month view of the BOOKED items: a grid of days with a
// thin coloured bar per booking (colour = type), multi-day stays spanning their
// nights. Tap a day to see its bookings in the agenda below; the month arrows and
// "Today" move around. Returns a live element that re-paints its own grid/agenda
// on navigation (so the add form above never rebuilds), reading calState so a
// Firestore snapshot keeps your place.
function bookedCalendar(items, actions) {
  const panel = el(`
    <div class="panel plan-cal">
      <div class="plan-cal-head">
        <button type="button" class="plan-cal-nav prev" aria-label="Previous month">‹</button>
        <div class="plan-cal-title"></div>
        <button type="button" class="plan-cal-nav next" aria-label="Next month">›</button>
      </div>
      <div class="plan-cal-grid"></div>
      <div class="plan-cal-legendrow">
        <div class="plan-cal-legend">${TYPES.map((t) =>
          `<span class="plan-cal-lg"><i style="background:${t.color}"></i>${esc(t.label)}</span>`).join("")}</div>
        <button type="button" class="plan-cal-today">Today</button>
      </div>
      <div class="plan-cal-agenda"></div>
    </div>`);

  const title = panel.querySelector(".plan-cal-title");
  const grid = panel.querySelector(".plan-cal-grid");
  const agenda = panel.querySelector(".plan-cal-agenda");

  // Spread every booking across the days it occupies (start → end inclusive).
  function coverage() {
    const cover = new Map();
    for (const p of items) {
      if (p.status !== "booked" || !p.startDate) continue;
      const s = partsOf(p.startDate), e = partsOf(endOf(p));
      const cur = new Date(s.y, s.m, s.d), stop = new Date(e.y, e.m, e.d);
      let guard = 0;
      while (cur <= stop && guard++ < 400) {
        const iso = isoOf(cur.getFullYear(), cur.getMonth(), cur.getDate());
        (cover.get(iso) || cover.set(iso, []).get(iso)).push(p);
        cur.setDate(cur.getDate() + 1);
      }
    }
    for (const arr of cover.values())
      arr.sort((a, b) => whenKey(a).localeCompare(whenKey(b)) || String(a.id).localeCompare(String(b.id)));
    return cover;
  }

  // Render the month as week rows. Each week is its own 7-column grid: a
  // background cell per day (the click target / grid lines), the day numbers in
  // the top row, then one or more "lanes" of event pills below. A booking that
  // spans several days is ONE pill spanning those columns (grid-column
  // start/end), so it draws as a single continuous bar; at a week boundary it
  // splits into a per-week segment, with the outer ends rounded only where the
  // booking actually begins/ends. Lanes are packed so overlapping bookings stack.
  function paintGrid() {
    const { y, m } = calState;
    title.textContent = new Date(y, m, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });

    const lead = (new Date(y, m, 1).getDay() + 6) % 7; // Mon = 0
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const numWeeks = Math.ceil((lead + daysInMonth) / 7);
    const start = new Date(y, m, 1 - lead);
    const today = todayISO();
    const booked = items.filter((p) => p.status === "booked" && p.startDate);

    let weeksHtml = "";
    for (let w = 0; w < numWeeks; w++) {
      const dates = [], iso = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + w * 7 + i);
        dates.push(d);
        iso.push(isoOf(d.getFullYear(), d.getMonth(), d.getDate()));
      }
      const w0 = iso[0], w6 = iso[6];

      // Every booking that touches this week, clipped to it.
      const segs = [];
      for (const p of booked) {
        const s = p.startDate, e = endOf(p);
        if (e < w0 || s > w6) continue;
        let sIdx = iso.indexOf(s); if (sIdx < 0) sIdx = 0;   // starts before this week
        let eIdx = iso.indexOf(e); if (eIdx < 0) eIdx = 6;   // ends after this week
        segs.push({ p, sIdx, eIdx, isStart: s >= w0, isEnd: e <= w6 });
      }
      // Longest / earliest first, then pack each into the lowest free lane.
      segs.sort((a, b) => a.p.startDate.localeCompare(b.p.startDate) ||
        (b.eIdx - b.sIdx) - (a.eIdx - a.sIdx) || whenKey(a.p).localeCompare(whenKey(b.p)));
      const lanes = [];
      for (const seg of segs) {
        let li = lanes.findIndex((lane) => lane.every((r) => seg.eIdx < r[0] || seg.sIdx > r[1]));
        if (li < 0) { li = lanes.length; lanes.push([]); }
        lanes[li].push([seg.sIdx, seg.eIdx]);
        seg.lane = li;
      }

      let bg = "", nums = "", pills = "";
      for (let c = 0; c < 7; c++) {
        const inMonth = dates[c].getMonth() === m;
        const bgCls = ["plan-daybg"];
        if (c === 0) bgCls.push("col0");
        if (w === 0) bgCls.push("wk0");
        if (!inMonth) bgCls.push("muted");
        if (iso[c] === today) bgCls.push("today");
        if (iso[c] === calState.sel) bgCls.push("sel");
        bg += `<button type="button" class="${bgCls.join(" ")}" data-iso="${iso[c]}" data-y="${dates[c].getFullYear()}" data-m="${dates[c].getMonth()}" style="grid-column:${c + 1};grid-row:1/-1"></button>`;
        const nCls = ["plan-daynum"];
        if (!inMonth) nCls.push("muted");
        if (iso[c] === today) nCls.push("today");
        nums += `<span class="${nCls.join(" ")}" style="grid-column:${c + 1};grid-row:1">${dates[c].getDate()}</span>`;
      }
      for (const seg of segs) {
        const t = typeOf(seg.p.type);
        const time = seg.isStart && seg.p.startTime ? `${seg.p.startTime} ` : "";
        const label = esc(time + (seg.p.title || t.label));
        const cls = ["plan-seg"];
        if (seg.isStart) cls.push("is-start");
        if (seg.isEnd) cls.push("is-end");
        pills += `<span class="${cls.join(" ")}" style="grid-column:${seg.sIdx + 1}/${seg.eIdx + 2};grid-row:${seg.lane + 2};background:${t.color}" title="${label}">${label}</span>`;
      }
      const maxLane = Math.max(lanes.length, 1);
      weeksHtml += `<div class="plan-wk" style="grid-template-rows:auto repeat(${maxLane},17px)">${bg}${nums}${pills}</div>`;
    }

    grid.innerHTML =
      `<div class="plan-cal-week">${WEEKDAYS.map((wd) => `<span class="plan-cal-wd">${wd}</span>`).join("")}</div>` +
      weeksHtml;

    grid.querySelectorAll(".plan-daybg").forEach((btn) => {
      btn.addEventListener("click", () => {
        calState.sel = btn.dataset.iso;
        calState.y = Number(btn.dataset.y);
        calState.m = Number(btn.dataset.m);
        paint();
      });
    });
  }

  function paintAgenda(cover) {
    const dayEvs = cover.get(calState.sel) || [];
    const head = `<div class="plan-cal-agenda-head">${esc(dayLabel(calState.sel) || "—")}</div>`;
    if (!dayEvs.length) {
      agenda.innerHTML = head + `<div class="plan-cal-empty">Nothing booked this day.</div>`;
      return;
    }
    const rows = dayEvs.map((p) => `
      <div class="plan-row booked" data-id="${esc(p.id)}">
        ${bookingBody(p)}
        <span class="plan-actions">
          ${p.linkedExpenseId ? "" : `<button class="plan-addexp" title="Add a linked expense">💰+</button>`}
          <button class="plan-del" title="Delete" aria-label="Delete">✕</button>
        </span>
      </div>`).join("");
    agenda.innerHTML = head + `<div class="plan-rows">${rows}</div>`;
    agenda.querySelectorAll(".plan-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = items.find((x) => x.id === btn.closest(".plan-row").dataset.id);
        if (item) actions.remove(item);
      });
    });
    agenda.querySelectorAll(".plan-addexp").forEach((btn) => {
      btn.addEventListener("click", () => {
        const row = btn.closest(".plan-row");
        const next = row.nextElementSibling;
        if (next && next.classList.contains("plan-linkform")) { next.remove(); return; }
        const item = items.find((x) => x.id === row.dataset.id);
        if (!item) return;
        const form = costLinkForm(item, (cost) => actions.linkExpense(item, cost), () => form.remove());
        row.after(form);
      });
    });
  }

  function paint() {
    if (!calState) calState = initCalState(items);
    paintGrid();
    paintAgenda(coverage());
  }

  panel.querySelector(".prev").addEventListener("click", () => {
    const d = new Date(calState.y, calState.m - 1, 1);
    calState.y = d.getFullYear(); calState.m = d.getMonth(); paint();
  });
  panel.querySelector(".next").addEventListener("click", () => {
    const d = new Date(calState.y, calState.m + 1, 1);
    calState.y = d.getFullYear(); calState.m = d.getMonth(); paint();
  });
  panel.querySelector(".plan-cal-today").addEventListener("click", () => {
    const t = todayISO(), { y, m } = partsOf(t);
    calState.y = y; calState.m = m; calState.sel = t; paint();
  });

  paint();
  return panel;
}

function todoList(items) {
  const todo = items.filter((p) => p.status !== "booked").sort((a, b) => whenKey(a).localeCompare(whenKey(b)));
  if (!todo.length) return "";
  const rows = todo.map((p) => `
    <div class="plan-row todo" data-id="${esc(p.id)}">
      ${bookingBody(p)}
      <span class="plan-actions">
        <button class="plan-book" title="Mark booked">✓ Booked</button>
        ${p.linkedExpenseId ? "" : `<button class="plan-addexp" title="Add a linked expense">💰+</button>`}
        <button class="plan-del" title="Delete" aria-label="Delete">✕</button>
      </span>
    </div>`).join("");
  return `
    <div class="panel plan-list plan-todo">
      <div class="exp-list-head"><h2>📝 To do</h2></div>
      <div class="plan-rows">${rows}</div>
    </div>`;
}

/* ── Add form ──────────────────────────────────────────────────────────────── */
function expenseFromPlan(p) {
  return {
    amount: p.amount,
    currency: p.currency || HOME_CURRENCY,
    category: typeOf(p.type).cat,
    country: p.country || "",
    paidBy: p.bookedBy,
    split: "both",
    date: p.startDate || todayISO(),
    note: p.title || typeOf(p.type).label,
  };
}

function addForm(user, onAdd) {
  const typeOpts = TYPES.map((t) => `<option value="${t.id}">${t.icon} ${t.label}</option>`).join("");
  const peopleOpts = ALLOWED_EMAILS
    .map((em) => `<option value="${esc(em)}"${em === user.email ? " selected" : ""}>${esc(nameFor(em))}</option>`)
    .join("") + `<option value="${esc(COMMON_ACCOUNT)}">🤝 ${esc(nameFor(COMMON_ACCOUNT))} (shared)</option>`;
  const platformList = PLATFORMS.map((p) => `<option value="${esc(p)}"></option>`).join("");

  const last = readLast();
  const defaultCur = last.currency || HOME_CURRENCY;
  const defaultCountry = last.country != null ? last.country : (COUNTRIES[0]?.code ?? "");
  const defaultPlatform = last.platform || "";

  const form = el(`
    <form class="panel exp-form plan-form">
      <h2>Add a booking</h2>
      <div class="exp-grid">
        <label class="exp-field type">
          <span>Type</span>
          <select name="type">${typeOpts}</select>
        </label>
        <label class="exp-field title">
          <span>What</span>
          <input name="title" type="text" maxlength="80" required placeholder="e.g. Train Hanoi → Hue" />
        </label>
        <label class="exp-field sdate">
          <span>Start date</span>
          <input name="startDate" type="date" value="${todayISO()}" required />
        </label>
        <label class="exp-field stime">
          <span>Start time</span>
          <input name="startTime" type="time" />
        </label>
        <label class="exp-field edate">
          <span>End date</span>
          <input name="endDate" type="date" />
        </label>
        <label class="exp-field etime">
          <span>End time</span>
          <input name="endTime" type="time" />
        </label>
        <label class="exp-field country">
          <span>Country</span>
          <select name="country">${countryOptionsHTML(defaultCountry)}</select>
        </label>
        <label class="exp-field platform">
          <span>Platform</span>
          <input name="platform" type="text" maxlength="40" list="plan-platforms"
                 placeholder="Booking, Flixbus…" value="${esc(defaultPlatform)}" />
          <datalist id="plan-platforms">${platformList}</datalist>
        </label>
        <label class="exp-field who">
          <span>Booked by</span>
          <select name="bookedBy">${peopleOpts}</select>
        </label>
        <label class="exp-field status">
          <span>Status</span>
          <select name="status">
            <option value="booked">✅ Booked</option>
            <option value="todo">📝 To do</option>
          </select>
        </label>
        <label class="exp-field amt">
          <span>Cost <small>(optional)</small></span>
          <input name="amount" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" />
        </label>
        <label class="exp-field cur">
          <span>Currency</span>
          <select name="currency">${currencyOptionsHTML(defaultCur)}</select>
        </label>
        <label class="exp-field ref">
          <span>Reference <small>(optional)</small></span>
          <input name="ref" type="text" maxlength="40" placeholder="Confirmation #" />
        </label>
        <label class="exp-field note">
          <span>Note <small>(optional)</small></span>
          <input name="note" type="text" maxlength="120" placeholder="Seat 14A, breakfast incl…" />
        </label>
      </div>
      <label class="plan-alsoexp">
        <input name="alsoExpense" type="checkbox" checked />
        <span>Also record the cost as an expense (linked)</span>
      </label>
      <button class="btn-add" type="submit">Add booking</button>
    </form>`);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const f = form.elements;
    const title = f.title.value.trim();
    if (!title) return;
    const startDate = f.startDate.value;
    if (!startDate) { alert("Pick a start date."); return; }

    const startTime = f.startTime.value || "";
    const endDate = f.endDate.value || "";
    const endTime = f.endTime.value || "";
    // End must not fall before start when both are set.
    if (endDate) {
      const s = `${startDate}T${startTime || "00:00"}`;
      const en = `${endDate}T${endTime || (endDate === startDate ? startTime || "00:00" : "23:59")}`;
      if (en < s) { alert("The end is before the start — check the dates."); return; }
    } else if (endTime && startTime && endTime < startTime) {
      alert("The end time is before the start time.");
      return;
    }

    const amount = parseFloat(f.amount.value);
    const hasCost = amount > 0;
    const currency = (f.currency.value || HOME_CURRENCY).toUpperCase().trim();
    if (hasCost && !isSupported(currency)) {
      alert(`Can't use "${currency}" — no ${HOME_CURRENCY} conversion is available. Pick another currency.`);
      return;
    }

    const plan = {
      type: f.type.value,
      title,
      startDate, startTime, endDate, endTime,
      country: f.country.value,
      platform: f.platform.value.trim(),
      bookedBy: f.bookedBy.value,
      status: f.status.value,
      ref: f.ref.value.trim(),
      note: f.note.value.trim(),
      amount: hasCost ? amount : null,
      currency: hasCost ? currency : null,
    };
    const alsoExpense = f.alsoExpense.checked && hasCost;

    const btn = form.querySelector(".btn-add");
    btn.disabled = true;
    try {
      await onAdd(plan, alsoExpense);
      writeLast({ currency, country: f.country.value, platform: plan.platform });
      form.reset();
      f.startDate.value = startDate; // keep the date — you often add several at once
      f.title.focus();
    } catch (err) {
      alert("Couldn't save: " + (err?.message || err));
    } finally {
      btn.disabled = false;
    }
  });
  return form;
}

/* ── Dashboard ─────────────────────────────────────────────────────────────── */
function dashboard(user, items, actions) {
  const head = el(`
    <div class="exp-hero exp-hero-live">
      <div>
        <h1>🗓️ Planner</h1>
        <p class="exp-sub">${esc(nameFor(user.email))} · shared schedule</p>
      </div>
      <button class="btn-ghost small exp-out" type="button">Sign out</button>
    </div>`);
  head.querySelector(".exp-out").addEventListener("click", actions.signOut);

  const form = addForm(user, actions.add);
  const summary = el(`<div>${summaryCard(items)}</div>`);
  const todo = el(`<div>${todoList(items)}</div>`);
  const booked = bookedCalendar(items, actions); // a live element — self-wires

  // Wire the To-do list's row buttons (delete / mark-booked). The calendar wires
  // its own agenda buttons internally.
  todo.querySelectorAll(".plan-del").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = items.find((p) => p.id === btn.closest(".plan-row").dataset.id);
      if (item) actions.remove(item);
    });
  });
  todo.querySelectorAll(".plan-book").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = items.find((p) => p.id === btn.closest(".plan-row").dataset.id);
      if (item) actions.markBooked(item);
    });
  });
  todo.querySelectorAll(".plan-addexp").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".plan-row");
      const next = row.nextElementSibling;
      if (next && next.classList.contains("plan-linkform")) { next.remove(); return; }
      const item = items.find((p) => p.id === row.dataset.id);
      if (!item) return;
      const form = costLinkForm(item, (cost) => actions.linkExpense(item, cost), () => form.remove());
      row.after(form);
    });
  });

  screen(head, form, summary, todo, booked);
}

/* ── Entry point ───────────────────────────────────────────────────────────── */
export async function renderPlanner() {
  document.title = "Planner · Trip Companion";
  calState = null; // re-centre the calendar on the next booking on a fresh open

  if (!isConfigured()) return setupNeededScreen();

  screen(el(`<div class="panel exp-empty">Connecting…</div>`));

  let f;
  try {
    f = await loadFirebase();
  } catch (err) {
    return screen(el(`<div class="panel exp-notice">
      <p class="exp-warn">Couldn't reach Firebase. The planner needs an internet
      connection.</p></div>`));
  }

  const provider = new f.GoogleAuthProvider();
  const doSignIn = async () => {
    try {
      await f.signInWithPopup(f.auth, provider);
    } catch (err) {
      if (String(err?.code).includes("popup")) await f.signInWithRedirect(f.auth, provider);
      else alert("Sign-in failed: " + (err?.message || err));
    }
  };
  const doSignOut = () => f.signOut(f.auth);
  f.getRedirectResult(f.auth).catch(() => {});

  let unsub = null;

  f.onAuthStateChanged(f.auth, (user) => {
    if (unsub) { unsub(); unsub = null; }
    if (!location.hash.startsWith("#/planner")) return;
    if (!user) return signInScreen(doSignIn);
    if (!ALLOWED_EMAILS.includes(user.email)) return notAllowedScreen(user.email, doSignOut);

    const plansCol = f.collection(f.db, "plans");
    const expCol = f.collection(f.db, "expenses");

    const addExpDoc = (data) => f.addDoc(expCol, { ...data, uid: user.uid, createdAt: f.serverTimestamp() });
    const addPlanDoc = (data) => f.addDoc(plansCol, { ...data, uid: user.uid, createdAt: f.serverTimestamp() });

    const actions = {
      // Add a booking, optionally cross-linked to a fresh expense.
      add: async (plan, alsoExpense) => {
        if (!alsoExpense) return addPlanDoc(plan);
        const expRef = await addExpDoc({ ...expenseFromPlan(plan), linkedPlanId: null });
        const planRef = await addPlanDoc({ ...plan, linkedExpenseId: expRef.id });
        return f.updateDoc(f.doc(f.db, "expenses", expRef.id), { linkedPlanId: planRef.id });
      },
      // Flip a to-do to booked; offer to log its cost as a linked expense.
      markBooked: async (item) => {
        const patch = { status: "booked" };
        if (item.amount > 0 && !item.linkedExpenseId &&
            confirm(`Also log the ${fmt(item.amount, item.currency || HOME_CURRENCY)} as an expense?`)) {
          const expRef = await addExpDoc({ ...expenseFromPlan(item), linkedPlanId: item.id });
          patch.linkedExpenseId = expRef.id;
        }
        return f.updateDoc(f.doc(f.db, "plans", item.id), patch).catch((err) => alert("Couldn't update: " + (err?.message || err)));
      },
      // Delete a booking; if it's linked, offer to remove the expense too.
      remove: async (item) => {
        if (item.linkedExpenseId) {
          if (!confirm("Delete this booking? Its linked expense will also be removed.")) return;
          await f.deleteDoc(f.doc(f.db, "expenses", item.linkedExpenseId)).catch(() => {});
        } else if (!confirm("Delete this booking?")) return;
        return f.deleteDoc(f.doc(f.db, "plans", item.id)).catch((err) => alert("Couldn't delete: " + (err?.message || err)));
      },
      // Attach an expense to an existing booking (amount/currency from the form),
      // keeping the booking's own cost snapshot in step and cross-linking both.
      linkExpense: async (plan, cost) => {
        const expRef = await addExpDoc({
          ...expenseFromPlan(plan), amount: cost.amount, currency: cost.currency, linkedPlanId: plan.id,
        });
        return f.updateDoc(f.doc(f.db, "plans", plan.id),
          { linkedExpenseId: expRef.id, amount: cost.amount, currency: cost.currency });
      },
      signOut: doSignOut,
    };

    let lastItems = null;
    const tripFallback = COUNTRIES.map((c) => ({ code: c.code, name: c.name }));
    const refreshFx = () => Promise.all([ensureCurrencies(), ensureCountries(tripFallback)])
      .then(([curs, countries]) => {
        CURRENCIES = curs;
        COUNTRIES_ALL = countries;
        if (lastItems) dashboard(user, lastItems, actions);
      });
    refreshFx();

    const q = f.query(plansCol, f.orderBy("startDate", "asc"));
    unsub = f.onSnapshot(
      q,
      (snap) => {
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        lastItems = items;
        dashboard(user, items, actions);
      },
      (err) => screen(el(`<div class="panel exp-notice">
        <p class="exp-warn">Couldn't load the planner: ${esc(err.message)}</p>
        <p class="exp-fine">If this says "permission denied", make sure the
        <code>plans</code> rule is published in <code>firestore.rules</code>.</p></div>`))
    );
  });
}
