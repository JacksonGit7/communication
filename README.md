# 🏢 Comunication - Portal Residencial

**Comunication** es una aplicación web modular diseñada para la gestión integral de conjuntos residenciales y condominios. Permite la interacción en tiempo real entre administradores y residentes para la consulta de novedades, eventos, pagos, notificaciones y directorio de residentes.

---

## 🚀 Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3 (Variables CSS, diseño responsivo), JavaScript, Lucide Icons.
* **Backend:** Node.js, Express.js.
* **Middleware / Utilidades:** CORS, Body-Parser.
* **Herramientas de Diseño & Pruebas:** Figma, Postman, Git / GitHub.

---

## 📂 Estructura del Proyecto

```text
communication/
├── api-communication/         # Servidor Backend (Node.js/Express)
│   ├── index.js               # API RESTful y endpoints
│   ├── package.json           # Dependencias
│   └── node_modules/
    └── index.html             # Aplicación Frontend Modular unificada
├── README.md                  # Documentación del proyecto
└── docs/                      # Archivos de soporte (Colección de Postman)

## ⚙️ Pasos para Ejecutar el Proyecto Localmente

### 1. Iniciar el Servidor Backend
**⚠️ Nota importante:** Debes ubicarte dentro de la carpeta del servidor antes de instalar las dependencias y ejecutarlo:

```bash
cd api-communication
npm install
node index.js