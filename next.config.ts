import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ 배포 시 ESLint 무시
  },
};

export default nextConfig;
