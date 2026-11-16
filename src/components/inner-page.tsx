import type { ReactNode } from "react";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { Reveal } from "@/components/motion/reveal";
import { belowHeaderPtInnerClass } from "@/lib/layout";

export const innerSectionClass = `px-[5%] ${belowHeaderPtInnerClass} pb-10`;
export const innerWhiteCardClass = "bg-white px-5 py-8 sm:px-12 sm:py-12";
export const innerPageTitleClass =
  "text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]";
export const innerKickerClass = "text-lg font-bold text-[#1243B4]";

type InnerPageProps = {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
};

export function InnerPage({ breadcrumbs, children }: InnerPageProps) {
  return (
    <section className={innerSectionClass}>
      <Breadcrumbs embedded items={breadcrumbs} />
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}