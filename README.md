# STANDARD

**STANDARD** es la fuente de verdad de ingeniería para los proyectos de `leoleguizamonpy`.

Su función es definir cómo se inicializa, organiza, desarrolla, verifica, audita, certifica y evoluciona un proyecto, sin contener lógica específica de negocio de ningún producto.

## Principio rector

> STANDARD gobierna cómo construimos. Cada producto decide qué construimos.

## Cadena de autoridad

```text
STANDARD
  ↓
FOUNDATION
  ↓
GOVERNANCE
  ↓
ARCHITECTURE
  ↓
PROFILES + POLICIES + TEMPLATES
  ↓
IMPLEMENTATION
  ↓
VERIFICATION
  ↓
AUDIT
  ↓
CERTIFICATION
  ↓
RELEASE
```

## Arquitectura física objetivo

```text
STANDARD/
├── README.md
├── FOUNDATION.md
├── AGENTS.md
├── CHANGELOG.md
├── VERSION
├── docs/
│   ├── architecture/
│   ├── development/
│   ├── documentation/
│   ├── git/
│   ├── quality/
│   ├── security/
│   ├── ai/
│   ├── governance/
│   └── adr/
├── profiles/
│   ├── web-application/
│   ├── api/
│   ├── saas/
│   ├── ai-system/
│   ├── static-web/
│   └── library/
├── templates/
├── schemas/
├── policies/
├── scripts/
│   ├── bootstrap/
│   ├── verify/
│   └── migrate/
└── examples/
```

## STANDARD v1.0.0

La primera versión debe cubrir únicamente reglas transversales ya comprobadas:

- arquitectura lógica y física;
- estructura de repositorio;
- documentación mínima;
- ramas, commits y PR;
- gobernanza de agentes IA;
- seguridad mínima;
- pruebas;
- auditoría;
- quality gates;
- certificación y versionado.

## Regla de adopción

Cada proyecto deberá declarar la versión de STANDARD que adopta mediante `project.standard.yml`.

```yaml
standard:
  repository: leoleguizamonpy/STANDARD
  specification: LES
  version: 1.0.0
  profile: web-application
```

## Estado

Bootstrap de STANDARD v1 en desarrollo. Ver `docs/development/DEVELOPMENT_CHECKLIST.md`.