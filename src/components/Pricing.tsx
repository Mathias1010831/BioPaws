import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIERS = [
  {
    name: "Botella 500 ml",
    detail: "Shampoo natural · aroma original",
    price: "S/ 16.00",
    alt: null as string | null,
    features: [
      "Rinde hasta 25 baños",
      "Apto para pieles sensibles",
      "Empaque 100% reciclable",
    ],
    cta: "Pedir mi botella",
    featured: true,
    badge: "Disponible ahora" as string | null,
    soon: false,
  },
  {
    name: "Dúo de la manada",
    detail: "2 × 500 ml + dosificador",
    price: "S/ 00.00",
    alt: "$00.00",
    features: [
      "Ahorro frente al unitario",
      "Dosificador de regalo",
      "Envío prioritario a todo el Perú",
    ],
    cta: "Quiero el dúo",
    featured: false,
    badge: null as string | null,
    soon: true,
  },
  {
    name: "Ruta mensual",
    detail: "Suscripción renovable",
    price: "S/ 00.00",
    alt: "$00.00",
    features: [
      "Entrega cada 30 días",
      "Pausa o cancela cuando quieras",
      "Precio congelado todo el año",
    ],
    cta: "Avisarme al lanzarla",
    featured: false,
    badge: null as string | null,
    soon: true,
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
                Precios claros, como{" "}
                <em className="italic text-leaf-deep">nuestra fórmula</em>
              </>
            }
            lead="Sin letras pequeñas ni sorpresas: hoy, una botella honesta con un precio honesto."
          />
        </Reveal>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
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

                <h3 className="font-display text-xl font-semibold text-bark">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-bark/55">
                  {tier.detail}
                  {tier.soon ? (
                    <span className="ml-2 inline-block rounded-full bg-bark/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-bark/50">
                      Próximamente
                    </span>
                  ) : null}
                </p>

                <div className="mt-6 flex items-baseline gap-2.5">
                  <span className="font-display text-[2.6rem] font-semibold leading-none tracking-tight text-bark">
                    {tier.price}
                  </span>
                  {tier.alt ? (
                    <span className="text-sm font-medium text-bark/45">
                      {tier.alt}
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-bark/45">
                      por botella
                    </span>
                  )}
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
            La botella de 500 ml ya tiene precio oficial: S/ 16.00. El dúo y la
            suscripción están en evaluación; sus montos son placeholders
            editables (S/ 00.00 / $00.00).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
