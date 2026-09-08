# Ecosystem Pattern Matrix

Purpose: extract proven cross-project engineering patterns from existing repositories without importing product-specific domain logic.

## Repositories sampled

- TOURNA
- ACTIO
- LEOLEGUIZAMON
- SEOT
- BrandADN

## Common proven patterns

| Pattern | TOURNA | ACTIO | LEOLEGUIZAMON | SEOT | BrandADN | STANDARD decision |
|---|---|---|---|---|---|---|
| FOUNDATION as product identity/scope authority | yes | yes | yes | yes | yes | MUST |
| AGENTS as operational AI/development contract | yes | yes | yes | yes | yes | MUST |
| Explicit architecture boundaries | yes | yes | yes | yes | yes | MUST when applicable |
| Domain-specific rules kept out of generic core | yes | yes | yes | yes | yes | MUST |
| External providers isolated from core | yes | yes | yes (Luca) | yes | yes | SHOULD when coupling cost is material |
| Secrets excluded from frontend/repo | yes | yes | yes | yes | yes | MUST |
| Quality gates beyond compile | yes | yes | target | yes | yes | MUST define applicable gates |
| Certification distinct from implementation | yes | yes | yes | yes | yes | MUST |
| Authority declared by responsibility | yes | yes | yes | explicit | explicit | MUST |
| Superseded knowledge loses current authority | yes | yes | yes | yes | yes | MUST |
| Stable main represents evidence-backed state | yes | yes | yes | yes | yes | MUST |
| Temporary scoped branches | yes | yes | yes | yes | yes | SHOULD |
| Permanent develop branch | no | not universal | no | not required | no | MAY, never universal |
| Architecture adapted to product shape | yes | yes | yes | yes | yes | MUST avoid ceremonial layers |
| Auditability / reproducible evidence | yes | yes | yes | yes | yes | MUST for certification |
| Exact revision matters for certification | yes | yes | target | yes | explicit | MUST for formal certification |
| Status/evidence distinctions | explicit | explicit | yes | yes | explicit | SHOULD keep IMPLEMENTED/TESTED/INTEGRATED/CERTIFIED distinct |

## Corrections produced by the audit

### 1. Git flow is configurable

Initial STANDARD thinking over-weighted a permanent `develop` branch. TOURNA, LEOLEGUIZAMON and BrandADN demonstrate a strong mainline model:

`main -> scoped temporary branch -> PR -> verified main -> delete branch`

STANDARD now supports both `mainline` and `develop`, declared in `project.standard.yml`.

### 2. Authority is scoped, not flat

SEOT makes the distinction explicit: Foundation owns identity/purpose, Architecture owns technical boundaries, contracts own functional semantics, Governance owns development rules, and ADRs record scoped decisions.

STANDARD therefore rejects a simplistic global document hierarchy. Sources own responsibilities; overlap is resolved by declared scope subject to law, security and the adopted STANDARD.

### 3. Certification belongs to an exact revision

BrandADN explicitly certifies exact HEADs and treats later commits as new candidates. TOURNA and ACTIO similarly separate certification evidence from implementation state.

STANDARD therefore requires formal certification evidence to identify the exact commit/HEAD SHA evaluated.

## Patterns deliberately NOT generalized

The following remain product/domain-specific and MUST NOT enter the universal standard:

- sports rules, standings or Sport Domains from TOURNA;
- Activities, Calendar, Presentation or Capability semantics from ACTIO;
- CSS visual-parity rules or Luca pricing behavior from LEOLEGUIZAMON;
- SEOT knowledge-model semantics and Navigator/Project Core behavior;
- Brand DNA, visual grammar, correction or thesis-specific flows from BrandADN;
- specific ports, framework versions, database products or deployment providers;
- project-specific phase counts or deliverable naming.

## Extracted engineering doctrine

1. Every important concept needs a canonical owner, but authority must be scoped by responsibility.
2. Domain logic should not be polluted by provider or presentation conditionals.
3. Implementation, testing, integration and certification are different states.
4. Evidence matters more than claimed completion.
5. Formal certification must bind to the exact revision tested.
6. Documentation must track code state and declare ownership of responsibilities.
7. Reusable architecture should remove accidental duplication without creating false abstractions.
8. Infrastructure/provider choices should remain replaceable when replacement cost matters.
9. Stable branches represent evidence-backed state, not active experimentation.
10. Security, accessibility and operational readiness are product concerns when applicable, not post-release decoration.
11. A standard must permit justified architectural variation rather than forcing identical folder trees.
