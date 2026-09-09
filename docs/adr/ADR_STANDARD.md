# ADR Standard

## 1. Purpose

Architecture Decision Records preserve the rationale, context and transition history of material decisions. ADRs explain why authority changed; they are not a substitute for the current authoritative rule.

## 2. ADR authority

An ADR owns:

- decision context;
- considered alternatives;
- decision rationale;
- consequences and trade-offs;
- migration implications;
- supersession history.

An ADR does not own current product identity, roadmap state, architecture boundaries, domain semantics or governance rules outside the decision's declared scope.

## 3. Current truth rule

When an accepted ADR changes a current rule, the owning authority MUST be updated in the same governed change.

Examples:

- architecture decision -> update architecture authority;
- domain semantic decision -> update domain/contract authority;
- governance decision -> update governance authority;
- product-scope decision -> update FOUNDATION;
- sequencing/status impact -> update ROADMAP when applicable.

The ADR records why the change happened. The owning authority records what is currently true.

## 4. Status lifecycle

Allowed statuses:

- proposed
- accepted
- superseded
- deprecated
- rejected

Accepted ADRs MUST NOT be silently rewritten. Material changes require a new ADR that supersedes the previous record.

## 5. When ADR is required

Use an ADR when a decision materially affects one or more of:

- architecture boundaries or dependency direction;
- security model;
- domain ownership or semantics;
- data/contract compatibility;
- platform/runtime/deployment strategy;
- governance or Git model;
- external provider coupling;
- migration cost or reversibility.

Routine implementation details do not require ADRs unless they create durable architectural or domain consequences.

## 6. Minimum content

An ADR SHOULD contain:

- status;
- date;
- scope;
- context;
- decision;
- alternatives considered;
- consequences;
- migration/rollback notes when relevant;
- authorities updated by the decision;
- supersedes/superseded-by references when applicable.

## 7. Boundary rule

```text
ADR = WHY the decision was made
OWNING AUTHORITY = WHAT is currently true
```

A repository MUST NOT require readers to reconstruct current truth by replaying ADR history.
