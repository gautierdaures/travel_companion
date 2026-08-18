// Polarsteps proxy — Vercel serverless function (Node runtime).
//
// Why Vercel Node and not Cloudflare Workers: Polarsteps' API sits behind AWS
// CloudFront, which refuses connections coming from Cloudflare Worker IPs
// (the Worker got "error code: 502" on every call). Vercel's Node functions
// run on AWS Lambda, so CloudFront treats them as ordinary AWS traffic.
// IMPORTANT: do NOT switch this to Vercel's Edge runtime — that runs on
// Cloudflare and the block returns.
//
//   GET /trip  →  { trip: { name, start_date, end_date },
//                   steps: [{ name, lat, lon, t, cc, desc }], synced }
//
// The app reaches this at PROXY_URL + "/trip" (vercel.json rewrites /trip →
// /api/trip). See ../NEXTSTOP_SETUP.md. Uses Polarsteps' unofficial API —
// read-only, your own data.
//
// Environment variables (Vercel dashboard or `vercel env add`):
//   POLARSTEPS_REMEMBER_TOKEN  — the remember_token cookie value
//   PROXY_KEY                  — passphrase the app must present (X-Proxy-Key)
//   POLARSTEPS_USERNAME        — your polarsteps.com username

const UPSTREAM = "https://api.polarsteps.com";

// Only the app itself may call this proxy.
const ALLOWED_ORIGINS = [
  "https://gautierdaures.github.io",
  "http://127.0.0.1:4321",
  "http://localhost:4321",
];

async function upstream(path, env) {
  const res = await fetch(UPSTREAM + path, {
    headers: {
      Cookie: `remember_token=${env.POLARSTEPS_REMEMBER_TOKEN}`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      Accept: "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (res.status === 401 || res.status === 403) {
    throw { status: 502, error: "Polarsteps rejected the token — it has probably expired. Grab a fresh Remember-Token (see NEXTSTOP_SETUP.md)." };
  }
  if (!res.ok) {
    throw { status: 502, error: `Polarsteps answered ${res.status} — try again later.` };
  }
  return res.json();
}

// The trip that is happening now: started, and not yet ended. Falls back to
// the most recently started one (you may be between end-date and reality).
function currentTrip(trips) {
  const now = Date.now() / 1000;
  const live = trips.filter(
    (t) => !t.is_deleted && t.start_date && t.start_date <= now && (!t.end_date || t.end_date >= now)
  );
  const pool = live.length ? live : trips.filter((t) => !t.is_deleted && t.start_date);
  return pool.sort((a, b) => b.start_date - a.start_date)[0] || null;
}

async function buildTrip(env) {
  const user = await upstream(`/users/byusername/${env.POLARSTEPS_USERNAME}`, env);
  const trip = currentTrip(user.alltrips || []);
  if (!trip) throw { status: 404, error: "No trip found on this Polarsteps account." };

  const full = await upstream(`/trips/${trip.id}`, env);
  const steps = (full.all_steps || [])
    .filter((s) => !s.is_deleted && s.location && s.location.lat != null)
    .map((s) => ({
      name: s.display_name || s.name || s.location.name || "",
      lat: s.location.lat,
      lon: s.location.lon,
      t: s.start_time || s.creation_time || null,
      cc: (s.location.country_code || "").toLowerCase(),
      desc: (s.description || "").slice(0, 200),
    }))
    .sort((a, b) => (a.t || 0) - (b.t || 0));

  return {
    trip: { name: full.name || trip.name || "", start_date: full.start_date, end_date: full.end_date },
    steps,
    synced: Date.now(),
  };
}

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.setHeader("Access-Control-Allow-Origin", allowed);
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Proxy-Key");
  res.setHeader("Vary", "Origin");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "GET only" });

  // The gate — the public URL is worthless without the passphrase.
  if (!process.env.PROXY_KEY || req.headers["x-proxy-key"] !== process.env.PROXY_KEY) {
    return res.status(401).json({ error: "Wrong or missing proxy key." });
  }

  try {
    const data = await buildTrip(process.env);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(e.status || 500).json({ error: e.error || "Proxy error" });
  }
}
