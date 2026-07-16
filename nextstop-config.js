// Next Stop — proxy endpoint. Like firebase-config.js this file is committed:
// the URL is not a secret (the Worker only answers the app's own origins, and
// the Polarsteps token never leaves Cloudflare). Empty = feature shows its
// setup notice instead of live data. See NEXTSTOP_SETUP.md.
export const PROXY_URL = ""; // e.g. "https://polarsteps-proxy.<you>.workers.dev"

export const isConfigured = () => PROXY_URL !== "";
