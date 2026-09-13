---
description: Cambiar textos, precios o contenido de marca sin romper el sistema de diseño
---

# /editar-contenido

Sigue este orden estricto:

1. Lee `AGENTS.md` (raíz) y respeta las "verdades de marca".
2. Ubica el dato en su fuente correcta:
   - redes/nav/legales → `src/lib/site.ts`
   - precios/planes → array `TIERS` en `src/components/Pricing.tsx`
   - copy de sección → el componente correspondiente en `src/components/`
3. Edita **solo strings**: no cambies clases Tailwind ni animaciones salvo que
   el usuario lo pida explícitamente.
4. Si el cambio añade un icono, verifica que exista en la versión instalada de
   lucide-react antes de importarlo.
5. Ejecuta `npx tsc --noEmit` y `npm run build`; corrige si falla.
6. Responde con un resumen: archivo → texto anterior → texto nuevo.
