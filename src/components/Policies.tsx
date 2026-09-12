"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, FileText, Truck, Undo2, BadgeCheck } from "lucide-react";
import anime from "animejs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const POLICIES = [
  {
    icon: Truck,
    title: "Términos de envío",
    summary: "Coberturas, tiempos y costos por región.",
  },
  {
    icon: Undo2,
    title: "Devoluciones",
    summary: "Plazos y condiciones para cambios o reembolsos.",
  },
  {
    icon: BadgeCheck,
    title: "Garantía",
    summary: "Compromiso de calidad de cada lote BioPaws.",
  },
];

/** Bloque maqueta: contenido que el negocio completará */
function PlaceholderBody() {
  return (
    <div className="rounded-2xl border border-dashed border-bark/20 bg-cream/70 p-5">
      <div className="flex items-center gap-3 text-bark/45">
        <FileText className="h-4 w-4" aria-hidden />
        <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
          Contenido en preparación
        </span>
      </div>
      <div className="mt-4 space-y-2" aria-hidden>
        <div className="h-2.5 w-full rounded-full bg-bark/10" />
        <div className="h-2.5 w-11/12 rounded-full bg-bark/10" />
        <div className="h-2.5 w-2/3 rounded-full bg-bark/10" />
      </div>
      <p className="mt-4 text-xs italic text-bark/45">
        Espacio reservado para que el equipo BioPaws redacte esta política.
      </p>
    </div>
  );
}

export default function Policies() {
  const [open, setOpen] = useState<number | null>(0);
  const bodiesRef = useRef<(HTMLDivElement | null)[]>([]);

  /* Acordeón animado con Anime.js (altura + opacidad) */
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    bodiesRef.current.forEach((el, i) => {
      if (!el) return;
      anime.remove(el);
      if (reduced) {
        el.style.height = "auto";
        el.style.opacity = "1";
        el.style.display = open === i ? "block" : "none";
        return;
      }
      if (open === i) {
        el.style.display = "block";
        anime({
          targets: el,
          height: [0, el.scrollHeight],
          opacity: [0, 1],
          duration: 420,
          easing: "easeInOutQuad",
          complete: () => {
            el.style.height = "auto";
          },
        });
      } else {
        anime({
          targets: el,
          height: [el.offsetHeight, 0],
          opacity: [1, 0],
          duration: 340,
          easing: "easeInOutQuad",
        });
      }
    });
  }, [open]);

  return (
    <section
      id="politicas"
      className="scroll-mt-28 border-y border-bark/5 bg-white/70 py-24 backdrop-blur-sm sm:py-28"
    >
      <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Políticas de servicio"
              title={
                <>
                  Reglas de la casa,{" "}
                  <em className="italic text-leaf-deep">sin trampas</em>
                </>
              }
              lead="Transparencia ante todo: aquí encontrarás cómo enviamos, respondemos y garantizamos cada frasco."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-sm rounded-2xl border border-bark/10 bg-cream p-5 text-sm leading-relaxed text-bark/60">
              ¿Una duda que no aparece aquí? Escríbenos por{" "}
              <a
                href="#contacto"
                className="font-semibold text-leaf-deep underline decoration-sun decoration-2 underline-offset-4 transition hover:decoration-leaf"
              >
                el formulario de contacto
              </a>{" "}
              y te respondemos en menos de 24 horas.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="divide-y divide-bark/10 rounded-3xl border border-bark/10 bg-white shadow-sm">
            {POLICIES.map(({ icon: Icon, title, summary }, i) => {
              const isOpen = open === i;
              return (
                <div key={title}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-cream/60 sm:px-8"
                  >
                    <span
                      className={`inline-flex rounded-xl p-2.5 transition-colors ${
                        isOpen
                          ? "bg-leaf/15 text-leaf-deep"
                          : "bg-cream text-bark/60"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-lg font-semibold text-bark">
                        {title}
                      </span>
                      <span className="block text-sm text-bark/55">
                        {summary}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-bark/50 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-leaf-deep" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    ref={(el) => {
                      bodiesRef.current[i] = el;
                    }}
                    style={{ height: 0, opacity: 0, display: "none" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8">
                      <PlaceholderBody />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
