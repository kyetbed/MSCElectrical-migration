import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/footer";
import {
  InnerPage,
  innerKickerClass,
  innerPageTitleClass,
} from "@/components/inner-page";
import { SiteNav } from "@/components/site-nav";
import { caseStudies } from "@/data/case-studies";

const description =
  "Electrical case studies from MSC Electrical in Nottingham — consumer units, EICRs, EV chargers, lighting, and commercial maintenance.";

export const metadata: Metadata = {
  title: "Electrical Case Studies",
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Electrical Case Studies | MSC Electrical",
    description,
    url: "/case-studies",
    type: "website",
    locale: "en_GB",
  },
};

export default function CaseStudiesPage() {
  return (
    <main>
      <SiteNav />
      <InnerPage breadcrumbs={[{ name: "Home", href: "/" }, { name: "Case studies" }]}>
        <p className={innerKickerClass}>Case studies</p>
        <h1 className={`mt-2 ${innerPageTitleClass}`}>Recent projects</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#111]">
          Recent projects from around Nottingham and nearby towns. Each job is completed to the same
          standards — clear quotations, tidy workmanship, and full testing where required.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group flex h-full flex-col overflow-hidden bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 50vw"
                    className="object-cover transition duration-300 group-hover:brightness-110"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#1243B4]">
                    {study.area} · {study.service}
                  </p>
                  <h2 className="mt-2 text-lg font-bold text-[#111] group-hover:text-[#1243B4]">
                    {study.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#111]">{study.summary}</p>
                  <span className="mt-4 text-sm font-semibold text-[#1243B4]">Read case study</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InnerPage>
      <Footer showQuote />
    </main>
  );
}