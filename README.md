# SPRINT 1 — Backend Base + BBDD + Endpoints Core
## Objetivo del Sprint 1
Dejar funcionando:
- [X] La API básica
- [X] La BBDD
- [X] Un **GET** que devuelva datos reales
- [X] Un **POST** que cree proyectos (mínimo funcional)
---
## División en 3 partes
### Parte 1 – Planning y arquitectura (1 día)
**Tareas:**
- [x] Crear repositorio backend + organización de carpetas
- [x] Crear archivo `app.jsx`
- [x] Configurar middlewares
- [?] Decidir motor de plantillas (Pug recomendado por su sintaxis limpia)
**Roles:**
- [X] **Dev1** → estructura del servidor
- [X] **Dev2** → setup base de datos
- [X] **Dev3** → documentación inicial + endpoints definidos
---
### Parte 2 – Desarrollo (2–3 días)
**Tareas técnicas:**
- [x] Crear base de datos y tablas
- [X] Crear conexión desde Node
- [X] Crear `GET /projects`
- [X] Crear `GET /projects/:id`
- [X] Crear `POST /projects` (validación + inserción)
- [X] Probar con Postman
**Roles:**
- [X] **Dev1** → Endpoints GET
- [X] **Dev2** → Endpoint POST + validaciones
- [X] **Dev3** → Modelos + servicios DB (consultas SQL limpias)
> Se divide así para que cada persona trabaje en una capa diferente y evitar bloqueos.
---
### Parte 3 – Test + Review + Deploy parcial (1 día)
- [X] Testear endpoints con Postman
- [X] Crear documentación en README
- [ ] Hacer demo en Render
- [X] Hacer retro + ajustar workflow del equipo
---
# SPRINT 2 — Motor de Plantillas + Integración con React + Deploy Final
## Objetivo del Sprint 2
Que el proyecto completo esté funcional:
- [X] Front consume el backend
- [ ] Motor de plantillas genera páginas individuales
- [ ] Demo final en Render
---
## Parte 1 – Planning técnico (½ día)
- [ ] Decidir estructura de vistas (Pug: layout + detail)
- [X] Planificar integración con React
- [X] Revisar feedback del sprint 1
---
## Parte 2 – Desarrollo (2–3 días)
**Tareas:**
- [ ] Configurar motor de plantillas
- [X] Crear vista del detalle
- [X] Crear ruta pública `GET /project/:id` que renderiza la vista
- [X] Conectar front React:
  - [X] Listado desde backend
  - [X] Detalle desde backend
  - [X] Crear proyecto desde React
**Roles:**
- [X] **Dev1** → Motor de plantillas + vistas
- [X] **Dev2** → Integración React (GET list + GET detail)
- [X] **Dev3** → Integración React (POST create + validaciones visuales)
---
## Parte 3 – Test + Deploy + Review final (1 día)
- [X] Probar app completa
- [ ] Deploy en Render
- [ ] Demo interna
- [ ] Retro final

