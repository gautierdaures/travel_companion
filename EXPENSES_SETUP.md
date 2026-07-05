# Expenses dashboard — setup (≈ 10 minutes, one time)

The app is public on GitHub Pages, but the **Expenses** screen is private: only
the two Google accounts you approve can read or write. This works because the
data lives in **Firebase** (Google's free backend), and Firebase checks *on its
own servers* that the signed-in email is on your allow-list — the browser can't
bypass that.

You only have to do this once. It's free for two people (Firebase's free tier is
far larger than you'll ever use).

---

## 1. Create a Firebase project

1. Go to <https://console.firebase.google.com> and sign in with your Google account.
2. **Add project** → name it e.g. `trip-companion` → Continue.
3. You can **disable Google Analytics** (not needed) → Create project.

## 2. Turn on Google sign-in

1. Left sidebar: **Build → Authentication → Get started**.
2. **Sign-in method** tab → click **Google** → toggle **Enable** → pick a support
   email → **Save**.

## 3. Create the database

1. Left sidebar: **Build → Firestore Database → Create database**.
2. Choose a location near you (e.g. `eur3`) → Next.
3. Start in **production mode** (locked) → Create. We set the real rules next.

## 4. Paste the security rules (this is what makes it private)

1. In **Firestore Database → Rules**.
2. Open [`firestore.rules`](firestore.rules) in this repo, replace
   `WIFE_EMAIL_HERE@example.com` with your wife's real Google email, and copy the
   whole file.
3. Paste it over what's in the console → **Publish**.

> Both emails must be **exactly** the Google accounts you'll sign in with.

## 5. Register the web app and copy its config

1. Firebase console home → the **`</>`** (Web) icon to add a web app.
2. Nickname it `trip` → **Register app** (you can skip Firebase Hosting).
3. It shows a `firebaseConfig = { … }` snippet. Copy the values.

## 6. Paste the config into the repo

1. Open [`firebase-config.js`](firebase-config.js).
2. Replace each `PASTE_…_HERE` with the matching value from the snippet
   (`apiKey`, `authDomain`, `projectId`, `appId`).
3. In **`ALLOWED_EMAILS`**, replace `WIFE_EMAIL_HERE@example.com` with your wife's
   Google email (same as step 4). Optionally add her display name to `NAMES`.

> These values are **public by design** — safe to commit. The login + the rules
> are what protect the data, not secrecy of the config.

## 7. Authorize your GitHub Pages domain

1. Firebase → **Authentication → Settings → Authorized domains → Add domain**.
2. Add your Pages host: `gautierdaures.github.io`
   (localhost is already allowed for testing with `python3 serve.py`).

## 8. Ship it

```bash
git add firebase-config.js firestore.rules
git commit -m "Configure Firebase for expenses"
git push
```

Wait a minute for GitHub Pages to rebuild, open the app, tap **💰 Expenses**, and
sign in with Google. Your wife does the same on her phone — you'll both see the
same live list.

---

## Notes

- **Offline:** the country ID-cards still work with no signal. The expense
  dashboard needs a connection because the data is shared/live.
- **Adding a third person later:** add their email in *both* `firestore.rules`
  (and re-publish in the console) and `ALLOWED_EMAILS`.
- **"Permission denied" on the dashboard:** the signed-in email isn't in
  `firestore.rules`, or you forgot to Publish after editing the rules.
- **Sign-in popup does nothing on iPhone:** the app automatically falls back to a
  full-page redirect — just approve the Google screen and it returns to the app.
