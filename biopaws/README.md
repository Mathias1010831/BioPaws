# BioPaws · Landing Page 

Landing page de desplazamiento continuo (single-page / smooth scroll) para
**BioPaws — shampoo natural para perros**. Diseño ecológico, minimalista y
limpio, construido con:

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3.4** con sistema de diseño propio
- **Anime.js 3** para partículas, reveals, acordeón y flotaciones
- **Lucide React** para iconografía minimalista
- **next/font** con *Fraunces* (display) y *Karla* (texto)

## Instalación

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run start    # servir build de producción
```

## Paleta de colores

| Rol              | Token        | HEX       |
| ---------------- | ------------ | --------- |
| Tierra / principal | `bark`     | `#522A1F` |
| Hoja / secundario  | `leaf`     | `#78AC12` |
| Energía / acento   | `sun`      | `#DCE229` |
| Crema / fondos     | `cream`    | `#F9F8F3` |
| Miel (etiqueta, derivada del tablero de marca) | `honey` | `#F4C64D` |

Variantes `bark-deep`, `leaf-deep`, `sun-deep` y `honey-deep` para hovers y
contrastes. Opacidades (`bg-leaf/10`, `text-bark/60`…) y degradados suaves
permitidos por el brief.

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Fuentes, metadatos y fondo global de burbujas
│   ├── page.tsx          # Composición de secciones (single-page)
│   └── globals.css       # Base Tailwind, wrap editorial, marquesina
├── components/
│   ├── BubblesField.tsx  # Canvas fijo: burbujas + destellos dirigidos por Anime.js
│   ├── Navbar.tsx        # Sticky, backdrop-blur, scroll-spy y menú móvil animado
│   ├── Hero.tsx          # Titular editorial, CTAs, vitrina con frasco SVG flotante
│   ├── Marquee.tsx       # Cinta inclinada de ingredientes/valores
│   ├── About.tsx         # Sobre nosotros + tablero de marca tipo polaroid
│   ├── MissionVision.tsx # Bento Misión / Visión / Impacto / Objetivo
│   ├── Products.tsx      # Producto 500 ml + ficha del aroma único
│   ├── Pricing.tsx       # Pack 1 (S/ 16.00) y Pack 2 (S/ 30.00)
│   ├── Values.tsx        # 4 valores con separadores de hairline
│   ├── Policies.tsx      # Acordeón animado: canales, tiempos, quejas y envíos
│   ├── Testimonials.tsx  # Carrusel scroll-snap con reseñas y foto-placeholders
│   ├── Contact.tsx       # Instagram @BioPaws_oficial + formulario estilizado
│   ├── Footer.tsx        # Cierre marrón con legales y copyright
│   ├── BottleIllustration.tsx  # Frasco SVG fiel al tablero de marca
│   ├── Reveal.tsx        # Aparición al scroll (IntersectionObserver + Anime.js)
│   └── SectionHeading.tsx      # Eyebrow + titular + lead reutilizables
└── lib/site.ts           # Nav, redes y enlaces legales centralizados
```

## Animaciones (Anime.js)

1. **Fondo flotante**: `BubblesField` dibuja burbujas de jabón y destellos de
   espuma en un `<canvas>` fijo; el ascenso de cada burbuja y el "respirado" de
   los destellos los dirige Anime.js (`loop`, `stagger`, `easeInOutSine`).
2. **Scroll**: `html { scroll-behavior: smooth }` + `scroll-mt` por sección;
   `Reveal` escala apariciones con `IntersectionObserver` + Anime.js.
3. **Hover**: tarjetas y CTAs con `transition` de Tailwind
   (`-translate-y`, `shadow-lift`), subrayado del navbar con `scale-x`.
4. **Detalles**: entrada escalonada del hero, subrayado a mano alzada con
   `strokeDashoffset`, flotación del frasco y fichas de ingredientes,
   acordeón de políticas y panel móvil animados por altura.

Todo respeta `prefers-reduced-motion`.

## Placeholders listos para el negocio

- **Aromas**: tarjetas wireframe "Aroma Avena & Coco" y "Aroma Aloe & Manzanilla"
  con área de foto, skeletons y nota editorial.
- **Precios**: Pack 1 S/ 16.00 y Pack 2 S/ 30.00, editables en el array
  `TIERS` de `src/components/Pricing.tsx`.
- **Políticas**: cuerpos de acordeón con bloque "Contenido en preparación".
- **Testimonios**: reseñas marcadas como *ejemplo* + marcos de foto de cliente.
- **Contacto**: correo `hola@biopaws.pe` marcado como editable; Instagram real
  en `src/lib/site.ts`.

## Assets

- `public/logo.png` — logo oficial (fondo blanco integrado con `mix-blend-multiply`).
- `public/brand-board.png` — tablero de marca usado en "Sobre nosotros".
