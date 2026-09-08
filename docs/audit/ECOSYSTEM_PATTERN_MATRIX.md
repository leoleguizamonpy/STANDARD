# Ecosystem Pattern Matrix

Purpose: extract proven cross-project engineering patterns from existing repositories without importing product-specific domain logic.

## Repositories sampled

- TOURNA
- ACTIO
- LEOLEGUIZAMON

## Common proven patterns

| Pattern | TOURNA | ACTIO | LEOLEGUIZAMON | STANDARD decision |
|---|---|---|---|---|
| FOUNDATION as product authority | yes | yes | yes | MUST |
| AGENTS as operational AI contract | yes | yes | yes | MUST |
| Explicit architecture boundaries | yes | yes | yes | MUST when applicable |
| Domain-specific rules kept out of generic core | yes | yes | yes | MUST |
| External providers isolated from core | yes | yes | yes (Luca) | SHOULD when coupling cost is material |
| Secrets excluded from frontend/repo | yes | yes | yes | MUST |
| Quality gates beyond compile | yes | yes | target | MUST define applicable gates |
| Certification distinct from implementation | yes | yes | yes | MUST |
| Documentation has declared authority order | yes | yes | yes | MUST |
| Legacy/superseded knowledge loses current authority | yes | yes | yes | MUST |
| Main represents stable/certified state | yes | yes | yes | MUST |
| Temporary scoped branches | yes | yes | yes | SHOULD |
| Permanent develop branch | no | not universal | no | MAY, never universal |
| Architecture adapted to product shape | yes | yes | yes | MUST avoid ceremonial layers |
| Auditability / reproducible evidence | yes | yes | yes | MUST for certification |

## Important divergence: Git flow

The repositories prove that one branch topology does not fit every project.

### Mainline flow

Used naturally by projects such as TOURNA and LEOLEGUIZAMON:

`main -> scoped temporary branch -> PR -> verified main -> delete branch`

This minimizes long-lived integration divergence.

### Develop flow

Useful when a project intentionally needs a persistent integration line:

`main -> develop -> scoped branch -> develop -> release -> main`

STANDARD therefore models Git flow as a declared project choice: `mainline` or `develop`.

## Patterns deliberately NOT generalized

The following remain product/domain-specific and MUST NOT enter the universal standard:

- sports rules, standings or Sport Domains from TOURNA;
- Activities, Calendar, Presentation or Capability semantics from ACTIO;
- CSS visual-parity rules or Luca pricing behavior from LEOLEGUIZAMON;
- specific ports, framework versions, database products or deployment providers;
- project-specific certification phase counts.

## Extracted engineering doctrine

1. One product concept should have one canonical authority.
2. Domain logic should not be polluted by provider or presentation conditionals.
3. Implementation, testing, integration and certification are different states.
4. Evidence matters more than claimed completion.
5. Documentation must track the code state and authority order.
6. Reusable architecture should remove accidental duplication without creating false abstractions.
7. Infrastructure/provider choices should remain replaceable when replacement cost matters.
8. Stable branches represent evidence-backed state, not active experimentation.
9. Security, accessibility and operational readiness are product concerns when applicable, not post-release decoration.
10. A standard must permit justified architectural variation rather than forcing identical folder trees.
