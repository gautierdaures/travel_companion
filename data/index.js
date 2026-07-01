// ─────────────────────────────────────────────────────────────────────────
//  COUNTRY DATA — schema reference
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
//    places: [ { name, category, region, description }, ... ]
//      category ∈ "architecture" | "history" | "nature" | "food" | "offbeat"
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
