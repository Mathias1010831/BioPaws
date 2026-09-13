import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIERS = [
  {
    name: "Pack 1",
    detail: "1 botella · shampoo natural 500 ml",
    price: "S/ 16.00",
    alt: "S/ 16.00 c/u",
    features: [
      "Rinde hasta 25 baños",
      "Apto para pieles sensibles",
      "Empaque 100% reciclable",
    ],
    cta: "Pedir mi Pack 1",
    featured: false,
    badge: null as string | null,
  },
  {
    name: "Pack 2",
    detail: "2 botellas × 500 ml",
    price: "S/ 30.00",
    alt: "S/ 15.00 c/u",
    features: [
      "Ahorras S/ 2 frente al unitario",
      "Rinde hasta 50 baños en total",
      "Envío prioritario a todo el Perú",
    ],
    cta: "Quiero el Pack 2",
    featured: true,
    badge: "Favorito de la manada",
  },
];

export default function Pricing() {
  return (
    <section
      id="precios"
      className="scroll-mt-28 border-y border-bark/5 bg-white/70 py-24 backdrop-blur-sm sm:py-28"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Precios"
            title={
              <>
                Dos packs, cero{" "}
                <em className="italic text-leaf-deep">letras pequeñas</em>
              </>
            }
            lead="Elige tu ritmo de baño: una botella para probarlo, o el dúo para que el brillo dure el doble."
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-3xl items-stretch gap-6 md:grid-cols-2">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 110} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                  tier.featured
                    ? "border border-transparent bg-white shadow-lift ring-2 ring-leaf/50"
                    : "border border-bark/10 bg-white/80 shadow-sm"
                }`}
              >
                {tier.badge ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-leaf px-4 py-1.5 text-xs font-bold text-white shadow-sm">
                    {tier.badge}
                  </span>
                ) : null}

                <h3 className="font-display text-2xl font-semibold text-bark">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-bark/55">{tier.detail}</p>

                <div className="mt-6 flex items-baseline gap-2.5">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-tight text-bark">
                    {tier.price}
                  </span>
                  <span className="text-sm font-medium text-bark/45">
                    {tier.alt}
                  </span>
                </div>

                <ul className="mb-8 mt-7 space-y-3 text-sm text-bark/70">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep"
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-auto block rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                    tier.featured
                      ? "bg-bark text-cream hover:bg-bark-deep"
                      : "border border-bark/20 text-bark hover:border-leaf/60 hover:text-leaf-deep"
                  }`}
                >
                  {tier.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 text-center text-sm text-bark/50">
            El Pack 2 deja cada botella en S/ 15.00: ahorras S/ 2 frente a
            comprarlas por separado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
