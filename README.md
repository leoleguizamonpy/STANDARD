# STANDARD

**STANDARD** es la fuente de verdad de ingeniería para los proyectos de `leoleguizamonpy`.

Su función es definir cómo se inicializa, organiza, desarrolla, verifica, audita, certifica y evoluciona un proyecto, sin contener lógica específica de negocio de ningún producto.

## Estado

**STANDARD v1.1.0 — CERTIFIED**

La versión 1.1.0 formaliza `ROADMAP.md` como autoridad scoped-by-responsibility para secuencia, estado y evidencia de ejecución. La integración principal quedó verificada sobre `main@09a94750319e0a06ac8d816ced0d4ea166233f13` mediante `STANDARD Verify #43 = PASS`.

## Principio rector

> STANDARD gobierna cómo construimos. Cada producto decide qué construimos.

## Cadena de autoridad

```text
STANDARD
  ↓
FOUNDATION + ROADMAP (responsabilidades separadas)
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

## Separación FOUNDATION / ROADMAP

Esta separación es obligatoria:

```text
FOUNDATION.md
→ qué es el producto
→ propósito
→ alcance
→ invariantes
→ non-goals
→ límites de dominio

ROADMAP.md
→ dónde está el proyecto
→ qué está terminado
→ qué está en progreso
→ bloqueos
→ evidencia
→ deuda conocida
→ qué sigue
→ criterio de cierre
```

`ROADMAP.md` no puede redefinir identidad, alcance, invariantes, semántica de dominio ni arquitectura. Si durante la ejecución se descubre que alguno de esos conceptos debe cambiar, la modificación debe hacerse en la autoridad correspondiente.

`FOUNDATION.md` no debe convertirse en un tracker de progreso.

Contrato completo: `docs/roadmap/ROADMAP_STANDARD.md`.

## Capacidades

STANDARD puede:

1. definir reglas universales de arquitectura, Git, documentación, seguridad y calidad;
2. declarar adopción mediante `project.standard.yml`;
3. generar un proyecto mínimo mediante bootstrap;
4. generar `FOUNDATION.md` y `ROADMAP.md` con responsabilidades separadas;
5. verificar conformidad básica de forma ejecutable;
6. ejecutar casos positivos/negativos de self-test;
7. bloquear CI cuando la verificación falla;
8. diferenciar implementación, testing, integración, certificación y cierre;
9. vincular una certificación formal al commit/HEAD exacto evaluado.

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
│   ├── audit/
│   ├── certification/
│   ├── development/
│   ├── documentation/
│   ├── git/
│   ├── governance/
│   ├── quality/
│   ├── roadmap/
│   └── security/
├── profiles/
├── templates/
├── schemas/
├── policies/
├── scripts/
│   ├── bootstrap/
│   └── verify/
└── .github/
    ├── PULL_REQUEST_TEMPLATE.md
    └── workflows/
```

## Verificación

```bash
pnpm verify
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

El bootstrap 1.1.0 genera por defecto:

- `README.md`
- `FOUNDATION.md`
- `ROADMAP.md`
- `AGENTS.md`
- `CHANGELOG.md`
- `VERSION`
- `project.standard.yml`

## Contrato de adopción

Cada proyecto adopta una versión concreta mediante `project.standard.yml`.

```yaml
standard:
  repository: leoleguizamonpy/STANDARD
  version: 1.1.0
  profile: web-application
project:
  name: NEXUS
  version: 0.1.0
git:
  flow: mainline
exceptions: []
```

## Git flow recomendado

STANDARD mismo opera con `mainline`:

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

STANDARD 1.1.0 formaliza:

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

Un estado más fuerte requiere evidencia propia; no puede inferirse de uno más débil.

## Fuente empírica

STANDARD se contrastó con patrones presentes en:

- TOURNA
- ACTIO
- LEOLEGUIZAMON
- SEOT
- BrandADN

Ver `docs/audit/ECOSYSTEM_PATTERN_MATRIX.md`.

## Evolución

Los proyectos permanecen gobernados por la versión que declaran hasta que migren explícitamente. Una nueva versión de STANDARD no invalida retroactivamente una adopción anterior.
