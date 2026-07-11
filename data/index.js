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
//    tags: ["history", "nature", "trek", "beach", …],  // what you can do here;
//                                         // rendered as emoji chips on the home
//                                         // card and country hero (the word is
//                                         // the hover title). app.js maps each
//                                         // word → emoji in TAG_EMOJI; add a
//                                         // mapping there for any new tag, else
//                                         // it falls back to a generic 🏷️.
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
//      note: "regional caveat / seasons", // optional line under the chart(s)
//      coords: [lat, lng],                // representative city (for the fetch script)
//      key: "jp",                         // stable id (for the fetch script)
//      best:  [4, 5, 9, 10],              // ideal months (1–12) → green bars
//      avoid: [1, 2, 12],                 // months to steer around → red bars
//                                         //   (any month not listed = orange / acceptable)
//      months: [ { mean, rain }, ... ]    // 12 entries Jan→Dec: avg daily °C
//                                         //   + avg monthly rainfall (mm)
//    },
//      // Big country with several climates? Drop best/avoid/months and give
//      // `regions` instead — one titled chart each, on a shared axis:
//      // regions: [ { name, coords, key, note?, best, avoid, months: [{mean,rain},…] }, … ]
//
//      // `months` numbers come from real climate normals — refresh them with
//      //   `node scripts/fetch-climate.mjs` (Open-Meteo, uses coords + key).
//      //   best/avoid stay hand-set; the chart shows temperature (bars) and
//      //   rainfall (blue) so the colour of each month makes sense at a glance.
//
//    events: [ { name, when, months, kind, description }, ... ]
//      when   = human label, e.g. "Late Jan – mid Feb"
//      months = month numbers it falls in, e.g. [1, 2]
//      kind ∈ "go"    — worth timing your trip for
//           | "avoid" — crowds / closures / heat; steer around it
//           | "note"  — good to know, plan accordingly
//
//    places: [ { name, category, region, description, long?, practical?,
//                stay?, tips?, wiki?, coords? }, ... ]
//      category ∈ "architecture" | "history" | "nature" | "food" | "offbeat"
//      description = one succinct line, shown in the Places list
//      long        = the full guide (1–3 short paragraphs) on the place's
//                    own page at #/<code>/place/<i>; separate paragraphs
//                    with a blank line. Falls back to `description`.
//                    For historical/architectural sites, lean into the story;
//                    for nature, describe the hike/trek and the landscape.
//      practical   = [ { label, value }, … ] — the "Plan your visit" facts
//                    table. Use for entrance fee, opening hours, time to
//                    allow, how to get there, the trailhead/trek, guided-
//                    tour needs, etc. Keep prices approximate (local currency
//                    with a rough USD/EUR, "~"): they're a guide, not gospel.
//      stay        = prose for the "Stay & slow travel" panel — where to base
//                    yourself: guest houses, homestays, the sleepy village or
//                    riverside town worth an extra night. Blank line = new
//                    paragraph. This is the "slow trip" heart of a place.
//      tips        = [ "…", … ] — short, hands-on tips shown as bullets under
//                    the stay panel (go at dawn, bring cash, book ahead…).
//      wiki        = English Wikipedia article title (e.g. "Hạ Long Bay").
//                    Drives the place's photos and the "Read more" link,
//                    pulled at runtime by wiki.js. Fails soft — offline the
//                    hand-written guide above still shows in full.
//      coords      = [lat, lng] — optional, drops a numbered pin on the map
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
import turkey from "./turkey.js";
import kazakhstan from "./kazakhstan.js";
import kyrgyzstan from "./kyrgyzstan.js";
import mongolia from "./mongolia.js";
import thailand from "./thailand.js";
import malaysia from "./malaysia.js";
import indonesia from "./indonesia.js";
import newzealand from "./newzealand.js";

export const COUNTRIES = [
  russia, china, vietnam, laos, cambodia,
  turkey, kazakhstan, kyrgyzstan, mongolia,
  thailand, malaysia, indonesia, newzealand,
].sort((a, b) => a.name.localeCompare(b.name));

export const byCode = (code) => COUNTRIES.find((c) => c.code === code);
