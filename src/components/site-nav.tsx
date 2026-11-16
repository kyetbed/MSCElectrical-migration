"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";

import { LocationsNavDropdown } from "@/components/locations-nav-dropdown";
import {
  dismissSiteBannerCookie,
  isSiteBannerDismissed,
  syncSiteBannerHeight,
} from "@/lib/site-banner";
import { bannerRatings } from "@/data/reviews";

const links = [
  { href: "/domestic", label: "Domestic" },
  { href: "/testing-and-inspecting", label: "Testing" },
  { href: "/electrical-maintenance", label: "Electrical Maintenance" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
] as const;

export function SiteNav() {
  const chromeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuTop, setMenuTop] = useState(0);

  useLayoutEffect(() => {
    const visible = !isSiteBannerDismissed();
    setBannerVisible(visible);
    syncSiteBannerHeight(visible);
  }, []);

  useLayoutEffect(() => {
    syncSiteBannerHeight(bannerVisible);
  }, [bannerVisible]);

  useLayoutEffect(() => {
    if (!open || !chromeRef.current) return;
    setMenuTop(chromeRef.current.getBoundingClientRect().bottom);
    const onResize = () => {
      if (chromeRef.current) {
        setMenuTop(chromeRef.current.getBoundingClientRect().bottom);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open, bannerVisible]);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function dismissBanner() {
    dismissSiteBannerCookie();
    syncSiteBannerHeight(false);
    setBannerVisible(false);
  }

  return (
    <>
      <div ref={chromeRef} className="fixed inset-x-0 top-0 z-30">
        {bannerVisible ? (
          <div
            role="region"
            aria-label="Customer ratings and contact"
            className="bg-[#1243B4] text-white"
          >
            <div className="flex min-h-16 items-center gap-2 px-3 py-2 sm:px-5">
              <p className="min-w-0 flex-1 text-center text-xs leading-snug sm:text-sm">
                <a
                  href={bannerRatings.trustATrader.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  Rated <span className="font-bold">{bannerRatings.trustATrader.score}/5</span> on
                  TrustATrader
                </a>
                <span className="mx-1.5 hidden opacity-70 sm:inline" aria-hidden>
                  ·
                </span>
                <span className="mt-0.5 block sm:mt-0 sm:inline">
                  <a
                    href={bannerRatings.google.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    Rated <span className="font-bold">{bannerRatings.google.score}</span> on Google
                    with {bannerRatings.google.reviewCount} reviews
                  </a>
                </span>
                <span className="mx-1.5 hidden opacity-70 sm:inline" aria-hidden>
                  ·
                </span>
                <Link
                  href="/contact"
                  className="mt-0.5 block font-semibold underline decoration-white/70 underline-offset-2 hover:decoration-white sm:mt-0 sm:inline"
                >
                  Contact Us today
                </Link>
              </p>
              <button
                type="button"
                className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-white/90 hover:bg-white/10 hover:text-white"
                aria-label="Dismiss notice"
                onClick={dismissBanner}
              >
                <X className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        ) : null}

        <header className="bg-[#081C49]/80 text-white backdrop-blur-md">
          <div className="hidden items-center justify-end gap-6 px-6 pt-3 text-sm lg:flex">
            <a href="tel:01158700442" className="inline-flex items-center gap-2">
              <Phone className="size-4" aria-hidden />
              0115 8700442
            </a>
            <a
              href="mailto:info@mscelectrical.co.uk"
              className="inline-flex items-center gap-2"
            >
              <Mail className="size-4" aria-hidden />
              info@mscelectrical.co.uk
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <Link
              href="/"
              className="relative block h-10 w-[150px] shrink-0 lg:h-11 lg:w-[190px]"
              onClick={close}
            >
              <Image
                src="/images/logo.png"
                alt="MSC Electrical"
                fill
                priority
                sizes="190px"
                className="object-contain object-left"
              />
            </Link>
            <nav
              className="hidden items-center justify-end gap-x-5 text-sm font-semibold lg:flex"
              aria-label="Primary"
            >
              {links.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <LocationsNavDropdown />
              <Link
                href="/contact"
                className="rounded-full bg-white px-4 py-1.5 font-medium text-[#081C49]"
              >
                Get A Quote
              </Link>
            </nav>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => {
              if (!open && chromeRef.current) {
                setMenuTop(chromeRef.current.getBoundingClientRect().bottom);
              }
              setOpen((current) => !current);
            }}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </header>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 z-20 overflow-y-auto border-t border-white/15 bg-[#081C49] px-4 py-4 text-white lg:hidden"
          style={{ top: menuTop }}
        >
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="tel:01158700442"
              className="inline-flex items-center gap-2"
              onClick={close}
            >
              <Phone className="size-4" aria-hidden />
              0115 8700442
            </a>
            <a
              href="mailto:info@mscelectrical.co.uk"
              className="inline-flex items-center gap-2 break-all"
              onClick={close}
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              info@mscelectrical.co.uk
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-1 text-base font-semibold">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="block py-2" onClick={close}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#081C49]"
            onClick={close}
          >
            Get A Quote
          </Link>
        </nav>
      ) : null}
    </>
  );
}