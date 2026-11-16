"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import type { FaqItem } from "@/data/faqs";

const panel = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="mt-8 space-y-3">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div
            key={item.question}
            className="border border-[#1243B4]/20 bg-white px-5 py-4"
          >
            <dt>
              <button
                type="button"
                aria-expanded={expanded}
                className="flex w-full cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-[#1243B4]"
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`mt-0.5 size-5 shrink-0 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </dt>
            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.dd
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={panel}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-sm leading-relaxed text-[#111]">{item.answer}</p>
                </motion.dd>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}