import Image from "next/image";
import Link from "next/link";

import { CopyrightYear } from "@/components/copyright-year";
import { profileLinks } from "@/data/nap";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Reviews } from "@/components/reviews";
import { YetiQuoteForm } from "@/components/yeti-quote-form";

const logos = [
  { src: "/images/logo-city-guilds.png", alt: "City & Guilds Qualified" },
  { src: "/images/logo-ecs.png", alt: "Electrotechnical Certification Scheme" },
  { src: "/images/logo-napit.png", alt: "NAPIT" },
  { src: "/images/logo-part-p.png", alt: "Part P Electrical Safety" },
  { src: "/images/logo-competent-person.png", alt: "Registered Competent Person Electrical" },
] as const;

const services = [
  { label: "Domestic", href: "/domestic" },
  { label: "Maintenance", href: "/electrical-maintenance" },
  { label: "Testing", href: "/testing-and-inspecting" },
] as const;

const profileLabels: { label: string; href: string }[] = [
  { label: "Google reviews", href: profileLinks.google },
  { label: "TrustATrader", href: profileLinks.trustATrader },
  { label: "Facebook", href: profileLinks.facebook },
  { label: "Instagram", href: profileLinks.instagram },
  { label: "X (Twitter)", href: profileLinks.twitter },
];

const specialistServices = [
  { label: "EICR & landlord certificates", href: "/eicr-landlord-certificates-nottingham" },
  { label: "Consumer unit replacement", href: "/consumer-unit-replacement-nottingham" },
  { label: "EV charger installation", href: "/ev-charger-installation-nottingham" },
  { label: "Commercial electrical", href: "/commercial-electrical-services-nottingham" },
] as const;

export function Footer({
  showQuote = true,
  showReviews = false,
}: {
  showQuote?: boolean;
  showReviews?: boolean;
}) {
  return (
    <footer>
      {showReviews ? <Reviews /> : null}
      {showQuote ? (
      <section id="contact" className="relative overflow-hidden px-4 py-14 text-center text-white sm:px-6 sm:py-16">
        <Image
          src="/images/quote-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#081C49]/30" />
        <Reveal className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Request your Free Quote</h2>
          <p className="mt-3 text-base sm:text-lg">
            Please fill out our contact form below and we&apos;ll be in touch
            shortly.
          </p>
          <div className="mt-8 text-left">
            <YetiQuoteForm />
          </div>
        </Reveal>
      </section>
      ) : null}

      <section className="bg-white px-6 py-10">
        <Stagger className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <StaggerItem key={logo.src} className="relative h-20 w-40">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="160px"
                className="object-contain"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-[#081C49] px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="relative mx-auto block h-12 w-52">
            <Image
              src="/images/logo.png"
              alt="MSC Electrical"
              fill
              sizes="208px"
              className="object-contain"
            />
          </Link>
          <div className="mt-12 grid gap-10 text-left md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-base font-bold">About Us - MSC Electrical</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                MSC Electrical provide Domestic, Commercial, Maintenance &amp;
                Testing Electrical Projects in Nottingham and surrounding areas.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/areas-we-cover">Areas we cover</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case studies</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold">Contact Us</h2>
              <p className="mt-4 text-sm leading-relaxed">
                Tel:
                <br />
                <a href="tel:01158700442">0115 8700442</a>
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Email:
                <br />
                <a href="mailto:info@mscelectrical.co.uk" className="break-all">
                  info@mscelectrical.co.uk
                </a>
              </p>
              <p className="mt-5 text-sm font-bold">Reviews &amp; social</p>
              <ul className="mt-2 space-y-2 text-sm">
                {profileLabels.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-white/50 underline-offset-2 hover:decoration-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold">Our Services</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-base font-bold">Specialist work</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {specialistServices.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href}>{service.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/25 pt-6 text-left text-sm sm:flex-row sm:items-center sm:justify-between">
            <span>
              © <CopyrightYear /> MSC Electrical. All Rights Reserved
            </span>
            <Link href="/sitemap" className="text-white/90 hover:underline">
              Site map
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
