# Next Stop setup 🧭

The **Next Stop** screen (`#/next`) recommends where to go next from your
current GPS position and your **live Polarsteps trip**. The recommendations
themselves are computed on the phone from the app's own `data/` content — the
only online piece is fetching your Polarsteps steps.

Polarsteps has **no official API**, so the app talks to a tiny proxy you run
for free on Cloudflare Workers. The proxy holds your Polarsteps token
server-side (it must never be inside this public app) and only answers
requests coming from your app's own origin.

> ⚠️ This uses Polarsteps' *unofficial* API, read-only and only for your own
> data — but it is not endorsed by Polarsteps and could break or fall foul of
> their Terms of Service. The feature fails soft: without the proxy the screen
> still works from GPS alone.

## 1. Get your Remember-Token

1. Log in at [polarsteps.com](https://www.polarsteps.com) in a desktop browser.
2. Open DevTools → **Application** (Chrome) / **Storage** (Firefox) → Cookies
   → `https://www.polarsteps.com`.
3. Copy the value of the `remember_token` cookie.

The token is long-lived but does expire eventually — if Next Stop starts
showing "token expired", repeat this step and update the secret (step 3).

## 2. Deploy the Worker

You need a free [Cloudflare](https://dash.cloudflare.com/sign-up) account and
Node ≥ 18.

```bash
cd proxy
# put your Polarsteps username in wrangler.toml first ([vars] section)
npx wrangler deploy
```

Wrangler prints your Worker URL, e.g.
`https://polarsteps-proxy.<your-subdomain>.workers.dev`.

## 3. Set the two secrets

```bash
npx wrangler secret put POLARSTEPS_REMEMBER_TOKEN
# paste the cookie value when prompted

npx wrangler secret put PROXY_KEY
# invent a passphrase — anything long you can type on your phone once
```

Both live only in Cloudflare's secret store — never in git, never in the app
bundle. The `PROXY_KEY` matters because the app (and so the Worker URL) is
public: it's what stops anyone else from querying your live trip. The app
asks for it once on first sync and keeps it in the phone's localStorage.

## 4. Point the app at the proxy

Edit [`nextstop-config.js`](nextstop-config.js):

```js
export const PROXY_URL = "https://polarsteps-proxy.<your-subdomain>.workers.dev";
```

Commit & push (GitHub Pages redeploys), bump nothing else — the service
worker picks up changed files on its own schedule, or bump `CACHE` in
`sw.js` to force it.

## 5. Check it

Open the app → **🧭 Next Stop** → type your `PROXY_KEY` passphrase into the
unlock field (asked only once per device) → the status line should show your
trip name and step count. Tap 📍 to add your GPS position.

## Notes

- The Worker edge-caches Polarsteps' answer for 10 minutes — hammering
  refresh won't hammer Polarsteps.
- The app keeps the last successful sync in `localStorage`, so Next Stop
  keeps working **offline** (from the last known steps + live GPS).
- Allowed origins are pinned in [`proxy/worker.js`](proxy/worker.js)
  (`ALLOWED_ORIGINS`) — add your own domain there if you host elsewhere.
