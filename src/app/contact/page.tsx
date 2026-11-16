import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroReveal, Reveal } from "@/components/motion/reveal";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";
import { YetiQuoteForm } from "@/components/yeti-quote-form";
import { whatsappChatUrl } from "@/data/nap";
import { belowHeaderPtClass, belowHeaderTopClass } from "@/lib/layout";

const description =
  "Contact MSC Electrical in Nottingham. Call 0115 8700442 or email info@mscelectrical.co.uk. We aim to reply within 1-2 working days.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact MSC Electrical",
    description,
    url: "/contact",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/contact-hero.png",
        alt: "Consumer unit installed by MSC Electrical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MSC Electrical",
    description,
    images: ["/images/contact-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact MSC Electrical",
  url: "https://www.mscelectrical.co.uk/contact",
  description,
  mainEntity: {
    "@type": "Electrician",
    name: "MSC Electrical",
    telephone: "+441158700442",
    email: "info@mscelectrical.co.uk",
    url: "https://www.mscelectrical.co.uk",
    areaServed: "Nottingham",
  },
};

export default function ContactPage() {
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
          src="/images/contact-hero.png"
          alt="Consumer unit and circuit protection installed by MSC Electrical"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#081C49]/35" />
        <Breadcrumbs
          onDark
          className={`absolute inset-x-0 z-20 px-[5%] ${belowHeaderTopClass}`}
          items={[{ name: "Home", href: "/" }, { name: "Contact" }]}
        />
        <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-4 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="text-lg font-medium sm:text-2xl">
            We Aim To Reply Within 1-2 Working Days.
          </p>
        </HeroReveal>
      </section>

      <section id="contact" className="px-[5%] py-10">
        <Reveal className="grid bg-white lg:grid-cols-[7fr_3fr]">
          <div className="px-5 py-8 sm:px-12 sm:py-12">
            <h2 className="text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
              Contact Us
            </h2>
            <p className="mt-3 text-base text-[#111]">
              Simply fill out the form below and we&apos;ll be in touch.
            </p>
            <div className="mt-8">
              <YetiQuoteForm formId="9e9b324a-095e-425d-943a-409f4f54e6d4" />
            </div>
          </div>
          <div className="border-t border-[#1243B4]/20 px-5 py-8 text-[#1243B4] sm:px-12 sm:py-12 lg:border-t-0 lg:border-l">
            <h2 className="text-2xl font-bold">Alternative Methods</h2>
            <a href="tel:01158700442" className="mt-6 inline-flex items-center gap-3 text-base">
              <Phone className="size-5 shrink-0" aria-hidden />
              0115 8700442
            </a>
            <a
              href="mailto:info@mscelectrical.co.uk"
              className="mt-4 inline-flex items-center gap-3 break-all text-base"
            >
              <Mail className="size-5 shrink-0" aria-hidden />
              info@mscelectrical.co.uk
            </a>
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-3 text-base"
            >
              <MessageCircle className="size-5 shrink-0" aria-hidden />
              Chat with us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <Footer showQuote={false} showReviews />
    </main>
  );
}
