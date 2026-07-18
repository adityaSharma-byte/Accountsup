import type { NextConfig } from "next";

// Host under a subpath (e.g. a GitHub *project* page https://<user>.github.io/<repo>/)
// by building with PAGES_BASE_PATH=/<repo>. Leave unset for a custom domain at the
// apex (accountsup.com) or for Vercel.
const basePath =
  process.env.PAGES_BASE_PATH?.trim().replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  // Static HTML export → deploys to GitHub Pages, Vercel, Netlify, or any static host.
  // Remove this line if you later move to Vercel and want server features.
  output: "export",

  // Required for `output: export` (no server to optimize images at runtime).
  images: { unoptimized: true },

  // Emit /services/index.html etc. — cleaner for static hosts like GitHub Pages.
  trailingSlash: true,

  // Applied only when PAGES_BASE_PATH is set (project-page hosting under a subpath).
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
