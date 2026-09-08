# Changelog

All notable changes to STANDARD are documented here.

## [Unreleased]

### Added
- Governance authority chain, normative language, exceptions, ADR policy and SemVer rules.
- Git standard with explicit `mainline` and `develop` flows.
- Documentation authority and synchronization rules.
- Universal architecture boundary and dependency rules.
- Security baseline and P0/P1 release blockers.
- Quality gate, severity and certification rules.
- Profiles: `web-application`, `api`, `static-web`, `library`.
- Canonical README, FOUNDATION, AGENTS and ADR templates.
- Pull request template.
- Machine-readable `project.standard.yml` contract and JSON Schema.
- Executable conformance verifier (`pnpm standard:verify`).
- Safe project bootstrap generator (`pnpm bootstrap`).
- Positive, negative and generated-project self-tests.
- GitHub Actions verification workflow.
- Ecosystem pattern audit based on TOURNA, ACTIO and LEOLEGUIZAMON.

### Changed
- Permanent `develop` is no longer treated as universal; projects explicitly choose `mainline` or `develop`.
- Deferred profiles are not accepted by the schema or bootstrap until they are actually implemented.

## [0.1.0] - 2026-09-08

Initial development baseline for STANDARD v1.
