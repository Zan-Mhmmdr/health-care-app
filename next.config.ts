import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ⛔️ Abaikan error linting saat build (misalnya 'any', unused vars, dsb)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ⛔️ Abaikan error TypeScript saat build (misalnya "no-explicit-any")
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
