import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "www.hostinger.com"],
  },
};

export default withContentlayer(nextConfig);
