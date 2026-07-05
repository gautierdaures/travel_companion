// ── Expenses dashboard ───────────────────────────────────────────────────────
// A private, shared expense tracker for two people, backed by Firebase
// (Google sign-in + Firestore). The country ID-cards stay fully offline; this
// screen needs a connection because the data is shared and lives in the cloud.
//
// Security model: anyone can load this page (it's on GitHub Pages), but only the
// Google accounts in ALLOWED_EMAILS can read or write, enforced server-side by
// firestore.rules. The Firebase config is public by design.

import { firebaseConfig, ALLOWED_EMAILS, isConfigured, nameFor } from "./firebase-config.js";

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

function summaryCards(items) {
  const groups = totalsByCurrency(items);
  const curs = Object.keys(groups).sort();
  if (!curs.length) return `<div class="panel exp-empty">No expenses yet — add the first one below.</div>`;

  return curs.map((cur) => {
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
}

function expenseRows(items, onDelete) {
  if (!items.length) return "";
  const rows = items.map((e) => {
    const c = catOf(e.category);
    return `
      <div class="exp-row" data-id="${esc(e.id)}">
        <span class="exp-cat" title="${esc(c.label)}">${c.icon}</span>
        <span class="exp-row-main">
          <span class="exp-row-top">
            <span class="exp-note">${esc(e.note || c.label)}</span>
            <span class="exp-amt">${esc(fmt(e.amount, e.currency))}</span>
          </span>
          <span class="exp-row-sub">${esc(e.date || "")} · ${esc(nameFor(e.paidBy))}</span>
        </span>
        <button class="exp-del" title="Delete" aria-label="Delete">✕</button>
      </div>`;
  }).join("");
  const list = el(`<div class="panel exp-list"><h2>All expenses</h2>${rows}</div>`);
  list.querySelectorAll(".exp-del").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".exp-row").dataset.id;
      if (confirm("Delete this expense?")) onDelete(id);
    });
  });
  return list;
}

function addForm(user, onAdd) {
  const peopleOpts = ALLOWED_EMAILS
    .map((em) => `<option value="${esc(em)}"${em === user.email ? " selected" : ""}>${esc(nameFor(em))}</option>`)
    .join("");
  const catOpts = CATEGORIES.map((c) => `<option value="${c.id}">${c.icon} ${c.label}</option>`).join("");

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
          <input name="currency" type="text" maxlength="3" value="EUR" required
                 autocapitalize="characters" autocomplete="off" />
        </label>
        <label class="exp-field cat">
          <span>Category</span>
          <select name="category">${catOpts}</select>
        </label>
        <label class="exp-field who">
          <span>Paid by</span>
          <select name="paidBy">${peopleOpts}</select>
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
    const btn = form.querySelector(".btn-add");
    btn.disabled = true;
    try {
      await onAdd({
        amount,
        currency: (f.currency.value || "EUR").toUpperCase().trim(),
        category: f.category.value,
        paidBy: f.paidBy.value,
        date: f.date.value || todayISO(),
        note: f.note.value.trim(),
      });
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

  const summary = el(`<div>${summaryCards(items)}</div>`);
  const rows = expenseRows(items, actions.remove);
  const form = addForm(user, actions.add);

  const nodes = [head, form, summary];
  if (rows) nodes.push(rows);
  screen(...nodes);
}

/* ── Entry point ──────────────────────────────────────────────────────────── */
export async function renderExpenses() {
  document.title = "Expenses · Trip Companion";

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

    unsub = f.onSnapshot(
      q,
      (snap) => {
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        dashboard(user, items, actions);
      },
      (err) => screen(el(`<div class="panel exp-notice">
        <p class="exp-warn">Couldn't load expenses: ${esc(err.message)}</p>
        <p class="exp-fine">If this says "permission denied", double-check that
        your email is in <code>firestore.rules</code>.</p></div>`))
    );
  });
}
