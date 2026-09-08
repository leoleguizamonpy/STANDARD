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
- `ROADMAP.md` — execution sequence, current delivery state, blockers, evidence, known debt and next work;
- architecture documentation — technical boundaries and dependency direction;
- domain/contracts — functional semantics within their owned domain;
- governance documents — development/integration rules;
- ADRs — decisions and changes to specific architectural/governance boundaries;
- schemas/policies — machine-readable constraints.

The FOUNDATION/ROADMAP boundary is mandatory:

```text
FOUNDATION = what the product is and what must remain true
ROADMAP    = where execution stands and what happens next
```

`ROADMAP.md` MUST NOT redefine product identity, product scope, invariants, domain semantics or architectural authority. It may surface the need for such changes, but the owning authority MUST approve and represent them.

`FOUNDATION.md` MUST NOT be used as the canonical tracker for transient progress, phase state, blockers or next work.

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

## 5. ROADMAP governance

Projects with phased, milestone-based, multi-workstream or continuing development MUST maintain `ROADMAP.md` according to `docs/roadmap/ROADMAP_STANDARD.md`.

ROADMAP status MUST reflect current truth. A phase or milestone MUST NOT be promoted to a stronger state without the evidence required by that state.

The canonical lifecycle distinction is:

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

When certification is revision-bound, ROADMAP SHOULD identify the exact evaluated SHA.

A material change to sequencing, active phase, blockers, debt, closure state or certification status MUST update ROADMAP in the same governed change.

## 6. Versioning

STANDARD uses Semantic Versioning:

- PATCH: clarification or compatible correction.
- MINOR: backwards-compatible new rules/capabilities.
- MAJOR: breaking conformance change.

Projects MUST pin a concrete supported STANDARD version.

## 7. Deprecation

A deprecated rule SHOULD include:

- replacement rule;
- migration guidance;
- earliest removal version.

A rule MUST NOT disappear from a minor release without deprecation unless required by an urgent security issue.

## 8. Migration

Migration between STANDARD versions MUST be explicit. A project does not become non-conforming merely because a newer STANDARD version exists; it remains governed by the version it declares until migration is approved.

## 9. Change control

Changes to STANDARD itself MUST follow branch + PR workflow after bootstrap. No normative rule should be introduced only in conversation, issue text or commit message without being represented in repository authority.
