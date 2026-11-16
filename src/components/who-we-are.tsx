import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

const services = [
  { href: "/domestic", label: "Domestic Services" },
  { href: "/electrical-maintenance", label: "Maintenance" },
  { href: "/testing-and-inspecting", label: "Testing & Inspection" },
] as const;

export function WhoWeAre() {
  return (
    <section className="px-[5%] pb-10">
      <Reveal className="grid bg-white md:grid-cols-[3fr_2fr]">
        <div className="px-5 py-8 sm:px-12 sm:py-12">
          <p className="text-lg font-bold text-[#1243B4]/60 sm:text-xl">MSC Electrical</p>
          <h2 className="mt-2 text-[28px] leading-tight font-bold text-[#1243B4] sm:text-[35px]">
            Who Are We?
          </h2>
          <div className="mt-4 max-w-[663px] space-y-4 text-base leading-relaxed text-[#111]">
            <p>
              With extensive experience in the electrical industry, specifically
              domestic, maintenance and testing projects. MSC Electrical has been
              building an exceptional reputation since its establishment in 2014.
              Operating as an Approved Electrical Contractor in Nottingham, we
              possess all the necessary qualifications to complete projects to the
              highest standards.
            </p>
            <p>
              Our team is known for being affordable, reliable, and professional,
              earning the trust of clients throughout the East Midlands. If you
              seek a Nottingham Electrician capable of delivering a professional
              service from start to finish, don&apos;t hesitate to contact us today.
              We are here to assist you with great pleasure.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1243B4] px-6 py-3 text-base font-medium text-white"
          >
            <Phone className="size-4" aria-hidden />
            Get in Touch
          </a>
        </div>
        <div className="flex flex-col justify-center px-5 py-6 sm:px-12 sm:py-12">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`flex items-center justify-between py-[15px] text-lg text-[#111] ${index > 0 ? "border-t border-[#1243B4]" : ""}`}
            >
              <span>{service.label}</span>
              <ArrowRight className="size-5 shrink-0 text-[#1243B4]" aria-hidden />
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
