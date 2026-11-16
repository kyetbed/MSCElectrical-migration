import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { SiteNav } from "@/components/site-nav";
import { TestimonialsList } from "@/components/testimonials-list";
import { belowHeaderPtInnerClass } from "@/lib/layout";
import { reviews, trustATraderRating, trustATraderUrl } from "@/data/reviews";

const description =
  "Read customer reviews for MSC Electrical in Nottingham. Rated 4.96 out of 5 on TrustATrader based on 88 reviews.";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Reviews & Testimonials | MSC Electrical",
    description,
    url: "/testimonials",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Customer Reviews & Testimonials | MSC Electrical",
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "MSC Electrical",
  url: "https://www.mscelectrical.co.uk",
  telephone: "+441158700442",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: trustATraderRating.score,
    reviewCount: trustATraderRating.count,
    bestRating: 5,
  },
  review: reviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewBody: review.quote,
    name: review.author,
  })),
};

export default function TestimonialsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <section className={`px-[5%] pb-10 ${belowHeaderPtInnerClass}`}>
        <Reveal className="mx-auto max-w-6xl">
          <p className="text-lg font-bold text-[#1243B4]">Testimonials</p>
          <h1 className="mt-2 text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
            What Our Customers Say
          </h1>
          <a
            href={trustATraderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-3 text-base font-medium text-[#1243B4] sm:text-lg"
          >
            <Image
              src="/images/trustatrader-logo.svg"
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
            Rated {trustATraderRating.score}/5 Based on {trustATraderRating.count}{" "}
            Reviews via TrustATrader
          </a>
          <TestimonialsList reviews={reviews} />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
            >
              Request a Quote
            </Link>
            <a
              href={trustATraderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#1243B4] px-6 py-3 text-base font-medium text-[#1243B4]"
            >
              View on TrustATrader
            </a>
          </div>
        </Reveal>
      </section>
      <Footer showQuote />
    </main>
  );
}