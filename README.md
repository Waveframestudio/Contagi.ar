# Contagi.ar (Contagiar) · ONG Cultural

Proyecto React moderno y escalable desarrollado para la ONG **Contagi.ar** (marca *Contagiar*), basado en el prototipo exportado de Google Stitch.

## 🚀 Tecnologías empleadas
- **React 19**
- **Vite** (Build tool ultrarrápido)
- **React Router DOM v7** (Navegación y ruteo SPA)
- **Tailwind CSS v4** + `@tailwindcss/vite` (Estilos responsivos e identitarios)
- **FontAwesome 6** & **Google Fonts** (Playfair Display + Plus Jakarta Sans)

---

## 📁 Estructura del Proyecto

```text
contagi-ar/
├── index.html                  # Punto de entrada HTML con tipografías e íconos
├── package.json                # Dependencias y scripts de construcción
├── vite.config.js              # Configuración de Vite + React + Tailwind v4
├── public/                     # Favicon e imágenes estáticas públicas
└── src/
    ├── assets/                 # Recursos gráficos y multimedia
    ├── components/             # Componentes modulares y reutilizables
    │   ├── Header.jsx          # Barra de navegación con menú mobile interactivo
    │   ├── Footer.jsx          # Pie de página institucional y enlaces
    │   ├── Hero.jsx            # Hero principal con tarjeta interactiva de Onda Expansiva
    │   ├── Section.jsx         # Contenedor wrapper semántico con variantes de fondo
    │   ├── CardBono.jsx        # Tarjeta reutilizable para bonos (Conciertos, Teatros, Cine)
    │   ├── CTA.jsx             # Banner de llamada a la acción reutilizable
    │   ├── Testimonial.jsx     # Tarjeta de testimonio / cita inspiradora
    │   └── Feature.jsx         # Tarjeta de pilares/beneficios de la tesis social
    ├── data/
    │   └── content.js          # Archivo de contenido centralizado (Single Source of Truth)
    ├── layouts/
    │   └── MainLayout.jsx      # Layout maestro para envolver las páginas
    ├── pages/
    │   ├── Home.jsx            # Vista principal con todas las secciones de Stitch
    │   ├── Bonos.jsx           # Catálogo completo de bonos culturales
    │   ├── BonoDetalle.jsx     # Detalle dinámico según el bono (/bonos/:tipo)
    │   ├── ComoFunciona.jsx    # Pasos detallados del ecosistema
    │   ├── Impacto.jsx         # Panel de métricas SROI y retorno social
    │   └── Sumate.jsx          # Formulario de alianzas e inversión social
    ├── styles/
    │   └── variables.css       # Tokens de diseño y paleta cromática
    ├── index.css               # Estilos globales y temas de Tailwind v4
    ├── router.jsx              # Configuración de rutas SPA
    ├── App.jsx                 # Provider de BrowserRouter
    └── main.jsx                # Punto de montaje de React
```

---

## 💻 Instrucciones de Instalación y Ejecución

### 1. Clonar / Navegar al proyecto:
```bash
cd contagi-ar
```

### 2. Instalar dependencias:
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo local:
```bash
npm run dev
```
Acceder en el navegador a `http://localhost:5173`.

### 4. Compilar para Producción:
```bash
npm run build
```
Genera la carpeta optimizada `dist/` lista para producción.

---

## 🌐 Despliegue en Vercel o Netlify

### Despliegue en Vercel:
1. Subir el repositorio a GitHub / GitLab / Bitbucket.
2. Importar el proyecto en [Vercel](https://vercel.com).
3. Vercel detectará Vite automáticamente. Build command: `npm run build`, Output directory: `dist`.
4. Si usás ruteo interno de SPA, asegurate de incluir una regla de rewrites o archivo `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 🛠 Sugerencias de Mejoras Futuras & Escalabilidad

1. **Centralización de Contenidos (`data/content.js`)**:
   - Actualmente todo el copy, beneficios y FAQs están centralizados en `src/data/content.js`. Esto facilita la migración futura a un Headless CMS (como Strapi, Sanity o Contentful) simplemente reemplazando la importación de datos locales por llamadas a la API.

2. **Filtros Dinámicos de Cartelera**:
   - Agregar un sistema de búsqueda y filtrado por provincia/ciudad para las funciones de la cartelera en `BonoDetalle.jsx`.

3. **Integración con Pasarela de Pagos**:
   - Conectar el formulario de adhesión con MercadoPago o Stripe en la página de `/sumate` o en el detalle de cada bono para procesamiento automático de membresías.
