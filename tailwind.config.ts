import type { Config } from "tailwindcss";

/**
 * Design tokens — Dirección A ("Editorial Minimalista", inspiración Apple).
 * Estos valores son la fuente de verdad del sistema visual del sitio.
 * Si se cambia de dirección visual (B o C), este archivo se reemplaza
 * completo junto con las variables de fuente en app/layout.tsx.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        sand: "#F2ECE1",
        ink: "#221F1B",
        charcoal: "#2B2721",
        stone: "#8A8278",
        hairline: "#E7E0D6",
        clay: {
          DEFAULT: "#B15E3B",
          dark: "#8E4A2C",
          light: "#F5DCCB",
        },
      },
      fontFamily: {
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
