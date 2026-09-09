# Architecture Rules

## 1. Principle

Architecture exists to protect domain meaning, changeability, security and operational clarity. It MUST NOT exist merely to maximize layer count.

## 2. Architecture authority

Architecture documentation owns:

- technical boundaries and components;
- dependency direction;
- structural responsibilities;
- integration topology;
- interface/infrastructure separation;
- repository and runtime structure when architectural.

Architecture documentation MUST NOT become the canonical source for business semantics, functional rules or historical decision rationale.

Current domain meaning belongs to domain/contract authorities. Decision rationale belongs to ADRs.

## 3. Mandatory authority separation

```text
ARCHITECTURE
= technical structure, boundaries and dependency direction

DOMAIN / CONTRACTS
= business meaning, functional semantics, invariants and boundary behavior

ADR
= rationale, alternatives, consequences and supersession history
```

A material architecture decision MAY require an ADR, but the resulting current architectural truth MUST be represented in architecture documentation itself.

## 4. Logical boundaries

When applicable, projects SHOULD distinguish:

- `core`: stable cross-domain primitives with no dependency on product-specific infrastructure;
- `domains`: business/domain rules and models;
- `application`: use-cases and orchestration;
- `infrastructure`: databases, queues, filesystem, network providers and external implementations;
- `interfaces`: HTTP/UI/CLI/events and other delivery mechanisms.

Profiles MAY adapt names, but MUST preserve equivalent separation of concerns when those concerns exist.

## 5. Dependency direction

Preferred direction:

`interfaces -> application -> domains/core`

`infrastructure -> domain/application contracts`

Domain logic MUST NOT depend directly on UI frameworks, transport frameworks or vendor-specific infrastructure unless the profile explicitly justifies it.

## 6. Cycles

Circular dependencies across modules/domains are prohibited unless a documented exception demonstrates why the cycle is unavoidable and bounded.

## 7. Domain ownership

Each business concept SHOULD have one canonical owning module/domain. The semantics of that concept belong to the domain authority defined by `docs/domain/DOMAIN_CONTRACT_STANDARD.md`.

Architecture MAY define where that domain lives and how other components depend on it, but MUST NOT duplicate its business rules.

## 8. Shared code

Code MUST NOT move to `shared`, `common`, `utils` or equivalent merely because two consumers exist. Shared abstractions require a stable semantic reason. Accidental duplication is cheaper than a false shared abstraction.

## 9. Contracts

Cross-boundary communication SHOULD use explicit contracts/types/interfaces/schemas. Contract semantics and compatibility are governed by `docs/domain/DOMAIN_CONTRACT_STANDARD.md`.

Architecture owns where boundaries exist and how they connect; Domain/Contracts owns what those interactions mean.

## 10. Infrastructure isolation

Vendor APIs, persistence engines and external SDKs SHOULD be wrapped at boundaries when coupling would materially increase replacement, testing or resilience cost.

## 11. Physical architecture

Directory structure MUST communicate responsibility. Deep nesting without semantic value SHOULD be avoided. A new top-level directory requires a defined responsibility.

## 12. Architectural verification

Rules that can be reliably machine-checked SHOULD become policies or verifier gates. Documentation is not an acceptable substitute for enforceable constraints when automated verification is practical.

## 13. Profiles

Profiles extend, restrict or specialize this base standard. A profile MUST NOT silently contradict a universal MUST; contradictions require an explicit versioned governance decision.
