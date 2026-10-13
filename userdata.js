// ── Your own additions to each country ───────────────────────────────────────
// Notes (what people recommended, contacts met on the way, lodging, restaurants…)
// and places you add by hand. They're private and shared between the two of
// you: stored in the same Firebase project as Expenses / Planner, in the `notes`
// and `places` collections, gated to the same two accounts (firestore.rules).
//
// Local-first, because they matter most exactly where there's no signal:
//   • every change goes into a queue in localStorage first, so it shows at once
//     and survives the app being closed;
//   • the queue is replayed into Firestore once online and signed in. Each item
//     carries its own id, so a replay is idempotent (setDoc, never addDoc);
//   • the last copy received from the server is mirrored in localStorage, so a
//     country page shows your notes offline without loading Firebase at all.
//
// Firebase is only loaded once you've signed in here before, or tap
// "Se connecter" — a public visitor never pulls the SDK.
//
// No DOM here: mine.js renders it.

import { firebaseConfig, ALLOWED_EMAILS, isConfigured } from "./firebase-config.js";

const SDK = "https://www.gstatic.com/firebasejs/10.12.2";
export const COLS = ["notes", "places"];

const LS_MIRROR = "trip-mine-mirror"; // { notes: { id: doc }, places: { id: doc } } — last server copy
const LS_QUEUE = "trip-mine-queue";   // [ { qid, op: "set" | "delete", col, id, data? } ] — not yet acknowledged
const LS_EMAIL = "trip-mine-email";   // last signed-in account (stamped on items written offline)
const LS_AUTO = "trip-mine-auto";     // true once you've signed in here → reconnect on its own

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };

let mirror = read(LS_MIRROR, {});
let queue = read(LS_QUEUE, []);
const listeners = new Set();

// Sync state, for the status line:
//   local      — never signed in here (or Firebase not set up): this device only
//   connecting — loading Firebase / restoring the session
//   offline    — Firebase couldn't load (no network); retries when back online
//   signed-out — Firebase loaded, nobody signed in
//   denied     — signed in with an account that isn't allowed
//   error      — Firestore refused (e.g. rules not published); `message` says why
//   live       — signed in and listening
let state = "local";
let message = "";
let email = read(LS_EMAIL, null);

const emit = () => listeners.forEach((fn) => { try { fn(); } catch { /* keep the others going */ } });
function setState(s, msg = "") { state = s; message = msg; emit(); }

export function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }

export function syncInfo() {
  return { state, message, email, pending: queue.length, configured: isConfigured(), online: navigator.onLine };
}

/* ── Reading ───────────────────────────────────────────────────────────────── */
// A collection's items for one country: the server mirror with the queued local
// changes laid on top, oldest first. `pending` marks the ones not yet synced.
export function list(col, code) {
  const byId = new Map(Object.entries(mirror[col] || {}));
  const pending = new Set();
  for (const q of queue) {
    if (q.col !== col) continue;
    if (q.op === "delete") { byId.delete(q.id); pending.delete(q.id); }
    else { byId.set(q.id, q.data); pending.add(q.id); }
  }
  const out = [];
  for (const [id, d] of byId) {
    if (d && d.country === code) out.push({ ...d, id, pending: pending.has(id) });
  }
  return out.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
}

/* ── Writing (always local first) ──────────────────────────────────────────── */
// A Firestore-style random id, so the item keeps the same id from the queue to
// the server and a replay can never duplicate it.
function newId() {
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const bytes = crypto.getRandomValues(new Uint8Array(20));
  return Array.from(bytes, (b) => abc[b % abc.length]).join("");
}

let inflight = null; // qid of the op being written right now (never compacted away)

function enqueue(op) {
  // Only the latest change to an item matters: drop older queued ones.
  queue = queue.filter((q) => q.qid === inflight || !(q.col === op.col && q.id === op.id));
  queue.push({ qid: newId(), ...op });
  write(LS_QUEUE, queue);
  emit();
  flush();
}

// Create (id = null) or replace an item. `data` is the item's own fields; the
// bookkeeping (id, timestamps, who added it) is handled here.
export function save(col, id, data) {
  const prev = id ? list(col, data.country).find((x) => x.id === id) : null;
  const clean = {};
  for (const [k, v] of Object.entries(data)) {
    if (v !== undefined && k !== "id" && k !== "pending") clean[k] = v; // Firestore rejects undefined
  }
  const now = Date.now();
  const docId = id || newId();
  enqueue({
    op: "set", col, id: docId,
    data: { ...clean, createdAt: prev?.createdAt || now, updatedAt: now, addedBy: prev?.addedBy || email || null },
  });
  return docId;
}

export function remove(col, id) {
  enqueue({ op: "delete", col, id });
}

/* ── Firebase (lazy) ───────────────────────────────────────────────────────── */
let fb = null;
let user = null;
let connecting = null;
let unsubs = [];

