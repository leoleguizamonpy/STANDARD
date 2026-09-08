# ARCHITECTURE STANDARD

## 1. Objetivo

Definir la arquitectura lógica y física de STANDARD y la forma en que los proyectos consumidores adoptan sus reglas.

## 2. Arquitectura lógica

```text
┌───────────────────────────────────────────────┐
│                 FOUNDATION                    │
│ propósito · principios · alcance · autoridad │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│                 GOVERNANCE                    │
│ decisiones · excepciones · versionado · IA   │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│                 ARCHITECTURE                  │
│ capas · límites · dependencias · repositorio │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│                  PROFILES                     │
│ web · api · saas · ai · static · library     │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│        POLICIES · SCHEMAS · TEMPLATES         │
│ reglas ejecutables · contratos · scaffolds   │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│               PROJECT ADOPTION                │
│ project.standard.yml + excepciones            │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│               VERIFICATION                    │
│ static checks · structure · policy · docs    │
└──────────────────────┬────────────────────────┘
                       ↓
┌───────────────────────────────────────────────┐
│          AUDIT · CERTIFICATION · RELEASE      │
└───────────────────────────────────────────────┘
```

## 3. Regla de dependencias

Las capas inferiores pueden implementar contratos definidos por capas superiores, pero ninguna capa normativa puede depender de una implementación concreta de un proyecto consumidor.

```text
FOUNDATION
   ↓
GOVERNANCE
   ↓
ARCHITECTURE
   ↓
PROFILES
   ↓
POLICIES / SCHEMAS / TEMPLATES
   ↓
TOOLS
```

Dependencias inversas o circulares están prohibidas salvo ADR explícito.

## 4. Arquitectura física de STANDARD

```text
STANDARD/
├── README.md
├── FOUNDATION.md
├── AGENTS.md
├── CHANGELOG.md
├── VERSION
│
├── docs/
│   ├── architecture/
│   │   ├── ARCHITECTURE_STANDARD.md
│   │   ├── LOGICAL_ARCHITECTURE.md
│   │   └── PHYSICAL_ARCHITECTURE.md
│   ├── governance/
│   ├── development/
│   ├── documentation/
│   ├── git/
│   ├── quality/
│   ├── security/
│   ├── ai/
│   └── adr/
│
├── profiles/
│   ├── web-application/
│   ├── api/
│   ├── saas/
│   ├── ai-system/
│   ├── static-web/
│   └── library/
│
├── templates/
├── schemas/
├── policies/
├── scripts/
│   ├── bootstrap/
│   ├── verify/
│   └── migrate/
└── examples/
```

## 5. Arquitectura física de un proyecto consumidor

STANDARD no impone una única estructura física universal. Define un mínimo común y deja que cada perfil especialice.

Base recomendada:

```text
PROJECT/
├── README.md
├── FOUNDATION.md
├── AGENTS.md
├── project.standard.yml
├── docs/
├── src/
├── tests/
├── scripts/
└── .github/
```

## 6. Fuente de verdad por categoría

| Categoría | Autoridad |
|---|---|
| Propósito y principios | `FOUNDATION.md` |
| Conducta de agentes | `AGENTS.md` |
| Arquitectura | `docs/architecture/` |
| Decisiones excepcionales | `docs/adr/` |
| Reglas machine-readable | `policies/` |
| Contratos de configuración | `schemas/` |
| Scaffolding | `templates/` |
| Perfil de tipo de sistema | `profiles/` |
| Versión adoptada | `project.standard.yml` |

## 7. Invariantes

1. Una regla obligatoria no debe existir solamente en prosa si puede verificarse de forma determinista.
2. Ningún perfil puede contradecir FOUNDATION.
3. Un template no puede introducir una estructura prohibida por policies.
4. Un schema no debe divergir de la especificación documental.
5. Un proyecto puede extender STANDARD, pero debe declarar sus excepciones.
6. STANDARD nunca debe importar código de negocio de proyectos consumidores.
7. Las migraciones de versión deben ser explícitas y trazables.