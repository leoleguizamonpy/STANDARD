# Governance Standard

## 1. Authority model

Authority is **scoped by responsibility**, not flattened into one universal document order.

Universal precedence:

1. applicable law and mandatory external obligations;
2. security-critical constraints;
3. adopted STANDARD version/profile;
4. project authorities within their declared responsibility;
5. implementation/local conventions.

Project authorities normally include:

- `FOUNDATION.md` — product identity, purpose, scope, invariants and non-goals;
- architecture documentation — technical boundaries and dependency direction;
- domain/contracts — functional semantics within their owned domain;
- governance documents — development/integration rules;
- ADRs — decisions and changes to specific architectural/governance boundaries;
- schemas/policies — machine-readable constraints;
- roadmap/status documents — sequence and current state, not product-definition authority.

A source MUST NOT claim authority outside its declared responsibility. When two sources overlap, the one explicitly owning that responsibility prevails, subject to universal obligations above.

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

ADRs document decisions; they do not automatically become universal authority over unrelated responsibilities.

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
