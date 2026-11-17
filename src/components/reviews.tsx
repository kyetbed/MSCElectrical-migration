"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { reviews, trustATraderRating, trustATraderUrl } from "@/data/reviews";

const visibleCount = 3;
const gap = "1rem";
const slide = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [perView, setPerView] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const maxIndex = Math.max(reviews.length - perView, 0);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const syncMobile = () => setIsMobile(mq.matches);
    syncMobile();
    mq.addEventListener("change", syncMobile);
    return () => mq.removeEventListener("change", syncMobile);
  }, []);

  useLayoutEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const measure = () => {
      const card = node.querySelector("article");
      if (!card) return;
      const nextStep = card.getBoundingClientRect().width + 16;
      setStep(nextStep);
      setPerView(Math.max(1, Math.round(node.clientWidth / nextStep)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  useEffect(() => {
    if (!step) return;
    controls.start({ x: -index * step, transition: slide });
  }, [controls, index, step]);

  function settle(offset: number, velocity: number) {
    let next = index;
    if (offset < -step / 4 || velocity < -400) next = index + 1;
    else if (offset > step / 4 || velocity > 400) next = index - 1;
    next = Math.max(0, Math.min(maxIndex, next));
    if (next === index) {
      controls.start({ x: -index * step, transition: slide });
      return;
    }
    setIndex(next);
  }

  return (
    <section
      id="testimonials"
      aria-label="Customer reviews"
      className="overflow-x-hidden px-[5%] pb-10"
    >
      <Reveal fadeOnly eager>
      <div ref={viewportRef} className="@container min-h-[12rem] overflow-hidden sm:min-h-0">
        <motion.div
          className={`flex ${isMobile ? "" : "cursor-grab touch-pan-y active:cursor-grabbing"}`}
          style={{ gap, touchAction: isMobile ? "pan-y" : "pan-y pinch-zoom" }}
          animate={controls}
          drag={isMobile || !step ? false : "x"}
          dragConstraints={{ left: -maxIndex * step, right: 0 }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={(_, info) => settle(info.offset.x, info.velocity.x)}
        >
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="flex w-[100cqw] shrink-0 flex-col bg-white px-4 py-4 text-sm leading-relaxed text-[#111] md:w-[calc((100cqw-2rem)/3)]"
            >
              <img
                src="/images/trustatrader-logo.svg"
                alt=""
                className="mb-3 size-12"
              />
              <p className="font-semibold text-[#1243B4]">{review.author}</p>
              <p className="mt-1 text-xs text-[#999]">{review.date}</p>
              <p className="mt-3">&ldquo;{review.quote}&rdquo;</p>
            </article>
          ))}
        </motion.div>
      </div>
      <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <a
          href={trustATraderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[#1243B4] sm:text-base"
        >
          Rated {trustATraderRating.score}/5 Based on {trustATraderRating.count}{" "}
          Reviews via TrustATrader
        </a>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous reviews"
            disabled={index === 0}
            onClick={() => setIndex((current) => Math.max(current - 1, 0))}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#1243B4] text-[#1243B4] disabled:opacity-40"
          >
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            disabled={index === maxIndex}
            onClick={() => setIndex((current) => Math.min(current + 1, maxIndex))}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#1243B4] text-[#1243B4] disabled:opacity-40"
          >
            <ArrowRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
