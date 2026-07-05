// ── Firebase config for the Expenses dashboard ───────────────────────────────
//
// Fill these in after creating your Firebase project — see EXPENSES_SETUP.md for
// click-by-click steps. These values are PUBLIC by design and safe to commit:
// your data is protected by Google sign-in + the Firestore security rules
// (firestore.rules), NOT by keeping these secret.

export const firebaseConfig = {
  apiKey:            "PASTE_apiKey_HERE",
  authDomain:        "PASTE_authDomain_HERE",      // e.g. your-project.firebaseapp.com
  projectId:         "PASTE_projectId_HERE",
  appId:             "PASTE_appId_HERE",
};

// Only these Google accounts may read or write expenses. This list is a
// convenience for showing a friendly message in the UI — the REAL enforcement
// lives in firestore.rules, which must contain the same two emails.
export const ALLOWED_EMAILS = [
  "gautier.daures@gmail.com",
  "WIFE_EMAIL_HERE@example.com",   // ← replace with your wife's Google email
];

// Optional: pretty names shown in the dashboard (falls back to the email prefix).
export const NAMES = {
  "gautier.daures@gmail.com": "Gautier",
  // "WIFE_EMAIL_HERE@example.com": "…",
};

// True once the placeholders above have actually been replaced.
export const isConfigured = () =>
  !Object.values(firebaseConfig).some((v) => String(v).includes("PASTE_"));

// Display name for an email (config name → email prefix fallback).
export const nameFor = (email) =>
  NAMES[email] || (email ? email.split("@")[0] : "—");
