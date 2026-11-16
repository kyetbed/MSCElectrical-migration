import type { MetadataRoute } from "next";

import { caseStudies } from "@/data/case-studies";
import { locations } from "@/data/locations";
import { locationServiceSegments } from "@/data/location-services";
import { siteUrl } from "@/data/nap";

const staticPaths = [
  "/",
  "/contact",
  "/domestic",
  "/testing-and-inspecting",
  "/electrical-maintenance",
  "/testimonials",
  "/about",
  "/areas-we-cover",
  "/case-studies",
  "/eicr-landlord-certificates-nottingham",
  "/consumer-unit-replacement-nottingham",
  "/ev-charger-installation-nottingham",
  "/commercial-electrical-services-nottingham",
  "/sitemap",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationHubPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const locationPages: MetadataRoute.Sitemap = locationServiceSegments.flatMap(
    (segment) =>
      locations.map((location) => ({
        url: `${siteUrl}/${segment}/${location.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  );

  return [...staticPages, ...caseStudyPages, ...locationHubPages, ...locationPages];
}