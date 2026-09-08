# STANDARD v1 — DEVELOPMENT CHECKLIST

Objetivo: cerrar una primera versión utilizable y certificable de STANDARD en una sola jornada de desarrollo.

Los checks son binarios: `[x]` significa evidencia presente en repositorio y validación superada. No usar porcentajes subjetivos para declarar terminado.

## FASE 0 — Bootstrap

- [x] Repositorio creado.
- [x] `README.md` creado.
- [x] `FOUNDATION.md` creado.
- [x] `AGENTS.md` creado.
- [x] Arquitectura lógica y física inicial documentada.
- [ ] `VERSION` creado con `0.1.0` durante desarrollo.
- [ ] `CHANGELOG.md` creado.
- [ ] rama `develop` establecida después del bootstrap.

**Gate 0:** repositorio posee autoridad, propósito y arquitectura base.

---

## FASE 1 — Gobernanza

- [ ] Definir cadena de autoridad formal.
- [ ] Definir MUST / SHOULD / MAY.
- [ ] Definir política de excepciones.
- [ ] Definir ADR.
- [ ] Definir compatibilidad y versionado.
- [ ] Definir política de deprecación.
- [ ] Definir política de migración entre versiones.

**Gate 1:** ninguna regla puede cambiar sin mecanismo de decisión y trazabilidad.

---

## FASE 2 — Estándar de repositorio y Git

- [ ] Definir estructura mínima universal.
- [ ] Definir naming de archivos y directorios.
- [ ] Definir ramas permitidas.
- [ ] Definir `main` y `develop`.
- [ ] Definir feature/fix/refactor/docs/chore/audit/release/hotfix.
- [ ] Definir Conventional Commits.
- [ ] Definir política de Pull Requests.
- [ ] Definir estrategia de merge.
- [ ] Definir release/tagging.
- [ ] Crear template de PR.

**Gate 2:** el ciclo Git de cualquier nuevo proyecto es inequívoco.

---

## FASE 3 — Documentación

- [ ] Definir documentos obligatorios por proyecto.
- [ ] Crear `README.template.md`.
- [ ] Crear `FOUNDATION.template.md`.
- [ ] Crear `AGENTS.template.md`.
- [ ] Crear `ADR.template.md`.
- [ ] Definir actualización obligatoria de documentación.
- [ ] Definir autoridad documental.
- [ ] Evitar duplicación documental.

**Gate 3:** un proyecto nuevo puede generar su documentación mínima desde templates.

---

## FASE 4 — Arquitectura

- [x] Definir arquitectura lógica de STANDARD.
- [x] Definir arquitectura física de STANDARD.
- [ ] Definir principios de separación de dominios.
- [ ] Definir dirección de dependencias.
- [ ] Definir reglas contra ciclos.
- [ ] Definir core vs domains vs infrastructure/interfaces cuando aplique.
- [ ] Definir cómo los perfiles pueden extender la arquitectura.
- [ ] Crear política machine-readable de arquitectura.

**Gate 4:** las fronteras arquitectónicas pueden explicarse y verificarse.

---

## FASE 5 — Perfiles

Construir únicamente perfiles mínimos v1:

- [ ] `web-application`
- [ ] `api`
- [ ] `static-web`

Posponer a v1.1 salvo necesidad real:

- [ ] `saas`
- [ ] `ai-system`
- [ ] `library`

Cada perfil v1 debe declarar:

- [ ] propósito;
- [ ] estructura recomendada;
- [ ] documentos obligatorios;
- [ ] quality gates;
- [ ] reglas adicionales;
- [ ] excepciones permitidas.

**Gate 5:** puede clasificarse un proyecto nuevo sin inventar una arquitectura desde cero.

---

## FASE 6 — Contrato de adopción

- [ ] Crear `project.standard.schema.json`.
- [ ] Crear `project.standard.example.yml`.
- [ ] Declarar versión STANDARD.
- [ ] Declarar perfil.
- [ ] Declarar excepciones.
- [ ] Declarar metadata mínima del proyecto.
- [ ] Validar configuración contra schema.

**Gate 6:** un repositorio consumidor puede declarar de forma machine-readable qué versión y perfil adopta.

---

## FASE 7 — Seguridad base

- [ ] Definir secretos prohibidos en repositorio.
- [ ] Definir `.env.example` y `.env` rules.
- [ ] Definir dependency hygiene.
- [ ] Definir input validation cuando aplique.
- [ ] Definir autenticación/autorización como reglas de perfil, no universales.
- [ ] Definir manejo seguro de errores/logs.
- [ ] Definir vulnerabilidades críticas como release blocker.

**Gate 7:** ningún proyecto conforme puede aprobar con fallas críticas conocidas de seguridad.

---

