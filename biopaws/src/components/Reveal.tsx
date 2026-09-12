"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retraso en ms para escalonar elementos hermanos */
  delay?: number;
  /** Desplazamiento vertical inicial en px */
  y?: number;
};

/**
 * Envoltorio de aparición al hacer scroll.
 * Usa IntersectionObserver (una sola vez) + Anime.js para la transición.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      el.classList.remove("opacity-0");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [y, 0],
            duration: 850,
            delay,
            easing: "easeOutCubic",
          });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
}
