import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname: 'swiperjs.com',
      }
    ]
  }
};

export default nextConfig;
