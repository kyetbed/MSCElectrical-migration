export const SITE_BANNER_COOKIE = "msc_radius_banner_dismissed";

/** Matches banner row min-height in site-nav (do not animate; used for layout offset only). */
export const siteBannerHeight = "4rem";

export function syncSiteBannerHeight(visible: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty(
    "--site-banner-height",
    visible ? siteBannerHeight : "0px",
  );
}

export function isSiteBannerDismissed(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split("; ").some((entry) => entry.startsWith(`${SITE_BANNER_COOKIE}=`));
}

export function dismissSiteBannerCookie(): void {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${SITE_BANNER_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
}