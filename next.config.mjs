/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // AVIF deshabilitado a propósito: mitigación recomendada por Vercel
    // para un RCE no parchado en la rama 14.x del optimizador de imágenes
    // (GHSA-2xp9-vwfh-vxw4). Revisar al migrar a Next 15/16.
    formats: ["image/webp"],
  },
  experimental: {
    serverActions: {
      // Expedientes reales (PDF, planos) pueden pesar más que el límite
      // por defecto de 1MB de los Server Actions.
      bodySizeLimit: "25mb",
    },
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
