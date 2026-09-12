"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Check,
  Flower2,
  PawPrint,
  Sprout,
  Wheat,
} from "lucide-react";
import anime from "animejs";
import BottleIllustration from "./BottleIllustration";

const CHIPS = [
  { icon: Wheat, label: "Avena", pos: "-left-3 top-16 sm:-left-8" },
  { icon: Sprout, label: "Aloe vera", pos: "-right-2 top-1/3 sm:-right-9" },
  { icon: PawPrint, label: "Coco", pos: "-left-4 bottom-28 sm:-left-10" },
  { icon: Flower2, label: "Manzanilla", pos: "-right-3 bottom-12 sm:-right-7" },
];

const TRUST = ["100% ecológico", "Biodegradable"];

export default function Hero() {
  const underlineRef = useRef<SVGPathElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      document
        .querySelectorAll("[data-hero]")
        .forEach((el) => el.classList.remove("opacity-0"));
      return;
    }

    /* Entrada escalonada del contenido */
    anime({
      targets: "[data-hero]",
      opacity: [0, 1],
      translateY: [28, 0],
      delay: anime.stagger(110, { start: 180 }),
      duration: 950,
      easing: "easeOutCubic",
    });

    /* Trazo del subrayado a mano alzada bajo el nombre */
    const path = underlineRef.current;
    if (path) {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      anime({
        targets: path,
        strokeDashoffset: [len, 0],
        duration: 900,
        delay: 950,
        easing: "easeInOutQuad",
      });
    }

    /* Flotación del frasco y de las fichas de ingredientes */
    anime({
      targets: bottleRef.current,
      translateY: [-9, 9],
      duration: 3200,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
    anime({
      targets: ".hero-chip",
      translateY: [-7, 7],
      duration: 2600,
      delay: anime.stagger(320),
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <section id="inicio" className="relative scroll-mt-28 pb-20 pt-32 lg:pt-36">
      <div className="wrap flex flex-col items-center text-center">
        <p
          data-hero
          className="opacity-0 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-leaf-deep"
        >
          <PawPrint className="h-3.5 w-3.5" aria-hidden />
          Cuidado natural para patas felices
        </p>

        {/* Masthead: el nombre de la marca, gigante y centrado */}
        <h1
          data-hero
          className="opacity-0 mt-7 font-display text-[4.3rem] font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-[8.75rem]"
        >
          <span className="text-leaf-deep">Bio</span>
          <span className="text-bark">Paws</span>
        </h1>
        <svg
          aria-hidden
          className="mt-1 w-52 sm:w-72"
          viewBox="0 0 240 14"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={underlineRef}
            d="M4 10 C 60 3, 130 2.5, 236 8"
            stroke="#DCE229"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>

        <p
          data-hero
          className="opacity-0 mt-8 max-w-3xl font-display text-2xl font-semibold leading-snug text-bark text-balance sm:text-3xl"
        >
          La naturaleza lava, tu perro disfruta, y el planeta{" "}
          <em className="italic text-leaf-deep">agradece</em>.
        </p>

        <p
          data-hero
          className="opacity-0 mt-5 max-w-xl text-lg leading-relaxed text-bark/70"
        >
          BioPaws es shampoo natural para perros, cocinado en lotes pequeños
          con avena, aloe vera, aceite de coco y manzanilla. Sin sulfatos ni
          parabenos: solo espuma amable con su piel y con el ambiente que
          ambos pisan.
        </p>

        <div data-hero className="opacity-0 mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#productos"
            className="group inline-flex items-center gap-2 rounded-full bg-bark px-7 py-3.5 font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark-deep hover:shadow-lift"
          >
            Conocer productos
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-bark/20 bg-white/70 px-7 py-3.5 font-semibold text-bark backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/60 hover:text-leaf-deep"
          >
            Contáctanos
          </a>
        </div>

        <ul
          data-hero
          className="opacity-0 mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm font-medium text-bark/60"
        >
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf/15">
                <Check className="h-3 w-3 text-leaf-deep" aria-hidden />
              </span>
              {t}
            </li>
          ))}
        </ul>

        {/* Vitrina del producto */}
        <div data-hero className="opacity-0 relative mt-16 w-full max-w-[380px]">
          <div className="relative w-full rounded-b-[2rem] rounded-t-[190px] border border-bark/10 bg-white/80 px-10 pb-10 pt-16 shadow-soft backdrop-blur-sm">
            <div ref={bottleRef}>
              <BottleIllustration className="mx-auto h-auto w-full max-w-[240px]" />
            </div>
            <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-[0.28em] text-bark/45">
              Fórmula suave · pH balanceado
            </p>

            {CHIPS.map(({ icon: Icon, label, pos }) => (
              <span
                key={label}
                className={`hero-chip absolute ${pos} inline-flex items-center gap-2 rounded-full border border-bark/10 bg-white px-4 py-2 text-xs font-bold text-bark shadow-md`}
              >
                <Icon className="h-3.5 w-3.5 text-leaf-deep" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
