/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: {
      // Expedientes reales (PDF, planos) pueden pesar más que el límite
      // por defecto de 1MB de los Server Actions.
      bodySizeLimit: "25mb",
    },
  },
};

export default nextConfig;
