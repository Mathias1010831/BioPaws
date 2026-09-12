import { Eye, HeartHandshake, PawPrint, Sparkles, Target } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MissionVision() {
  return (
    <section
      id="mision"
      className="scroll-mt-28 border-y border-bark/5 bg-white/70 py-24 backdrop-blur-sm sm:py-28"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Misión y visión"
            title={
              <>
                Un propósito claro,{" "}
                <em className="italic text-leaf-deep">patita</em> tras patita
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Misión — tarjeta oscura */}
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-3xl bg-bark p-9 text-cream shadow-lift">
              <PawPrint
                aria-hidden
                className="absolute -bottom-9 -right-7 h-44 w-44 text-cream/5"
              />
              <span className="inline-flex rounded-2xl bg-sun p-3 text-bark">
                <HeartHandshake className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Misión
              </h3>
              <p className="mt-3 leading-relaxed text-cream/80">
                Brindar un shampoo natural y seguro para perros, elaborado con
                ingredientes ecológicos y libres de químicos dañinos,
                promoviendo el cuidado saludable de las mascotas y el respeto
                por el medio ambiente.
              </p>
            </article>
          </Reveal>

          {/* Visión */}
          <Reveal delay={110}>
            <article className="h-full rounded-3xl border border-bark/10 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <span className="inline-flex rounded-2xl bg-leaf/10 p-3 text-leaf-deep">
                <Eye className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-bark">
                Visión
              </h3>
              <p className="mt-3 leading-relaxed text-bark/70">
                Crear un shampoo natural elaborado con ingredientes suaves y
                ecológicos que protejan la piel de los perros y no dañen el
                ambiente.
              </p>
            </article>
          </Reveal>

          {/* Impacto */}
          <Reveal delay={80}>
            <article className="h-full rounded-3xl border border-leaf/25 bg-leaf/10 p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex rounded-2xl bg-white p-3 text-leaf-deep shadow-sm">
                <Sparkles className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-bark">
                Impacto
              </h3>
              <p className="mt-3 leading-relaxed text-bark/70">
                Mejora el cuidado de las mascotas, genera confianza y satisface
                la necesidad de usar productos naturales y seguros.
              </p>
            </article>
          </Reveal>

          {/* Objetivo */}
          <Reveal delay={190}>
            <article className="h-full rounded-3xl border border-sun/50 bg-sun/15 p-9 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex rounded-2xl bg-white p-3 text-honey-deep shadow-sm">
                <Target className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-bark">
                Objetivo
              </h3>
              <p className="mt-3 leading-relaxed text-bark/70">
                Desarrollar una marca de shampoo natural para perros que
                promueva el cuidado saludable de las mascotas.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
