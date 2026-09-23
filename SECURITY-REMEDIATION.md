# Gulf Wave security remediation

## Dependency gate

- Baseline: 1 critical, 16 high, 6 moderate, 1 low.
- Remediated result: 0 critical, 2 high, 4 moderate, 0 low.
- CI blocks every critical finding and every high finding except the exact, time-bound allowlist below.

### Temporary Vinext exception

- Allowed packages: `vinext` and its transitive `image-size` finding only.
- Owner: Gulf Wave maintainer.
- Expires: 2026-10-15. The gate fails automatically on or after that date.
- Rationale: the available Vinext 1.0 beta was tested, but it broke the repository's verified Worker/import and generated-CSS expectations. The upgrade was rolled back instead of disabling tests or shipping an unverified major beta.
- Exit plan: migrate the Vinext integration and its tests to the stable 1.x-compatible build path, then remove the allowlist.

The remaining moderate findings are confined to the `drizzle-kit` development toolchain (`@esbuild-kit/*` and `esbuild`) and are not part of the browser production bundle.

## Pre-existing test debt

The original `main` commit (`01336b4`) and this remediation branch both pass the Vinext export but fail the same two existing assertions:

1. a generated page is expected to contain development-only `codex-preview` metadata;
2. generated CSS is expected to contain `scrollbar-width: thin`.

These failures were reproduced from a clean detached worktree before changing dependencies. They are not suppressed or rewritten in this remediation. The security header test, TypeScript check, lint, Next static export, and Vinext export are verified independently.
