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
  // Service-section imagery
  accounting: asset("/img/accounting.jpg"),
  tax: asset("/img/tax.jpg"),
  audit: asset("/img/audit.jpg"),
  boardroom: asset("/img/boardroom.jpg"),
  team: asset("/img/team.jpg"),
  globalteam: asset("/img/globalteam.jpg"),
  videoPoster: asset("/img/video-poster.jpg"),
  brandVideo: asset("/brand-video.mp4"),
};

// Primary (overview) image per service slug — themed to the work.
const primaryImage: Record<string, string> = {
  bookkeeping: media.accounting,
  taxation: media.tax,
  "sales-tax": media.tax,
  audit: media.audit,
  "financial-statements": media.boardroom,
  cfo: media.boardroom,
  payroll: media.team,
  ertc: media.tax,
  "gst-hst": media.tax,
  "notice-to-reader": media.accounting,
  gst: media.tax,
  smsf: media.growth,
  "annual-return": media.accounting,
  vat: media.tax,
  "tax-credits": media.tax,
  p2p: media.globalteam,
  o2c: media.growth,
  r2r: media.accounting,
  reporting: media.boardroom,
  consulting: media.partnership,
  "tax-support": media.tax,
  fpna: media.growth,
};

// Secondary (differentiator band) image — rotated for variety.
const secondaryPool = [
  media.partnership,
  media.security,
  media.global,
  media.globalteam,
  media.team,
];

export function serviceImage(slug: string): string {
  return primaryImage[slug] ?? media.accounting;
}

export function serviceImageAlt(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return secondaryPool[h % secondaryPool.length];
}
