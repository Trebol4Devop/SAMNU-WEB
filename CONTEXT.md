# Context & Architecture Guide (SAMNU-WEB)

## 1. Project Overview & Domain Context

* **Project Name**: SAMNU (Solución Integral en Métodos Numéricos).
* **Domain**: Scientific and educational software for numerical methods, engineering calculations, and mathematical analysis.
* **Target Audience**: Engineering and science students, professors, and researchers at **Universidad de San Carlos de Guatemala (USAC)** and general technical institutions.
* **Core Software Capabilities**: 
  * +30 numerical algorithms (root finding, linear systems, numerical calculus, ODEs).
  * Automated LaTeX/PDF report generation with step-by-step iteration tables.
  * Natural syntax mathematical expression parser.
* **Developers**: **Trebol4Devop** (USAC engineering students: José Monzón, Diego Vásquez, Carlos del Cid, Ottoniel Vásquez).
* **Repository Purpose**: This repository (`SAMNU-WEB`) houses the official web landing page, download distribution hub (Android APK, Windows EXE, Manual PDF), and tester recruitment portal.

---

## 2. Technical Stack & Architecture

* **Frontend Framework**: **React 18/19** bootstrapped via **Vite** (`v8+`).
* **Root Application Directory**: All web application code, scripts, configuration, and dependencies are located inside the `website/` folder. **Always set your working directory to `website/` when running npm or git commands related to the web app.**
* **Styling**: **Vanilla CSS** (`website/src/index.css`).
* **Iconography**: **Ionicons v5.5.2** (Web Components loaded globally via unpkg in `website/index.html`).

---

## 3. Strict Rules

### Rule 1: Preserve Exact Visual Aesthetics & Layouts
* **DO NOT** replace Vanilla CSS with TailwindCSS, Bootstrap, Material-UI, or any styling library.
* **DO NOT** alter the colors, shadows, font sizes, margins, padding, or animations defined in `website/src/index.css` unless explicitly commanded by the user.
* **Why**: The project underwent a migration from static HTML/CSS/JS to React + Vite. The user explicitly commanded that the visual interface, layout, typography (`Segoe UI`), brand colors (`rgb(2, 2, 89)`, `#083c64`, `#2d7890`), and CSS 3D floating hero animation (`@keyframes float-3d`) must remain **100% identical** to the original static website.

### Rule 2: Preserve Ionicons Iconography
* **DO NOT** import icons from `lucide-react`, `react-icons`, `font-awesome`, or inline SVGs unless specifically requested.
* **How to use icons**: Use native Ionicons JSX custom elements matching the established patterns:
  ```jsx
  <ion-icon name="logo-google-playstore"></ion-icon>
  <ion-icon name="logo-windows"></ion-icon>
  <ion-icon name="logo-android"></ion-icon>
  <ion-icon name="logo-github"></ion-icon>
  <ion-icon name="mail-outline"></ion-icon>
  <ion-icon name="calculator-outline"></ion-icon>
  <ion-icon name="document-text-outline"></ion-icon>
  <ion-icon name="code-slash-outline"></ion-icon>
  <ion-icon name="school-outline"></ion-icon>
  <ion-icon name="book-outline"></ion-icon>
  ```

### Rule 3: JSX Syntax Compliance
* Always use `className` instead of `class` in JSX elements.
* Always use `htmlFor` instead of `for` in `<label>` elements.
* Self-close tags where required (e.g., `<img />`, `<input />`, `<br />`).

### Rule 4: Asset Pathing
* All static project assets (logos, screenshots, team avatars, PDFs) live in `website/public/assets/images-proyects/`.
* In JSX or CSS, reference these public assets using relative or root-relative paths:
  * Example: `./assets/images-proyects/logos/Logo SANMU - sin fondo sin nombre.png` or `/assets/images-proyects/hero/inicioSamnu.png`.
* When Vite compiles for production, everything inside `public/` is copied directly to the root of `dist/`.

---

## 4. Component Architecture & Flow

All React components reside in `website/src/components/`:

