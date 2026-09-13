---
description: Añadir una nueva sección a la single-page respetando el sistema BioPaws
---

# /nueva-seccion

1. Lee `AGENTS.md` (raíz): paleta, tipografías, anti-slop y animaciones.
2. Crea `src/components/<Nombre>.tsx`:
   - `<section id="<slug>" className="scroll-mt-28 py-24 sm:py-28">`
     (alterna fondo `bg-white/70 border-y border-bark/5` si la sección
     vecina es transparente).
   - Encabezado con `<SectionHeading>` y apariciones con `<Reveal>`.
   - Tarjetas `rounded-3xl border-bark/10 shadow-sm` con hover
     `-translate-y-1 hover:shadow-lift`.
3. Regístrala en `src/app/page.tsx` en el orden que indique el usuario.
4. Añade el enlace en `NAV_LINKS` (`src/lib/site.ts`) si debe aparecer en el
   navbar (máximo 9 items visibles).
5. Si necesita animaciones propias: Anime.js dentro de `useEffect`, con
   cleanup y soporte de `prefers-reduced-motion`.
6. Verifica con `npx tsc --noEmit` y `npm run build`, y actualiza el mapa de
   archivos de `AGENTS.md` y `README.md`.
