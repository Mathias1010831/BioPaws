"use client";

import { useRef } from "react";
import { Camera, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    quote:
      "Luna solía rascarse después del baño. Con BioPaws eso se acabó: huele divino y su pelaje está más suave que nunca.",
    name: "Mariana Q.",
    pet: "Luna, su perro · Arequipa",
    initials: "MQ",
  },
  {
    quote:
      "Me encanta que sea biodegradable: baño a Thor en el jardín sin culpa alguna. El aroma a coco es una locura.",
    name: "Carlos M.",
    pet: "Thor, su perro · Lima",
    initials: "CM",
  },
  {
    quote:
      "Bañaba a mis dos perros con shampoo comercial y se rascaban siempre. Con BioPaws eso se acabó: el aroma a manzanilla es delicado y limpio.",
    name: "Fiorella R.",
    pet: "Miel y Rocky, sus perros · Cusco",
    initials: "FR",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-sun text-sun-deep" aria-hidden />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="testimonios" className="scroll-mt-28 py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Testimonios y evidencias"
              title={
                <>
                  Colas que mueven{" "}
                  <em className="italic text-leaf-deep">opiniones</em>
                </>
              }
              lead="Reseñas y fotos reales de la manada BioPaws. Los espacios marcados están listos para recibir contenido de clientes."
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Testimonios anteriores"
                className="rounded-full border border-bark/15 bg-white p-3 text-bark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark hover:text-cream"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Siguientes testimonios"
                className="rounded-full border border-bark/15 bg-white p-3 text-bark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark hover:text-cream"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 pb-4 sm:scroll-px-8 sm:px-8 lg:scroll-px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))]"
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              data-card
              className="relative min-w-[300px] snap-start rounded-3xl border border-bark/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:min-w-[380px]"
            >
              <span className="absolute right-6 top-6 text-[9px] font-bold uppercase tracking-[0.2em] text-bark/35">
                Reseña de ejemplo
              </span>
              <Stars />
              <p className="mt-5 font-display text-lg italic leading-snug text-bark">
                “{review.quote}”
              </p>
              <footer className="mt-6 flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf/15 font-display text-sm font-bold text-leaf-deep">
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-bark">{review.name}</p>
                  <p className="text-xs text-bark/55">{review.pet}</p>
                </div>
              </footer>
            </article>
          ))}

          {/* Evidencias fotográficas — placeholders */}
          {Array.from({ length: 2 }).map((_, i) => (
            <article
              key={`photo-${i}`}
              data-card
              className="flex min-w-[260px] snap-start flex-col justify-between rounded-3xl border-2 border-dashed border-bark/15 bg-white/60 p-6 sm:min-w-[300px]"
            >
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-bark/20 bg-cream/70 text-bark/40">
                <Camera className="h-8 w-8" aria-hidden />
                <span className="px-6 text-center text-[10px] font-bold uppercase tracking-[0.22em]">
                  Foto de cliente próximamente
                </span>
              </div>
              <div className="mt-5 space-y-2" aria-hidden>
                <div className="h-2.5 w-3/4 rounded-full bg-bark/10" />
                <div className="h-2.5 w-1/2 rounded-full bg-bark/10" />
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
