import { FileText, Medal, ThumbsUp, type LucideIcon } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/stagger";

const items: { title: string; subtitle: string; icon: LucideIcon }[] = [
  { title: "No-obligation", subtitle: "Free Quotations", icon: FileText },
  { title: "All Work", subtitle: "12 Month Guarantee", icon: Medal },
  { title: "Complete", subtitle: "Customer Satisfaction", icon: ThumbsUp },
];

export function TrustStrip() {
  return (
    <section className="hidden bg-white text-[#1243b4] md:block">
      <Stagger className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 py-5 sm:h-[60px] sm:flex-row sm:gap-2.5 sm:py-0">
        {items.map((item) => (
          <StaggerItem
            key={item.title}
            className="flex w-full max-w-[260px] items-center justify-center gap-2.5"
          >
            <item.icon className="size-7 shrink-0" aria-hidden />
            <div className="text-left text-base leading-tight font-semibold">
              <div>{item.title}</div>
              <div>{item.subtitle}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
