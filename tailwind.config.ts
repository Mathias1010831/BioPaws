import type { Config } from "tailwindcss";

/**
 * BioPaws — sistema de diseño
 * Paleta base entregada por el negocio:
 *  Tierra  #522A1F · Hoja #78AC12 · Energía #DCE229 · Crema #F9F8F3
 * Se añaden dos tonos de apoyo derivados del tablero de marca (honey)
 * y variantes profundas para hover/contraste.
 */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bark: {
          DEFAULT: "#522A1F",
          deep: "#38190F",
          soft: "#8A5A44",
        },
        leaf: {
          DEFAULT: "#78AC12",
          deep: "#557F0A",
        },
        sun: {
          DEFAULT: "#DCE229",
          deep: "#9AA312",
        },
        honey: {
          DEFAULT: "#F4C64D",
          deep: "#DFA82E",
        },
        cream: "#F9F8F3",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-karla)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgb(82 42 31 / 0.16)",
        lift: "0 22px 45px -18px rgb(82 42 31 / 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
