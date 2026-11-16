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
  "Domestic electricians in Nottingham for rewires, consumer units, lighting, sockets and EV charge points. MSC Electrical is fully insured. Request a free quotation.";

const services = [
  "Full Rewires",
  "Consumer Unit Replacements",
  "LED Lighting",
  "Outside Lighting",
  "Additional Sockets",
  "EV Charge Points",
] as const;

const gallery = [
  { src: "/images/domestic-wall-lights.png", alt: "Outdoor wall lights installed on a home" },
  { src: "/images/domestic-ev-charger.png", alt: "EV charge point installed in a garden" },
  { src: "/images/domestic-pendants.png", alt: "Pendant lights installed in a kitchen" },
  { src: "/images/domestic-sockets.png", alt: "New sockets and a cooker switch on a tiled wall" },
] as const;

export const metadata: Metadata = {
  title: "Domestic Electricians Nottingham",
  description,
  alternates: { canonical: "/domestic" },
  openGraph: {
    title: "Domestic Electricians Nottingham | MSC Electrical",
    description,
    url: "/domestic",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/domestic-hero.png",
        alt: "Home exterior lighting installed by MSC Electrical in Nottingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Electricians Nottingham | MSC Electrical",
    description,
    images: ["/images/domestic-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic Electrical Services",
  serviceType: "Domestic electrician",
  url: "https://www.mscelectrical.co.uk/domestic",
  description,
  areaServed: { "@type": "City", name: "Nottingham" },
  provider: {
    "@type": "Electrician",
    name: "MSC Electrical",
    telephone: "+441158700442",
    url: "https://www.mscelectrical.co.uk",
  },
};

export default function DomesticPage() {
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
          src="/images/domestic-hero.png"
          alt="Home exterior lighting installed by MSC Electrical in Nottingham"
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
            { name: "Domestic electrical services" },
          ]}
        />
        <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Domestic Electrical Services
          </h1>
          <p className="text-base font-medium sm:text-2xl">
            With extensive knowledge and experience in the field of domestic
            electrical services, we have built a reputation for our exceptional
            work in and around Nottingham.
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
            Domestic Electricians Nottingham
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#111]">
            <p>
              We are experts in domestic electrical services, specialising in
              enhancing the safety and appeal of your home. We offer a
              comprehensive range of services, including everything from new
              installations to ongoing testing and maintenance.
            </p>
            <p>
              The MSC Electrical team ensure that we always show respect. that
              we&apos;re reliable and are completely trustworthy, as well as being
              fully insured, ready to take on any domestic electrical project
              that you may have.
            </p>
            <p>Some of our most popular services are:</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base text-[#111]">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-relaxed text-[#111]">
            Simply click the button below to be redirected to our contact form,
            where you can request a free no-obligation quotation.
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
            src="/images/domestic-exterior.jpg"
            alt="Outside security lighting and cabling on a brick wall"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <AnimatedGallery images={gallery} ariaLabel="Domestic project photos" />

      <FaqSection items={faqSections.domestic} />
      <Footer showReviews />
    </main>
  );
}
