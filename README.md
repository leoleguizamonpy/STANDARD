# STANDARD

**STANDARD** es la fuente de verdad de ingeniería para los proyectos de `leoleguizamonpy`.

Su función es definir cómo se inicializa, organiza, desarrolla, verifica, audita, certifica y evoluciona un proyecto, sin contener lógica específica de negocio de ningún producto.

## Estado

**STANDARD v1.2.0 — CANDIDATE**

La versión 1.2.0 formaliza la separación de autoridad entre Architecture, Domain/Contracts y ADR, manteniendo la separación FOUNDATION/ROADMAP/GOVERNANCE introducida previamente.

## Principio rector

> STANDARD gobierna cómo construimos. Cada producto decide qué construimos.

## Modelo de autoridades

```text
FOUNDATION
→ qué es el producto y qué debe permanecer verdadero

ROADMAP
→ dónde está la ejecución y qué sigue

GOVERNANCE
→ bajo qué reglas se desarrolla, integra y cambia

ARCHITECTURE
→ cómo está estructurado técnicamente

DOMAIN / CONTRACTS
→ qué significan los conceptos y cómo se comportan funcionalmente

ADR
→ por qué se tomó una decisión y qué autoridad fue modificada

VERIFICATION / CERTIFICATION
→ qué evidencia demuestra conformidad y cierre
```

La separación es obligatoria. Ninguna fuente debe reclamar autoridad fuera de su responsabilidad.

## Regla Architecture / Domain / ADR

```text
ARCHITECTURE = technical structure, boundaries and dependency direction
DOMAIN / CONTRACTS = business meaning, invariants and boundary behavior
ADR = rationale, alternatives, consequences and supersession history
```

Un ADR no puede ser la única fuente de verdad actual. Si una decisión modifica Architecture, Domain, Governance, FOUNDATION o ROADMAP, la autoridad propietaria debe actualizarse en el mismo cambio gobernado.

Contratos completos:

- `docs/architecture/ARCHITECTURE_RULES.md`
- `docs/domain/DOMAIN_CONTRACT_STANDARD.md`
- `docs/adr/ADR_STANDARD.md`
- `docs/roadmap/ROADMAP_STANDARD.md`
- `docs/governance/GOVERNANCE_STANDARD.md`

## Capacidades

STANDARD puede:

1. definir reglas universales de arquitectura, Git, documentación, seguridad y calidad;
2. separar autoridades por responsabilidad;
3. declarar adopción mediante `project.standard.yml`;
4. generar un proyecto mínimo mediante bootstrap;
5. generar FOUNDATION y ROADMAP con responsabilidades separadas;
6. preparar espacios diferenciados para Architecture, Domain y ADR;
7. verificar conformidad básica de forma ejecutable;
8. ejecutar self-tests;
9. bloquear CI cuando la verificación falla;
10. diferenciar implementación, testing, integración, certificación y cierre.

## Arquitectura física

```text
STANDARD/
├── README.md
├── FOUNDATION.md
├── ROADMAP.md
├── AGENTS.md
├── CHANGELOG.md
├── VERSION
├── project.standard.yml
├── docs/
│   ├── architecture/
│   ├── adr/
│   ├── domain/
│   ├── governance/
│   ├── roadmap/
│   ├── audit/
│   ├── certification/
│   ├── development/
│   ├── documentation/
│   ├── git/
│   ├── quality/
│   └── security/
├── profiles/
├── templates/
├── schemas/
├── policies/
├── scripts/
└── .github/
```

## Verificación

```bash
pnpm verify
```

## Crear un proyecto nuevo

```bash
pnpm bootstrap <project-name> [profile] [destination]
```

El bootstrap 1.2.0 crea las autoridades base y prepara directorios separados para Architecture, Domain y ADR.

## Contrato de adopción

```yaml
standard:
  repository: leoleguizamonpy/STANDARD
  version: 1.2.0
  profile: web-application
project:
  name: NEXUS
  version: 0.1.0
git:
  flow: mainline
exceptions: []
```

## Git flow

STANDARD opera con `mainline`:

```text
main
  ↓
rama temporal
  ↓
PR + gates
  ↓
main validado
  ↓
eliminar rama física
```

## Lifecycle de estado

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

## Evolución

Los proyectos permanecen gobernados por la versión que declaran hasta que migren explícitamente. Una nueva versión no invalida retroactivamente una adopción anterior.
