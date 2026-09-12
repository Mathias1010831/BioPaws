import { Leaf, Recycle, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const VALUES = [
  {
    icon: Leaf,
    title: "100% ecológico",
    text: "Ingredientes de origen natural cultivados con respeto por la tierra.",
  },
  {
    icon: ShieldCheck,
    title: "Libre de químicos nocivos",
    text: "Sin sulfatos, parabenos ni colorantes artificiales. Nunca.",
  },
  {
    icon: Recycle,
    title: "Biodegradable",
    text: "Nuestra espuma y nuestro empaque vuelven a la tierra sin dejar rastro.",
  },
];

export default function Values() {
  return (
    <section id="valores" className="scroll-mt-28 py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Valores"
            title={
              <>
                Lo que no negociamos,{" "}
                <em className="italic text-leaf-deep">jamás</em>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-y-12 sm:grid-cols-3 lg:gap-x-0">
          {VALUES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className={`group px-2 lg:px-10 ${
                i > 0 ? "lg:border-l lg:border-bark/10" : ""
              }`}
            >
              <span className="inline-flex rounded-full border border-bark/15 bg-white p-4 text-leaf-deep shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bark/60">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
