# Proyecto 4 - ProyectHadas (Back-End)

Aplicación web full-stack para gestionar y visualizar proyectos personales.

## 📌 Descripción del Proyecto

ProyectHadas es una aplicación web desarrollada para gestionar proyectos personales: listarlos, crear nuevos y visualizar información detallada tanto del proyecto como de su autora.

Este proyecto corresponde al módulo 4 del curso de Adalab y combina:

Frontend en React JS (creado en el módulo 3)

Backend en Node.js + Express

Base de datos MySQL

Despliegue en Render (servidor) y Aiven (BBDD)

El objetivo es construir una aplicación full-stack completa, funcional y desplegada en producción.

## 🎯 Objetivos del Proyecto

Consolidar el aprendizaje de Node.js y Express.

Trabajar con MySQL para gestionar datos de manera persistente.

Diseñar y consumir una API REST.

Ser capaces de desarrollar un proyecto completo front + back.

Desplegar la aplicación en un servidor real.

Mejorar la comunicación y la colaboración en equipo.

Demostrar un perfil full stack completo.

## 🛠️ Funcionalidades Principales

### ✔️ 1. Listar proyectos

La aplicación muestra un listado de proyectos personales, incluyendo:

Nombre

Descripción

Tecnologías utilizadas

Información de la autora

Al hacer clic en un proyecto, se muestra una vista detallada con toda su información.

### ✔️ 2. Crear un nuevo proyecto

A través de un formulario, la usuaria puede enviar los datos al servidor para crear un nuevo proyecto.
El backend debe:

Validar los datos recibidos

Guardarlos en la base de datos

Generar un ID único

Crear una URL pública para visualizar el proyecto

Devolver dicha URL como respuesta

### ✔️ 3. Visualizar un proyecto individual

Cada proyecto tiene su propia URL.
En ella se muestra:

Datos del proyecto:

Nombre

Descripción

Tecnologías

Imagen del proyecto

Enlaces (GitHub y demo)

Datos de la autora:

Nombre

Trabajo

Foto

## 🗄️ Requisitos Técnicos
### 📁 1. Servidor de estáticos

El backend debe servir los archivos del frontend en React desde el propio servidor (reemplazando GitHub Pages).

### 🌍 2. Servidor de producción

Todo el proyecto (front + back + BBDD) se despliega en:

Render (backend + estáticos del front)

Aiven (base de datos MySQL)

## 🧱 Especificaciones Técnicas
### 📌 Base de datos MySQL

Debe incluir al menos:

Tabla proyectos

id

nombre

descripción

tecnologías

imagen

repositorio

demo

autora_nombre

autora_job

autora_foto

### 📌 API REST

Endpoints necesarios:

Método	Ruta	Descripción
GET	/projects	Lista todos los proyectos
POST	/project	Crea un proyecto nuevo
GET	/project/:id	Muestra un proyecto específico

 ###📌 Servidor de estáticos

El backend debe servir la build del frontend (React) + assets.

## 🧪 Metodología de Trabajo

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
- [X] Hacer demo en Render
- [X] Hacer retro + ajustar workflow del equipo
---
# SPRINT 2 — Motor de Plantillas + Integración con React + Deploy Final
## Objetivo del Sprint 2
Que el proyecto completo esté funcional:
- [X] Front consume el backend
- [X] Demo final en Render
---
## Parte 1 – Planning técnico (½ día)
- [X] Planificar integración con React
- [X] Revisar feedback del sprint 1
---
## Parte 2 – Desarrollo (2–3 días)
**Tareas:**
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
- [X] Deploy en Render
- [X] Demo interna
- [X] Retro final

## 🚀 Despliegue

Servidor backend + frontend → Render

Base de datos → Aiven

## 👩‍💻 Tecnologías utilizadas

Node.js

Express.js

MySQL

React.js

HTML / CSS / JS

Aiven (BBDD)

Render (deploy)

Swagger (documentación API)

## 📂 Estructura del Proyecto (back)
```
/src
 ├── controllers
 ├── database
 ├── middlewares
 ├── routes
 ├── services
 ├── public  ← estáticos y build de React
 └── server.js
```
## 📄 Documentación de la API

La API está documentada usando Swagger.
Puedes acceder a la documentación en:

## 🔗 ([URL de SwaggerHub] (<https://app.swaggerhub.com/apis/adalab-4b8/ProyectHadas/1.0.0>))

## 🧑‍🤝‍🧑 Equipo

Proyecto desarrollado por el equipo 3 - Adalab.





