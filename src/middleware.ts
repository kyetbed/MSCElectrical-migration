import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { resolveLegacyTownSlug } from "@/lib/legacy-slugs";

type LegacyRoute = {
  pattern: RegExp;
  destination: (townSlug: string) => string;
  fallback: string;
};

const legacyRoutes: LegacyRoute[] = [
  {
    pattern: /^\/electrician\/([^/]+)\/?$/,
    destination: (town) => `/locations/${town}`,
    fallback: "/areas-we-cover",
  },
  {
    pattern: /^\/domestic\/([^/]+)\/?$/,
    destination: (town) => `/domestic-electrical-services-in/${town}`,
    fallback: "/domestic",
  },
  {
    pattern: /^\/testing\/([^/]+)\/?$/,
    destination: (town) => `/electrical-testing-and-inspecting-in/${town}`,
    fallback: "/testing-and-inspecting",
  },
  {
    pattern: /^\/maintenance\/([^/]+)\/?$/,
    destination: (town) => `/electrical-maintenance-in/${town}`,
    fallback: "/electrical-maintenance",
  },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const route of legacyRoutes) {
    const match = pathname.match(route.pattern);
    if (!match) continue;

    const rawTown = match[1];
    const town = resolveLegacyTownSlug(rawTown);
    const target = town ? route.destination(town) : route.fallback;

    return NextResponse.redirect(new URL(target, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/electrician/:path*", "/domestic/:path*", "/testing/:path*", "/maintenance/:path*"],
};