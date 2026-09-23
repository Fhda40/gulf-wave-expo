#!/usr/bin/env node
import { execSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const rules = [
  { id: "private_key", re: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g },
  { id: "github_token", re: /\bgh[pousr]_[A-Za-z0-9]{30,}\b/g },
  { id: "aws_access_key", re: /\bAKIA[0-9A-Z]{16}\b/g },
  { id: "openai_key", re: /\bsk-[A-Za-z0-9]{32,}\b/g },
  { id: "database_password", re: /postgres(?:ql)?:\/\/[^\s:@/]+:([^\s@'\"]{6,})@/g },
  { id: "jwt", re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g },
];
const placeholders = /replace-with|your-|example|xxxx|changeme|PROJECT_REF|PASSWORD|REGION|<|>|\{\{|\.\.\./i;
const skipped = [/(^|\/)node_modules\//, /(^|\/)\.next\//, /(^|\/)dist\//, /(^|\/)build\//, /package-lock\.json$/, /(^|\/)scripts\/scan-secrets\.mjs$/, /\.(png|jpe?g|gif|svg|webp|ico|mp4|webm|woff2?|ttf|otf|zip|pdf)$/i];
const files = execSync("git ls-files", { encoding: "utf8" }).split("\n").map((file) => file.trim()).filter(Boolean);
const findings = [];

for (const file of files) {
  if (skipped.some((pattern) => pattern.test(file))) continue;
  try {
    if (statSync(file).size > 2_000_000) continue;
    const lines = readFileSync(file, "utf8").split("\n");
    for (const { id, re } of rules) {
      for (let index = 0; index < lines.length; index += 1) {
        re.lastIndex = 0;
        const match = re.exec(lines[index]);
        if (!match || placeholders.test(match[1] ?? match[0]) || placeholders.test(lines[index])) continue;
        findings.push({ id, file, line: index + 1 });
      }
    }
  } catch {}
}

if (findings.length) {
  console.error("secret scan failed; values are intentionally not printed");
  for (const finding of findings) console.error(`- ${finding.id}: ${finding.file}:${finding.line}`);
  process.exit(1);
}
console.log("secret scan: clean");
