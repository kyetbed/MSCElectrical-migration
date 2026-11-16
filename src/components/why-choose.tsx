import {
  Award,
  FileCheck,
  FileText,
  Handshake,
  Truck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Fully Insured",
    description:
      "We operate as a fully regulated and fully insured entity under the Part P Scheme.",
    icon: FileCheck,
  },
  {
    title: "Complete Professionalism",
    description:
      "We always wear uniform at all times to show complete professionalism.",
    icon: UserRound,
  },
  {
    title: "Fully Qualified",
    description:
      "Our team of expert electricians are fully qualified & experienced in their respective trade.",
    icon: Award,
  },
  {
    title: "Fully Compliant",
    description: "All of our engineers have public liability insurance in place.",
    icon: FileText,
  },
  {
    title: "Easy To Identify",
    description: "We're easy to identify with our MSC Electrical vehicles.",
    icon: Truck,
  },
  {
    title: "Friendly",
    description: "We always ensure to offer a polite and friendly experience.",
    icon: Handshake,
  },
];

export function WhyChoose() {
  return (
    <section className="px-[5%] pb-10">
      <Reveal className="bg-white px-8 py-12 sm:px-12">
        <h2 className="mx-auto max-w-[20em] text-center text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
          Why Choose MSC Electrical for your electrical requirements in
          Nottingham?
        </h2>
        <Stagger className="mt-10 grid md:grid-cols-3">
          {reasons.map((reason, index) => (
            <StaggerItem
              key={reason.title}
              className={`relative flex flex-col items-center px-6 py-8 text-center text-[#1243B4] sm:px-8 sm:py-10 ${
                index % 3 !== 2 ? "md:border-r md:border-[#1243B4]/20" : ""
              } ${index < reasons.length - 1 ? "border-b border-[#1243B4]/20" : ""} ${
                index >= 3 ? "md:border-b-0" : ""
              }`}
            >
              <reason.icon className="size-10" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{reason.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed">{reason.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>
    </section>
  );
}
