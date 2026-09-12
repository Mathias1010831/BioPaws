"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

type Bubble = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  sway: number;
  phase: number;
  tint: [number, number, number];
};

type Sparkle = {
  x: number;
  y: number;
  s: number;
  o: number;
  rot: number;
};

const TINTS: [number, number, number][] = [
  [120, 172, 18], // hoja
  [220, 226, 41], // energía
  [255, 255, 255], // espuma
];

/**
 * Fondo flotante global: burbujas de jabón y destellos de espuma
 * dibujados en <canvas> cuyo movimiento vertical dirige Anime.js.
 */
export default function BubblesField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const makeBubble = (below: boolean): Bubble => ({
      x: Math.random() * w,
      y: below ? h + 50 + Math.random() * 120 : Math.random() * h,
      r: 5 + Math.random() * 21,
      alpha: 0.05 + Math.random() * 0.1,
      sway: 10 + Math.random() * 26,
      phase: Math.random() * Math.PI * 2,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    });

    const count = Math.max(10, Math.min(20, Math.round(w / 85)));
    const bubbles: Bubble[] = Array.from({ length: count }, () =>
      makeBubble(false)
    );

    const sparkles: Sparkle[] = Array.from({ length: 7 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      s: 0.7 + Math.random() * 0.8,
      o: 0.12,
      rot: Math.random() * Math.PI,
    }));

    const anims: anime.AnimeInstance[] = [];

    if (!reduced) {
      // Anime.js dirige el ascenso de cada burbuja (bucle independiente)
      bubbles.forEach((b, i) => {
        anims.push(
          anime({
            targets: b,
            y: [
              { value: b.y, duration: 0 },
              { value: -70, duration: 17000 + Math.random() * 15000 },
            ],
            easing: "linear",
            loop: true,
            delay: i * 260 + Math.random() * 900,
          })
        );
      });
      // Destellos de espuma que respiran
      anims.push(
        anime({
          targets: sparkles,
          s: (el: Sparkle) => el.s * 1.45,
          o: [0.05, 0.3],
          duration: 2600,
          delay: anime.stagger(340),
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
        })
      );
    }

    const drawBubble = (b: Bubble, now: number) => {
      const x = b.x + Math.sin(now / 1600 + b.phase) * b.sway;
      const [r, g, bl] = b.tint;
      ctx.beginPath();
      ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${b.alpha})`;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${bl}, ${b.alpha * 1.7})`;
      ctx.stroke();
      // brillo superior izquierdo
      ctx.beginPath();
      ctx.arc(x - b.r * 0.32, b.y - b.r * 0.34, b.r * 0.34, Math.PI * 0.9, Math.PI * 1.75);
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 1.4;
      ctx.stroke();
    };

    const drawSparkle = (sp: Sparkle) => {
      ctx.save();
      ctx.translate(sp.x, sp.y);
      ctx.rotate(sp.rot);
      ctx.scale(sp.s, sp.s);
      ctx.strokeStyle = `rgba(120, 172, 18, ${sp.o})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(6, 0);
      ctx.moveTo(0, -6);
      ctx.lineTo(0, 6);
      ctx.stroke();
      ctx.restore();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      bubbles.forEach((b) => drawBubble(b, now));
      sparkles.forEach(drawSparkle);
    };

    if (reduced) {
      draw(0);
    } else {
      const tick = (now: number) => {
        draw(now);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      anims.forEach((a) => a.pause());
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
