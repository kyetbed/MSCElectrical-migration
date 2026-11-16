"use client";

import Image from "next/image";

import { Stagger, StaggerItem } from "@/components/motion/stagger";
type ReviewItem = {
  author: string;
  date: string;
  quote: string;
};

type TestimonialsListProps = {
  reviews: readonly ReviewItem[];
};

export function TestimonialsList({ reviews }: TestimonialsListProps) {
  return (
    <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <StaggerItem key={`${review.author}-${review.date}`}>
          <article className="flex h-full flex-col bg-white px-5 py-5 text-sm leading-relaxed text-[#111]">
            <Image
              src="/images/trustatrader-logo.svg"
              alt=""
              width={40}
              height={40}
              className="mb-3 size-10"
            />
            <p className="font-semibold text-[#1243B4]">{review.author}</p>
            <p className="mt-1 text-xs text-[#999]">{review.date}</p>
            <p className="mt-3 flex-1">&ldquo;{review.quote}&rdquo;</p>
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}