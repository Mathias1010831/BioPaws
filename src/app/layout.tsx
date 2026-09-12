import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import BubblesField from "@/components/BubblesField";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BioPaws · Cuidado natural para patas felices",
  description:
    "Shampoo natural para perros elaborado con avena, aloe vera, aceite de coco y manzanilla. 100% ecológico, cruelty free y biodegradable.",
  keywords: [
    "shampoo natural para perros",
    "BioPaws",
    "cuidado de mascotas",
    "productos ecológicos",
  ],
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${fraunces.variable} ${karla.variable} font-sans`}>
        {/* Fondo global de burbujas / espuma (Anime.js + Canvas) */}
        <BubblesField />
        {children}
      </body>
    </html>
  );
}
