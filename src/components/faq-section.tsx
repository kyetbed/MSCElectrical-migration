import type { FaqItem } from "@/data/faqs";

import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/motion/reveal";

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export function FaqSection({ title = "Frequently asked questions", items }: FaqSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="px-[5%] pb-10" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]"
        >
          {title}
        </h2>
        <FaqAccordion items={items} />
      </Reveal>
    </section>
  );
}