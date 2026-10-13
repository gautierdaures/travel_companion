// ── "Mes notes" and "Mes lieux" on a country page ────────────────────────────
// Renders what you add yourself to a country — notes (recommendations, contacts,
// lodging, restaurants…) and hand-added places — and the forms to add or edit
// them. Storage and sync live in userdata.js; this file is only the DOM.
//
// The lists repaint whenever the data changes (your edit, or the other person's
// arriving from Firestore). The add forms sit outside those lists so a repaint
// never wipes what you're typing, and a list holding an open edit form waits
// until it closes.

import * as store from "./userdata.js";
import { CATEGORIES, catOf } from "./categories.js";
import { nameFor } from "./firebase-config.js";

// Note kinds, in the order they're grouped on the page.
const KINDS = [
  { id: "tip",     label: "Recommandations", one: "Recommandation", icon: "💡", hint: "ex. Banya au bord du lac chez Nikolaï" },
  { id: "contact", label: "Contacts",        one: "Contact",        icon: "👤", hint: "ex. Sacha — guide à Khoujir" },
  { id: "lodging", label: "Hébergement",     one: "Hébergement",    icon: "🛏️", hint: "ex. Guesthouse d’Olga, chambre avec vue" },
  { id: "food",    label: "Restos & cafés",  one: "Resto / café",   icon: "🍽️", hint: "ex. Cantine bouriate près du marché" },
  { id: "other",   label: "Divers",          one: "Autre",          icon: "📝", hint: "ex. Bus de 7 h pour Sakhiourta" },
];
const kindOf = (id) => KINDS.find((k) => k.id === id) || KINDS[KINDS.length - 1];

/* ── tiny helpers (idiom of app.js) ─────────────────────────────────────────── */
// Text: also keeps French punctuation and numbers together (see app.js).
const esc = (s = "") =>
  String(s)
    .replace(/\s+([?!:;»])/g, "\u00a0$1")
    .replace(/«\s+/g, "«\u00a0")
    .replace(/(\d) (?=\d{3}(?!\d)|[₽€$%])/g, "$1\u00a0")
    .replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
// Attribute values (URLs, form values): escaped, never re-spaced.
const attr = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

