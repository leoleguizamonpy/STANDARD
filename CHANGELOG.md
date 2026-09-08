# Changelog

All notable changes to STANDARD are documented here.

## [1.1.0] - 2026-09-08

### Added
- Formal `ROADMAP.md` authority for execution sequence, current state, blockers, evidence, known debt and next work.
- `docs/roadmap/ROADMAP_STANDARD.md` with mandatory FOUNDATION/ROADMAP responsibility separation.
- Canonical `templates/ROADMAP.template.md`.
- Bootstrap-generated `ROADMAP.md` for new projects.
- Self-test assertion that generated projects contain ROADMAP.
- Canonical lifecycle distinction: `IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED`.

### Changed
- Documentation and governance standards now explicitly define ROADMAP as a scoped project authority when development is evolving/phased.
- FOUNDATION is explicitly prohibited from acting as the canonical progress tracker.
- ROADMAP is explicitly prohibited from redefining product identity, scope, invariants, domain semantics or architecture authority.
- STANDARD itself now uses `git.flow: mainline`, matching its stable-main + temporary-branch operating model.

## [1.0.0] - 2026-09-08

### Added
- Governance authority scoped by responsibility, normative language, exceptions, ADR policy and SemVer rules.
- Git standard with explicit `mainline` and `develop` flows.
- Documentation authority and synchronization rules.
- Universal architecture boundary and dependency rules.
- Machine-readable source-authority and architecture policies.
- Security baseline and P0/P1 release blockers.
- Quality gate, severity and exact-HEAD certification rules.
- Profiles: `web-application`, `api`, `static-web`, `library`.
- Canonical README, FOUNDATION, AGENTS and ADR templates.
- Pull request template.
- Machine-readable `project.standard.yml` contract and JSON Schema draft 2020-12.
- Executable conformance verifier (`pnpm standard:verify`).
- Safe project bootstrap generator (`pnpm bootstrap`).
- Positive, negative and generated-project self-tests.
- GitHub Actions verification workflow.
- Ecosystem audit covering TOURNA, ACTIO, LEOLEGUIZAMON, SEOT and BrandADN.

### Changed
- Permanent `develop` is not universal; projects explicitly choose `mainline` or `develop`.
- Authority is no longer modeled as one flat document hierarchy; ownership is responsibility-scoped.
- Formal certification evidence is bound to the exact commit/HEAD evaluated.
- Deferred profiles are not accepted by schema/bootstrap until implemented.
- Runtime dependencies are pinned to exact direct versions for the 1.0.0 release candidate.

### Fixed
- AJV verifier now uses the JSON Schema 2020-12 dialect correctly.
- Module path resolution is portable via `fileURLToPath`.

## [0.1.0] - 2026-09-08

Initial development baseline for STANDARD v1.
