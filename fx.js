// ── Currency conversion ──────────────────────────────────────────────────────
// Fetches exchange rates from a free, no-key, CORS-friendly CDN API and converts
// every expense into your HOME_CURRENCY for a single combined total. Rates are
// cached in localStorage, so it's one small request per day and it keeps working
// on the last fetched rates if you lose signal.
//
// No hardcoded rates: if you're offline and nothing has ever been fetched, the
// combined total is simply shown as pending — the per-currency totals are always
// exact — and it fills in on its own the next time you're online (see the
// "online" retry wired up in expenses.js).
//
// Source: @fawazahmed0/currency-api via jsDelivr, with a Cloudflare mirror.
// Rates read "1 HOME = N foreign".

import { HOME_CURRENCY } from "./firebase-config.js";

const home = HOME_CURRENCY.toLowerCase();
const SOURCES = [
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${home}.min.json`,
  `https://latest.currency-api.pages.dev/v1/currencies/${home}.min.json`,
];
const LS_KEY = "trip-fx-" + home;
const MAX_AGE = 12 * 60 * 60 * 1000; // refresh at most twice a day

let rates = null;                                   // { "VND": 27000, "EUR": 1, … } or null
let meta = { source: "none", date: null, stale: true };

// Store rates keyed by UPPER-case code (expenses use "EUR"/"VND"); API is lower.
function normalize(map) {
  const out = {};
  for (const k in map) out[k.toUpperCase()] = map[k];
  out[HOME_CURRENCY] = 1;
  return out;
}

function readCache() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch { return null; }
}
function writeCache(obj) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(obj)); } catch { /* private mode */ }
}

// Load rates (fresh cache → network → stale cache → unavailable). Safe to call
// repeatedly; returns the resulting meta.
export async function ensureRates() {
  const cached = readCache();
  if (cached && cached.rates && Date.now() - cached.fetchedAt < MAX_AGE) {
    rates = cached.rates;
    meta = { source: "live", date: cached.date, stale: false };
    return meta;
  }

  for (const url of SOURCES) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      const map = data[home];
      if (!map) continue;
      rates = normalize(map);
      meta = { source: "live", date: data.date || new Date().toISOString().slice(0, 10), stale: false };
      writeCache({ rates, date: meta.date, fetchedAt: Date.now() });
      return meta;
    } catch { /* try the next source */ }
  }

  // Offline. Use the last rates we fetched if we have them; otherwise defer.
  if (cached && cached.rates) {
    rates = cached.rates;
    meta = { source: "live", date: cached.date, stale: true };
  } else {
    rates = null;
    meta = { source: "unavailable", date: null, stale: true };
  }
  return meta;
}

// Convert `amount` in `cur` to the home currency. null if no rate is available.
export function toHome(amount, cur) {
  if (!cur || cur === HOME_CURRENCY) return amount;
  const r = rates && rates[cur.toUpperCase()];
  if (!r) return null;
  return amount / r; // rates are "1 HOME = r foreign"
}

export function ratesInfo() { return meta; }
