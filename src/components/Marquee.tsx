import { PawPrint } from "lucide-react";

const ITEMS = [
  "Avena calmante",
  "Aloe vera hidratante",
  "Coco nutritivo",
  "Manzanilla suave",
  "Sin sulfatos",
  "Sin parabenos",
  "Biodegradable",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-8">
          <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-cream/90">
            {item}
          </span>
          <PawPrint className="h-3.5 w-3.5 text-sun" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

/** Cinta inclinada tipo sello de calidad */
export default function Marquee() {
  return (
    <div
      aria-hidden
      className="relative z-10 -rotate-1 overflow-hidden bg-bark py-3.5 shadow-soft"
    >
      <div className="animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
