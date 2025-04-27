import type { NextConfig } from "next";
import {createVanillaExtractPlugin} from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default withVanillaExtract(nextConfig);
