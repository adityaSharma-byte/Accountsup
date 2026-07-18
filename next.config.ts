import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → deploys to GitHub Pages, Vercel, Netlify, S3, or any static host.
  // Remove this line if you later move to Vercel and want server features (ISR, server actions).
  output: "export",

  // Required for `output: export` since there is no server to optimize images at runtime.
  images: { unoptimized: true },

  // Emit /services/index.html etc. — cleaner for static hosts like GitHub Pages.
  trailingSlash: true,

  // If you deploy to a GitHub *project* page (username.github.io/repo) WITHOUT a custom
  // domain, uncomment and set basePath to "/<repo-name>". With a custom domain
  // (accountsup.com) at the apex, leave it empty.
  // basePath: "/accountsup-site",
};

export default nextConfig;
