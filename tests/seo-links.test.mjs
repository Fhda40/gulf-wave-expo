import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const serviceSlugs = [
  "exhibition-booth-design",
  "booth-production",
  "event-production",
  "temporary-installations",
];

test("keeps every service page in the internal-link catalog", async () => {
  const [catalog, home, layout, servicePage] = await Promise.all([
    readFile(new URL("../lib/services.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/[slug]/page.tsx", import.meta.url), "utf8"),
  ]);

  for (const slug of serviceSlugs) assert.match(catalog, new RegExp(`slug: ["']${slug}["']`));
  assert.match(home, /getServiceHref\(service\.slug\)/);
  assert.match(layout, /getServiceHref\(service\.slug\)/);
  assert.match(servicePage, /relatedServices\.map/);
});
