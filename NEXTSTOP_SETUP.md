# Next Stop setup 🧭

The **Next Stop** screen (`#/next`) recommends where to go next from your
current GPS position and your **live Polarsteps trip**. The recommendations
themselves are computed on the phone from the app's own `data/` content — the
only online piece is fetching your Polarsteps steps.

Polarsteps has **no official API**, so the app talks to a tiny proxy you run
for free on **Vercel**. The proxy holds your Polarsteps token server-side (it
must never be inside this public app) and only answers requests that carry a
passphrase you choose.

> **Why Vercel and not Cloudflare?** Polarsteps' API is behind AWS CloudFront,
> which blocks requests from Cloudflare Worker IPs (they get `error code: 502`).
> Vercel's **Node** serverless functions run on AWS, so CloudFront lets them
> through. If you deploy this yourself, keep it on the **Node runtime** — do
> not switch the function to Vercel's Edge runtime (that runs on Cloudflare and
> the block comes back).

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
showing "token expired", repeat this step and update the env var.

## 2. Deploy the proxy to Vercel

You need a free [Vercel](https://vercel.com/signup) account and Node ≥ 18.

```bash
cd proxy
npx vercel        # first run links/creates the project (accept the defaults)
npx vercel --prod # deploy to the production URL
```

Vercel prints your URL, e.g. `https://polarsteps-proxy-xxxx.vercel.app`.

## 3. Set the environment variables

Add three variables (Production scope). Either in the Vercel dashboard
(Project → Settings → Environment Variables) or on the CLI:

```bash
npx vercel env add POLARSTEPS_REMEMBER_TOKEN production   # paste the cookie value
npx vercel env add PROXY_KEY production                   # invent a passphrase
npx vercel env add POLARSTEPS_USERNAME production          # your polarsteps username
npx vercel --prod                                         # redeploy so they take effect
```

- `POLARSTEPS_REMEMBER_TOKEN` and `PROXY_KEY` are secrets — never in git.
- `PROXY_KEY` matters because the app (and so the proxy URL) is public: it's
  what stops anyone else from querying your live trip. The app asks for it once
  on first sync and keeps it in the phone's localStorage.
- `POLARSTEPS_USERNAME` is the last part of your profile URL
  (`polarsteps.com/<username>`).

## 4. Point the app at the proxy

Edit [`nextstop-config.js`](nextstop-config.js):

```js
export const PROXY_URL = "https://polarsteps-proxy-xxxx.vercel.app";
```

Commit & push (GitHub Pages redeploys). The app calls `PROXY_URL + "/trip"`;
`vercel.json` rewrites `/trip` → the `api/trip` function, so no `/api` in the
URL.

## 5. Check it

Open the app → **🧭 Next Stop** → type your `PROXY_KEY` passphrase into the
unlock field (asked only once per device) → the status line should show your
trip name and step count. Tap 📍 to add your GPS position.

## Notes

- The app keeps the last successful sync in `localStorage`, so Next Stop
  keeps working **offline** (from the last known steps + live GPS).
- Allowed origins are pinned in [`proxy/api/trip.js`](proxy/api/trip.js)
  (`ALLOWED_ORIGINS`) — add your own domain there if you host elsewhere.
- **Retiring the old Cloudflare Worker:** if you tried the earlier Cloudflare
  version, delete that Worker and its secrets so the token isn't left sitting
  in a second place: `npx wrangler delete` (in the old proxy dir) and remove
  the `POLARSTEPS_REMEMBER_TOKEN` / `PROXY_KEY` secrets from that Worker.
