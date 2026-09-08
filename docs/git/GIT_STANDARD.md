# Git & Repository Standard

## 1. Stable branch intent

- `main`: stable/certified line. Direct feature development is prohibited after repository bootstrap.
- `develop`: optional persistent integration line used only when the project explicitly selects `git.flow: develop`.

Every adopting project SHOULD declare one Git flow in `project.standard.yml`:

- `mainline`
- `develop`

If omitted temporarily during bootstrap, the repository MUST resolve the choice before formal certification.

## 2. Supported flow A — mainline

Recommended when scoped work can be integrated directly through short-lived branches:

`main -> scoped temporary branch -> PR -> verified main -> delete branch`

Properties:

- `main` is the only permanent product branch;
- each new branch starts from the latest validated `main`;
- long chains of dependent feature branches SHOULD be avoided;
- post-merge verification of resulting `main` SHOULD be performed for certification-critical work.

This is the preferred simple flow when a persistent integration branch adds no real value.

## 3. Supported flow B — develop

Use when the project intentionally needs a persistent integration line:

`main -> develop -> scoped branch -> develop -> release/* -> main`

Properties:

- `main` remains stable/certified;
- `develop` is integration state and MUST NOT be presented as certified production state;
- feature/fix/refactor branches normally target `develop`;
- release promotion to `main` requires applicable gates.

Hotfixes start from `main` and MUST be synchronized back into `develop` when this flow is used.

## 4. Branch taxonomy

Canonical prefixes:

- `feat/`
- `fix/`
- `refactor/`
- `docs/`
- `chore/`
- `audit/`
- `release/`
- `hotfix/`

Profiles or repositories MAY add meaningful prefixes such as `quality/`, `security/`, `hardening/`, `qualification/`, `integration/` or `ci/` when responsibilities are defined and branch sprawl is controlled.

Branch names MUST be lowercase, concise and kebab-case after the prefix.

## 5. Commits

Use Conventional Commits. Minimum supported types:

`feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `build`, `ci`, `perf`, `security`, `audit`.

Commits MUST describe one coherent change. Generated noise, unrelated refactors and formatting sweeps SHOULD NOT be mixed with functional changes.

## 6. Pull requests

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

## 7. Merge strategy

Default: squash merge for scoped feature/fix/refactor/docs/chore/audit branches to preserve readable history.

Release and hotfix branches MAY use merge commits when preserving release topology is useful.

## 8. Releases

Stable releases MUST:

- pass required gates;
- update `VERSION`;
- update `CHANGELOG.md`;
- use semantic version tags (`vX.Y.Z`);
- contain no known unresolved P0/P1 blocker.

## 9. Repository hygiene

Repositories MUST NOT keep obsolete generated copies, abandoned duplicate implementations, committed secrets, unexplained binaries or dead architecture paths without explicit justification.
