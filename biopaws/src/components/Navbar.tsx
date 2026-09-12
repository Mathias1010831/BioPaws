"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import anime from "animejs";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const panelRef = useRef<HTMLDivElement>(null);

  /* Sombra + vidrio al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: resalta el link de la sección visible */
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* Panel móvil animado con Anime.js */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (open) {
      el.style.display = "block";
      if (reduced) {
        el.style.height = "auto";
        el.style.opacity = "1";
        return;
      }
      anime({
        targets: el,
        height: [0, el.scrollHeight],
        opacity: [0, 1],
        duration: 380,
        easing: "easeOutCubic",
      });
    } else {
      if (reduced) {
        el.style.display = "none";
        return;
      }
      anime({
        targets: el,
        height: [el.offsetHeight, 0],
        opacity: [1, 0],
        duration: 300,
        easing: "easeInCubic",
        complete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-bark/10 bg-cream/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[72px] items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2"
          aria-label="BioPaws — inicio"
        >
          {/* El logo original tiene fondo blanco: se integra con mix-blend */}
          <img
            src="/logo.png"
            alt="Logo BioPaws"
            className="h-12 w-auto mix-blend-multiply sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors xl:px-3 ${
                active === link.id
                  ? "text-bark"
                  : "text-bark/60 hover:text-bark"
              }`}
            >
              {link.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-px h-[2px] origin-left rounded-full bg-leaf transition-transform duration-300 ${
                  active === link.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-bark-deep hover:shadow-lift lg:inline-flex"
          >
            Contáctanos
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex rounded-full border border-bark/15 bg-white/70 p-2.5 text-bark transition hover:bg-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        ref={panelRef}
        style={{ display: "none", opacity: 0, height: 0 }}
        className="overflow-hidden border-b border-bark/10 bg-cream/95 backdrop-blur-md lg:hidden"
      >
        <nav className="wrap flex flex-col gap-1 py-4" aria-label="Móvil">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                active === link.id
                  ? "bg-leaf/10 text-leaf-deep"
                  : "text-bark/70 hover:bg-bark/5 hover:text-bark"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-bark px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Contáctanos
          </a>
        </nav>
      </div>
    </header>
  );
}