// Free text → HTML with its links, e-mails and (for contacts) phone numbers
// made tappable. Everything else is escaped.
function linkify(raw = "", { phones = false } = {}) {
  const re = phones
    ? /(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"»])|([\w.+-]+@[\w-]+\.[\w.-]*\w)|(\+?\d[\d\s().-]{5,}\d)/g
    : /(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"»])|([\w.+-]+@[\w-]+\.[\w.-]*\w)/g;
  let out = "", last = 0;
  for (const m of String(raw).matchAll(re)) {
    const [txt, url, mail, tel] = m;
    let href = "";
    if (url) href = url;
    else if (mail) href = `mailto:${mail}`;
    else if (tel && tel.replace(/\D/g, "").length >= 7) href = `tel:${tel.replace(/[^\d+]/g, "")}`;
    if (!href) continue;
    out += esc(raw.slice(last, m.index));
    out += `<a class="mine-link" href="${attr(href)}"${url ? ' target="_blank" rel="noopener"' : ""}>${esc(txt)}</a>`;
    last = m.index + txt.length;
  }
  return out + esc(raw.slice(last));
}

// "53.2036, 107.3396", "53.2 107.3", or a map link holding "@53.2,107.3" /
// "?q=53.2,107.3" → [lat, lng]; null when there's nothing usable.
function parseCoords(raw = "") {
  const m = String(raw).match(/(-?\d{1,2}(?:\.\d+)?)\s*[,; ]\s*(-?\d{1,3}(?:\.\d+)?)/);
  if (!m) return null;
  const lat = Number(m[1]), lng = Number(m[2]);
  if (!(Math.abs(lat) <= 90 && Math.abs(lng) <= 180)) return null;
  return [lat, lng];
}

// A link as typed → an http(s) URL ("www.x.org" gets https://), or "" for
// anything else (no javascript: or other schemes in an href).
function webLink(raw = "") {
  const v = String(raw).trim();
  if (!v) return "";
  const url = /^[a-z][a-z\d+.-]*:/i.test(v) ? v : `https://${v}`;
  return /^https?:\/\/[^\s]+$/i.test(url) ? url : "";
}

const validCoords = (c) =>
  Array.isArray(c) && c.length === 2 && c.every((n) => typeof n === "number" && Number.isFinite(n));

/* ── Sync status line ──────────────────────────────────────────────────────── */
function statusLine() {
  const s = store.syncInfo();
  const waiting = s.pending ? ` · ${s.pending} en attente d’envoi` : "";
  const signInBtn = (label) =>
    `<button type="button" class="btn-ghost small mine-signin">${esc(label)}</button>`;
  switch (s.state) {
    case "live":
      // Firebase can load from the browser cache with no signal: say so.
      return s.online
        ? `<span class="mine-ok">✓ Synchronisé, partagé entre vous deux${esc(waiting)}</span>`
        : `<span>📴 Hors ligne — vos ajouts partiront au retour du réseau${esc(waiting)}.</span>`;
    case "connecting":
      return `<span>Synchronisation…</span>`;
    case "offline":
      // Firebase didn't load (no signal when the page opened). Browsers won't
      // retry a failed import without a reload — the queue is in localStorage,
      // so reloading loses nothing.
      return `<span>📴 Hors ligne — vos ajouts restent sur ce téléphone et partiront à la prochaine connexion${esc(waiting)}.</span>
        ${s.online ? `<button type="button" class="btn-ghost small mine-reload">Réessayer</button>` : ""}`;
    case "signed-out":
      return `<span>Connectez-vous pour partager ces notes entre vous deux.</span>${signInBtn("Se connecter avec Google")}`;
    case "denied":
      return `<span class="mine-warn">Le compte ${esc(s.message)} n’est pas autorisé.</span>
        <button type="button" class="btn-ghost small mine-signout">Changer de compte</button>`;
    case "error":
      return `<span class="mine-warn">Synchronisation impossible : ${esc(s.message)}</span>`;
    default: // local
      return s.configured
        ? `<span>📱 Enregistré sur ce téléphone uniquement.</span>${signInBtn("Se connecter pour synchroniser")}`
        : `<span>📱 Enregistré sur ce téléphone uniquement.</span>`;
  }
}

function paintStatus(box) {
  box.innerHTML = statusLine();
  box.querySelector(".mine-signin")?.addEventListener("click", () => store.signIn());
  box.querySelector(".mine-signout")?.addEventListener("click", () => store.signOut());
  box.querySelector(".mine-reload")?.addEventListener("click", () => location.reload());
}

// Show the "⏳ not synced yet" mark only once syncing is a thing on this device.
const showPending = (item) => item.pending && store.syncInfo().state !== "local";

function byline(item) {
  const bits = [];
  if (item.addedBy) bits.push(`ajouté par ${esc(nameFor(item.addedBy))}`);
  if (showPending(item)) bits.push(`<span class="mine-pending">⏳ à synchroniser</span>`);
  return bits.length ? `<div class="mine-by">${bits.join(" · ")}</div>` : "";
}

/* ── Notes ─────────────────────────────────────────────────────────────────── */
function noteForm(code, note, onDone) {
  const n = note || { kind: "tip" };
  const form = el(`
    <form class="mine-form${note ? " mine-editform" : ""}">
      <div class="exp-grid">
        <label class="exp-field note">
          <span>Type</span>
          <select name="kind">${KINDS.map((k) =>
            `<option value="${k.id}"${k.id === n.kind ? " selected" : ""}>${k.icon} ${esc(k.one)}</option>`).join("")}</select>
        </label>
        <label class="exp-field note">
          <span>Titre</span>
          <input name="title" type="text" maxlength="100" required placeholder="${attr(kindOf(n.kind).hint)}" value="${attr(n.title || "")}" />
        </label>
        <label class="exp-field note">
          <span>Où <small>(facultatif)</small></span>
          <input name="where" type="text" maxlength="80" placeholder="Ville, quartier, adresse…" value="${attr(n.where || "")}" />
        </label>
        <label class="exp-field note">
          <span>Contact <small>(tél., e-mail, lien — facultatif)</small></span>
          <input name="contact" type="text" maxlength="160" placeholder="+7 914 123-45-67, Telegram @sacha…" value="${attr(n.contact || "")}" />
        </label>
        <label class="exp-field note">
          <span>Recommandé par <small>(facultatif)</small></span>
          <input name="from" type="text" maxlength="80" placeholder="Anna, rencontrée dans le train" value="${attr(n.from || "")}" />
        </label>
        <label class="exp-field note">
          <span>Détails <small>(facultatif)</small></span>
          <textarea name="text" rows="3" maxlength="2000" placeholder="Prix, horaires, comment y aller, ce qu’il faut demander…">${attr(n.text || "")}</textarea>
        </label>
      </div>
      <div class="mine-form-actions">
        <button type="button" class="btn-ghost small mine-cancel">Annuler</button>
        <button type="submit" class="btn-add">${note ? "Enregistrer" : "Ajouter la note"}</button>
      </div>
    </form>`);

  // The title's example follows the chosen type.
  form.elements.kind.addEventListener("change", (e) => {
    form.elements.title.placeholder = kindOf(e.target.value).hint;
  });
  form.querySelector(".mine-cancel").addEventListener("click", () => onDone(false));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    const title = f.title.value.trim();
    if (!title) return;
    store.save("notes", note ? note.id : null, {
      country: code,
      kind: f.kind.value,
      title,
      where: f.where.value.trim(),
      contact: f.contact.value.trim(),
      from: f.from.value.trim(),
      text: f.text.value.trim(),
      done: !!n.done,
    });
    onDone(true);
  });
  return form;
}

