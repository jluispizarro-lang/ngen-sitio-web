import type { Metadata, Viewport } from "next";
import { Spectral, Manrope } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-spectral",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "Ngen Servicios de Ingeniería",
  description:
    "Asesoría y estudios de ingeniería para el sector público y privado: diseño, supervisión, ejecución y administración de programas y proyectos en Riego Tecnificado, Cambio Climático, Producción Ganadera, Análisis Financiero, Producción Hortofrutícola y Diálogo Social. Incluye mitigación y compensación ambiental para proyectos mineros, eólicos y solares. Regiones de Atacama a O'Higgins.",
  metadataBase: new URL("https://ngen.example.cl"),
  openGraph: {
    title: "Ngen Servicios de Ingeniería",
    description:
      "Ingeniería que se sostiene en el terreno: diseño, supervisión, ejecución y administración de proyectos.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${spectral.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
