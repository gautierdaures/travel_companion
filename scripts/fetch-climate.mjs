#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
//  fetch-climate.mjs — refresh monthly mean temperatures from real data
// ─────────────────────────────────────────────────────────────────────────
//  Pulls 1991–2020 climate normals from the Open-Meteo archive (ERA5
//  reanalysis — free, no API key) for each climate region defined in data/,
//  and writes the monthly means back into the country data files.
//
//  Only the temperature numbers (`months`) are touched. The editorial
//  fields — `best`, `avoid`, `note`, region names — are left alone: the
//  "best time to visit" call weighs heat, rain, crowds and cost, not just
//  temperature, so it stays a human judgement.
//
//  USAGE (run where the internet is reachable — not the CI sandbox):
//    node scripts/fetch-climate.mjs            # fetch + write the data files
//    node scripts/fetch-climate.mjs --dry-run  # fetch + print, write nothing
//    node scripts/fetch-climate.mjs --check    # no network: verify the
//                                              #   read/rewrite roundtrip
//
//  Each region carries `coords: [lat, lng]` and a stable `key` in its data
//  file; those drive the fetch and locate the `months` array to replace.
// ─────────────────────────────────────────────────────────────────────────

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { COUNTRIES } from "../data/index.js";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(HERE, "..", "data");

// WMO standard normal period; override with CLIMATE_START / CLIMATE_END.
const START = process.env.CLIMATE_START || "1991-01-01";
const END = process.env.CLIMATE_END || "2020-12-31";
const ARCHIVE = "https://archive-api.open-meteo.com/v1/archive";

// Country code → data filename (import names don't match codes).
const CODE_FILE = { ru: "russia.js", cn: "china.js", vn: "vietnam.js", la: "laos.js", kh: "cambodia.js" };

// Flatten the data into one fetch/rewrite target per region.
function targets() {
  const out = [];
  for (const c of COUNTRIES) {
    const cl = c.climate;
    if (!cl) continue;
    const file = CODE_FILE[c.code];
    if (!file) throw new Error(`no file mapping for country code "${c.code}"`);
    const regions = cl.regions && cl.regions.length ? cl.regions : [cl];
    for (const r of regions) {
      if (!r.key) throw new Error(`missing "key" on a ${c.name} climate region`);
      if (!r.coords) throw new Error(`missing "coords" on ${c.name} region "${r.key}"`);
      out.push({ label: `${c.name}${r.name ? ` · ${r.name}` : ""}`, key: r.key, coords: r.coords, file });
    }
  }
  return out;
}

// Fetch daily means over the normal period and average them per calendar month.
async function fetchMonthlyMeans([lat, lng]) {
  const url = `${ARCHIVE}?latitude=${lat}&longitude=${lng}` +
    `&start_date=${START}&end_date=${END}&daily=temperature_2m_mean&timezone=UTC`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Open-Meteo ${res.status} ${res.statusText} for ${lat},${lng}`);
  const { daily } = await res.json();
  if (!daily?.time?.length) throw new Error(`no daily data returned for ${lat},${lng}`);

  const sum = Array(12).fill(0), n = Array(12).fill(0);
  daily.time.forEach((iso, i) => {
    const t = daily.temperature_2m_mean[i];
    if (t == null) return;
    const m = Number(iso.slice(5, 7)) - 1; // "YYYY-MM-DD" → 0..11
    sum[m] += t; n[m] += 1;
  });
  return sum.map((s, m) => {
    if (!n[m]) throw new Error(`no samples for month ${m + 1} at ${lat},${lng}`);
    return Math.round(s / n[m]);
  });
}

// Render a `months` array matching the surrounding indentation, 4 per line.
// Includes the leading indent so it replaces the matched span exactly.
function formatMonths(means, indent) {
  const cells = means.map((v) => `{ mean: ${v} }`);
  const rows = [];
  for (let i = 0; i < cells.length; i += 4) rows.push(indent + "  " + cells.slice(i, i + 4).join(", ") + ",");
  return `${indent}months: [\n${rows.join("\n")}\n${indent}]`;
}

// Read the current 12 means for a region straight from the file text.
function readMeans(src, key) {
  const block = matchMonths(src, key);
  const means = [...block.arrayText.matchAll(/mean:\s*(-?\d+(?:\.\d+)?)/g)].map((m) => Number(m[1]));
  if (means.length !== 12) throw new Error(`expected 12 means for "${key}", found ${means.length}`);
  return means;
}

// Locate the `months: [ … ]` array that belongs to a given region key.
// Entries look like `{ mean: N }` — no nested brackets — so `[^\]]*` is safe.
function matchMonths(src, key) {
  const keyIdx = src.indexOf(`key: "${key}"`);
  if (keyIdx === -1) throw new Error(`key "${key}" not found in data file`);
  const rest = src.slice(keyIdx);
  const m = /([ \t]*)months:\s*\[[^\]]*\]/.exec(rest);
  if (!m) throw new Error(`no months array after key "${key}"`);
  return { at: keyIdx + m.index, len: m[0].length, indent: m[1], arrayText: m[0] };
}

function replaceMonths(src, key, means) {
  const { at, len, indent } = matchMonths(src, key);
  return src.slice(0, at) + formatMonths(means, indent) + src.slice(at + len);
}

async function main() {
  const mode = process.argv.includes("--check") ? "check"
    : process.argv.includes("--dry-run") ? "dry" : "write";
  const all = targets();

  // Group targets by file so each file is read/written once.
  const byFile = new Map();
  for (const t of all) {
    if (!byFile.has(t.file)) byFile.set(t.file, []);
    byFile.get(t.file).push(t);
  }

  if (mode === "check") {
    // No network: prove the parser + writer roundtrip and are idempotent.
    for (const [file, ts] of byFile) {
      const path = join(DATA_DIR, file);
      const src = await readFile(path, "utf8");
      let next = src;
      for (const t of ts) next = replaceMonths(next, t.key, readMeans(src, t.key));
      let again = next;
      for (const t of ts) again = replaceMonths(again, t.key, readMeans(next, t.key));
      if (next !== src) throw new Error(`${file}: rewrite is not stable for current values`);
      if (again !== next) throw new Error(`${file}: rewrite is not idempotent`);
      console.log(`✓ ${file} — ${ts.length} region(s) roundtrip cleanly`);
    }
    console.log("check passed");
    return;
  }

  console.log(`Fetching ${START}…${END} normals for ${all.length} regions from Open-Meteo…\n`);
  const means = new Map();
  for (const t of all) {
    means.set(t.key, await fetchMonthlyMeans(t.coords));
    console.log(`  ${t.label.padEnd(38)} [${means.get(t.key).join(", ")}]`);
  }

  if (mode === "dry") { console.log("\n--dry-run: no files written."); return; }

  for (const [file, ts] of byFile) {
    const path = join(DATA_DIR, file);
    let src = await readFile(path, "utf8");
    for (const t of ts) src = replaceMonths(src, t.key, means.get(t.key));
    await writeFile(path, src);
    console.log(`\nwrote ${file}`);
  }
  console.log("\nDone. Review the diff, re-check the best/avoid ratings, and commit.");
}

main().catch((e) => { console.error("Error:", e.message); process.exit(1); });
