"use client";

import Image from "next/image";

import type { CustomerReview, ReviewSource } from "@/data/reviews";

type TestimonialsListProps = {
  reviews: readonly CustomerReview[];
  className?: string;
};

export function TestimonialsList({ reviews, className = "mt-10" }: TestimonialsListProps) {
  return (
    <div className={`${className} grid gap-4 sm:grid-cols-2 lg:grid-cols-3`}>
      {reviews.map((review) => (
        <article
          key={`${review.source}-${review.author}-${review.date}`}
          className="flex h-full flex-col bg-white px-5 py-5 text-sm leading-relaxed text-[#111]"
        >
          <ReviewSourceBadge source={review.source} />
          <p className="mt-3 font-semibold text-[#1243B4]">{review.author}</p>
          <p className="mt-1 text-xs text-[#999]">{review.date}</p>
          <p className="mt-3 flex-1">&ldquo;{review.quote}&rdquo;</p>
        </article>
      ))}
    </div>
  );
}

function ReviewSourceBadge({ source }: { source: ReviewSource }) {
  if (source === "google") {
    return (
      <Image
        src="/images/google-g.svg"
        alt=""
        width={40}
        height={40}
        className="size-10"
      />
    );
  }

  return (
    <Image
      src="/images/trustatrader-logo.svg"
      alt=""
      width={40}
      height={40}
      className="size-10"
    />
  );
}