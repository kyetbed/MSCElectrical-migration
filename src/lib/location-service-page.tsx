import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroReveal, Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { innerPageTitleClass, innerWhiteCardClass } from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { faqSections, getFaqKeyForLocationService } from "@/data/faqs";
import { belowHeaderPtClass, belowHeaderTopClass } from "@/lib/layout";
import { getLocationBySlug, locations } from "@/data/locations";
import {
  type LocationServiceConfig,
  type LocationServiceSegment,
  locationServiceSegments,
  locationServices,
} from "@/data/location-services";

const siteUrl = "https://www.mscelectrical.co.uk";

type PageProps = {
  params: Promise<{ town: string }>;
};

export function createLocationServicePage(segment: LocationServiceSegment) {
  const config = locationServices[segment];

  function generateStaticParams() {
    return locations.map((location) => ({ town: location.slug }));
  }

  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { town: townSlug } = await params;
    const town = getLocationBySlug(townSlug);
    if (!town) return {};

    const title = `${config.heading} ${town.name}`;
    const description = config.description(town.name);
    const path = `/${segment}/${town.slug}`;

    return {
      title,
      description,
      alternates: { canonical: path },
      openGraph: {
        title: `${title} | MSC Electrical`,
        description,
        url: path,
        type: "website",
        locale: "en_GB",
        images: [{ url: config.heroImage, alt: config.heroImageAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | MSC Electrical`,
        description,
        images: [config.heroImage],
      },
    };
  }

  async function Page({ params }: PageProps) {
    const { town: townSlug } = await params;
    const town = getLocationBySlug(townSlug);
    if (!town) notFound();

    const heading = `${config.heading} ${town.name}`;
    const description = config.description(town.name);
    const path = `${siteUrl}/${segment}/${town.slug}`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: heading,
      serviceType: config.serviceType,
      url: path,
      description,
      areaServed: { "@type": "Place", name: town.name },
      provider: {
        "@type": "Electrician",
        name: "MSC Electrical",
        telephone: "+441158700442",
        url: siteUrl,
      },
    };

    const faqKey = getFaqKeyForLocationService(config.segment) ?? "location";

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        <LocationServiceBody
          config={config}
          heading={heading}
          description={description}
          town={town.name}
          townSlug={town.slug}
        />
        <FaqSection items={faqSections[faqKey]} />
        <Footer showReviews />
      </main>
    );
  }

  return { Page, generateMetadata, generateStaticParams };
}

function LocationServiceBody({
  config,
  heading,
  description,
  town,
  townSlug,
}: {
  config: LocationServiceConfig;
  heading: string;
  description: string;
  town: string;
  townSlug: string;
}) {
  const serviceLabel = config.heading.replace(/ in$/, "");
  const otherAreas = locations
    .filter((location) => location.name !== town)
    .slice(0, 8);

  return (
    <>
      <section
        className={`relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pb-12 ${belowHeaderPtClass}`}
      >
        <Image
          src={config.heroImage}
          alt={config.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#081C49]/35" />
        <Breadcrumbs
          onDark
          className={`absolute inset-x-0 z-20 px-[5%] ${belowHeaderTopClass}`}
          items={[
            { name: "Home", href: "/" },
            { name: "Areas we cover", href: "/areas-we-cover" },
            { name: town, href: `/locations/${townSlug}` },
            { name: serviceLabel },
          ]}
        />
        <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{heading}</h1>
          <p className="text-base font-medium sm:text-xl">{description}</p>
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-white px-6 py-3 text-base font-medium text-[#081C49] sm:text-xl"
          >
            Get in Touch
          </Link>
        </HeroReveal>
      </section>

      <section className="mt-10 px-[5%] pb-10">
        <Reveal className={innerWhiteCardClass}>
          <p className="text-lg font-bold text-[#1243B4]">Local electricians</p>
          <h2 className={`mt-2 ${innerPageTitleClass}`}>Serving {town} and Nottingham</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#111]">
            {description} We are based in Nottingham and regularly work in {town}{" "}
            and surrounding neighbourhoods. Call{" "}
            <a href="tel:01158700442" className="font-medium text-[#1243B4]">
              0115 8700442
            </a>{" "}
            or request a free quotation through our contact form.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
            >
              Get in Touch
            </Link>
            <Link
              href={config.servicePath}
              className="inline-flex rounded-full border border-[#1243B4] px-6 py-3 text-base font-medium text-[#1243B4]"
            >
              View service details
            </Link>
          </div>
          {otherAreas.length > 0 ? (
            <NearbyAreas segment={config.segment} areas={otherAreas} />
          ) : null}
        </Reveal>
      </section>
    </>
  );
}

function NearbyAreas({
  segment,
  areas,
}: {
  segment: LocationServiceSegment;
  areas: (typeof locations)[number][];
}) {
  return (
    <div className="mt-10 border-t border-[#1243B4]/20 pt-8">
      <p className="text-sm font-semibold text-[#1243B4]">We also cover</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/${segment}/${area.slug}`}
              className="inline-flex rounded-full bg-[#EDEDED] px-3 py-1.5 text-sm text-[#111] hover:bg-[#1243B4]/10"
            >
              {area.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { locationServiceSegments };