function noteCard(n) {
  const k = kindOf(n.kind);
  const meta = [];
  if (n.where) meta.push(`📍 ${esc(n.where)}`);
  if (n.from) meta.push(`🗣️ recommandé par ${esc(n.from)}`);
  return `
    <div class="mine-note${n.done ? " done" : ""}" data-id="${attr(n.id)}">
      <div class="mine-note-head">
        <span class="mine-note-t">${esc(n.title || k.one)}</span>
        <span class="mine-actions">
          ${n.kind !== "contact"
            ? `<button type="button" class="mine-btn mine-done" title="${n.done ? "Marquer comme à faire" : "Marquer comme fait"}"
                 aria-pressed="${n.done ? "true" : "false"}">${n.done ? "✅" : "☐"}</button>`
            : ""}
          <button type="button" class="mine-btn mine-edit" title="Modifier">✎</button>
          <button type="button" class="mine-btn mine-del" title="Supprimer">🗑</button>
        </span>
      </div>
      ${meta.length ? `<div class="mine-meta">${meta.join(" · ")}</div>` : ""}
      ${n.contact ? `<div class="mine-contact">☎️ ${linkify(n.contact, { phones: true })}</div>` : ""}
      ${n.text ? `<div class="mine-text">${linkify(n.text)}</div>` : ""}
      ${byline(n)}
    </div>`;
}

export function notesBlock() {
  return `
    <section class="block" id="sec-notes">
      <h2>Mes notes · conseils et contacts</h2>
      <div class="panel mine-panel">
        <div class="mine-status"></div>
        <div class="mine-list mine-notes"></div>
        <button type="button" class="mine-add">＋ Ajouter une note</button>
        <div class="mine-formslot"></div>
      </div>
    </section>`;
}

function mountNotes(section, code) {
  const status = section.querySelector(".mine-status");
  const listBox = section.querySelector(".mine-notes");
  const addBtn = section.querySelector(".mine-add");
  const slot = section.querySelector(".mine-formslot");
  let deferred = false;

  function paint() {
    paintStatus(status);
    if (listBox.querySelector("form")) { deferred = true; return; } // an edit is open
    deferred = false;
    const notes = store.list("notes", code);
    if (!notes.length) {
      listBox.innerHTML = `<p class="mine-empty">Rien encore. Notez ici ce qu’on vous recommande, les contacts
        rencontrés en route, les logements et les restos à retenir — même sans réseau.</p>`;
      return;
    }
    listBox.innerHTML = KINDS.map((k) => {
      const group = notes.filter((n) => kindOf(n.kind).id === k.id);
      if (!group.length) return "";
      return `<div class="mine-group">
        <h3 class="mine-group-h">${k.icon} ${esc(k.label)} <span>${group.length}</span></h3>
        ${group.map(noteCard).join("")}
      </div>`;
    }).join("");
  }

  addBtn.addEventListener("click", () => {
    addBtn.hidden = true;
    const form = noteForm(code, null, () => { form.remove(); addBtn.hidden = false; });
    slot.append(form);
    form.elements.title.focus();
  });

  listBox.addEventListener("click", (e) => {
    const card = e.target.closest(".mine-note");
    if (!card) return;
    const note = store.list("notes", code).find((n) => n.id === card.dataset.id);
    if (!note) return;
    if (e.target.closest(".mine-done")) {
      store.save("notes", note.id, { ...note, done: !note.done });
    } else if (e.target.closest(".mine-del")) {
      if (confirm(`Supprimer « ${note.title} » ?`)) store.remove("notes", note.id);
    } else if (e.target.closest(".mine-edit")) {
      const form = noteForm(code, note, () => { form.remove(); card.hidden = false; if (deferred) paint(); });
      card.hidden = true;
      card.after(form);
    }
  });

  paint();
  return paint;
}

