# :estrella: SPRINT 1 — Backend Base + BBDD + Endpoints Core
## :dardo: Objetivo del Sprint 1
Dejar funcionando:
- [ ] La API básica
- [ ] La BBDD
- [ ] Un **GET** que devuelva datos reales
- [ ] Un **POST** que cree proyectos (mínimo funcional)
---
## :paquete: División en 3 partes
### :círculo_morado_grande: Parte 1 – Planning y arquitectura (1 día)
**Tareas:**
- [ ] Crear repositorio backend + organización de carpetas
- [ ] Crear archivo `app.js`
- [ ] Configurar middlewares
- [ ] Decidir motor de plantillas (Pug recomendado por su sintaxis limpia)
**Roles:**
- [ ] **Dev1** → estructura del servidor
- [ ] **Dev2** → setup base de datos
- [ ] **Dev3** → documentación inicial + endpoints definidos
---
### :círculo_verde_grande: Parte 2 – Desarrollo (2–3 días)
**Tareas técnicas:**
- [ ] Crear base de datos y tablas
- [ ] Crear conexión desde Node
- [ ] Crear `GET /api/projects`
- [ ] Crear `GET /api/projects/:id`
- [ ] Crear `POST /api/projects` (validación + inserción)
- [ ] Probar con Postman
**Roles:**
- [ ] **Dev1** → Endpoints GET
- [ ] **Dev2** → Endpoint POST + validaciones
- [ ] **Dev3** → Modelos + servicios DB (consultas SQL limpias)
> Se divide así para que cada persona trabaje en una capa diferente y evitar bloqueos.
---
### :círculo_azul_grande: Parte 3 – Test + Review + Deploy parcial (1 día)
- [ ] Testear endpoints con Postman
- [ ] Crear documentación en README
- [ ] Hacer demo en Render
- [ ] Hacer retro + ajustar workflow del equipo
---
# :estrella::estrella: SPRINT 2 — Motor de Plantillas + Integración con React + Deploy Final
## :dardo: Objetivo del Sprint 2
Que el proyecto completo esté funcional:
- [ ] Front consume el backend
- [ ] Motor de plantillas genera páginas individuales
- [ ] Demo final en Render
---
## :círculo_morado_grande: Parte 1 – Planning técnico (½ día)
- [ ] Decidir estructura de vistas (Pug: layout + detail)
- [ ] Planificar integración con React
- [ ] Revisar feedback del sprint 1
---
## :círculo_verde_grande: Parte 2 – Desarrollo (2–3 días)
**Tareas:**
- [ ] Configurar motor de plantillas
- [ ] Crear vista del detalle
- [ ] Crear ruta pública `GET /project/:uuid` que renderiza la vista
- [ ] Conectar front React:
  - [ ] Listado desde backend
  - [ ] Detalle desde backend
  - [ ] Crear proyecto desde React
**Roles:**
- [ ] **Dev1** → Motor de plantillas + vistas
- [ ] **Dev2** → Integración React (GET list + GET detail)
- [ ] **Dev3** → Integración React (POST create + validaciones visuales)
---
## :círculo_azul_grande: Parte 3 – Test + Deploy + Review final (1 día)
- [ ] Probar app completa
- [ ] Deploy en Render
- [ ] Demo interna
- [ ] Retro final
