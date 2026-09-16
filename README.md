# Ngen — Sitio Web

Sitio institucional de **Ngen Servicios de Ingeniería**, construido en
Next.js 14 (App Router) + TypeScript + Tailwind CSS.

Este proyecto implementa la **Dirección A — Editorial Minimalista**
(inspirada en Apple) de los tres borradores visuales explorados
previamente. El sistema de diseño (colores, tipografías) vive en
`tailwind.config.ts` y `app/layout.tsx`.

## Requisitos

- Node.js 18.18 o superior
- npm 9 o superior

## Puesta en marcha

```bash
bash scripts/setup.sh   # instala dependencias y verifica tipos
npm run dev              # http://localhost:3000
```

## Estructura del proyecto

```
Sitio_Web/
├── app/
│   ├── layout.tsx       # Fuentes (Spectral + Manrope), metadata SEO
│   ├── page.tsx         # Composición de la página de inicio
│   └── globals.css      # Estilos base y clases utilitarias (.btn, etc.)
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── ServiceCycle.tsx     # Diseño → Supervisión → Ejecución → Administración
│   ├── Specialties.tsx      # Las 5 áreas de aterrizaje técnico
│   ├── Coverage.tsx         # Regiones Atacama–O'Higgins
│   ├── Differentiator.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── icons.tsx             # Set de íconos lineales propios (SVG)
├── lib/
│   └── content.ts        # Todo el texto del sitio vive acá (ver abajo)
├── scripts/
│   └── setup.sh
└── public/                # Imágenes y assets estáticos
```

## Cómo editar contenido

**Nunca** se edita texto directamente dentro de un componente. Todo el
copy del sitio (títulos, descripciones, datos de contacto) vive en
`lib/content.ts`, tipado con TypeScript. Para cambiar un texto, se edita
ese archivo — el cambio se refleja automáticamente en todos los
componentes que lo consumen.

Los valores entre `[CORCHETES]` (por ejemplo `[EMAIL DE CONTACTO]`) son
placeholders pendientes de un dato real. No reemplazar por un dato
inventado.

## Pendiente antes de producción

- [ ] Reemplazar `[EMAIL DE CONTACTO]` y `[TELÉFONO DE CONTACTO]` en `lib/content.ts` por los datos reales.
- [ ] Sumar fotografía real de terreno (actualmente el sitio no usa fotos, solo tipografía e íconos).
- [ ] Definir dominio real y actualizar `metadataBase` en `app/layout.tsx`.
- [ ] Revisar el sitio en ancho de teléfono y ajustar quiebres si es necesario.
- [ ] Decidir plataforma de despliegue (Vercel es la ruta de menor fricción para Next.js).

## Contexto del proyecto

El contexto completo (por qué se eligió esta dirección visual, historial
de decisiones, próximos pasos) vive en la bóveda de Obsidian del
proyecto, en la carpeta hermana `WEB_Ngen/`, específicamente en
`00 - Instrucciones Maestras para IA.md`. Cualquier IA (Claude Code
incluido) que retome este proyecto debe leer ese documento primero.