/* ── Places ────────────────────────────────────────────────────────────────── */
// Every category a place can have, offbeat included.
const placeCatOptions = (selected) =>
  Object.entries(CATEGORIES)
    .map(([key, c]) => `<option value="${key}"${key === selected ? " selected" : ""}>${esc(c.label)}</option>`)
    .join("");

function placeForm(code, place, onDone) {
  const p = place || { category: "nature" };
  const coordsText = validCoords(p.coords) ? `${p.coords[0]}, ${p.coords[1]}` : "";
  const form = el(`
    <form class="mine-form${place ? " mine-editform" : ""}">
      <div class="exp-grid">
        <label class="exp-field note">
          <span>Nom du lieu</span>
          <input name="name" type="text" maxlength="100" required placeholder="ex. Cap Khoboï" value="${attr(p.name || "")}" />
        </label>
        <label class="exp-field">
          <span>Catégorie</span>
          <select name="category">${placeCatOptions(p.category)}</select>
        </label>
        <label class="exp-field">
          <span>Région / ville <small>(facultatif)</small></span>
          <input name="region" type="text" maxlength="80" placeholder="Île d’Olkhon" value="${attr(p.region || "")}" />
        </label>
        <label class="exp-field note">
          <span>En une ligne <small>(facultatif)</small></span>
          <input name="description" type="text" maxlength="200" placeholder="Pourquoi y aller" value="${attr(p.description || "")}" />
        </label>
        <label class="exp-field note">
          <span>Détails <small>(facultatif)</small></span>
          <textarea name="long" rows="3" maxlength="3000" placeholder="Comment y aller, prix, où dormir, conseils…">${attr(p.long || "")}</textarea>
        </label>
        <label class="exp-field note">
          <span>Lien <small>(site, Google Maps… — facultatif)</small></span>
          <input name="link" type="text" inputmode="url" autocapitalize="off" maxlength="400" placeholder="https://…" value="${attr(p.link || "")}" />
        </label>
        <label class="exp-field note">
          <span>Coordonnées <small>(pour la carte — facultatif)</small></span>
          <span class="mine-coords">
            <input name="coords" type="text" inputmode="decimal" maxlength="200" placeholder="53.20, 107.34" value="${attr(coordsText)}" />
            <button type="button" class="btn-ghost small mine-here">📍 Ma position</button>
          </span>
        </label>
      </div>
      <p class="exp-fine">Coordonnées : appui long sur le lieu dans Google Maps ou Organic Maps, puis copiez les deux nombres.</p>
      <div class="mine-form-actions">
        <button type="button" class="btn-ghost small mine-cancel">Annuler</button>
        <button type="submit" class="btn-add">${place ? "Enregistrer" : "Ajouter le lieu"}</button>
      </div>
    </form>`);

  form.querySelector(".mine-here").addEventListener("click", (e) => {
    if (!navigator.geolocation) return alert("La localisation n’est pas disponible sur cet appareil.");
    const btn = e.currentTarget;
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        form.elements.coords.value = `${pos.coords.latitude.toFixed(5)}, ${pos.coords.longitude.toFixed(5)}`;
        btn.disabled = false;
      },
      (err) => { alert("Position introuvable : " + err.message); btn.disabled = false; },
      { enableHighAccuracy: true, timeout: 15000 }
    );
  });
  form.querySelector(".mine-cancel").addEventListener("click", () => onDone(false));
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    const name = f.name.value.trim();
    if (!name) return;
    const rawLink = f.link.value.trim();
    const link = webLink(rawLink);
    if (rawLink && !link) {
      alert("Lien non reconnu — collez une adresse web (https://…), ou laissez vide.");
      return;
    }
    const rawCoords = f.coords.value.trim();
    const coords = rawCoords ? parseCoords(rawCoords) : null;
    if (rawCoords && !coords) {
      alert("Coordonnées non reconnues — collez deux nombres comme « 53.20, 107.34 », ou laissez vide.");
      return;
    }
    store.save("places", place ? place.id : null, {
      country: code,
      name,
      category: f.category.value,
      region: f.region.value.trim(),
      description: f.description.value.trim(),
      long: f.long.value.trim(),
      link,
      coords,
    });
    onDone(true);
  });
  return form;
}

