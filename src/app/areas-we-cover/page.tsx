import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerKickerClass,
  innerPageTitleClass,
  innerWhiteCardClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { locations } from "@/data/locations";
import { siteUrl } from "@/data/nap";

const description =
  "Areas covered by MSC Electrical — domestic, testing, and maintenance electricians serving Nottingham and towns within 8 miles of the city.";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description,
  alternates: { canonical: "/areas-we-cover" },
  openGraph: {
    title: "Areas We Cover | MSC Electrical",
    description,
    url: "/areas-we-cover",
    type: "website",
    locale: "en_GB",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Areas covered by MSC Electrical",
  url: `${siteUrl}/areas-we-cover`,
  description,
  hasPart: locations.map((location) => ({
    "@type": "WebPage",
    name: `Electricians in ${location.name}`,
    url: `${siteUrl}/locations/${location.slug}`,
  })),
};

export default function AreasWeCoverPage() {
  const columns = 3;
  const perColumn = Math.ceil(locations.length / columns);
  const grouped = Array.from({ length: columns }, (_, index) =>
    locations.slice(index * perColumn, index * perColumn + perColumn),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <InnerPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "Areas we cover" }]}>
        <div className={innerWhiteCardClass}>
          <p className={innerKickerClass}>Areas we cover</p>
          <h1 className={`mt-2 ${innerPageTitleClass}`}>Nottingham &amp; nearby towns</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#111]">
            MSC Electrical is based in Nottingham and regularly works in the towns and suburbs below
            — roughly within eight miles of the city centre. Select your area to see domestic,
            testing, and maintenance services where you live.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {grouped.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-2 text-base">
                {column.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="font-medium text-[#1243B4] hover:underline"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#111]">
            Not listed?{" "}
            <Link href="/contact" className="font-medium text-[#1243B4] hover:underline">
              Contact us
            </Link>{" "}
            — we may still be able to help.
          </p>
        </div>
      </InnerPage>
      <Footer showReviews />
    </main>
  );
}