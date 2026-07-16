// Next Stop — proxy endpoint. Like firebase-config.js this file is committed:
// the URL may be public because the Worker refuses requests without the
// PROXY_KEY passphrase (typed once into the app, kept in localStorage) and
// the Polarsteps token never leaves Cloudflare. Empty = feature shows its
// setup notice instead of live data. See NEXTSTOP_SETUP.md.
export const PROXY_URL = ""; // e.g. "https://polarsteps-proxy.<you>.workers.dev"

export const isConfigured = () => PROXY_URL !== "";
