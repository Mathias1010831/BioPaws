"use client";

import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import anime from "animejs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SOCIAL } from "@/lib/site";

const inputCls =
  "w-full rounded-xl border border-bark/15 bg-cream/60 px-4 py-3 text-sm text-bark placeholder:text-bark/35 transition focus:border-leaf focus:bg-white focus:outline-none focus:ring-2 focus:ring-leaf/25";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    requestAnimationFrame(() => {
      if (successRef.current) {
        anime({
          targets: successRef.current,
          scale: [0.85, 1],
          opacity: [0, 1],
          duration: 600,
          easing: "easeOutCubic",
        });
      }
    });
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-28 border-t border-bark/5 bg-white/70 py-24 backdrop-blur-sm sm:py-28"
    >
      <div className="wrap grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Redes y contacto"
              title={
                <>
                  Hablemos de tu{" "}
                  <em className="italic text-leaf-deep">peludo</em>
                </>
              }
              lead="Escríbenos por consultas, pedidos mayoristas o para aparecer en nuestra galería de colas felices."
            />
          </Reveal>

          <Reveal delay={110}>
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group mt-9 flex items-center gap-4 rounded-2xl border border-bark/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="inline-flex rounded-xl bg-bark p-3 text-cream">
                <Instagram className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block font-semibold text-bark">
                  {SOCIAL.instagram.handle}
                </span>
                <span className="block text-sm text-bark/60">
                  Antes y después, consejos de baño y lanzamientos.
                </span>
              </span>
              <ArrowUpRight
                className="ml-auto h-5 w-5 text-bark/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-leaf-deep"
                aria-hidden
              />
            </a>
          </Reveal>

          <Reveal delay={190}>
            <ul className="mt-6 space-y-3 text-sm text-bark/65">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-leaf-deep" aria-hidden />
                {SOCIAL.email}
                <span className="text-xs text-bark/40">(editable)</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-leaf-deep" aria-hidden />
                {SOCIAL.city}
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={90}>
          <div className="rounded-3xl border border-bark/10 bg-white p-8 shadow-soft sm:p-10">
            {sent ? (
              <div
                ref={successRef}
                className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center opacity-0"
              >
                <CheckCircle2 className="h-12 w-12 text-leaf" aria-hidden />
                <h3 className="font-display text-2xl font-semibold text-bark">
                  ¡Mensaje enviado!
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-bark/60">
                  Gracias por escribirnos. El equipo BioPaws te responderá en
                  menos de 24 horas hábiles.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-semibold text-leaf-deep underline decoration-sun decoration-2 underline-offset-4 transition hover:decoration-leaf"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-1.5 block text-sm font-semibold text-bark/80"
                    >
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre y apellido"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-bark/80"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tucorreo@ejemplo.com"
                      className={inputCls}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-semibold text-bark/80"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Cuéntanos sobre tu peludo: raza, edad, súper poder…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-bark px-7 py-3.5 font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark-deep hover:shadow-lift"
                >
                  Enviar mensaje
                  <Send
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </button>
                <p className="text-center text-xs text-bark/45">
                  Al enviar aceptas nuestra política de privacidad. Cero spam,
                  lo prometemos.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
