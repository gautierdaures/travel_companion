// ── Country catalogue ────────────────────────────────────────────────────────
// Fetches the list of countries (ISO 3166-1 alpha-2 code → English name) from a
// free, no-key, CORS-friendly API, cached in localStorage — mirrors fx.js. The
// expense form's country picker and the by-country breakdown both use it.
//
// Nothing here is a hardcoded country list: the only fallback is whatever the
// caller passes in (the handful of trip countries), used solely to keep the form
// usable offline before the first successful fetch. It fills in on its own once
// online.
//
// Sources return a { code: "Name" } map. flagcdn uses lower-case codes; the
// jsDelivr mirror upper-case — both are normalised to lower-case.

const SOURCES = [
  "https://flagcdn.com/en/codes.json",                                           // { "jp": "Japan", … }
  "https://cdn.jsdelivr.net/npm/countries-list@3/minimal/countries.en.min.json", // { "JP": "Japan", … }
];
const LS_KEY = "trip-countries";
const MAX_AGE = 30 * 24 * 60 * 60 * 1000; // country names barely change — refresh monthly

let list = null;      // [{ code, name }] lower-case codes, sorted by name
let nameByCode = null; // Map(code → name) for O(1) lookups

function setList(arr) {
  list = arr;
  nameByCode = new Map(arr.map((x) => [x.code, x.name]));
}

function readCache() { try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch { return null; } }
function writeCache(obj) { try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch { /* private mode */ } }

// { "jp": "Japan", … } (any case) → sorted [{ code, name }] with lower-case codes.
function normalize(map) {
  const out = [];
  for (const k in map) {
    const name = map[k];
    if (name && /^[a-zA-Z]{2}$/.test(k)) out.push({ code: k.toLowerCase(), name: String(name) });
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

// Load the catalogue (fresh cache → network → stale cache → caller fallback).
// Safe to call repeatedly; returns [{ code, name }].
export async function ensureCountries(fallback = []) {
  if (list) return list;

  const cached = readCache();
  if (cached && cached.list && Date.now() - cached.fetchedAt < MAX_AGE) {
    setList(cached.list);
    return list;
  }

  for (const url of SOURCES) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const norm = normalize(await res.json());
      if (norm.length) {
        setList(norm);
        writeCache({ list: norm, fetchedAt: Date.now() });
        return list;
      }
    } catch { /* try the next source */ }
  }

  // Offline. Use the last-fetched list if we have one; otherwise the caller's
  // fallback (the trip countries) so the form still works — it fills in online.
  if (cached && cached.list) setList(cached.list);
  else setList([...fallback].sort((a, b) => a.name.localeCompare(b.name)));
  return list;
}

// English name for a single code from the loaded catalogue, or null if unknown
// / not loaded yet.
export function countryName(code) {
  if (!nameByCode || !code) return null;
  return nameByCode.get(code.toLowerCase()) || null;
}
