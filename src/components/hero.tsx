import Image from "next/image";

import { HeroReveal } from "@/components/motion/reveal";
import { belowHeaderPtClass } from "@/lib/layout";

export function Hero() {
  return (
    <section
      className={`relative flex h-[72vh] items-center justify-center overflow-hidden px-6 pb-8 md:h-[90vh] md:pb-12 ${belowHeaderPtClass}`}
    >
      <Image
        src="/images/hero.jpg"
        alt="MSC Electrical van parked outside a home in Nottingham"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <HeroReveal className="relative z-10 flex max-w-4xl flex-col items-center gap-6 px-6 text-center text-white">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          MSC Electrical
        </h1>
        <p className="text-base font-medium sm:text-2xl">
          Domestic, Commercial, Maintenance &amp; Testing Projects in and around
          Nottingham.
        </p>
        <a
          href="#contact"
          className="rounded-full bg-[#081C49] px-6 py-3 text-base font-medium text-white sm:text-xl"
        >
          GET IN TOUCH
        </a>
      </HeroReveal>
    </section>
  );
}
