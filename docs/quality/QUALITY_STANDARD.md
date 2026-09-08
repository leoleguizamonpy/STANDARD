# Quality Standard

## 1. Definition of done

A change is not done because it compiles locally. Applicable quality gates MUST pass and evidence MUST be reproducible.

## 2. Universal gates

Every adopting project MUST define how it evaluates:

- repository/structure conformance;
- documentation synchronization;
- security baseline;
- tests appropriate to the risk;
- build/runtime viability when applicable.

## 3. Conditional gates

Depending on stack/profile, projects SHOULD include:

- lint;
- typecheck;
- unit tests;
- integration tests;
- end-to-end tests;
- architecture/dependency checks;
- accessibility checks;
- performance checks;
- database/schema checks.

A gate that is not applicable MAY be omitted, but omission SHOULD be explainable by profile or project configuration.

## 4. Coverage

STANDARD does not impose an arbitrary universal coverage percentage. Coverage targets MUST reflect risk and criticality. Critical domain invariants require direct tests even if global coverage is high.

## 5. Severity

- P0: active catastrophic/security/data-loss blocker. Release prohibited.
- P1: critical correctness/security/architecture blocker. Release prohibited.
- P2: significant issue; normally resolve before release or document accepted risk.
- P3: improvement/debt; may be scheduled.

## 6. Gate result

Each automated gate MUST produce an unambiguous PASS/FAIL outcome and non-zero process exit code on failure when technically feasible.

## 7. Certification

A release may be called `CERTIFIED` only when all mandatory gates for the adopted STANDARD version/profile are PASS and there are no unresolved P0/P1 blockers.

Formal certification MUST identify the exact commit/HEAD SHA that was evaluated. A later commit is a different candidate and MUST NOT inherit prior certification automatically.

When certification is PR-based, the project SHOULD verify that the tested head/merge candidate matches the revision actually promoted. Critical release flows SHOULD use expected-head protection or an equivalent control against merging a moved head.

## 8. CI parity

Local verification and CI SHOULD execute equivalent authoritative checks to reduce discrepancies between developer and integration environments.

## 9. Evidence integrity

Status labels such as `IMPLEMENTED`, `TESTED`, `INTEGRATED` and `CERTIFIED` SHOULD remain distinct when the project uses formal certification. Evidence must correspond to the state being claimed; repository tooling or prepared infrastructure is not proof of a real external production condition.
