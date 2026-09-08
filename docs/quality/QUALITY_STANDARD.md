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

## 8. CI parity

Local verification and CI SHOULD execute equivalent authoritative checks to reduce discrepancies between developer and integration environments.
