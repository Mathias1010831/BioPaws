"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Timer,
  Truck,
} from "lucide-react";
import anime from "animejs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SOCIAL } from "@/lib/site";

/** Dato que el negocio completará con sus números/correos reales */
function Editable({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-bark/30 bg-white px-2.5 py-1 text-sm font-semibold text-bark/60">
      {value}
      <span className="text-[9px] font-bold uppercase tracking-wider text-bark/40">
        editable
      </span>
    </span>
  );
}

function DeadlineChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 whitespace-nowrap rounded-full bg-sun/40 px-3 py-1 text-xs font-bold text-bark-deep">
      {children}
    </span>
  );
}

const POLICIES: {
  icon: typeof Phone;
  title: string;
  summary: string;
  body: React.ReactNode;
}[] = [
  {
    icon: Headphones,
    title: "Canales de atención",
    summary: "Por dónde escribirnos y en qué horarios está el equipo.",
    body: (
      <div className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-bark/10 bg-cream/60 p-4">
            <Phone className="h-4 w-4 text-leaf-deep" aria-hidden />
            <p className="mt-2.5 text-sm font-bold text-bark">
              Teléfono y WhatsApp
            </p>
            <p className="mt-1.5">
              <Editable value="+51 ___ ___ ___" />
            </p>
          </div>
          <div className="rounded-xl border border-bark/10 bg-cream/60 p-4">
            <Mail className="h-4 w-4 text-leaf-deep" aria-hidden />
            <p className="mt-2.5 text-sm font-bold text-bark">Correo</p>
            <p className="mt-1.5">
              <Editable value={SOCIAL.email} />
            </p>
          </div>
          <div className="rounded-xl border border-bark/10 bg-cream/60 p-4">
            <MessageCircle className="h-4 w-4 text-leaf-deep" aria-hidden />
            <p className="mt-2.5 text-sm font-bold text-bark">Chat y DMs</p>
            <p className="mt-1.5 text-sm font-semibold text-bark/60">
              Instagram {SOCIAL.instagram.handle}
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-leaf/10 p-4 sm:p-5">
          <p className="flex items-center gap-2 font-semibold text-bark">
            <Clock className="h-4 w-4 text-leaf-deep" aria-hidden />
            Horarios del equipo
          </p>
          <ul className="mt-2.5 grid gap-1.5 text-sm text-bark/70 sm:grid-cols-3">
            <li>Lunes a viernes · 9:00 – 18:00</li>
            <li>Sábados · 9:00 – 13:00</li>
            <li>Domingos y feriados · cerrado</li>
          </ul>
          <p className="mt-2.5 text-xs text-bark/55">
            Los mensajes recibidos fuera de horario se responden en orden de
            llegada el siguiente día hábil.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Timer,
    title: "Tiempos de respuesta",
    summary: "Máximo 3 días hábiles; urgencias en 24 horas.",
    body: (
      <div className="space-y-3">
        {[
          {
            t: "Dudas y asesoría",
            d: "¿Qué pack le conviene a tu perro? Ingredientes, modo de uso…",
            chip: "máx. 3 días hábiles",
          },
          {
            t: "Cotizaciones y pedidos mayoristas",
            d: "Precios por volumen para tiendas, veterinarias y refugios.",
            chip: "máx. 3 días hábiles",
          },
          {
            t: "Solicitudes urgentes",
            d: "Reacciones al producto, pedidos dañados o extraviados.",
            chip: "máx. 24 horas",
          },
        ].map((row) => (
          <div
            key={row.t}
            className="flex items-start justify-between gap-4 rounded-xl border border-bark/10 bg-cream/60 p-4"
          >
            <div>
              <p className="text-sm font-bold text-bark">{row.t}</p>
              <p className="mt-1 text-sm text-bark/60">{row.d}</p>
            </div>
            <DeadlineChip>{row.chip}</DeadlineChip>
          </div>
        ))}
        <p className="text-xs text-bark/55">
          El reloj corre desde que tu mensaje llega a cualquier canal oficial.
          Si superamos el plazo, escríbenos con la palabra{" "}
          <strong className="font-bold text-bark/70">“prioridad”</strong> y tu
          caso pasa al frente de la fila.
        </p>
      </div>
    ),
  },
  {
    icon: ClipboardList,
    title: "Proceso de quejas",
    summary: "Paso a paso de reclamos, reembolsos y quién asume cada costo.",
    body: (
      <div className="space-y-5">
        <ol className="space-y-4">
          {[
            {
              t: "Reporta el caso",
              d: "Escríbenos por cualquier canal con tu número de pedido, fotos y qué sucedió. Tienes hasta 30 días calendario desde la compra.",
            },
            {
              t: "Evaluamos en 3 días hábiles",
              d: "Revisamos el caso y te proponemos una solución: reposición del producto, reembolso total o descuento en tu próximo pedido.",
            },
            {
              t: "Reembolso aprobado",
              d: "El monto se devuelve por el mismo medio de pago en un máximo de 7 días hábiles, con confirmación por correo.",
            },
            {
              t: "Seguimiento hasta el final",
              d: "Te acompañamos hasta que el baño vuelva a la normalidad y tú quedes tranquilo(a).",
            },
          ].map((step, i) => (
            <li key={step.t} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bark text-xs font-bold text-cream">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-bark">{step.t}</p>
                <p className="mt-1 text-sm leading-relaxed text-bark/65">
                  {step.d}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-bark/10 bg-cream p-4 sm:p-5">
          <p className="font-semibold text-bark">¿Quién asume cada costo?</p>
          <ul className="mt-3 space-y-2.5 text-sm text-bark/70">
            <li className="flex items-start gap-2.5">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep"
                aria-hidden
              />
              Culpa nuestra (producto defectuoso, error de envío o daño en
              tránsito): BioPaws asume todos los envíos y el 100% del
              reembolso.
            </li>
            <li className="flex items-start gap-2.5">
              <AlertCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-honey-deep"
                aria-hidden
              />
              Cambio de preferencia (producto sellado y sin usar): procede el
              reembolso y el cliente asume el envío de regreso.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Truck,
    title: "Envíos",
    summary: "Desde nuestra fábrica en Arequipa a todo el Perú.",
    body: (
      <div className="space-y-3">
        <p className="text-sm leading-relaxed text-bark/65">
          Cada frasco sale de nuestra fábrica en Arequipa rumbo a tu puerta:
          estos son los plazos estimados según la distancia.
        </p>
        {[
          { z: "Arequipa ciudad y alrededores", d: "1 – 2 días hábiles" },
          {
            z: "Sur del Perú (Tacna, Moquegua, Puno, Cusco)",
            d: "2 – 5 días hábiles",
          },
          { z: "Lima, costa y centro del país", d: "4 – 7 días hábiles" },
          { z: "Sierra y selva (zonas lejanas)", d: "7 – 12 días hábiles" },
        ].map((row) => (
          <div
            key={row.z}
            className="flex items-start justify-between gap-4 rounded-xl border border-bark/10 bg-cream/60 p-4"
          >
            <p className="flex items-center gap-2.5 text-sm font-bold text-bark">
              <MapPin className="h-4 w-4 shrink-0 text-leaf-deep" aria-hidden />
              {row.z}
            </p>
            <DeadlineChip>{row.d}</DeadlineChip>
          </div>
        ))}
        <p className="text-sm leading-relaxed text-bark/65">
          Enviamos a todo el Perú, sin excepción. En zonas de mayor lejanía la
          entrega puede acercarse al plazo máximo por clima o rutas del
          transportista: te avisamos por WhatsApp o correo apenas lo sepamos,
          antes de que lo notes.
        </p>
        <p className="text-xs text-bark/55">
          El costo de envío se cotiza al confirmar el pedido según destino.
          Los plazos corren desde el día siguiente de la confirmación del
          pago.
        </p>
      </div>
    ),
  },
];

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
              lead="Transparencia ante todo: cómo nos contactas, cuánto tardamos en responderte, cómo enviamos y cómo respondemos cuando algo sale mal."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-sm rounded-2xl border border-bark/10 bg-cream p-5 text-sm leading-relaxed text-bark/60">
              Los datos marcados como{" "}
              <span className="font-bold text-bark/70">editables</span> (teléfonos
              y correos) los completa el equipo BioPaws. ¿Una duda que no
              aparece aquí? Usa{" "}
              <a
                href="#contacto"
                className="font-semibold text-leaf-deep underline decoration-sun decoration-2 underline-offset-4 transition hover:decoration-leaf"
              >
                el formulario de contacto
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="divide-y divide-bark/10 rounded-3xl border border-bark/10 bg-white shadow-sm">
            {POLICIES.map(({ icon: Icon, title, summary, body }, i) => {
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
                    <div className="px-6 pb-7 sm:px-8">{body}</div>
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