async function loadFirebase() {
  const [{ initializeApp }, auth, store] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-auth.js`),
    import(`${SDK}/firebase-firestore.js`),
  ]);
  // Same config as expenses.js / planner.js: initializeApp hands back the
  // existing app when one is already running.
  const app = initializeApp(firebaseConfig);
  return {
    auth: auth.getAuth(app),
    db: store.getFirestore(app),
    GoogleAuthProvider: auth.GoogleAuthProvider,
    signInWithPopup: auth.signInWithPopup,
    signInWithRedirect: auth.signInWithRedirect,
    getRedirectResult: auth.getRedirectResult,
    onAuthStateChanged: auth.onAuthStateChanged,
    signOut: auth.signOut,
    collection: store.collection,
    doc: store.doc,
    setDoc: store.setDoc,
    deleteDoc: store.deleteDoc,
    onSnapshot: store.onSnapshot,
  };
}

// Load Firebase and restore the session. Resolves once the first auth state is
// known (so a sign-in can tell whether one is still needed).
function connect() {
  if (connecting) return connecting;
  setState("connecting");
  connecting = loadFirebase()
    .then((f) => {
      fb = f;
      f.getRedirectResult(f.auth).catch(() => {});
      return new Promise((resolve) => {
        f.onAuthStateChanged(f.auth, (u) => { onUser(u); resolve(); });
      });
    })
    .catch(() => {
      connecting = null; // try again later
      setState("offline");
    });
  return connecting;
}

function onUser(u) {
  unsubs.forEach((stop) => stop());
  unsubs = [];
  user = u;
  if (!u) return setState("signed-out");
  if (!ALLOWED_EMAILS.includes(u.email)) return setState("denied", u.email);

  email = u.email;
  write(LS_EMAIL, email);
  write(LS_AUTO, true);
  setState("live");

  for (const col of COLS) {
    unsubs.push(fb.onSnapshot(
      fb.collection(fb.db, col),
      (snap) => {
        // Offline, Firestore answers from its (empty, in-memory) cache — never
        // let that wipe the copy we already have.
        if (snap.metadata.fromCache) return;
        const next = {};
        snap.forEach((d) => { next[d.id] = d.data(); });
        mirror = { ...mirror, [col]: next };
        write(LS_MIRROR, mirror);
        emit();
      },
      fail
    ));
  }
  flush();
}

function fail(err) {
  const code = String(err?.code || "");
  setState("error", code.includes("permission")
    ? "Firestore refuse l’accès — publiez les règles « notes » et « places » de firestore.rules dans la console Firebase."
    : (err?.message || String(err)));
}

// Replay the queue into Firestore, oldest first. An op leaves the queue only
// once the server has acknowledged it; offline, the write just waits.
let flushing = false;
async function flush() {
  if (flushing || state !== "live" || !fb || !user) return;
  flushing = true;
  try {
    while (queue.length && state === "live") {
      const op = queue[0];
      inflight = op.qid;
      const ref = fb.doc(fb.db, op.col, op.id);
      if (op.op === "delete") {
        await fb.deleteDoc(ref);
        const { [op.id]: _gone, ...rest } = mirror[op.col] || {};
        mirror = { ...mirror, [op.col]: rest };
      } else {
        const data = { ...op.data, addedBy: op.data.addedBy || user.email, uid: user.uid };
        await fb.setDoc(ref, data);
        mirror = { ...mirror, [op.col]: { ...(mirror[op.col] || {}), [op.id]: data } };
      }
      write(LS_MIRROR, mirror);
      queue = queue.filter((q) => q.qid !== op.qid);
      write(LS_QUEUE, queue);
      emit();
    }
  } catch (err) {
    fail(err);
  } finally {
    inflight = null;
    flushing = false;
  }
}

/* ── Public controls ───────────────────────────────────────────────────────── */
// Called whenever a country page opens: reconnects in the background, but only
// if you've signed in on this device before.
export function startSync() {
  if (!isConfigured() || !read(LS_AUTO, false)) return;
  if (state === "live" || state === "connecting") return;
  connect();
}

// "Se connecter" — sign in with Google (popup, or a full-page redirect where
// popups are blocked, e.g. some iPhone setups).
export async function signIn() {
  if (!isConfigured()) return;
  write(LS_AUTO, true); // so the page reconnects by itself after a redirect
  await connect();
  if (!fb || fb.auth.currentUser) return;
  const provider = new fb.GoogleAuthProvider();
  try {
    await fb.signInWithPopup(fb.auth, provider);
  } catch (err) {
    if (String(err?.code).includes("popup")) await fb.signInWithRedirect(fb.auth, provider);
    else alert("Échec de la connexion : " + (err?.message || err));
  }
}

export function signOut() {
  if (fb) fb.signOut(fb.auth);
}

// Back online after a failed load → try again. Browsers remember a failed
// module import for the life of the page, so when this retry fails too the
// status line offers a reload instead (mine.js). Either way, repaint so the
// status follows the network.
window.addEventListener("online", () => {
  if (state === "offline" && read(LS_AUTO, false)) connect();
  else emit();
});
window.addEventListener("offline", emit);
