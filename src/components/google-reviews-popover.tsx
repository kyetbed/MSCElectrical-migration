"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Star, X } from "lucide-react";

import { googleRating, googleReviews } from "@/data/reviews";

const previewReviews = googleReviews.slice(0, 3);

function Stars({ className }: { className?: string }) {
  return (
    <span className={`inline-flex text-[#FBBC05] ${className ?? ""}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current sm:size-[1.125rem]" />
      ))}
    </span>
  );
}

export function GoogleReviewsPopover({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={className} aria-label="Google customer reviews">
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="flex w-full max-h-[min(72dvh,28rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-black/5 px-4 py-4">
            <Image
              src="/images/google-g.svg"
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0"
            />
            <div className="min-w-0 flex-1 text-left">
              <p className="text-base font-semibold text-[#111]">Google reviews</p>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#555]">
                <Stars />
                <span>
                  {googleRating.score} · {googleRating.count} reviews
                </span>
              </p>
            </div>
            <button
              type="button"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Close reviews"
              onClick={() => setOpen(false)}
            >
              <X className="size-5 text-[#555]" aria-hidden />
            </button>
          </header>

          <ul className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 text-left">
            {previewReviews.map((review) => (
              <li
                key={`${review.author}-${review.date}`}
                className="text-[0.9375rem] leading-relaxed text-[#333]"
              >
                <p className="font-semibold text-[#1243B4]">{review.author}</p>
                <p className="mt-1.5">&ldquo;{review.quote}&rdquo;</p>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 flex-col gap-2.5 border-t border-black/5 px-4 py-4 text-left">
            <Link
              href="/leave-a-review"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#1243B4] px-4 py-3 text-base font-semibold text-white"
            >
              Leave a review
            </Link>
            <Link
              href="/testimonials#google-reviews"
              className="text-center text-sm font-medium text-[#1243B4] underline underline-offset-2"
              onClick={() => setOpen(false)}
            >
              All testimonials
            </Link>
          </div>
        </div>
      ) : (
        <button
          type="button"
          aria-expanded={false}
          className="flex w-full items-center gap-4 rounded-2xl border border-black/10 bg-white px-4 py-4 text-left shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          onClick={() => setOpen(true)}
        >
          <Image
            src="/images/google-g.svg"
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0"
          />
          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold text-[#111]">
              Google reviews
            </span>
            <span className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[#555]">
              <Stars className="mt-0.5" />
              <span>
                {googleRating.score} · {googleRating.count} reviews
              </span>
            </span>
          </span>
          <ChevronDown className="size-6 shrink-0 text-[#1243B4]" aria-hidden />
        </button>
      )}
    </div>
  );
}