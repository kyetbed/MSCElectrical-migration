import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerKickerClass,
  innerPageTitleClass,
  innerWhiteCardClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { getLocationHubFaqs } from "@/data/faqs";
import { getLocationBySlug, locations } from "@/data/locations";
import { locationServices } from "@/data/location-services";

type PageProps = {
  params: Promise<{ town: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ town: location.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { town: townSlug } = await params;
  const town = getLocationBySlug(townSlug);
  if (!town) return {};

  const title = `Electricians in ${town.name}`;
  const description = `MSC Electrical serves ${town.name} with domestic, testing and maintenance services. Call 0115 8700442 for a free quotation.`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${town.slug}` },
    openGraph: {
      title: `${title} | MSC Electrical`,
      description,
      url: `/locations/${town.slug}`,
      type: "website",
      locale: "en_GB",
    },
  };
}

export default async function LocationHubPage({ params }: PageProps) {
  const { town: townSlug } = await params;
  const town = getLocationBySlug(townSlug);
  if (!town) notFound();

  const serviceLinks = Object.values(locationServices).map((service) => ({
    href: `/${service.segment}/${town.slug}`,
    label: `${service.heading} ${town.name}`,
    description: service.description(town.name),
  }));

  const nearby = locations.filter((entry) => entry.slug !== town.slug).slice(0, 12);

  return (
    <main>
      <SiteNav />
      <InnerPage
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Areas we cover", href: "/areas-we-cover" },
          { name: `Electricians in ${town.name}` },
        ]}
      >
        <div className={innerWhiteCardClass}>
          <p className={innerKickerClass}>Areas we cover</p>
          <h1 className={`mt-2 ${innerPageTitleClass}`}>Electricians in {town.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#111]">
            MSC Electrical provides domestic, testing and maintenance work in {town.name} and across
            Nottingham. Choose a service below for local information and to request a quotation.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="flex h-full flex-col border border-[#1243B4]/20 px-5 py-6 transition-colors hover:bg-[#1243B4]/5"
                >
                  <span className="text-lg font-bold text-[#1243B4]">{service.label}</span>
                  <span className="mt-3 text-sm leading-relaxed text-[#111]">
                    {service.description}
                  </span>
                  <span className="mt-4 text-sm font-semibold text-[#1243B4]">Learn more</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
            >
              Get in Touch
            </Link>
            <Link
              href="/domestic"
              className="inline-flex rounded-full border border-[#1243B4] px-6 py-3 text-base font-medium text-[#1243B4]"
            >
              All services
            </Link>
          </div>
          <div className="mt-12 border-t border-[#1243B4]/20 pt-8">
            <p className="text-sm font-semibold text-[#1243B4]">Other areas</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {nearby.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="inline-flex rounded-full bg-[#EDEDED] px-3 py-1.5 text-sm text-[#111] hover:bg-[#1243B4]/10"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerPage>
      <FaqSection items={getLocationHubFaqs(town.name)} />
      <Footer showReviews />
    </main>
  );
}