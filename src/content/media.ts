/**
 * Image + video asset paths (files live in /public).
 * `asset()` prefixes the base path so links resolve when the site is hosted
 * under a subpath (GitHub project page / PAGES_BASE_PATH).
 * All imagery here is ORIGINAL — AI-generated for AccountsUp, not third-party.
 */
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BP}${p}`;

export const media = {
  hero: asset("/img/hero.png"),
  partnership: asset("/img/partnership.png"),
  security: asset("/img/security.png"),
  growth: asset("/img/growth.png"),
  global: asset("/img/global.png"),
  videoPoster: asset("/img/video-poster.jpg"),
  brandVideo: asset("/brand-video.mp4"),
};
