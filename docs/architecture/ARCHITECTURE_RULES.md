# Architecture Rules

## 1. Principle

Architecture exists to protect domain meaning, changeability, security and operational clarity. It MUST NOT exist merely to maximize layer count.

## 2. Logical boundaries

When applicable, projects SHOULD distinguish:

- `core`: stable cross-domain primitives with no dependency on product-specific infrastructure;
- `domains`: business/domain rules and models;
- `application`: use-cases and orchestration;
- `infrastructure`: databases, queues, filesystem, network providers and external implementations;
- `interfaces`: HTTP/UI/CLI/events and other delivery mechanisms.

Profiles MAY adapt names, but MUST preserve equivalent separation of concerns when those concerns exist.

## 3. Dependency direction

Preferred direction:

`interfaces -> application -> domains/core`

`infrastructure -> domain/application contracts`

Domain logic MUST NOT depend directly on UI frameworks, transport frameworks or vendor-specific infrastructure unless the profile explicitly justifies it.

## 4. Cycles

Circular dependencies across modules/domains are prohibited unless a documented exception demonstrates why the cycle is unavoidable and bounded.

## 5. Domain ownership

Each business concept SHOULD have one canonical owning module/domain. Other modules consume it through explicit contracts instead of duplicating rules.

## 6. Shared code

Code MUST NOT move to `shared`, `common`, `utils` or equivalent merely because two consumers exist. Shared abstractions require a stable semantic reason. Accidental duplication is cheaper than a false shared abstraction.

## 7. Contracts

Cross-boundary communication SHOULD use explicit contracts/types/interfaces/schemas. Contract changes MUST be assessed for backwards compatibility.

## 8. Infrastructure isolation

Vendor APIs, persistence engines and external SDKs SHOULD be wrapped at boundaries when coupling would materially increase replacement, testing or resilience cost.

## 9. Physical architecture

Directory structure MUST communicate responsibility. Deep nesting without semantic value SHOULD be avoided. A new top-level directory requires a defined responsibility.

## 10. Architectural verification

Rules that can be reliably machine-checked SHOULD become policies or verifier gates. Documentation is not an acceptable substitute for enforceable constraints when automated verification is practical.

## 11. Profiles

Profiles extend, restrict or specialize this base standard. A profile MUST NOT silently contradict a universal MUST; contradictions require an explicit versioned governance decision.
