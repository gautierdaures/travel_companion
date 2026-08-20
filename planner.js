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
  { id: "transport",  label: "Transport",  icon: "🚆", cat: "transport", ranged: true  },
  { id: "lodging",    label: "Lodging",    icon: "🏨", cat: "lodging",   ranged: true  },
  { id: "restaurant", label: "Restaurant", icon: "🍽️", cat: "food",      ranged: false },
  { id: "activity",   label: "Activity",   icon: "🎟️", cat: "activity",  ranged: false },
  { id: "other",      label: "Other",      icon: "📌", cat: "other",     ranged: false },
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

function bookedList(items) {
  const booked = items.filter((p) => p.status === "booked").sort((a, b) => whenKey(a).localeCompare(whenKey(b)));
  if (!booked.length) return `<div class="panel exp-empty">Nothing booked yet — add your first booking above.</div>`;

  let html = "", curDay = null;
  for (const p of booked) {
    if (p.startDate !== curDay) {
      curDay = p.startDate;
      html += `<div class="exp-day">${esc(dayLabel(p.startDate) || "Undated")}</div>`;
    }
    html += `
      <div class="plan-row booked" data-id="${esc(p.id)}">
        ${bookingBody(p)}
        <button class="plan-del" title="Delete" aria-label="Delete">✕</button>
      </div>`;
  }
  return `
    <div class="panel plan-list">
      <div class="exp-list-head"><h2>Booked</h2></div>
      <div class="plan-rows">${html}</div>
    </div>`;
}

function todoList(items) {
  const todo = items.filter((p) => p.status !== "booked").sort((a, b) => whenKey(a).localeCompare(whenKey(b)));
  if (!todo.length) return "";
  const rows = todo.map((p) => `
    <div class="plan-row todo" data-id="${esc(p.id)}">
      ${bookingBody(p)}
      <span class="plan-actions">
        <button class="plan-book" title="Mark booked">✓ Booked</button>
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
  const booked = el(`<div>${bookedList(items)}</div>`);

  // Wire row buttons (delete / mark-booked) for both lists.
  const wire = (scope) => {
    scope.querySelectorAll(".plan-del").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".plan-row").dataset.id;
        const item = items.find((p) => p.id === id);
        if (item) actions.remove(item);
      });
    });
    scope.querySelectorAll(".plan-book").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".plan-row").dataset.id;
        const item = items.find((p) => p.id === id);
        if (item) actions.markBooked(item);
      });
    });
  };
  wire(todo);
  wire(booked);

  screen(head, form, summary, todo, booked);
}

/* ── Entry point ───────────────────────────────────────────────────────────── */
export async function renderPlanner() {
  document.title = "Planner · Trip Companion";

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
