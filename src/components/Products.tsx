import {
  ArrowRight,
  Flower2,
  ImagePlus,
  Sprout,
  TreePalm,
  Wheat,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import BottleIllustration from "./BottleIllustration";

const INGREDIENTS = [
  {
    icon: Wheat,
    name: "Avena",
    benefit: "Calma la picazón y suaviza las pieles más sensibles.",
  },
  {
    icon: Sprout,
    name: "Aloe vera",
    benefit: "Hidrata y refresca la piel después de cada aventura.",
  },
  {
    icon: TreePalm,
    name: "Aceite de coco",
    benefit: "Nutre el pelaje y le devuelve su brillo natural.",
  },
  {
    icon: Flower2,
    name: "Manzanilla",
    benefit: "Relaja los sentidos con un aroma delicado y limpio.",
  },
];

const VARIANTS_NOTE =
  "¿Nuevos aromas? En desarrollo: vota tu favorito por DM en Instagram.";

export default function Products() {
  return (
    <section id="productos" className="scroll-mt-28 py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Productos"
            title={
              <>
                Un solo héroe,{" "}
                <em className="italic text-leaf-deep">cuatro</em> ingredientes
                estrella
              </>
            }
            lead="Shampoo Natural BioPaws de 500 ml: espuma cremosa que limpia sin arrastrar lo bueno de su piel."
          />
        </Reveal>

        {/* Producto principal */}
        <Reveal delay={100}>
          <article className="mt-14 grid overflow-hidden rounded-3xl border border-bark/10 bg-white shadow-soft lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative flex items-center justify-center bg-gradient-to-b from-honey/25 via-cream to-cream p-10 lg:p-12">
              <span className="absolute left-6 top-6 rounded-full bg-bark px-4 py-1.5 text-xs font-bold text-cream shadow-sm">
                500 ml ℮
              </span>
              <BottleIllustration className="h-72 w-auto sm:h-80" />
            </div>

            <div className="p-9 lg:p-12">
              <h3 className="font-display text-3xl font-semibold text-bark">
                Shampoo Natural BioPaws
              </h3>
              <p className="mt-3 leading-relaxed text-bark/70">
                Limpia, hidrata y protege en un solo paso. Nuestra fórmula
                biodegradable respeta el manto natural de su piel y enjuaga sin
                dejar huella en el ambiente.
              </p>

              <ul className="mt-8 divide-y divide-bark/10">
                {INGREDIENTS.map(({ icon: Icon, name, benefit }) => (
                  <li key={name} className="flex items-start gap-4 py-4">
                    <span className="mt-0.5 inline-flex rounded-xl border border-bark/10 bg-cream p-2.5 text-leaf-deep">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h4 className="font-semibold text-bark">{name}</h4>
                      <p className="mt-0.5 text-sm text-bark/60">{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a
                  href="#precios"
                  className="group inline-flex items-center gap-2 rounded-full bg-bark px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark-deep hover:shadow-lift"
                >
                  Ver precios
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
                <span className="text-sm text-bark/50">
                  Pronto en tiendas aliadas de todo el Perú.
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Aroma único actual — con foto pendiente por el negocio */}
        <Reveal delay={80}>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold text-bark">
              Nuestro aroma, por ahora
            </h3>
            <span className="text-sm text-bark/50">
              Un solo aroma perfecto; las variantes vienen en camino
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <article className="mt-6 grid overflow-hidden rounded-3xl border border-bark/10 bg-white shadow-soft sm:grid-cols-[0.85fr_1.15fr]">
            <div className="m-6 flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-bark/20 bg-cream/70 text-bark/40 sm:aspect-auto sm:min-h-full">
              <ImagePlus className="h-8 w-8" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                Foto
              </span>
            </div>
            <div className="p-8 sm:py-9 sm:pr-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h4 className="font-display text-xl font-semibold text-bark">
                  Aroma Avena · Coco · Aloe &amp; Manzanilla
                </h4>
                <span className="rounded-full bg-sun/40 px-3 py-1 text-xs font-bold text-bark-deep">
                  Fórmula original
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-bark/65">
                Por ahora, un solo aroma: el equilibrio justo de nuestros
                cuatro ingredientes estrella en cada baño. Suave, limpio y
                delicado con su olfato.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {INGREDIENTS.map(({ icon: Icon, name }) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-bark/10 bg-cream px-3.5 py-1.5 text-xs font-bold text-bark"
                  >
                    <Icon className="h-3.5 w-3.5 text-leaf-deep" aria-hidden />
                    {name}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs italic text-bark/45">
                {VARIANTS_NOTE}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
