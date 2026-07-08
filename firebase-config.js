// ── Firebase config for the Expenses dashboard ───────────────────────────────
//
// Fill these in after creating your Firebase project — see EXPENSES_SETUP.md for
// click-by-click steps. These values are PUBLIC by design and safe to commit:
// your data is protected by Google sign-in + the Firestore security rules
// (firestore.rules), NOT by keeping these secret.

export const firebaseConfig = {
  apiKey: "AIzaSyAunPqpjyppaEQO_8Acq_NWaN3d8hTSHn0",
  authDomain: "trip-companion-29e31.firebaseapp.com",
  projectId: "trip-companion-29e31",
  storageBucket: "trip-companion-29e31.firebasestorage.app",
  messagingSenderId: "439906304436",
  appId: "1:439906304436:web:a63c8073775fca695472e1"
};

// Only these Google accounts may read or write expenses. This list is a
// convenience for showing a friendly message in the UI — the REAL enforcement
// lives in firestore.rules, which must contain the same two emails.
export const ALLOWED_EMAILS = [
  "gautier.daures@gmail.com",
  "chloemichel1112@gmail.com",
];

// Optional: pretty names shown in the dashboard (falls back to the email prefix).
export const NAMES = {
  "gautier.daures@gmail.com": "Gautier",
  "chloemichel1112@gmail.com": "Chloe"
};

// Your "home" currency — every expense is also totalled in this one, using live
// exchange rates fetched when you're online (see fx.js).
export const HOME_CURRENCY = "EUR";

// ── Trip budget ──────────────────────────────────────────────────────────────
// Total budget for the whole trip, in HOME_CURRENCY. The Expenses dashboard uses
// this (together with the trip dates below) to tell you whether you're on track:
// it compares what you've actually spent against what you'd expect to have spent
// by today if you spread the budget evenly across the trip. Edit these to match
// your real plan. Set TRIP_BUDGET to 0 to hide the budget tracker entirely.
export const TRIP_BUDGET = 12000;      // e.g. 12000 EUR
export const TRIP_START  = "2026-07-01"; // first day of the trip (YYYY-MM-DD)
export const TRIP_END    = "2026-10-31"; // last day of the trip  (YYYY-MM-DD)

// True once the placeholders above have actually been replaced.
export const isConfigured = () =>
  !Object.values(firebaseConfig).some((v) => String(v).includes("PASTE_"));

// Display name for an email (config name → email prefix fallback).
export const nameFor = (email) =>
  NAMES[email] || (email ? email.split("@")[0] : "—");
