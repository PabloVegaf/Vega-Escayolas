# Vega Escayolas — Web corporativa

Web corporativa de **Vega Escayolas**, empresa especializada en trabajos de escayola, pladur y perlita en El Puerto de Santa María (Cádiz) y alrededores.

## 🚀 Stack

- [Astro](https://astro.build) como framework principal.
- CSS nativo.
- JavaScript vanilla para interacciones puntuales (comparador antes/después).
- Despliegue previsto en home server.

## 📁 Estructura del proyecto

```
/
├── public/               # Archivos estáticos (favicon, robots.txt)
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes .astro reutilizables
│   ├── layouts/          # Plantilla base (Layout.astro)
│   └── pages/            # Páginas (index.astro, 404.astro)
├── astro.config.mjs      # Configuración de Astro y sitemap
└── package.json
```

## 🛠️ Comandos

| Comando              | Descripción                                     |
| -------------------- | ----------------------------------------------- |
| `npm install`        | Instalar dependencias                           |
| `npm run dev`        | Iniciar servidor de desarrollo en `localhost:4321` |
| `npm run build`      | Generar build de producción en `dist/`          |
| `npm run preview`    | Previsualizar el build local antes de desplegar |

## 🌍 SEO

La web incluye:

- Metadatos Open Graph y Twitter Cards para compartir en redes sociales.
- Datos estructurados JSON-LD (`HomeAndConstructionBusiness`).
- `robots.txt` y sitemap generado automáticamente con `@astrojs/sitemap`.
- Contenido optimizado para SEO local: El Puerto de Santa María, Cádiz, Jerez, Chiclana, Bahía de Cádiz.
- Etiquetas canónicas, meta description, keywords y jerarquía semántica de encabezados.
- Página 404 personalizada.

## ♿ Accesibilidad

- HTML semántico (`nav`, `section`, `article`, `h1`-`h2`-`h3`).
- Navegación con teclado en el comparador antes/después.
- Atributos `aria-label` y `aria-hidden` en elementos relevantes.
- Textos alternativos descriptivos en imágenes.

## 📝 Convenciones

- Todo el contenido visible está en español de España.
- Tono cercano y profesional, orientado a cliente final.
- CSS local en cada componente.
- No se usan frameworks CSS externos.

## 📦 Dependencias

- `astro` — Framework principal.
- `@astrojs/sitemap` — Generación automática del sitemap.

---

Proyecto en fase de desarrollo. No desplegar si quedan placeholders o contenido pendiente de revisión.
