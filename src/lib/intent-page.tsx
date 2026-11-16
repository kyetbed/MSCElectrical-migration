import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedGallery } from "@/components/animated-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroReveal, Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";
import type { FaqSectionKey } from "@/data/faqs";
import { belowHeaderPtClass, belowHeaderTopClass } from "@/lib/layout";
import { faqSections } from "@/data/faqs";
import { siteUrl } from "@/data/nap";

type GalleryImage = { src: string; alt: string };

export type IntentPageConfig = {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  splitImage: string;
  splitImageAlt: string;
  breadcrumbs: { name: string; href?: string }[];
  bodyHeading: string;
  bodyParagraphs: string[];
  bullets?: readonly string[];
  gallery?: readonly GalleryImage[];
  faqKey: FaqSectionKey;
  serviceType: string;
};

export function createIntentPage(config: IntentPageConfig) {
  const metadata: Metadata = {
    title: config.title,
    description: config.description,
    alternates: { canonical: config.path },
    openGraph: {
      title: `${config.title} | MSC Electrical`,
      description: config.description,
      url: config.path,
      type: "website",
      locale: "en_GB",
      images: [{ url: config.heroImage, alt: config.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} | MSC Electrical`,
      description: config.description,
      images: [config.heroImage],
    },
  };

  function Page() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: config.h1,
      serviceType: config.serviceType,
      url: `${siteUrl}${config.path}`,
      description: config.description,
      areaServed: { "@type": "City", name: "Nottingham" },
      provider: {
        "@type": "Electrician",
        name: "MSC Electrical",
        telephone: "+441158700442",
        url: siteUrl,
      },
    };

    return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
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
            items={config.breadcrumbs}
            onDark
            className={`absolute inset-x-0 z-20 px-[5%] ${belowHeaderTopClass}`}
          />
          <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {config.h1}
            </h1>
            <p className="text-base font-medium sm:text-2xl">{config.intro}</p>
            <Link
              href="/contact"
              className="mt-2 rounded-full bg-white px-6 py-3 text-base font-medium text-[#081C49] sm:text-xl"
            >
              Get in Touch
            </Link>
          </HeroReveal>
        </section>

        <Reveal className="mt-10 grid px-[5%] pb-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-4 lg:py-8 lg:pr-16">
            <p className="text-lg font-bold text-[#1243B4]">Our Services</p>
            <h2 className="mt-2 text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
              {config.bodyHeading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#111]">
              {config.bodyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {config.bullets?.length ? (
              <>
                <p className="mt-6 text-base text-[#111]">This service typically includes:</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-base text-[#111]">
                  {config.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <p className="mt-6 text-base leading-relaxed text-[#111]">
              Request a free, no-obligation quotation through our contact form or call{" "}
              <a href="tel:01158700442" className="font-medium text-[#1243B4]">
                0115 8700442
              </a>
              .
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-fit rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
            >
              Get in Touch
            </Link>
          </div>
          <div className="relative mt-8 min-h-[420px] lg:mt-0">
            <Image
              src={config.splitImage}
              alt={config.splitImageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {config.gallery?.length ? (
          <AnimatedGallery images={config.gallery} ariaLabel="Project photos" />
        ) : null}

        <FaqSection items={faqSections[config.faqKey]} />
        <Footer showReviews />
      </main>
    );
  }

  return { Page, metadata };
}