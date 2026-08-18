// Next Stop — proxy endpoint (a Vercel function, see proxy/). Like
// firebase-config.js this file is committed: the URL may be public because the
// proxy refuses requests without the PROXY_KEY passphrase (typed once into the
// app, kept in localStorage) and the Polarsteps token never leaves Vercel.
// Empty = feature shows its setup notice instead of live data.
// See NEXTSTOP_SETUP.md.
export const PROXY_URL = ""; // e.g. "https://polarsteps-proxy-xxxx.vercel.app"

export const isConfigured = () => PROXY_URL !== "";
