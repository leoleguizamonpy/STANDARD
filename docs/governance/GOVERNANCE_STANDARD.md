# Governance Standard

## 1. Authority chain

Order of authority for any adopting repository:

1. Applicable law and mandatory external obligations.
2. Security-critical constraints.
3. `FOUNDATION.md` of the project.
4. Adopted STANDARD version and profile.
5. Approved ADRs.
6. Repository policies and schemas.
7. Implementation and local conventions.

Lower layers MUST NOT contradict higher layers.

## 2. Normative language

- **MUST / MUST NOT**: mandatory for conformance.
- **SHOULD / SHOULD NOT**: expected unless a documented exception exists.
- **MAY**: optional.

## 3. Exceptions

Any exception to a MUST requires:

- unique ID;
- affected rule;
- rationale;
- scope;
- risk assessment;
- owner;
- approval date;
- expiry or review date;
- compensating control when applicable.

Exceptions MUST be declared in `project.standard.yml` or an ADR referenced by it.

## 4. ADR policy

Use ADRs for decisions that materially affect architecture, security, data contracts, platform boundaries, deployment, governance or future migration cost.

Status values:

- proposed
- accepted
- superseded
- deprecated
- rejected

Accepted ADRs MUST NOT be silently rewritten. Material changes require a new ADR that supersedes the previous one.

## 5. Versioning

STANDARD uses Semantic Versioning:

- PATCH: clarification or compatible correction.
- MINOR: backwards-compatible new rules/capabilities.
- MAJOR: breaking conformance change.

Projects MUST pin a concrete supported STANDARD version.

## 6. Deprecation

A deprecated rule SHOULD include:

- replacement rule;
- migration guidance;
- earliest removal version.

A rule MUST NOT disappear from a minor release without deprecation unless required by an urgent security issue.

## 7. Migration

Migration between STANDARD versions MUST be explicit. A project does not become non-conforming merely because a newer STANDARD version exists; it remains governed by the version it declares until migration is approved.

## 8. Change control

Changes to STANDARD itself MUST follow branch + PR workflow after bootstrap. No normative rule should be introduced only in conversation, issue text or commit message without being represented in repository authority.
