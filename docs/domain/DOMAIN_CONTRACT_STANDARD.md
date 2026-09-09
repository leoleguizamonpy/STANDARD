# Domain and Contract Standard

## 1. Purpose

This standard defines the authority of domain semantics and cross-boundary contracts. It separates functional meaning from technical structure and from decision history.

## 2. Authority

Domain documentation and domain contracts own:

- business concepts and terminology;
- domain invariants and functional rules;
- state transitions and allowed behaviors;
- validation rules that belong to domain meaning;
- canonical ownership of business concepts;
- input/output semantics at domain boundaries;
- compatibility expectations for published contracts.

They do not own repository structure, deployment topology, framework selection, delivery sequencing or historical rationale.

## 3. Mandatory separation

```text
ARCHITECTURE
= technical boundaries, components, dependency direction and structural responsibilities

DOMAIN / CONTRACTS
= business meaning, functional semantics, invariants and boundary behavior

ADR
= why a material decision was made, alternatives considered and how authority changed
```

A domain rule MUST NOT exist only inside an architecture document or ADR when it is part of current functional truth.

An architectural rule MUST NOT be inferred only from a domain contract.

An ADR MUST NOT become the only current source for a rule that belongs to Architecture or Domain/Contracts.

## 4. Canonical ownership

Each material business concept SHOULD have one canonical owning domain. Other domains MUST consume that concept through explicit contracts rather than redefine its meaning.

Duplicated business rules across domains are prohibited unless an explicit exception documents why duplication is necessary and how divergence is prevented.

## 5. Contracts

Cross-boundary communication SHOULD use explicit contracts such as:

- types/interfaces;
- schemas;
- API/event contracts;
- command/query models;
- documented state-transition contracts.

A contract MUST identify its owning boundary and intended consumers when ambiguity would otherwise exist.

## 6. Compatibility

Material contract changes MUST be assessed for compatibility.

Breaking changes require one of:

- coordinated migration;
- explicit versioning;
- compatibility layer;
- approved exception with bounded risk.

Silent semantic breaking changes are prohibited.

## 7. Domain invariants

Domain invariants MUST be represented in the domain authority and SHOULD be directly tested when practical.

Infrastructure or UI behavior MUST NOT silently weaken a domain invariant.

## 8. State and behavior

When a domain has meaningful lifecycle states, the allowed states and transitions SHOULD be explicit. Invalid transitions MUST be rejected at a trusted boundary.

## 9. External providers

Vendor/provider semantics MUST NOT become canonical domain meaning unless the product explicitly adopts them as domain truth. Provider-specific details SHOULD remain behind adapters or infrastructure boundaries.

## 10. Change control

When implementation work discovers that current domain semantics are wrong or incomplete, the owning domain authority MUST be updated in the same governed change.

If the change is a material decision with alternatives or migration cost, an ADR SHOULD accompany it.

## 11. Verification

Rules that can be reliably machine-checked SHOULD be represented by tests, schemas, policies or gates. Documentation remains authoritative for meaning that cannot be safely automated.
