import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/refs',
        permanent: true,
      },
      {
        source: '/FAQ',
        destination: '/refs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
