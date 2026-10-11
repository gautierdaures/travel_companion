// ── Currency conversion ──────────────────────────────────────────────────────
// Fetches exchange rates from a free, no-key, CORS-friendly CDN API and converts
// every expense into your HOME_CURRENCY for a single combined total. Rates are
// cached in localStorage, so it's one small request per day and it keeps working
// on the last fetched rates if you lose signal.
//
// No hardcoded rates: if you're offline and nothing has ever been fetched, the
// combined total is simply shown as pending, and it fills in on its own the next
// time you're online (see the "online" retry wired up in expenses.js).
//
// A rate is only true at a moment, so each expense keeps the rate of its own
// date, frozen on it when it's saved (see rateAt below and expenses.js).
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

// Today's rate for a code ("1 HOME = r foreign"), or null if not loaded.
export const marketRate = (cur) => (rates && rates[cur]) || null;

/* ── Rate on a given day ──────────────────────────────────────────────────────
   What an expense gets frozen with: today (or later) uses the latest rates; an
   earlier date uses that day's rates — the API keeps a dated snapshot per day —
   so a backdated or not-yet-frozen expense still gets the rate of its moment. */
const dayRates = new Map(); // "2026-09-15" → Promise<{ rates, date } | null>

function ratesOnDay(day) {
  if (!dayRates.has(day)) {
    dayRates.set(day, (async () => {
      for (const url of [
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${day}/v1/currencies/${home}.min.json`,
        `https://${day}.currency-api.pages.dev/v1/currencies/${home}.min.json`,
      ]) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();
          if (data[home]) return { rates: normalize(data[home]), date: data.date || day };
        } catch { /* try the next source */ }
      }
      dayRates.delete(day); // offline or not published yet — let a later call retry
      return null;
    })());
  }
  return dayRates.get(day);
}

// { rate, date } to convert `cur` spent on `day` (YYYY-MM-DD), where `date` is
// the day the rate was published. null when no rate can be had right now.
export async function rateAt(cur, day) {
  const c = (cur || HOME_CURRENCY).toUpperCase();
  if (c === HOME_CURRENCY) return { rate: 1, date: day };
  if (day && day < new Date().toISOString().slice(0, 10)) {
    const past = await ratesOnDay(day);
    if (past && past.rates[c]) return { rate: past.rates[c], date: past.date };
  }
  await ensureRates();
  return rates && rates[c] ? { rate: rates[c], date: meta.date } : null;
}

/* ── Currency catalogue (for the picker) ──────────────────────────────────────
   The same currency-api also publishes the full list of currency codes + names.
   We use it to populate the "Currency" dropdown so a code is never typed by hand
   — and we only offer codes we actually hold a EUR rate for, which means every
   selectable currency is guaranteed convertible to the home currency. */

const NAMES_SOURCES = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json",
  "https://latest.currency-api.pages.dev/v1/currencies.min.json",
];
const LS_NAMES = "trip-fx-names";

// A small built-in list so the picker still works offline before anything has
// been fetched. The full ~160-currency catalogue replaces it on first load.
const FALLBACK_NAMES = {
  EUR: "Euro", USD: "Dollar des États-Unis", GBP: "Livre sterling", JPY: "Yen japonais",
  RUB: "Rouble russe", CNY: "Yuan renminbi chinois", VND: "Dông vietnamien",
  LAK: "Kip laotien", KHR: "Riel cambodgien", THB: "Baht thaïlandais",
};

// The fetched catalogue names currencies in English; show them in French via the
// browser's own locale data (offline, no extra request), keeping the English name
// for anything it doesn't know (crypto, metals…).
const FR_NAMES = (() => {
  try { return new Intl.DisplayNames(["fr"], { type: "currency", fallback: "none" }); } catch { return null; }
})();
function frName(code, fallback) {
  let n = null;
  try { n = FR_NAMES && FR_NAMES.of(code); } catch { /* not a valid code */ }
  return n ? n.charAt(0).toUpperCase() + n.slice(1) : fallback;
}

let names = null; // { "EUR": "Euro", … } upper-cased, once loaded

function readNames() { try { return JSON.parse(localStorage.getItem(LS_NAMES)); } catch { return null; } }
function writeNames(obj) { try { localStorage.setItem(LS_NAMES, JSON.stringify(obj)); } catch { /* private mode */ } }

async function fetchNames() {
  for (const url of NAMES_SOURCES) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();          // { "eur": "Euro", … }
      const out = {};
      for (const k in data) if (data[k]) out[k.toUpperCase()] = data[k];
      if (Object.keys(out).length) return out;
    } catch { /* try the next source */ }
  }
  return null;
}

// True once we hold a real rates map (not just the home=1 seed).
function haveRates() { return !!(rates && Object.keys(rates).length > 1); }

// The list of currencies to offer in the picker: [{ code, name }], sorted by
// code. When rates are loaded we intersect with them so only convertible codes
// are offered; offline-before-first-fetch we fall back to the catalogue/built-in
// list and conversion simply shows as pending until rates arrive.
export async function ensureCurrencies() {
  await ensureRates();
  if (!names) names = readNames();
  if (!names) { names = await fetchNames(); if (names) writeNames(names); }
  const src = names || FALLBACK_NAMES;

  const out = [];
  const seen = new Set();
  for (const code in src) {
    if (haveRates() && !(code in rates)) continue; // only convertible codes
    out.push({ code, name: frName(code, src[code]) });
    seen.add(code);
  }
  if (!seen.has(HOME_CURRENCY)) out.push({ code: HOME_CURRENCY, name: frName(HOME_CURRENCY, src[HOME_CURRENCY] || HOME_CURRENCY) });
  out.sort((a, b) => a.code.localeCompare(b.code));
  return out;
}

// Can this code be converted to the home currency (now, or once rates land)?
// Used as a safety net on submit — the picker already restricts the choices.
export function isSupported(cur) {
  if (!cur) return false;
  const c = cur.toUpperCase();
  if (c === HOME_CURRENCY) return true;
  if (haveRates()) return c in rates;
  return !!((names && names[c]) || FALLBACK_NAMES[c]); // rates pending — trust the catalogue
}
