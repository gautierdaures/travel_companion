// ── Categories ───────────────────────────────────────────────────────────────
// One small vocabulary, used twice: as a country's "what can I do here" tags on
// the home cards and country hero, and as the kind of each place on a country
// page. Nine words, no more — the point is that a card can be read at a glance.
//
// Every category renders as a line icon plus its label. No emoji: they draw at
// a different size, weight and colour on every platform, and a row of them says
// nothing until you hover it.
//
// Countries use the eight "what you can do" categories; places may also be
// "offbeat" — the odd one out that doesn't fit any of them.

// One icon set: 24×24, stroke-only, inheriting the surrounding text colour.
const svg = (paths) =>
  `<svg class="cat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
  `stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const CATEGORIES = {
  history: {
    label: "History",
    color: "var(--cat-history)",
    icon: svg(`<path d="M3 9.5 12 4.5l9 5"/><path d="M4.5 12h15"/>
               <path d="M6 20v-8M10 20v-8M14 20v-8M18 20v-8"/><path d="M4 20h16"/>`),
  },
  cities: {
    label: "Cities",
    color: "var(--cat-cities)",
    icon: svg(`<path d="M3 20.5h18"/><path d="M5 20.5V10l5.5-3.5v14"/>
               <path d="M14 20.5V4.5l5 3.5v12.5"/>
               <path d="M7.3 11.5v1.2M7.3 15.2v1.2M16.4 10.5v1.2M16.4 14.2v1.2"/>`),
  },
  food: {
    label: "Food",
    color: "var(--cat-food)",
    icon: svg(`<path d="M3.5 11.5h17c0 4.7-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5Z"/>
               <path d="M9 8.6c0-1.2 1.2-1.6 1.2-2.8S9 3.6 9 3.6"/>
               <path d="M14 8.6c0-1.2 1.2-1.6 1.2-2.8S14 3.6 14 3.6"/>`),
  },
  nature: {
    label: "Nature",
    color: "var(--cat-nature)",
    icon: svg(`<path d="M4.5 19.5c0-8.3 6.2-14.5 15-14.5 0 8.3-6.2 14.5-15 14.5Z"/>
               <path d="M4.5 19.5 12.5 11.5"/>`),
  },
  trek: {
    label: "Trek",
    color: "var(--cat-trek)",
    icon: svg(`<path d="M2.5 19.5 9 7l4.2 7.4L15.6 11l5.9 8.5Z"/>
               <path d="m7.1 11.2 1.9 1.3 1.6-1.1"/>`),
  },
  beach: {
    label: "Beach",
    color: "var(--cat-beach)",
    icon: svg(`<path d="M3 11a9 9 0 0 1 18 0"/>
               <path d="M3 11q2.25 2.7 4.5 0 2.25 2.7 4.5 0 2.25 2.7 4.5 0 2.25 2.7 4.5 0"/>
               <path d="M12 3.2v17"/>
               <path d="M5 20.6q7-1.8 14 0"/>`),
  },
  diving: {
    label: "Diving",
    color: "var(--cat-diving)",
    icon: svg(`<path d="M16.5 12c0 3.1-3.1 5.6-7 5.6S2.5 15.1 2.5 12s3.1-5.6 7-5.6 7 2.5 7 5.6Z"/>
               <path d="m16.5 12 5-3.2v6.4Z"/><path d="M6.6 10.6h.01"/>`),
  },
  "slow-travel": {
    label: "Slow travel",
    color: "var(--cat-slow-travel)",
    icon: svg(`<circle cx="14.2" cy="11.2" r="5"/>
               <path d="M14.2 8.4a2.8 2.8 0 1 0 2.8 2.8"/>
               <path d="M9.4 14.4c-1.6 1.7-3 2.4-5 2.4a1.6 1.6 0 0 0 0 3.2h11.4"/>
               <path d="m4.6 16.8-.6-2.2M7 16.4l.4-2.2"/>`),
  },
  offbeat: {
    label: "Off-beat",
    color: "var(--cat-offbeat)",
    icon: svg(`<circle cx="12" cy="12" r="8.5"/>
               <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z"/>`),
  },
};

// Older data (and anything hand-written since) used a freer vocabulary. Fold
// those words into the nine above rather than letting them fall through to the
// generic pin.
const ALIASES = {
  architecture: "history",
  temples: "history",
  ruins: "history",
  "slow travel": "slow-travel",
  slowtravel: "slow-travel",
  "river life": "slow-travel",
  rail: "slow-travel",
  nomads: "slow-travel",
  bazaars: "cities",
  wildlife: "nature",
  hiking: "trek",
  snorkelling: "diving",
  "off-beat": "offbeat",
};

const FALLBACK = {
  label: "Place",
  color: "var(--text-dim)",
  icon: svg(`<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>`),
};

// Canonical key for a raw tag / category word, or null if it isn't one of ours.
export function catKey(raw) {
  if (!raw) return null;
  const k = String(raw).trim().toLowerCase();
  const key = CATEGORIES[k] ? k : ALIASES[k];
  return key && CATEGORIES[key] ? key : null;
}

// { key, label, color, icon } for a raw word — never throws, falls back to a
// neutral pin so unknown data still renders.
export function catOf(raw) {
  const key = catKey(raw);
  if (key) return { key, ...CATEGORIES[key] };
  return { key: null, ...FALLBACK, label: String(raw || "Place") };
}
