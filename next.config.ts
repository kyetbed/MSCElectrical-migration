import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Cache Components need a workerd-specific OpenNext path; they 500 on Workers today.
  // See https://github.com/opennextjs/opennextjs-cloudflare/issues/1450
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
