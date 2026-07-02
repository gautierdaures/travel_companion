// ─────────────────────────────────────────────────────────────────────────
//  COUNTRY DATA — schema reference
// ─────────────────────────────────────────────────────────────────────────
//  ⚑ Before writing `places` (or any recommendations), read ../PREFERENCES.md
//    for the traveler's tastes: architecture, history, food, nature, and
//    off-the-beaten-path — and NO tourist traps.
// ─────────────────────────────────────────────────────────────────────────
//  Each country is one file (e.g. data/japan.js) with a default export:
//
//  {
//    code: "jp",              // short unique id, used in the URL (#/jp)
//    name: "Japan",
//    flag: "🇯🇵",             // emoji flag
//    region: "East Asia",
//    tagline: "one evocative line",
//
//    languages: {
//      name: "Japanese",
//      note: "pronunciation / etiquette note",
//      phrases: [ { en, local, pron }, ... ]   // 8–11 useful phrases
//    },
//
//    history: {
//      summary: "1–2 paragraph prose overview",
//      timeline: [ { era, text }, ... ]         // 4–6 milestones
//    },
//
//    books: [ { title, author, year, note }, ... ],
//
//    meals: [ { name, description, tip? }, ... ],
//
//    climate: {
//      unit: "°C",                        // temperature unit shown on the chart
//      note: "regional caveat / seasons", // country too big for one number? say so
//      best: [4, 5, 9, 10],               // month numbers (1–12) that are ideal
//      months: [ { min, max, mean }, ... ] // 12 entries Jan→Dec, avg daily °C
//    },
//
//    events: [ { name, when, months, kind, description }, ... ]
//      when   = human label, e.g. "Late Jan – mid Feb"
//      months = month numbers it falls in, e.g. [1, 2]
//      kind ∈ "go"    — worth timing your trip for
//           | "avoid" — crowds / closures / heat; steer around it
//           | "note"  — good to know, plan accordingly
//
//    places: [ { name, category, region, description, coords? }, ... ]
//      category ∈ "architecture" | "history" | "nature" | "food" | "offbeat"
//      coords   = [lat, lng] — optional, drops a numbered pin on the map
//  }
//
//  TO ADD A COUNTRY:
//    1. Copy an existing file in data/ and edit the content.
//    2. Import it below and add it to the COUNTRIES array.
//    3. Add its filename to DATA_FILES in ../sw.js so it caches offline.
// ─────────────────────────────────────────────────────────────────────────

import russia from "./russia.js";
import china from "./china.js";
import vietnam from "./vietnam.js";
import laos from "./laos.js";
import cambodia from "./cambodia.js";

export const COUNTRIES = [russia, china, vietnam, laos, cambodia].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export const byCode = (code) => COUNTRIES.find((c) => c.code === code);
