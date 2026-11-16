import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerKickerClass,
  innerPageTitleClass,
  innerWhiteCardClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { caseStudies } from "@/data/case-studies";
import { locations } from "@/data/locations";
import { locationServices } from "@/data/location-services";

const description =
  "Full site map for MSC Electrical — browse every page on our website, including services, areas we cover, and case studies.";

export const metadata: Metadata = {
  title: "Site Map",
  description,
  alternates: { canonical: "/sitemap" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Site Map | MSC Electrical",
    description,
    url: "/sitemap",
    type: "website",
    locale: "en_GB",
  },
};

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About us", href: "/about" },
  { label: "Areas we cover", href: "/areas-we-cover" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Case studies", href: "/case-studies" },
] as const;

const serviceLinks = [
  { label: "Domestic electrical services", href: "/domestic" },
  { label: "Electrical testing & inspecting", href: "/testing-and-inspecting" },
  { label: "Electrical maintenance", href: "/electrical-maintenance" },
] as const;

const specialistLinks = [
  { label: "EICR & landlord certificates", href: "/eicr-landlord-certificates-nottingham" },
  { label: "Consumer unit replacement", href: "/consumer-unit-replacement-nottingham" },
  { label: "EV charger installation", href: "/ev-charger-installation-nottingham" },
  { label: "Commercial electrical services", href: "/commercial-electrical-services-nottingham" },
] as const;

function LinkList({ items }: { items: readonly { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2 text-base">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="font-medium text-[#1243B4] hover:underline">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SitemapSection({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={className}>
      <h2 className="text-lg font-bold text-[#1243B4]">{title}</h2>
      {children}
    </section>
  );
}

export default function VisualSitemapPage() {
  const locationColumns = 3;
  const perColumn = Math.ceil(locations.length / locationColumns);
  const locationGroups = Array.from({ length: locationColumns }, (_, index) =>
    locations.slice(index * perColumn, index * perColumn + perColumn),
  );

  const localServiceSegments = Object.values(locationServices);

  return (
    <main>
      <SiteNav />
      <InnerPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "Site map" }]}>
        <div className={innerWhiteCardClass}>
          <p className={innerKickerClass}>Site map</p>
          <h1 className={`mt-2 ${innerPageTitleClass}`}>Visual site map</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#111]">
            Browse all main sections of the MSC Electrical website. For search engines, our XML
            sitemap is available at{" "}
            <a href="/sitemap.xml" className="font-medium text-[#1243B4] hover:underline">
              sitemap.xml
            </a>
            .
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-lg font-bold text-[#1243B4]">Main pages</h2>
              <div className="mt-4">
                <LinkList items={mainLinks} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1243B4]">Services</h2>
              <div className="mt-4">
                <LinkList items={serviceLinks} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1243B4]">Specialist work</h2>
              <div className="mt-4">
                <LinkList items={specialistLinks} />
              </div>
            </div>
          </div>

          <SitemapSection title="Case studies" className="mt-12 border-t border-[#1243B4]/20 pt-10">
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-sm font-medium text-[#1243B4] hover:underline"
                  >
                    {study.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SitemapSection>

          <SitemapSection title="Local area pages" className="mt-12 border-t border-[#1243B4]/20 pt-10">
            <p className="mt-2 text-sm leading-relaxed text-[#111]">
              Each area links to domestic, testing, and maintenance pages for that town.
            </p>
            <div className="mt-6 grid gap-8 md:grid-cols-3">
              {locationGroups.map((group, groupIndex) => (
                <ul key={groupIndex} className="space-y-2 text-sm">
                  {group.map((location) => (
                    <li key={location.slug}>
                      <Link
                        href={`/locations/${location.slug}`}
                        className="font-medium text-[#1243B4] hover:underline"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </SitemapSection>

          <SitemapSection
            title="Local service pages"
            className="mt-12 border-t border-[#1243B4]/20 pt-10"
          >
            <p className="mt-2 text-sm leading-relaxed text-[#111]">
              For each town we cover, these three service types are available:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#111]">
              {localServiceSegments.map((service) => (
                <li key={service.segment}>
                  <span className="font-semibold text-[#1243B4]">
                    {service.heading.replace(/ in$/, "")}
                  </span>
                  <span>
                    {" "}
                    — e.g.{" "}
                    <Link
                      href={`/${service.segment}/long-eaton`}
                      className="font-medium text-[#1243B4] hover:underline"
                    >
                      Long Eaton
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#111]">
              <Link href="/areas-we-cover" className="font-medium text-[#1243B4] hover:underline">
                View all areas
              </Link>{" "}
              for the full list of local URLs.
            </p>
          </SitemapSection>
        </div>
      </InnerPage>
      <Footer showQuote={false} showReviews />
    </main>
  );
}