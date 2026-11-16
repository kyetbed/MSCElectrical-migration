import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerKickerClass,
  innerPageTitleClass,
  innerWhiteCardClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { business, siteUrl } from "@/data/nap";
import { trustATraderRating } from "@/data/reviews";

const description =
  "About MSC Electrical — NAPIT-approved electricians in Nottingham for domestic, commercial, testing and maintenance work. 12-month guarantee and free quotations.";

export const metadata: Metadata = {
  title: "About MSC Electrical",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MSC Electrical",
    description,
    url: "/about",
    type: "website",
    locale: "en_GB",
    images: [{ url: "/images/hero.jpg", alt: "MSC Electrical team" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About MSC Electrical",
  url: `${siteUrl}/about`,
  description,
  mainEntity: {
    "@type": "Electrician",
    name: business.name,
    telephone: business.phoneE164,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
  },
};

const logos = [
  { src: "/images/logo-napit.png", alt: "NAPIT registered" },
  { src: "/images/logo-part-p.png", alt: "Part P registered" },
  { src: "/images/logo-competent-person.png", alt: "Registered Competent Person" },
  { src: "/images/logo-city-guilds.png", alt: "City & Guilds" },
] as const;

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <InnerPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "About us" }]}>
        <div className={innerWhiteCardClass}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className={innerKickerClass}>About us</p>
              <h1 className={`mt-2 ${innerPageTitleClass}`}>MSC Electrical</h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#111]">
                <p>
                  MSC Electrical is a Nottingham-based electrical contractor trusted for domestic,
                  commercial, maintenance, and testing work across the city and surrounding towns.
                  We are known for tidy workmanship, clear communication, and arriving when we say
                  we will.
                </p>
                <p>
                  Our team is led by experienced electricians who take pride in careful
                  installations, honest advice, and leaving properties clean at the end of the job.
                  Whether you need a single socket, a full rewire, landlord certification, or
                  ongoing maintenance, we treat every project with the same attention to safety and
                  detail.
                </p>
                <p>
                  We are <strong>NAPIT registered</strong> and operate as competent persons for
                  notifiable electrical work, giving you the right certification for insurers,
                  mortgage lenders, and landlords.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm font-medium text-[#1243B4]">
                <li>{business.guarantee}</li>
                <li>Free, no-obligation quotations</li>
                <li>Fully insured</li>
                <li>
                  Rated {trustATraderRating.score}/5 on TrustATrader ({trustATraderRating.count}{" "}
                  reviews)
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
              >
                Get in Touch
              </Link>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src="/images/hero.jpg"
                alt="MSC Electrical van in Nottingham"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-8 border-t border-[#1243B4]/20 pt-10 sm:grid-cols-4">
            {logos.map((logo) => (
              <li key={logo.src} className="relative mx-auto h-20 w-full max-w-[160px]">
                <Image src={logo.src} alt={logo.alt} fill sizes="160px" className="object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </InnerPage>
      <Footer showReviews />
    </main>
  );
}