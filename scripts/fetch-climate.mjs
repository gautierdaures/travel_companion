#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
//  fetch-climate.mjs — refresh monthly climate normals from real data
// ─────────────────────────────────────────────────────────────────────────
//  Pulls 1991–2020 climate normals from the Open-Meteo archive (ERA5
//  reanalysis — free, no API key) for each climate region defined in data/,
//  and writes the monthly numbers back into the country data files:
//    · mean = average daily temperature (°C)
//    · rain = average monthly precipitation total (mm)
//
//  Only these numbers (`months`) are touched. The editorial fields —
//  `best`, `avoid`, `note`, region names — are left alone: the "best time
//  to visit" call weighs heat, rain, crowds and cost, so it stays a human
//  judgement (the rain figures just make that call legible on the chart).
//
//  USAGE (run where the internet is reachable — not the CI sandbox):
//    node scripts/fetch-climate.mjs            # fetch + write the data files
//    node scripts/fetch-climate.mjs --dry-run  # fetch + print, write nothing
//    node scripts/fetch-climate.mjs --refresh  # ignore the cache, refetch all
//    node scripts/fetch-climate.mjs --check    # no network: verify the
//                                              #   read/rewrite roundtrip
//
//  The free API rate-limits these heavy multi-decade requests, so each
//  successful region is cached in data/.climate-cache.json (git-ignored).
//  If a run gets throttled part-way, just run it again — cached regions are
//  skipped, so a couple of runs will complete the set.
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
const CODE_FILE = {
  ru: "russia.js", cn: "china.js", vn: "vietnam.js", la: "laos.js", kh: "cambodia.js",
  tr: "turkey.js", kz: "kazakhstan.js", kg: "kyrgyzstan.js", mn: "mongolia.js",
  th: "thailand.js", my: "malaysia.js", id: "indonesia.js", nz: "newzealand.js",
};

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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Open-Meteo's free tier rate-limits these heavy multi-decade requests, so back
// off and retry on 429/5xx, honouring a Retry-After header when one is sent.
// Waits climb toward a minute so a sustained per-minute limit has time to reset.
async function fetchJSON(url) {
  const waits = [5, 10, 20, 40, 60, 60]; // seconds
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url);
    if (res.ok) return res.json();
    const retryable = res.status === 429 || res.status >= 500;
    if (!retryable || attempt >= waits.length) {
      throw new Error(`Open-Meteo ${res.status} ${res.statusText}`);
    }
    const hinted = Number(res.headers.get("retry-after"));
    const wait = (Number.isFinite(hinted) && hinted > 0 ? hinted : waits[attempt]) * 1000;
    console.log(`    ${res.status}; retrying in ${Math.round(wait / 1000)}s (attempt ${attempt + 1}/${waits.length})…`);
    await sleep(wait);
  }
}

// Fetch daily temperature + precipitation over the normal period and reduce to
// per-calendar-month figures: mean daily temp, and mean monthly rainfall total.
async function fetchMonthly([lat, lng]) {
  const url = `${ARCHIVE}?latitude=${lat}&longitude=${lng}&start_date=${START}&end_date=${END}` +
    `&daily=temperature_2m_mean,precipitation_sum&timezone=UTC`;
  const daily = (await fetchJSON(url)).daily;
  if (!daily?.time?.length) throw new Error(`no daily data returned for ${lat},${lng}`);

  const tSum = Array(12).fill(0), tN = Array(12).fill(0);
  const pSum = Array(12).fill(0), pYears = Array.from({ length: 12 }, () => new Set());
  daily.time.forEach((iso, i) => {
    const m = Number(iso.slice(5, 7)) - 1; // "YYYY-MM-DD" → 0..11
    const t = daily.temperature_2m_mean[i];
    if (t != null) { tSum[m] += t; tN[m] += 1; }
    const p = daily.precipitation_sum[i];
    if (p != null) { pSum[m] += p; pYears[m].add(iso.slice(0, 4)); }
  });
  return tSum.map((s, m) => {
    if (!tN[m]) throw new Error(`no temperature samples for month ${m + 1} at ${lat},${lng}`);
    const years = pYears[m].size || 1; // mean monthly total = all rain in month ÷ #years
    return { mean: Math.round(s / tN[m]), rain: Math.round(pSum[m] / years) };
  });
}

// Render a `months` array matching the surrounding indentation, 3 per line.
// Includes the leading indent so it replaces the matched span exactly.
function formatMonths(months, indent) {
  const cells = months.map((x) => `{ mean: ${x.mean}, rain: ${x.rain} }`);
  const rows = [];
  for (let i = 0; i < cells.length; i += 3) rows.push(indent + "  " + cells.slice(i, i + 3).join(", ") + ",");
  return `${indent}months: [\n${rows.join("\n")}\n${indent}]`;
}

