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
  "Electrical testing and inspecting in Nottingham. MSC Electrical delivers EICR and compliance testing for homes and businesses with expert, thorough inspections.";

const gallery = [
  { src: "/images/testing-socket.png", alt: "Voltage testing at a domestic socket" },
  { src: "/images/testing-megger.png", alt: "Megger multifunction tester" },
  { src: "/images/testing-fluke.png", alt: "Fluke multifunction tester on site" },
  { src: "/images/testing-fluke-case.jpg", alt: "Fluke testing equipment case" },
] as const;

export const metadata: Metadata = {
  title: "Electrical Testing & Inspecting Nottingham",
  description,
  alternates: { canonical: "/testing-and-inspecting" },
  openGraph: {
    title: "Electrical Testing & Inspecting Nottingham | MSC Electrical",
    description,
    url: "/testing-and-inspecting",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/testing-hero.png",
        alt: "Electrical testing equipment used by MSC Electrical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Testing & Inspecting Nottingham | MSC Electrical",
    description,
    images: ["/images/testing-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Testing & Inspecting",
  serviceType: "Electrical inspection and testing",
  url: "https://www.mscelectrical.co.uk/testing-and-inspecting",
  description,
  areaServed: { "@type": "City", name: "Nottingham" },
  provider: {
    "@type": "Electrician",
    name: "MSC Electrical",
    telephone: "+441158700442",
    url: "https://www.mscelectrical.co.uk",
  },
};

export default function TestingAndInspectingPage() {
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
          src="/images/testing-hero.png"
          alt="Electrical testing equipment used by MSC Electrical in Nottingham"
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
            { name: "Electrical testing & inspecting" },
          ]}
        />
        <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Multifunction Testing &amp; Inspecting
          </h1>
          <p className="text-base font-medium sm:text-2xl">
            We possess expert proficiency in the field of Electrical Testing
            &amp; Inspecting, in and around Nottingham
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
            Electrical Testing &amp; Inspecting Nottingham
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#111]">
            At MSC Electrical, we offer top-notch Testing &amp; Inspecting services in
            Nottingham. As experienced professionals in the electrical industry,
            we understand the significance of maintaining the safety and
            efficiency of your electrical systems. Our team of experts is equipped
            with the latest tools and knowledge to conduct thorough inspections
            and tests for compliance with industry standards and regulations. With
            our meticulous approach, we identify any potential issues or hazards,
            ensuring that your electrical infrastructure is in optimal working
            condition. Whether it&apos;s for your residential or commercial
            property, you can trust us to deliver reliable and high-quality
            services that prioritize safety and peace of mind. Choose MSC Electrical
            for all your Testing &amp; Inspecting needs in Nottingham.
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
            src="/images/testing-consumer-unit.jpg"
            alt="Consumer unit and wiring installed by MSC Electrical"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <AnimatedGallery images={gallery} ariaLabel="Testing and inspection photos" />

      <FaqSection items={faqSections.testing} />
      <Footer showReviews />
    </main>
  );
}