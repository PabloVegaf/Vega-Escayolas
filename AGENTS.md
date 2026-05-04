# AGENTS.md

Guía para agentes de IA que trabajen en este repositorio.

## Contexto del proyecto

Este proyecto es la web corporativa de Vega Escayolas. Su objetivo es mejorar la visibilidad online de la empresa, atraer clientes y ofrecer un sitio claro, accesible y fácil de consultar donde se muestren sus servicios, proyectos y capacidades.

La web está en fase de desarrollo y se desplegará más adelante en un home server. Actualmente es un sitio Astro de una sola página, con componentes `.astro`, CSS local en cada componente, contenido en español de España e imágenes locales en `src/assets`.

## Stack y comandos

- Framework principal: Astro.
- Gestor de paquetes: npm.
- Estilos: CSS nativo, sin frameworks.
- Desarrollo local: `npm run dev`.
- Comprobación previa a despliegue: `npm run build`.

Usa `npm run dev` para validar cambios durante el desarrollo y revisar la web en tiempo real. Antes de considerar un cambio listo para lanzar, ejecuta `npm run build`.

Los cambios visuales relevantes deben revisarse manualmente en desktop y móvil. Si el cambio afecta al layout, también debe revisarse en tablet o en un ancho intermedio equivalente.

## Principios de trabajo

- Sigue las instrucciones del usuario y mantén coherencia con el estilo existente del proyecto.
- Haz cambios acotados al objetivo pedido.
- Respeta la estructura actual si el cambio no requiere reorganización.
- Puedes proponer reorganizar componentes o archivos si mejora el mantenimiento, pero pide confirmación antes de hacerlo.
- No rehagas secciones completas si una modificación local resuelve el problema.
- Mantén el proyecto simple: prioriza Astro, HTML, CSS y JavaScript nativo.

## Dependencias

- No añadas dependencias salvo necesidad clara.
- Si una dependencia aporta valor real, explica por qué es necesaria antes de incorporarla.
- Evita frameworks de CSS, librerías UI o utilidades pesadas salvo aprobación explícita.
- Prioriza soluciones nativas del navegador y del stack actual.

## Diseño y estilo visual

- Mantén los colores de marca y el branding salvo aprobación explícita.
- Respeta el aspecto corporativo actual: cercano, limpio, profesional y orientado a cliente final.
- La web debe funcionar correctamente en ordenadores, tablets y móviles.
- Evita introducir estilos visuales que rompan la identidad existente.
- No sustituyas imágenes reales ni recursos de marca sin aprobación.
- Paleta base actual del proyecto:
  - Verde de marca: `#8BC34A`
  - Azul oscuro principal: `#1F283A`
  - Fondo claro principal: `#F9FAFD`
  - Blanco: `#FFFFFF`
  - Verde muy suave de apoyo: `#F1F8E9`
  - Fondo azul gris muy claro: `#EEF2F7`
  - Texto secundario: `#666666`
  - Texto secundario alternativo: `#555555`
  - Texto casi negro: `#000016`

Usa esos colores como referencia para cualquier ajuste visual. Si hace falta introducir nuevos tonos, que sean coherentes con esta paleta y con aprobación explícita cuando afecten al branding.

## Contenido y tono

- Todo el contenido visible debe estar en español de España.
- Usa un tono cercano, profesional y orientado al cliente final.
- No inventes proyectos, cifras, testimonios, años de experiencia, certificaciones ni datos comerciales.
- Puedes corregir ortografía, tildes, puntuación, legibilidad y redacción SEO si mejora realmente el texto y no cambia su significado.
- Siempre que corrijas textos existentes, indícalo expresamente al usuario.
- Los placeholders y textos tipo lorem ipsum son aceptables solo durante desarrollo.
- No se debe preparar ni recomendar despliegue si quedan placeholders, lorem ipsum o textos de ejemplo visibles.

## Datos sensibles

No modifiques sin aprobación explícita:

- Teléfonos.
- Email.
- Nombre de la empresa.
- Logo.
- Colores de marca.
- Branding.
- Imágenes reales.
- Enlaces a redes sociales.

Si detectas un posible error en datos de contacto o branding, avisa al usuario y espera confirmación antes de cambiarlo.

## SEO

Aplica buenas prácticas de SEO on-page en los cambios que afecten a contenido, estructura o metadatos:

- Títulos claros y jerarquía semántica correcta.
- Textos descriptivos orientados a cliente final.
- `alt` útiles en imágenes relevantes.
- Enlaces internos claros.
- Metadatos adecuados cuando se trabaje en layout o páginas.
- Contenido local orientado a El Puerto de Santa María y alrededores.

El SEO local debe priorizar El Puerto de Santa María y la provincia de Cádiz, incluyendo cuando sea natural referencias a Cádiz, Jerez de la Frontera, Chiclana y zonas cercanas. No fuerces palabras clave si empeoran la naturalidad del texto.

## Accesibilidad

La web debe seguir buenas prácticas de accesibilidad:

- Usa HTML semántico siempre que sea posible.
- Mantén una jerarquía de encabezados coherente.
- Las imágenes informativas deben tener `alt` descriptivo.
- Los elementos interactivos deben ser accesibles con teclado.
- Evita depender solo del color para transmitir información.
- Cuida contraste, tamaños legibles y estados de foco.
- Si añades JavaScript de cliente, valida que no bloquee el uso básico de la página.

## JavaScript de cliente

Puedes usar JavaScript en cliente cuando aporte valor real a la experiencia de usuario, como comparadores visuales, interacciones útiles o mejoras progresivas.

Mantén el JavaScript simple, localizado y accesible. Si una funcionalidad puede resolverse de forma clara con HTML y CSS, prioriza esa opción.

## Imágenes y proyectos

La sección de trabajos/proyectos puede contener placeholders mientras el proyecto esté en desarrollo. Antes del despliegue, todo proyecto visible debe tener contenido real o aprobado.

No inventes nombres, descripciones ni resultados de proyectos. Si faltan datos oficiales, conserva el placeholder o pide información al usuario.

## Validación antes de cerrar una tarea

Antes de dar una tarea por completada:

- Ejecuta `npm run build` si el cambio afecta a código, estructura, componentes, estilos o contenido renderizado.
- Usa `npm run dev` cuando sea necesario revisar visualmente durante el desarrollo.
- Revisa manualmente responsive en móvil y desktop si hay cambios visuales.
- Comprueba que no se han alterado branding, colores, contacto o imágenes reales sin permiso.
- Indica si has corregido textos, ortografía o SEO.
- Indica si quedan placeholders relevantes.

## Criterio de despliegue

No se debe considerar la web lista para desplegar si:

- Quedan textos lorem ipsum o placeholders visibles.
- Faltan datos oficiales en proyectos publicados.
- Hay errores de build.
- Hay problemas responsive evidentes.
- Hay cambios no aprobados en contacto, branding, colores o imágenes reales.
