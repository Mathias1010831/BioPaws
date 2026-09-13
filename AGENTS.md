# AGENTS.md — BioPaws Landing

Instrucciones permanentes para cualquier agente de IA (Antigravity, etc.) que
trabaje en este repositorio. Léelas antes de tocar código.

## Proyecto

Landing single-page (smooth scroll) de **BioPaws**, shampoo natural para
perros (Perú). Stack fijo:

- Next.js 15 (App Router, TypeScript estricto)
- Tailwind CSS 3.4 (sin CSS-in-JS, sin otras librerías de estilos)
- Anime.js 3 (`import anime from "animejs"`)
- lucide-react (única fuente de iconos)
- next/font: Fraunces (`font-display`) + Karla (`font-sans`)

Comandos: `npm run dev` (puerto 3000) · `npm run build` · `npx tsc --noEmit`.
**No** subas versiones mayores de next/react/tailwind/animejs salvo petición
explícita del usuario.

## Verdades de marca (no negociables)

- El shampoo es **solo para perros**. Prohibido mencionar gatos y usar la
  palabra "perra": siempre "perro(s)", sin excepción.
- Existe **un solo aroma** actual: "Aroma Avena · Coco · Aloe & Manzanilla"
  (etiqueta "Fórmula original"). Los aromas futuros son placeholders.
- Precios oficiales: **Pack 1** (500 ml) **S/ 16.00** y **Pack 2** (2 × 500 ml)
  **S/ 30.00**. No hay suscripción ni más packs por ahora.
- **No usar el claim "cruelty free"** ni mencionar pruebas en animales: el
  negocio lo retiró de toda la comunicación.
- Compromisos de servicio vigentes: respuesta máx. 3 días hábiles (urgencias
  24 h), envíos a todo el Perú **desde la fábrica en Arequipa** (1–12 días
  hábiles por zona), reembolsos en máx. 7 días hábiles. El Pack 2 no incluye
  dosificador. Todo está escrito en `src/components/Policies.tsx`.
- Instagram oficial: `@BioPaws_oficial` →
  https://www.instagram.com/BioPaws_oficial (siempre `target="_blank"`).
- Copy en español de Perú, trato de tú, cálido pero profesional.

## Sistema de diseño

- Tokens en `tailwind.config.ts`: `bark #522A1F`, `leaf #78AC12`,
  `sun #DCE229`, `cream #F9F8F3`, `honey #F4C64D` (+ variantes `-deep`).
  Usa opacidades (`bg-leaf/10`, `text-bark/60`); **no inventes hex nuevos**.
- Títulos y citas: `font-display` con `<em class="italic text-leaf-deep">`
  para la palabra acento. Todo lo demás: `font-sans`.
- Geometría: `rounded-2xl/3xl`, bordes finos `border-bark/10`,
  sombras `shadow-sm/soft/lift`, contenedor `.wrap`, secciones `py-24 sm:py-28`
  con `scroll-mt-28`.
- Anti-slop: layouts asimétricos, máximo una tarjeta oscura (`bg-bark`) por
  sección, sin gradientes sobre texto, sin emojis en titulares, sin
  glassmorphism gratuito (el backdrop-blur es solo navbar y bandas de sección).
- Placeholders tipo maqueta: borde `border-dashed border-bark/15-20`,
  skeletons `bg-bark/10`, nota corta en cursiva `text-bark/45`.

## Animaciones

- Anime.js solo dentro de componentes `"use client"` y en `useEffect`,
  con cleanup (`anime.remove` / `pause`) y respeto a
  `prefers-reduced-motion`.
- Apariciones al scroll: usar `<Reveal>`; no crear sistemas paralelos.
- El fondo de burbujas es único: `BubblesField` (canvas fijo); no duplicarlo.
- Hovers con transiciones Tailwind (`-translate-y-0.5`, `shadow-lift`).

## Mapa de archivos

- `src/app/page.tsx` — orden de secciones de la single-page.
- `src/lib/site.ts` — nav, redes, legales (editar aquí, no en componentes).
- `src/components/Pricing.tsx` — array `TIERS` (precios y planes).
- `src/components/*` — cada sección con su copy al inicio del archivo.
- `public/logo.png` — logo con fondo blanco: siempre `mix-blend-multiply`
  sobre fondos claros. `public/brand-board.png` — tablero de marca (About).

## Workflows disponibles

- `/editar-contenido` — cambiar textos/precios sin romper el diseño.
- `/nueva-seccion` — añadir una sección al scroll continuo.

## Definición de terminado

1. `npx tsc --noEmit` y `npm run build` sin errores.
2. Cero menciones a "gato(s)" y cero hex fuera del sistema.
3. Iconos de lucide verificados contra la versión instalada antes de importar.
4. Si cambia la estructura, actualizar `README.md`.
