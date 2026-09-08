# Git & Repository Standard

## 1. Protected intent

- `main`: certified/stable line. Direct feature development is prohibited after repository bootstrap.
- `develop`: integration line for normal development when the project uses two-line flow.

Projects MAY use trunk-based development only when declared by profile or explicit exception.

## 2. Branch taxonomy

Allowed prefixes:

- `feat/`
- `fix/`
- `refactor/`
- `docs/`
- `chore/`
- `audit/`
- `release/`
- `hotfix/`

Branch names MUST be lowercase, concise and kebab-case after the prefix.

## 3. Flow

Normal:

`feature branch -> develop -> release/* -> main`

Hotfix:

`main -> hotfix/* -> main`, then synchronize back to `develop`.

## 4. Commits

Use Conventional Commits. Minimum supported types:

`feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `build`, `ci`, `perf`, `security`, `audit`.

Commits MUST describe one coherent change. Generated noise, unrelated refactors and formatting sweeps SHOULD NOT be mixed with functional changes.

## 5. Pull requests

PRs MUST include:

- purpose;
- scope;
- architectural impact;
- security impact when applicable;
- tests/evidence;
- documentation impact;
- migration impact;
- checklist of applicable gates.

No PR may be considered ready when required checks fail.

## 6. Merge strategy

Default: squash merge for feature/fix/refactor/docs/chore/audit branches to preserve a readable integration history.

Release and hotfix branches MAY use merge commits when preserving release topology is useful.

## 7. Releases

Stable releases MUST:

- pass required gates;
- update `VERSION`;
- update `CHANGELOG.md`;
- use semantic version tags (`vX.Y.Z`);
- contain no known unresolved P0/P1 blocker.

## 8. Repository hygiene

Repositories MUST NOT keep obsolete generated copies, abandoned duplicate implementations, committed secrets, unexplained binaries or dead architecture paths without explicit justification.
