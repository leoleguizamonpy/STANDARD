# Documentation Standard

## 1. Required project documents

Every adopting project MUST contain:

- `README.md`: operational entry point.
- `FOUNDATION.md`: product purpose, invariants, boundaries and non-goals.
- `AGENTS.md`: rules for AI-assisted development.
- `CHANGELOG.md`: release history.
- `VERSION` or equivalent machine-readable version source.
- architecture documentation appropriate to the profile.
- ADR directory when architectural decisions exist.

Projects with phased, milestone-based, multi-workstream or continuing development MUST also maintain:

- `ROADMAP.md`: execution sequence, current delivery state, blockers, evidence, known debt and next work.

A truly static/minimal project MAY omit ROADMAP only when there is no meaningful evolving delivery state.

## 2. Authority by document

- `FOUNDATION.md` defines why the product exists, what it is, its scope and what must remain true.
- `ROADMAP.md` defines where execution stands, what comes next, phase/milestone state, blockers and progress evidence.
- architecture docs define structural boundaries and dependency direction.
- ADRs explain significant decisions and trade-offs.
- `README.md` explains how to understand, run and contribute to the repository.
- `AGENTS.md` constrains automated contributors.

The boundary between FOUNDATION and ROADMAP is mandatory:

```text
FOUNDATION = product identity + scope + invariants
ROADMAP    = sequence + status + evidence + next work
```

`ROADMAP.md` MUST NOT redefine identity, scope, product invariants, domain semantics or architecture authority.

`FOUNDATION.md` MUST NOT be used as a progress tracker.

The full roadmap contract is defined in `docs/roadmap/ROADMAP_STANDARD.md`.

Documentation MUST NOT duplicate the same normative rule across multiple files without a clear canonical source.

## 3. Synchronization rule

A code change that invalidates documentation is incomplete.

A PR MUST update affected documentation in the same change or explicitly declare `documentation-impact: none` with a defensible reason.

A PR that changes project progress, sequencing, blockers, known debt, phase closure or certification status MUST update `ROADMAP.md` when ROADMAP is applicable.

## 4. README minimum

README SHOULD contain:

- project purpose;
- status;
- architecture summary;
- prerequisites;
- install/run/test/verify commands;
- repository map;
- contribution flow;
- link to FOUNDATION and architecture docs;
- link to ROADMAP when applicable;
- adopted STANDARD version/profile.

## 5. FOUNDATION minimum

FOUNDATION MUST define:

- problem;
- users/actors when relevant;
- scope;
- non-goals;
- domain boundaries;
- invariants;
- source-of-truth rules;
- security-critical assumptions;
- success criteria.

FOUNDATION MUST NOT carry transient implementation progress, phase percentages, temporary blockers or current sprint state as normative product definition.

## 6. ROADMAP minimum

When applicable, ROADMAP MUST define:

- overall current status;
- current baseline/version;
- active phase or milestone;
- ordered phases/milestones/workstreams;
- status per tracked unit;
- blockers;
- evidence required for closure;
- known deferred debt;
- next work;
- closure/certification criteria where applicable.

Projects SHOULD use the canonical lifecycle vocabulary from `docs/roadmap/ROADMAP_STANDARD.md` and preserve the distinction:

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

## 7. AGENTS minimum

AGENTS MUST tell automated agents:

- authority order;
- allowed/forbidden modification zones;
- required verification commands;
- branch/commit behavior;
- documentation obligations;
- prohibition against inventing requirements or silently changing architecture;
- requirement to update ROADMAP when execution state materially changes and ROADMAP is applicable.

## 8. ADR naming

Recommended format:

`docs/adr/NNNN-short-decision-title.md`

Numbers are monotonically increasing and never reused.
