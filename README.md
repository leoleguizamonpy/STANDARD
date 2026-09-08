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

## Capacidades actuales

STANDARD ya puede:

1. definir reglas universales de arquitectura, Git, documentación, seguridad y calidad;
2. declarar adopción mediante `project.standard.yml`;
3. generar un proyecto mínimo mediante bootstrap;
4. verificar conformidad básica de forma ejecutable;
5. ejecutar casos positivos/negativos de self-test;
6. bloquear CI cuando la verificación falla.

## Arquitectura física

```text
STANDARD/
├── README.md
├── FOUNDATION.md
├── AGENTS.md
├── CHANGELOG.md
├── VERSION
├── project.standard.yml
├── docs/
│   ├── architecture/
│   ├── audit/
│   ├── development/
│   ├── documentation/
│   ├── git/
│   ├── governance/
│   ├── quality/
│   └── security/
├── profiles/
│   ├── web-application/
│   ├── api/
│   ├── static-web/
│   └── library/
├── templates/
├── schemas/
├── scripts/
│   ├── bootstrap/
│   └── verify/
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md
    └── workflows/
```

Perfiles `saas` y `ai-system` están deliberadamente diferidos hasta que existan reglas comprobadas suficientes para justificarlos.

## Instalación de STANDARD

Requisitos:

- Node.js 20+
- Corepack
- pnpm

```bash
corepack enable
pnpm install
```

## Verificación

```bash
pnpm verify
```

El comando ejecuta:

```text
STANDARD conformance
→ schema validation
→ required-file checks
→ basic secret-file checks
→ positive fixture
→ negative fixture
→ bootstrap generation
→ verification of generated project
```

Resultado esperado:

```text
STANDARD VERIFY: PASS
STANDARD SELF TEST: PASS
```

## Crear un proyecto nuevo

```bash
pnpm bootstrap <project-name> [profile] [destination]
```

Ejemplo:

```bash
pnpm bootstrap NEXUS web-application ../NEXUS
```

Perfiles v1 disponibles:

- `web-application`
- `api`
- `static-web`
- `library`

El bootstrap se niega a sobrescribir un destino no vacío.

## Contrato de adopción

Cada proyecto adopta una versión concreta mediante `project.standard.yml`.

```yaml
standard:
  repository: leoleguizamonpy/STANDARD
  version: 0.1.0
  profile: web-application
project:
  name: NEXUS
  version: 0.1.0
git:
  flow: mainline
exceptions: []
```

La configuración se valida contra `schemas/project.standard.schema.json`.

## Flujos Git soportados

### mainline

```text
main
  ↓
rama temporal
  ↓
PR + gates
  ↓
main validado
  ↓
eliminar rama
```

### develop

```text
main
  ↓
develop
  ↓
rama temporal
  ↓
develop
  ↓
release
  ↓
main
```

`mainline` es preferible cuando una rama permanente de integración no aporta valor real. `develop` es una decisión explícita del proyecto, no una obligación universal.

## Fuente empírica

STANDARD v1 no se diseña desde teoría aislada. Las reglas transversales se contrastan con patrones ya presentes en TOURNA, ACTIO y LEOLEGUIZAMON y se seguirán contrastando con SEOT y BrandADN.

Ver `docs/audit/ECOSYSTEM_PATTERN_MATRIX.md`.

## Estado

Versión de desarrollo actual: `0.1.0`.

No debe etiquetarse como `v1.0.0` ni declararse `CERTIFIED` hasta que los gates finales de `docs/development/DEVELOPMENT_CHECKLIST.md` estén cerrados con evidencia.
