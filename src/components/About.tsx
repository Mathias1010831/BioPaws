import { Leaf, PawPrint } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    icon: PawPrint,
    title: "Para todo tipo de perro",
    text: "Una fórmula suave que respeta la piel sensible de tu perro, sin importar su raza o tamaño.",
    tilt: "-rotate-1",
  },
  {
    icon: Leaf,
    title: "Amigos del ambiente",
    text: "Ingredientes biodegradables y un empaque responsable que vuelve a la tierra sin dejar rastro.",
    tilt: "rotate-1",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="scroll-mt-28 py-24 sm:py-28">
      <div className="wrap grid items-center gap-16 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Sobre nosotros"
              title={
                <>
                  Creados por gente que ama a los{" "}
                  <em className="italic text-leaf-deep">peludos</em> y al
                  planeta por igual
                </>
              }
              lead="Nuestro producto va dirigido a dueños de perros que buscan productos saludables para sus mascotas y cuidar del medio ambiente."
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-xl leading-relaxed text-bark/65">
              BioPaws nació de una idea simple: el baño de tu mascota no
              debería costarle nada al ambiente. Por eso cocinamos lotes
              pequeños con ingredientes que podrías encontrar en tu propia
              despensa — avena, aloe vera, coco y manzanilla — y dejamos fuera
              todo lo que no podemos pronunciar.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {CARDS.map(({ icon: Icon, title, text, tilt }, i) => (
              <Reveal key={title} delay={180 + i * 110}>
                <article
                  className={`h-full rounded-2xl border border-bark/10 bg-white p-6 shadow-sm transition-all duration-300 hover:rotate-0 hover:shadow-lift ${tilt}`}
                >
                  <span className="inline-flex rounded-xl bg-leaf/10 p-2.5 text-leaf-deep">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-bark">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bark/65">
                    {text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tablero de marca, como polaroid */}
        <Reveal delay={140} className="relative">
          <figure className="relative mx-auto max-w-md rotate-2 transition-transform duration-500 hover:rotate-0">
            <span
              aria-hidden
              className="absolute -top-3.5 left-1/2 z-10 h-7 w-28 -translate-x-1/2 -rotate-3 rounded-sm bg-sun/50"
            />
            <img
              src="/brand-board.png"
              alt="Tablero de marca BioPaws: paleta de colores, etiqueta y bocetos del producto"
              className="w-full rounded-2xl border border-bark/10 shadow-lift"
              loading="lazy"
            />
            <figcaption className="mt-4 text-center text-sm italic text-bark/55">
              Nuestro tablero de marca: el punto de partida de cada fórmula
              BioPaws.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
