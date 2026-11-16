import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedGallery } from "@/components/animated-gallery";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroReveal, Reveal } from "@/components/motion/reveal";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";
import { faqSections } from "@/data/faqs";
import { belowHeaderPtClass, belowHeaderTopClass } from "@/lib/layout";

const description =
  "Electrical maintenance in Nottingham for homes and businesses. MSC Electrical provides inspections, testing, preventive maintenance and troubleshooting.";

const gallery = [
  { src: "/images/maintenance-fusebox-1.jpg", alt: "Consumer unit wiring and circuit breakers" },
  { src: "/images/maintenance-fusebox-2.png", alt: "Fuse box installation with neat cabling" },
  { src: "/images/maintenance-isolator.png", alt: "Outdoor electrical isolator on a brick wall" },
  { src: "/images/maintenance-fusebox-3.jpg", alt: "Consumer unit maintenance and wiring" },
] as const;

export const metadata: Metadata = {
  title: "Electrical Maintenance Nottingham",
  description,
  alternates: { canonical: "/electrical-maintenance" },
  openGraph: {
    title: "Electrical Maintenance Nottingham | MSC Electrical",
    description,
    url: "/electrical-maintenance",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/maintenance-hero.png",
        alt: "Consumer unit and circuit breakers maintained by MSC Electrical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Maintenance Nottingham | MSC Electrical",
    description,
    images: ["/images/maintenance-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Maintenance",
  serviceType: "Electrical maintenance",
  url: "https://www.mscelectrical.co.uk/electrical-maintenance",
  description,
  areaServed: { "@type": "City", name: "Nottingham" },
  provider: {
    "@type": "Electrician",
    name: "MSC Electrical",
    telephone: "+441158700442",
    url: "https://www.mscelectrical.co.uk",
  },
};

export default function ElectricalMaintenancePage() {
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
          src="/images/maintenance-hero.png"
          alt="Consumer unit and circuit breakers maintained by MSC Electrical in Nottingham"
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
            { name: "Electrical maintenance" },
          ]}
        />
        <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Electrical Maintenance
          </h1>
          <p className="text-base font-medium sm:text-2xl">
            Keeping on top of all your electrical maintenance in and around
            Nottingham.
          </p>
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
            Electrical Maintenance in Nottingham
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#111]">
            At MSC Electrical, we provide comprehensive Electrical Maintenance
            services in Nottingham. With our team of skilled professionals, we
            understand the critical importance of regular maintenance to ensure
            the functionality and safety of your electrical systems. We offer a
            wide range of maintenance solutions tailored to meet the unique needs
            of both residential and commercial properties. From routine
            inspections and testing to preventive maintenance and
            troubleshooting, we are equipped with the expertise and tools to keep
            your electrical infrastructure operating at its best. By entrusting
            your electrical maintenance needs to MSC Electrical, you can have
            peace of mind knowing that your property is in capable hands.
            Experience our reliable and efficient services for all your Electrical
            Maintenance requirements in Nottingham.
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
            src="/images/maintenance-consumer-unit.jpg"
            alt="Consumer unit installed and maintained by MSC Electrical"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <AnimatedGallery images={gallery} ariaLabel="Electrical maintenance photos" />

      <FaqSection items={faqSections.maintenance} />
      <Footer showReviews />
    </main>
  );
}