// Read the current 12 { mean, rain } entries for a region from the file text.
function readMonths(src, key) {
  const { arrayText } = matchMonths(src, key);
  const months = [...arrayText.matchAll(/\{([^}]*)\}/g)].map((m) => {
    const mean = Number(/mean:\s*(-?\d+(?:\.\d+)?)/.exec(m[1])?.[1]);
    const rr = /rain:\s*(-?\d+(?:\.\d+)?)/.exec(m[1]);
    return { mean, rain: rr ? Number(rr[1]) : 0 };
  });
  if (months.length !== 12) throw new Error(`expected 12 months for "${key}", found ${months.length}`);
  return months;
}

// Locate the `months: [ … ]` array that belongs to a given region key. Entries
// look like `{ mean: N, rain: N }` — no nested brackets — so `[^\]]*` is safe.
function matchMonths(src, key) {
  const keyIdx = src.indexOf(`key: "${key}"`);
  if (keyIdx === -1) throw new Error(`key "${key}" not found in data file`);
  const rest = src.slice(keyIdx);
  const m = /([ \t]*)months:\s*\[[^\]]*\]/.exec(rest);
  if (!m) throw new Error(`no months array after key "${key}"`);
  return { at: keyIdx + m.index, len: m[0].length, indent: m[1], arrayText: m[0] };
}

function replaceMonths(src, key, months) {
  const { at, len, indent } = matchMonths(src, key);
  return src.slice(0, at) + formatMonths(months, indent) + src.slice(at + len);
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
      for (const t of ts) next = replaceMonths(next, t.key, readMonths(src, t.key));
      let again = next;
      for (const t of ts) again = replaceMonths(again, t.key, readMonths(next, t.key));
      if (next !== src) throw new Error(`${file}: rewrite is not stable for current values`);
      if (again !== next) throw new Error(`${file}: rewrite is not idempotent`);
      console.log(`✓ ${file} — ${ts.length} region(s) roundtrip cleanly`);
    }
    console.log("check passed");
    return;
  }

  // Cache successful fetches so a throttled run can be resumed by re-running.
  const CACHE = join(DATA_DIR, ".climate-cache.json");
  const refresh = process.argv.includes("--refresh");
  let cache = {};
  if (!refresh) { try { cache = JSON.parse(await readFile(CACHE, "utf8")); } catch {} }

  console.log(`Fetching ${START}…${END} normals for ${all.length} regions from Open-Meteo…`);
  console.log(`(each success is cached in data/.climate-cache.json — re-run to resume)\n`);
  const data = new Map();
  const missing = [];
  let fetched = 0;
  for (const t of all) {
    if (cache[t.key]) { data.set(t.key, cache[t.key]); console.log(`  ${t.label} — cached`); continue; }
    try {
      if (fetched > 0) await sleep(3000); // ease off the burst limit
      const months = await fetchMonthly(t.coords);
      fetched++;
      data.set(t.key, months);
      cache[t.key] = months;
      await writeFile(CACHE, JSON.stringify(cache));
      console.log(`  ${t.label}`);
      console.log(`    temp [${months.map((x) => x.mean).join(", ")}]`);
      console.log(`    rain [${months.map((x) => x.rain).join(", ")}]`);
    } catch (e) {
      missing.push(t.label);
      console.log(`  ${t.label} — ${e.message} (will fetch on next run)`);
    }
  }

  if (mode === "dry") {
    console.log("\n--dry-run: no data files written.");
  } else {
    for (const [file, ts] of byFile) {
      const toWrite = ts.filter((t) => data.has(t.key));
      if (!toWrite.length) continue;
      const path = join(DATA_DIR, file);
      let src = await readFile(path, "utf8");
      for (const t of toWrite) src = replaceMonths(src, t.key, data.get(t.key));
      await writeFile(path, src);
      console.log(`\nwrote ${file} (${toWrite.length} region${toWrite.length > 1 ? "s" : ""})`);
    }
  }

  if (missing.length) {
    console.log(`\n${missing.length} region(s) still rate-limited: ${missing.join(", ")}`);
    console.log("Re-run the script to fetch the rest — cached regions are skipped.");
    process.exit(mode === "dry" ? 0 : 1);
  }
  console.log("\nDone. Review the diff, re-check the best/avoid ratings, and commit.");
}

main().catch((e) => { console.error("Error:", e.message); process.exit(1); });
