// Polarsteps proxy — a tiny Cloudflare Worker that lets the Next Stop screen
// read the traveler's live trip. Needed because api.polarsteps.com sends no
// CORS headers and requires the account's Remember-Token, which must never
// ship inside the (public) PWA. The token lives here as a Worker secret.
//
//   GET /trip  →  { trip: { name, start_date, end_date },
//                   steps: [{ name, lat, lon, t, cc, desc }], synced }
//
// The response is deliberately slimmed so the app never depends on
// Polarsteps' full (undocumented, unstable) schema. See ../NEXTSTOP_SETUP.md
// for deployment; uses the unofficial API — read-only, your own data.
//
// Secrets / vars (wrangler.toml + `wrangler secret put`):
//   POLARSTEPS_REMEMBER_TOKEN  secret — the remember_token cookie value
//   PROXY_KEY                  secret — passphrase the app must present
//   POLARSTEPS_USERNAME        var    — your polarsteps.com username
//
// The app and its config are public (GitHub Pages), so the Worker URL is
// public too — and trip steps are the traveler's live location. PROXY_KEY is
// the actual gate: it is typed once into the app on the phone (stored in
// localStorage, never committed) and checked here on every request. CORS is
// just polite fencing for browsers; the key is what keeps strangers out.

const UPSTREAM = "https://api.polarsteps.com";

// Only the app itself may call this proxy.
const ALLOWED_ORIGINS = [
  "https://gautierdaures.github.io",
  "http://127.0.0.1:4321",
  "http://localhost:4321",
];

// How long an upstream answer is reused before Polarsteps is asked again.
const CACHE_SECONDS = 600;

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": origin,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, X-Proxy-Key",
  Vary: "Origin",
});

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });

async function upstream(path, env) {
  const res = await fetch(UPSTREAM + path, {
    headers: {
      Cookie: `remember_token=${env.POLARSTEPS_REMEMBER_TOKEN}`,
      // Polarsteps blocks the default Workers UA on some edges.
      "User-Agent": "Mozilla/5.0 (compatible; trip-companion-proxy)",
      Accept: "application/json",
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

async function handleTrip(env, origin) {
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

  return json(
    {
      trip: { name: full.name || trip.name || "", start_date: full.start_date, end_date: full.end_date },
      steps,
      synced: Date.now(),
    },
    200,
    origin
  );
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(allowed) });
    if (request.method !== "GET") return json({ error: "GET only" }, 405, allowed);

    // The gate. Refuse everything — including cached answers — without the key.
    if (!env.PROXY_KEY || request.headers.get("X-Proxy-Key") !== env.PROXY_KEY) {
      return json({ error: "Wrong or missing proxy key." }, 401, allowed);
    }

    const url = new URL(request.url);
    if (url.pathname !== "/trip") return json({ error: "Unknown route — use /trip" }, 404, allowed);

    // Edge-cache the slimmed payload so refresh-happy usage stays gentle on
    // Polarsteps (and survives its hiccups for a few minutes).
    const cache = caches.default;
    const cacheKey = new Request(`${url.origin}/trip`);
    const hit = await cache.match(cacheKey);
    if (hit) {
      const res = new Response(hit.body, hit);
      Object.entries(corsHeaders(allowed)).forEach(([k, v]) => res.headers.set(k, v));
      return res;
    }

    try {
      const res = await handleTrip(env, allowed);
      const cached = new Response(res.clone().body, res);
      cached.headers.set("Cache-Control", `s-maxage=${CACHE_SECONDS}`);
      ctx.waitUntil(cache.put(cacheKey, cached));
      return res;
    } catch (e) {
      return json({ error: e.error || "Proxy error" }, e.status || 500, allowed);
    }
  },
};
