import { Instagram, Mail, PawPrint } from "lucide-react";
import { LEGAL_LINKS, NAV_LINKS, SOCIAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 rounded-t-[2.5rem] bg-bark text-cream">
      <div className="wrap flex flex-col items-center py-16 text-center sm:py-20">
        {/* Marca grande y centrada */}
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cream/10">
          <PawPrint className="h-7 w-7 text-sun" aria-hidden />
        </span>
        <p className="mt-5 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
          BioPaws
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
          Cuidado natural para patas felices. Shampoo ecológico para perros,
          hecho con avena, aloe vera, coco y manzanilla.
        </p>

        {/* Redes: Instagram destacado */}
        <div className="mt-8 flex items-center gap-3">
          <a
            href={SOCIAL.instagram.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2.5 rounded-full bg-cream px-6 py-3 font-semibold text-bark shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            {SOCIAL.instagram.handle}
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            aria-label="Escríbenos por correo"
            className="rounded-full border border-cream/20 p-3 transition-colors hover:bg-cream/10"
          >
            <Mail className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <nav
          aria-label="Secciones"
          className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm"
        >
          {NAV_LINKS.slice(0, 8).map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-cream/75 transition-colors hover:text-sun"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Legal"
          className="mt-4 flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs"
        >
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream/55 transition-colors hover:text-sun"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex w-full flex-col items-center gap-2 border-t border-cream/10 pt-6 text-xs text-cream/60">
          <p>© 2026 BioPaws. Todos los derechos reservados.</p>
          <p>Hecho con avena, coco y 🌿 en {SOCIAL.city}.</p>
        </div>
      </div>
    </footer>
  );
}
