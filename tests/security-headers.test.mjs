import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Vercel applies the required browser security headers to every route", async () => {
  const config = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  const catchAll = config.headers?.find((entry) => entry.source === "/(.*)");
  assert.ok(catchAll, "missing catch-all header rule");

  const headers = new Map(catchAll.headers.map(({ key, value }) => [key.toLowerCase(), value]));
  assert.equal(headers.get("strict-transport-security"), "max-age=63072000; includeSubDomains; preload");
  assert.equal(headers.get("x-content-type-options"), "nosniff");
  assert.equal(headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(headers.get("x-frame-options"), "DENY");
  assert.match(headers.get("permissions-policy") ?? "", /camera=\(\)/);

  const csp = headers.get("content-security-policy") ?? "";
  for (const directive of [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "media-src 'self'",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
    "upgrade-insecure-requests",
  ]) {
    assert.ok(csp.includes(directive), `missing CSP directive: ${directive}`);
  }
});
