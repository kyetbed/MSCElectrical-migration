import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerPageTitleClass,
  innerWhiteCardClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { siteUrl } from "@/data/nap";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | MSC Electrical`,
      description: study.summary,
      url: `/case-studies/${study.slug}`,
      images: [{ url: study.image, alt: study.imageAlt }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.summary,
    url: `${siteUrl}/case-studies/${study.slug}`,
    image: `${siteUrl}${study.image}`,
    author: { "@type": "Organization", name: "MSC Electrical" },
    about: { "@type": "Place", name: study.area },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <InnerPage
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Case studies", href: "/case-studies" },
          { name: study.title },
        ]}
      >
        <article className="overflow-hidden bg-white">
          <div className="relative aspect-[21/9] w-full max-lg:aspect-[4/3]">
            <Image
              src={study.image}
              alt={study.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-8 sm:px-12 sm:py-12">
            <p className="text-sm font-semibold text-[#1243B4]">
              {study.area} · {study.service}
            </p>
            <h1 className={`mt-2 ${innerPageTitleClass}`}>{study.title}</h1>
            <p className="mt-4 text-lg text-[#111]">{study.summary}</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div>
                <h2 className="text-lg font-bold text-[#1243B4]">Challenge</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#111]">{study.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1243B4]">Solution</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#111]">{study.solution}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#1243B4]">Outcome</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#111]">{study.outcome}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
              >
                Request a similar quote
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex rounded-full border border-[#1243B4] px-6 py-3 text-base font-medium text-[#1243B4]"
              >
                All case studies
              </Link>
            </div>
          </div>
        </article>
      </InnerPage>
      <Footer showQuote />
    </main>
  );
}