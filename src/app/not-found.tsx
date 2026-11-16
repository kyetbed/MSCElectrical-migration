import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Reveal } from "@/components/motion/reveal";
import { SiteNav } from "@/components/site-nav";
import { belowHeaderPtClass, belowHeaderTopClass } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "Contact us", href: "/contact" },
  { label: "Domestic electrical", href: "/domestic" },
  { label: "Areas we cover", href: "/areas-we-cover" },
  { label: "Site map", href: "/sitemap" },
] as const;

export default function NotFound() {
  return (
    <main>
      <SiteNav />
      <section
        className={`${belowHeaderTopClass} ${belowHeaderPtClass} px-6 pb-20 pt-10`}
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#EC1B23]">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#081C49] sm:text-4xl">
            This page could not be found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#333]">
            The link may be out of date or the page may have moved. Try one of
            the options below, or get in touch and we&apos;ll point you in the
            right direction.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {helpfulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-full border border-[#081C49]/15 bg-white px-4 py-2 text-sm font-medium text-[#081C49] shadow-sm transition hover:border-[#EC1B23]/40 hover:text-[#EC1B23]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-[#555]">
            Need an electrician in Nottingham?{" "}
            <a
              href="tel:01158700442"
              className="font-semibold text-[#081C49] underline decoration-[#EC1B23]/50 underline-offset-2"
            >
              Call 0115 8700442
            </a>
          </p>
        </Reveal>
      </section>
      <Footer showQuote={false} />
    </main>
  );
}