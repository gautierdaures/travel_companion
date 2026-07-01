# Trip Companion 🌍

An offline, installable **country ID-card** app for a worldwide trip. For each country you get:

1. **Language** — essential phrases (hello, thank you, please…) with pronunciation
2. **History** — a short summary plus a timeline
3. **Books** — reads to discover the country
4. **Food** — typical meals (with the odd insider tip)
5. **Places** — key spots, tailored to *architecture · history · food · nature · off-the-beaten-path* (no tourist traps)

It's a plain HTML/CSS/JS **PWA** — no build step, no dependencies. Once loaded on your iPhone it works **fully offline**, which is the whole point when you're abroad with patchy signal.

---

## Preview it locally

No Node needed — just Python 3 (already on macOS):

```bash
python3 serve.py         # serves http://127.0.0.1:4321
```

Open <http://127.0.0.1:4321> in a browser.

---

## Put it on your iPhone

The app needs to be served over **HTTPS** for iOS to install it. The easiest free host is **GitHub Pages** (you already have a git repo).

### 1. Push to GitHub

```bash
gh repo create travel-companion --public --source=. --push
# …or create the repo on github.com and: git push -u origin main
```

### 2. Turn on GitHub Pages

On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` / `/ (root)`, Save.
After a minute your app is live at `https://<your-username>.github.io/travel-companion/`.

### 3. Add to Home Screen (iPhone)

1. Open that URL in **Safari** (must be Safari, not Chrome, for install).
2. Tap the **Share** button → **Add to Home Screen**.
3. Launch it from the home-screen icon — it opens full-screen like an app and works offline.

> **Offline note:** open the app once (each screen you want) while online so the service worker caches it. After that it works with no signal. When you change content, bump `CACHE` in `sw.js` (e.g. `v1` → `v2`) so phones fetch the update.

---

## Add or edit a country

Content lives in `data/`. To add a country:

1. **Copy** an existing file, e.g. `cp data/vietnam.js data/thailand.js`, and edit the content.
   The full field-by-field schema is documented at the top of [`data/index.js`](data/index.js).
2. **Register** it in `data/index.js` — add an `import` and drop it in the `COUNTRIES` array.
3. **Cache** it offline — add the filename to `DATA_FILES` in [`sw.js`](sw.js) and bump `CACHE`.

Place categories (`architecture`, `history`, `nature`, `food`, `offbeat`) drive the colored tags on the country page — keep recommendations matched to your taste.

---

## Project layout

```
index.html              app shell
styles.css              styling (mobile-first, dark)
app.js                  router + rendering
manifest.webmanifest    PWA manifest
sw.js                   service worker (offline cache)
serve.py                local preview server
icons/                  app icons (svg + png)
data/
  index.js              schema docs + country registry
  russia.js  china.js  vietnam.js  laos.js  cambodia.js   … one file per country
```

The countries here (Russia, China, Vietnam, Laos, Cambodia) follow one itinerary — replace/extend them with the countries on your actual trip.
