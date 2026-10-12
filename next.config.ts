import type { NextConfig } from "next";

const configuredBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/^\/+|\/+$/g, '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: configuredBasePath ? `/${configuredBasePath}` : '',
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