## FASE 8 — Calidad y testing

- [ ] Definir lint gate.
- [ ] Definir typecheck gate cuando aplique.
- [ ] Definir test gate.
- [ ] Definir build gate.
- [ ] Definir architecture gate.
- [ ] Definir documentation gate.
- [ ] Definir security gate.
- [ ] Definir policy para tests mínimos sin imponer cobertura arbitraria universal.

**Gate 8:** “funciona en mi máquina” no puede equivaler a “certificado”.

---

## FASE 9 — Verificador ejecutable

- [ ] Elegir runtime mínimo del verificador.
- [ ] Crear `standard:verify`.
- [ ] Verificar archivos obligatorios.
- [ ] Verificar `project.standard.yml`.
- [ ] Verificar schema.
- [ ] Verificar estructura base.
- [ ] Verificar forbidden files/patterns básicos.
- [ ] Emitir salida PASS/FAIL legible.
- [ ] Código de salida 0 en PASS.
- [ ] Código de salida != 0 en FAIL.

**Gate 9:** STANDARD deja de ser solo documentación.

---

## FASE 10 — Bootstrap de proyectos

- [ ] Crear plantilla mínima de proyecto.
- [ ] Crear comando/script de bootstrap v1.
- [ ] Seleccionar perfil.
- [ ] Generar `project.standard.yml`.
- [ ] Generar documentación base.
- [ ] No sobrescribir archivos existentes sin confirmación explícita del CLI.
- [ ] Verificar proyecto generado automáticamente.

**Gate 10:** puede iniciarse un proyecto nuevo desde STANDARD sin copiar manualmente archivos.

---

## FASE 11 — CI

- [ ] Crear workflow de verificación.
- [ ] Ejecutar verificador en push/PR.
- [ ] Ejecutar tests del propio STANDARD.
- [ ] Fallar CI ante no conformidad.
- [ ] Prohibir certificación si CI falla.

**Gate 11:** las reglas no dependen de disciplina manual.

---

## FASE 12 — Auditoría de proyectos existentes

Extraer patrones comprobados, sin importar lógica de negocio.

- [ ] TOURNA revisado.
- [ ] ACTIO revisado.
- [ ] SEOT revisado.
- [ ] BrandADN revisado.
- [ ] LEOLEGUIZAMON revisado.
- [ ] matriz común/diferencia creada.
- [ ] reglas transversales incorporadas.
- [ ] reglas específicas excluidas.

**Gate 12:** STANDARD v1 refleja experiencia real del ecosistema, no teoría inventada.

---

## FASE 13 — Dogfooding

- [ ] STANDARD se valida contra sus propias reglas aplicables.
- [ ] Crear un proyecto fixture `examples/web-app`.
- [ ] Fixture PASS verificado.
- [ ] Fixture inválido controlado produce FAIL.
- [ ] No existen reglas documentadas imposibles de ejecutar o interpretar.

**Gate 13:** el estándar puede aplicarse a sí mismo y demostrar casos positivo/negativo.

---

## FASE 14 — Certificación v1.0.0

- [ ] Todos los gates críticos PASS.
- [ ] Auditoría final sin bloqueadores P0/P1.
- [ ] `VERSION` actualizado a `1.0.0`.
- [ ] `CHANGELOG.md` actualizado.
- [ ] README refleja uso real.
- [ ] documentación sin contradicciones conocidas.
- [ ] tag `v1.0.0` preparado.
- [ ] release candidate validado.

**Gate final:** `STANDARD v1.0.0 CERTIFIED` solo puede declararse después de evidencia verificable.

---

# Priorización para terminar hoy

## P0 — obligatorio para una v1 útil

Fases: 0, 1, 2, 3, 4, 6, 7, 8, 9, 11, 13, 14.

## P1 — obligatorio para demostrar reutilización

- `web-application` profile.
- `api` profile.
- bootstrap mínimo.
- auditoría comparativa de al menos TOURNA + ACTIO + LEOLEGUIZAMON, incorporando solo patrones comprobados.

## P2 — puede ir a v1.1 sin invalidar v1

- perfiles `saas`, `ai-system`, `library`;
- migrador automático entre versiones;
- CLI publicado como paquete npm;
- auditoría completa automatizada de todos los repositorios;
- generadores avanzados por stack.

# Definición operativa de terminado hoy

No necesitamos construir una plataforma gigantesca. Para cerrar una v1 seria hoy deben existir cinco capacidades reales:

1. **Especificar** cómo se construye.
2. **Declarar** qué versión/perfil adopta un proyecto.
3. **Generar** una base mínima.
4. **Verificar** automáticamente conformidad básica.
5. **Bloquear** por CI una violación crítica.

Todo lo que no contribuya directamente a esas cinco capacidades se difiere.