import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { SiteNav } from "@/components/site-nav";
import { TestimonialsList } from "@/components/testimonials-list";
import { belowHeaderPtInnerClass } from "@/lib/layout";
import {
  googleRating,
  googleReviews,
  reviews as trustATraderReviews,
  trustATraderRating,
  trustATraderUrl,
} from "@/data/reviews";

const description =
  "Read customer reviews for MSC Electrical in Nottingham. Rated 5.0 on Google with 166 reviews and 4.96 on TrustATrader based on 88 reviews.";

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

const allReviews = [...googleReviews, ...trustATraderReviews];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "MSC Electrical",
  url: "https://www.mscelectrical.co.uk",
  telephone: "+441158700442",
  aggregateRating: [
    {
      "@type": "AggregateRating",
      ratingValue: googleRating.score,
      reviewCount: googleRating.count,
      bestRating: 5,
    },
    {
      "@type": "AggregateRating",
      ratingValue: trustATraderRating.score,
      reviewCount: trustATraderRating.count,
      bestRating: 5,
    },
  ],
  review: allReviews.map((review) => ({
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
        <Reveal className="mx-auto max-w-6xl" fadeOnly eager>
          <p className="text-lg font-bold text-[#1243B4]">Testimonials</p>
          <h1 className="mt-2 text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
            What Our Customers Say
          </h1>

          <div className="mt-6 space-y-8">
            <section aria-labelledby="google-reviews-heading">
              <h2
                id="google-reviews-heading"
                className="text-xl font-bold text-[#1243B4] sm:text-2xl"
              >
                Google reviews
              </h2>
              <a
                href={googleRating.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-3 text-base font-medium text-[#1243B4] sm:text-lg"
              >
                <Image
                  src="/images/google-g.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12"
                />
                Rated {googleRating.score}/5 based on {googleRating.count} reviews on Google
              </a>
              <p className="mt-2 max-w-2xl text-sm text-[#555]">
                Showing recent reviews from our Google Business profile.{" "}
                <a
                  href={googleRating.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1243B4] underline underline-offset-2"
                >
                  Read all {googleRating.count} reviews on Google
                </a>
                .
              </p>
              <TestimonialsList reviews={googleReviews} />
            </section>

            <section aria-labelledby="trustatrader-reviews-heading">
              <h2
                id="trustatrader-reviews-heading"
                className="text-xl font-bold text-[#1243B4] sm:text-2xl"
              >
                TrustATrader reviews
              </h2>
              <a
                href={trustATraderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-3 text-base font-medium text-[#1243B4] sm:text-lg"
              >
                <Image
                  src="/images/trustatrader-logo.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="size-12"
                />
                Rated {trustATraderRating.score}/5 based on {trustATraderRating.count}{" "}
                reviews on TrustATrader
              </a>
              <TestimonialsList reviews={trustATraderReviews} />
            </section>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
            >
              Request a Quote
            </Link>
            <a
              href={googleRating.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#1243B4] px-6 py-3 text-base font-medium text-[#1243B4]"
            >
              View on Google
            </a>
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