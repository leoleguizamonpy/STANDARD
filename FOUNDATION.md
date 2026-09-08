# FOUNDATION

## 1. Propósito

STANDARD define una base de ingeniería reusable, versionada y verificable para todos los proyectos presentes y futuros del ecosistema `leoleguizamonpy`.

## 2. Alcance

STANDARD gobierna:

- arquitectura;
- estructura física de repositorios;
- documentación;
- versionado y Git;
- contratos técnicos;
- seguridad mínima;
- calidad y testing;
- automatización;
- uso de agentes IA;
- auditoría;
- certificación;
- migración entre versiones del estándar.

STANDARD no gobierna lógica de negocio específica de un producto.

## 3. Principios no negociables

1. **Una fuente de verdad por concepto.**
2. **Arquitectura explícita antes de crecimiento accidental.**
3. **Separación de dominios y responsabilidades.**
4. **Dependencias dirigidas y justificadas.**
5. **Automatizar toda regla que pueda verificarse automáticamente.**
6. **Documentación sincronizada con el sistema.**
7. **Seguridad por defecto.**
8. **Cambios trazables mediante ramas, commits y PR.**
9. **Los agentes IA operan bajo reglas del repositorio; no son fuente de verdad.**
10. **El estándar se versiona; no se reescribe retroactivamente.**
11. **Las excepciones deben declararse y justificarse.**
12. **Evitar sobrearquitectura: la exigencia debe ser proporcional al riesgo y complejidad.**

## 4. Modelo de capas del estándar

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
PROJECT ADOPTION
  ↓
VERIFICATION
  ↓
AUDIT
  ↓
CERTIFICATION
```

## 5. Conformidad

Un proyecto puede declararse conforme solo cuando:

- identifica una versión concreta de STANDARD;
- selecciona un perfil aplicable;
- cumple las reglas obligatorias de esa versión;
- documenta excepciones;
- supera los gates requeridos.

## 6. Perfiles

STANDARD separará reglas universales de reglas dependientes del tipo de sistema.

Perfiles iniciales:

- `web-application`
- `api`
- `saas`
- `ai-system`
- `static-web`
- `library`

## 7. Niveles normativos

- **MUST**: obligatorio para conformidad.
- **SHOULD**: recomendado; desviación debe justificarse.
- **MAY**: opcional.

## 8. Versionado

STANDARD seguirá Semantic Versioning:

- MAJOR: cambio incompatible en reglas obligatorias;
- MINOR: nuevas capacidades compatibles;
- PATCH: correcciones sin cambio de contrato.

## 9. Definición de terminado de STANDARD v1

STANDARD v1.0.0 estará terminado cuando exista una especificación mínima coherente, adopción declarativa, plantillas base, políticas verificables, un verificador funcional y CI capaz de impedir una certificación inválida.