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

## 2. Authority by document

- `FOUNDATION.md` defines why the product exists and what must remain true.
- architecture docs define structural boundaries and dependency direction.
- ADRs explain significant decisions and trade-offs.
- `README.md` explains how to understand, run and contribute to the repository.
- `AGENTS.md` constrains automated contributors.

Documentation MUST NOT duplicate the same normative rule across multiple files without a clear canonical source.

## 3. Synchronization rule

A code change that invalidates documentation is incomplete.

A PR MUST update affected documentation in the same change or explicitly declare `documentation-impact: none` with a defensible reason.

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

## 6. AGENTS minimum

AGENTS MUST tell automated agents:

- authority order;
- allowed/forbidden modification zones;
- required verification commands;
- branch/commit behavior;
- documentation obligations;
- prohibition against inventing requirements or silently changing architecture.

## 7. ADR naming

Recommended format:

`docs/adr/NNNN-short-decision-title.md`

Numbers are monotonically increasing and never reused.
