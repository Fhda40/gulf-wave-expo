#!/usr/bin/env node
import { execFileSync } from "node:child_process";

const exceptionExpires = new Date("2026-10-15T00:00:00Z");
const allowedHigh = new Set(["image-size", "vinext"]);

let report;
try {
  const npmCli = process.env.npm_execpath;
  if (!npmCli) throw new Error("security:audit must be run through npm");
  report = JSON.parse(execFileSync(process.execPath, [npmCli, "audit", "--json"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }));
} catch (error) {
  const output = error.stdout?.toString();
  if (!output) throw error;
  report = JSON.parse(output);
}

const vulnerabilities = Object.entries(report.vulnerabilities ?? {});
const critical = vulnerabilities.filter(([, item]) => item.severity === "critical");
const high = vulnerabilities.filter(([, item]) => item.severity === "high");
const unexpectedHigh = high.filter(([name]) => !allowedHigh.has(name));
const expired = Date.now() >= exceptionExpires.getTime();

if (critical.length || unexpectedHigh.length || (expired && high.length)) {
  console.error("dependency security gate failed");
  for (const [name, item] of [...critical, ...unexpectedHigh]) {
    console.error(`- ${item.severity}: ${name}`);
  }
  if (expired && high.length) console.error("- the Vinext exception expired on 2026-10-15");
  process.exit(1);
}

console.log("dependency security gate passed: no critical or unexpected high findings");
if (high.length) {
  console.log("time-bound exception: vinext/image-size high findings expire 2026-10-15");
}