| Component | Responsibilities & Behavior |
| :--- | :--- |
| **`Navbar.jsx`** | Fixed header with brand logo. Uses `scroll` event listener to track viewport intersection and apply `.active` class to navigation links (`#inicio`, `#info`, `#galeria`, `#equipo`). |
| **`Hero.jsx`** | Landing banner with version badge (`Versión 1.1.4`). Contains a 3D perspective floating image (`.hero-image img`) that automatically cycles between two app screenshots every 15,000ms using a fade transition. Handles Play Store modal trigger and Microsoft Store external link. |
| **`Features.jsx`** | Displays 4 key features (+30 Algoritmos, Reportes PDF, Parser Avanzado, Enfoque Didáctico). Houses the download CTA section that triggers direct downloads of Android APK, Windows EXE, and Manual PDF via hidden DOM anchors (`forceDownload`). |
| **`Gallery.jsx`** | Interactive carousel showcasing 9 app screenshots. Features autoplay (4500ms interval), previous/next arrow buttons (`&#10094;`/`&#10095;`), and clickable indicator dots. |
| **`Team.jsx`** | Developer profiles for Trebol4Devop (José Monzón, Diego Vásquez, Carlos del Cid, Ottoniel Vásquez) with GitHub avatars and links, plus tech stack summary (Dart, Flutter, LaTeX). |
| **`Footer.jsx`** | Trebol Asociados logo, educational disclaimer, GitHub link, LinkedIn link, and email contact (`trebol4devop@proton.me`). |
| **`ContactModal.jsx`** | Controlled modal overlay (`isOpen` / `onClose`). Contains a form submitting POST requests directly to Formspree (`https://formspree.io/f/xbdjevkz`) for closed beta tester recruitment. |
| **`App.jsx`** | Root integrator. Manages `isContactFormOpen` state. On mount, attaches `IntersectionObserver` instances to trigger scroll-reveal animations (`.reveal-on-scroll` -> `.is-visible`) and section active tracking (`.is-active`). |

---

## 5. Netlify Deployment & Build Pipeline

The application is deployed on **Netlify** with continuous deployment from Git.

* **Build Configuration (`website/netlify.toml`)**:
  ```toml
  [build]
    publish = "dist"
    command = "npm run build"

  [build.environment]
    NODE_VERSION = "20"

  [dev]
    publish = "dist"
    port = 8888
    target = "static"

  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
* **SPA Routing Fallback (`website/public/_redirects`)**:
  Contains `/* /index.html 200`. This ensures that any direct navigation or page refresh on a route is cleanly served by Vite's `index.html` without triggering a Netlify 404 error.

---

## 6. Mandatory Verification Step

Whenever you make any changes to the codebase, **you MUST validate code correctness** by running the production build inside the `website/` directory:

```bash
cd website
npm run build
```

* Ensure the command exits with code `0`.
* Verify that no JSX syntax errors, missing exports, or unresolved imports occur.
* Only report task completion after a clean build verification.

---

## 7. Trébol4Devop AI Design & Aesthetics Context

* For complete instructions on the **Trébol4Devop** visual design system, **Tailwind CSS v4** tokens (`#5CCFAF` mint green), dark mode architecture, and bilingual i18n (`en`/`es`), see **[AI_CONTEXT.md](file:///C:/Users/emanu/OneDrive/Escritorio/Programacion/ProyectosUniversidad/2025/Proyectos/SAMNU-WEB/AI_CONTEXT.md)**.
* **Note on SAMNU-WEB**: In this repository, the original static layout and Vanilla CSS are preserved for 1:1 historical fidelity (as detailed in Rule 1 & Rule 2). However, for any future visual refactoring, landing page modernization, or new web projects within the **Trébol4Devop** ecosystem, the guidelines in **[AI_CONTEXT.md](file:///C:/Users/emanu/OneDrive/Escritorio/Programacion/ProyectosUniversidad/2025/Proyectos/SAMNU-WEB/AI_CONTEXT.md)** must be strictly applied.
