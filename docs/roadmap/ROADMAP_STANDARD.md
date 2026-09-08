# ROADMAP Standard

## 1. Purpose

`ROADMAP.md` is the project authority for execution sequence, current delivery state, phase/milestone progression, blockers, known debt and evidence of progress.

ROADMAP answers **where the project is and what comes next**. It does not define what the product fundamentally is.

## 2. Authority boundary

The separation between `FOUNDATION.md` and `ROADMAP.md` is mandatory:

### FOUNDATION.md owns

- product identity;
- problem and purpose;
- scope and non-goals;
- actors/users when relevant;
- domain boundaries;
- invariants;
- product-level source-of-truth rules;
- security-critical assumptions;
- success criteria.

### ROADMAP.md owns

- current project state;
- execution sequence;
- phases, milestones or workstreams;
- status of each phase/milestone;
- blockers and dependencies;
- evidence links and exact SHAs when relevant;
- known debt intentionally deferred;
- next planned work;
- closure criteria.

`ROADMAP.md` MUST NOT redefine product identity, scope, invariants, domain semantics or architecture authority. If execution work discovers that one of those must change, the owning authority (`FOUNDATION.md`, architecture docs, domain contracts, ADRs, etc.) MUST be changed through its own governed process.

`FOUNDATION.md` MUST NOT be used as a progress tracker.

## 3. Applicability

An adopting project with phased, milestone-based, multi-workstream or continuing development MUST maintain `ROADMAP.md`.

A truly static/minimal project MAY omit it only when there is no meaningful evolving delivery state. The omission SHOULD be defensible from the project profile and current lifecycle.

STANDARD bootstrap generates `ROADMAP.md` by default.

## 4. Required ROADMAP content

When present, `ROADMAP.md` MUST identify:

1. current overall status;
2. current project/version baseline;
3. active phase or milestone;
4. ordered phases/milestones/workstreams;
5. status for each tracked unit;
6. blockers when any exist;
7. evidence required for closure;
8. known deferred debt;
9. next action or next phase;
10. closure/certification criteria where certification applies.

For projects using commit-bound verification or certification, ROADMAP SHOULD reference the exact verified/certified SHA rather than only a branch name.

## 5. Status vocabulary

Projects SHOULD use the following lifecycle vocabulary unless a domain-specific reason requires an explicitly documented mapping:

- `NOT STARTED`
- `IN PROGRESS`
- `BLOCKED`
- `IMPLEMENTED`
- `TESTED`
- `INTEGRATED`
- `CERTIFIED`
- `CLOSED`

These states are not interchangeable:

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

Meaning:

- `IMPLEMENTED`: required implementation exists in the candidate change.
- `TESTED`: applicable tests/gates passed for the evaluated candidate.
- `INTEGRATED`: the change exists in the canonical integration/stable branch.
- `CERTIFIED`: all mandatory certification evidence passed for an exact revision.
- `CLOSED`: the phase/milestone has satisfied its declared closure criteria and no required cleanup/integration action remains.

A project MUST NOT claim a stronger state based solely on evidence for a weaker state.

## 6. Evidence discipline

ROADMAP status MUST be evidence-backed when the project has automated gates.

Examples of valid evidence include:

- exact commit SHA;
- CI/workflow run;
- test report;
- audit record;
- migration/rollback evidence;
- post-merge verification;
- physical branch cleanup when branch convergence is part of closure.

`PASS`, `CERTIFIED` or `CLOSED` MUST NOT be asserted when a mandatory gate is failed, pending, skipped without approved justification, or evaluated against a different revision.

## 7. Synchronization

A PR that materially changes project progress, closes/reopens a phase, changes sequencing, introduces/removes a blocker or changes known debt MUST update `ROADMAP.md` in the same change.

A stale ROADMAP is a documentation defect.

The ROADMAP SHOULD describe current truth, not preserve superseded status as active truth. Historical evidence belongs in changelogs, audit/certification records, ADRs or archive documentation as appropriate.

## 8. Architecture and product changes discovered through ROADMAP

ROADMAP may surface a required change but cannot authorize it outside its scope.

Example:

```text
ROADMAP detects: Competition Core boundary must change
        ↓
Architecture/ADR owns and approves the structural decision
        ↓
ROADMAP records the resulting execution work and status
```

This prevents planning documents from silently becoming product or architecture authorities.

## 9. Completion rule

A project MAY call a roadmap phase `CLOSED` only when its declared exit criteria are met.

If the exit criteria include merge, post-merge verification, certification or branch cleanup, those actions are part of the phase and MUST complete before closure.

## 10. Relationship summary

```text
FOUNDATION = what the product is and what must remain true
ARCHITECTURE = how responsibilities and dependencies are structured
ROADMAP = where execution stands and what happens next
CHANGELOG = what shipped historically
CERTIFICATION/AUDIT = evidence that required conditions were proven
```