// One hand-added place, styled like the guide's own rows. `n` is its number on
// the map, continuing after the guide's places.
function placeCard(p, code, n) {
  const cat = catOf(p.category);
  const paras = (p.long || "").split(/\n\n+/).filter((s) => s.trim());
  return `
    <div class="place mine-place" id="place-${code}-${n - 1}" data-id="${attr(p.id)}">
      <div class="place-thumb">
        <span class="place-thumb-ph" style="color:${cat.color}">${cat.icon}</span>
      </div>
      <div class="place-body">
        <div class="head">
          ${validCoords(p.coords) ? `<span class="num" data-i="${n - 1}" title="Voir sur la carte">${n}</span>` : ""}
          <span class="t">${esc(p.name)}</span>
          <span class="tag" style="background:${cat.color}">${cat.icon}${esc(cat.label)}</span>
        </div>
        ${p.region ? `<div class="region">${esc(p.region)}</div>` : ""}
        ${p.description ? `<div class="d">${linkify(p.description)}</div>` : ""}
        ${paras.length ? `<div class="mine-text">${paras.map((s) => `<p>${linkify(s.trim())}</p>`).join("")}</div>` : ""}
        ${webLink(p.link) ? `<a class="mine-link mine-place-link" href="${attr(webLink(p.link))}" target="_blank" rel="noopener">🔗 Ouvrir le lien ↗</a>` : ""}
        ${byline(p)}
        <span class="mine-actions">
          <button type="button" class="mine-btn mine-edit" title="Modifier">✎ Modifier</button>
          <button type="button" class="mine-btn mine-del" title="Supprimer">🗑 Supprimer</button>
        </span>
      </div>
    </div>`;
}

export function placesPanel() {
  return `
    <div class="panel mine-panel mine-places-panel">
      <h3 class="mine-panel-h">Mes lieux</h3>
      <div class="mine-status"></div>
      <div class="mine-list mine-places"></div>
      <button type="button" class="mine-add">＋ Ajouter un lieu</button>
      <div class="mine-formslot"></div>
    </div>`;
}

// `offset` = how many places the guide already has, so numbers carry on.
function mountPlaces(panel, code, offset, onPlacesChange) {
  const status = panel.querySelector(".mine-status");
  const listBox = panel.querySelector(".mine-places");
  const addBtn = panel.querySelector(".mine-add");
  const slot = panel.querySelector(".mine-formslot");
  let deferred = false;

  function paint() {
    paintStatus(status);
    if (listBox.querySelector("form")) { deferred = true; return; }
    deferred = false;
    const places = store.list("places", code);
    listBox.innerHTML = places.length
      ? places.map((p, j) => placeCard(p, code, offset + j + 1)).join("")
      : `<p class="mine-empty">Un endroit conseillé par quelqu’un, un village repéré en route ?
          Ajoutez-le ici ; avec des coordonnées, il apparaît aussi sur la carte.</p>`;
    onPlacesChange(places);
  }

  addBtn.addEventListener("click", () => {
    addBtn.hidden = true;
    const form = placeForm(code, null, () => { form.remove(); addBtn.hidden = false; });
    slot.append(form);
    form.elements.name.focus();
  });

  listBox.addEventListener("click", (e) => {
    const card = e.target.closest(".mine-place");
    if (!card || e.target.closest(".num, a")) return; // map badge / links do their own thing
    const place = store.list("places", code).find((p) => p.id === card.dataset.id);
    if (!place) return;
    if (e.target.closest(".mine-del")) {
      if (confirm(`Supprimer « ${place.name} » ?`)) store.remove("places", place.id);
    } else if (e.target.closest(".mine-edit")) {
      const form = placeForm(code, place, () => { form.remove(); card.hidden = false; if (deferred) paint(); });
      card.hidden = true;
      card.after(form);
    }
  });

  paint();
  return paint;
}

/* ── Mount on a country page ───────────────────────────────────────────────── */
// The hand-added places of a country, in display order (for the map). Bad
// coordinates are dropped here so they can never break the map.
export const myPlaces = (code) =>
  store.list("places", code).map((p) => (validCoords(p.coords) ? p : { ...p, coords: null }));

// Wire the notes section and the "Mes lieux" panel already in `scope`, start
// syncing, and repaint both on every change. Returns a stop() for when the page
// is left.
export function mountMine(scope, c, { onPlacesChange = () => {} } = {}) {
  const painters = [];
  const notes = scope.querySelector("#sec-notes");
  if (notes) painters.push(mountNotes(notes, c.code));
  const places = scope.querySelector(".mine-places-panel");
  if (places) painters.push(mountPlaces(places, c.code, c.places.length, onPlacesChange));

  const stop = store.onChange(() => painters.forEach((paint) => paint()));
  store.startSync();
  return stop;
}
