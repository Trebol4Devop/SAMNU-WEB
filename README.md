# SAMNU - Solución Integral en Métodos Numéricos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)

Repositorio oficial para la web y portal de descargas de **SAMNU**, un software científico y educativo moderno desarrollado por estudiantes de ingeniería de la **Universidad de San Carlos de Guatemala (USAC)** bajo el equipo **Trebol4Devop**.

---

## Acerca del Proyecto

**SAMNU** es una herramienta diseñada para superar las limitaciones del cálculo manual en métodos numéricos y la falta de software moderno con enfoque didáctico. La aplicación (desarrollada en Dart/Flutter) ofrece:

* **+30 Algoritmos Numéricos**: Solución de ecuaciones no lineales, sistemas de ecuaciones lineales, interpolación, regresión, diferenciación e integración numérica, y ecuaciones diferenciales ordinarias.
* **Generación Automática de Reportes PDF**: Exportación de tareas y procedimientos completos con tablas de iteraciones detalladas en formato profesional (usando LaTeX/PDF).
* **Parser Matemático Avanzado**: Entrada natural de funciones matemáticas (ej. `2x + sin(x) * exp(-x)`) con evaluación precisa y controlada.
* **Enfoque Didáctico e Intuitivo**: Visualización paso a paso para que estudiantes y profesores comprendan la lógica detrás de cada resultado.

---

## Arquitectura de la Web (React + Vite)

Este proyecto web migró de una arquitectura estática tradicional (HTML/CSS/JS puro) a una moderna **Single Page Application (SPA)** construida con **React 18 y Vite**, manteniendo **100% intacto el diseño, estilos originales (CSS puro) y la iconografía (Ionicons)**, pero mejorando drásticamente la modularidad y escalabilidad para su despliegue continuo en **Netlify**.

### Estructura del Repositorio

```text
SAMNU-WEB/
├── AI_CONTEXT.md            # Sistema de Diseño Trébol4Devop y Contexto para IA (Tailwind v4, i18n, Dark Mode)
├── README.md                # Documentación principal del proyecto
└── website/                 # Directorio principal de la aplicación web
    ├── netlify.toml         # Configuración de compilación y despliegue en Netlify
    ├── public/              # Activos estáticos y configuración de servidor
    │   ├── _redirects       # Regla de redirección SPA para evitar errores 404 en Netlify
    │   └── assets/          # Logos, capturas de pantalla, instaladores e imágenes
    └── src/                 # Código fuente de React
        ├── components/      # Componentes modulares de la interfaz
        │   ├── Navbar.jsx       # Barra de navegación fija con seguimiento de scroll
        │   ├── Hero.jsx         # Sección principal con animación 3D flotante y carrusel
        │   ├── Features.jsx     # Tarjetas de algoritmos y descargas directas (APK/EXE/PDF)
        │   ├── Gallery.jsx      # Carrusel interactivo de la interfaz
        │   ├── Team.jsx         # Tarjetas del equipo de desarrollo con enlaces a GitHub
        │   ├── Footer.jsx       # Pie de página y contacto
        │   └── ContactModal.jsx # Modal para reclutamiento de testers (Formspree)
        ├── index.css        # Estilos globales y animaciones originales (854 líneas)
        └── App.jsx          # Integrador principal y observadores de intersección (scroll)
```

---

## Guía de Instalación y Uso Local

Para ejecutar y probar este proyecto en tu entorno de desarrollo local:

### 1. Requisitos Previos
* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada, Node 20 en Netlify).
* Git para control de versiones.

### 2. Instalación de Dependencias
Abre tu terminal, entra al directorio `website/` e instala los paquetes:
```bash
cd website
npm install
```

### 3. Servidor de Desarrollo Local
Inicia el servidor de desarrollo ultrarrápido de Vite:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173/` (o el puerto que indique la terminal).

### 4. Compilación para Producción (Build)
Para verificar que no existan errores de sintaxis o empaquetado y generar la versión optimizada:
```bash
npm run build
```
Los archivos listos para producción se generarán en la carpeta `website/dist/`.

---

## Despliegue en Netlify

El sitio está preconfigurado para despliegue continuo (CI/CD) en **Netlify** mediante dos archivos clave:
1. **`website/netlify.toml`**: Le indica a Netlify que use Node 20, ejecute el comando `npm run build` y publique el directorio `dist`.
2. **`website/public/_redirects`**: Contiene la regla `/* /index.html 200`, garantizando que las recargas de página o enlaces directos a secciones de la SPA no devuelvan el error `404 Not Found`.

---

## Equipo de Desarrollo (Trebol4Devop)

Proyecto desarrollado con orgullo por estudiantes de ingeniería de la **USAC**:
* **José Monzón** - *Backend Developer* - [GitHub](https://github.com/0520Jose)
* **Diego Vásquez** - *Frontend Developer* - [GitHub](https://github.com/DiegVas)
* **Carlos del Cid** - *Project Manager & Developer* - [GitHub](https://github.com/Carlosdelcid05)
* **Ottoniel Vásquez** - *Backend Developer* - [GitHub](https://github.com/Farot3)

---

## Contacto y Soporte
Para consultas, reportes de errores o colaboración científica:
* **Correo**: [trebol4devop@proton.me](mailto:trebol4devop@proton.me)
* **GitHub**: [Trebol4Devop](https://github.com/trebol4devop)
* **LinkedIn**: [Trebol4Devop](https://www.linkedin.com/company/trebol4devop)

&copy; 2026 - Trebol4Devop. Todos los derechos reservados.
