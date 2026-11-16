import Image from "next/image";
import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/motion/stagger";

const services = [
  {
    title: "Domestic",
    src: "/images/domestic.png",
    href: "/domestic",
    description:
      "As experts in the domestic sector, we excel at ensuring the safety and attractiveness of your home. Through regular testing and maintenance, we not only enhance the safety of your abode but also set your home apart from others, showcasing its superior standards.",
  },
  {
    title: "Maintenance",
    src: "/images/maintenance.png",
    href: "/electrical-maintenance",
    description:
      "Electrical maintenance holds significant importance within the electrical industry. Neglecting the regular upkeep of your property or business can have adverse effects on the overall integrity of the wiring system and jeopardize the safety of the entire electrical installation. Therefore, ensuring proper maintenance is vital.",
  },
  {
    title: "Testing",
    src: "/images/testing.png",
    href: "/testing-and-inspecting",
    description:
      "Electrical maintenance holds significant importance within the electrical industry. Neglecting the regular upkeep of your property or business can have adverse effects on the overall integrity of the wiring system and jeopardize the safety of the entire electrical installation. Therefore, ensuring proper maintenance is vital.",
  },
] as const;

export function ServiceCards() {
  return (
    <section className="px-[5%] pb-10">
      <Stagger className="grid gap-2.5 md:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.title}>
          <Link
            href={service.href}
            className="group relative block h-[350px] overflow-hidden"
          >
            <Image
              src={service.src}
              alt={`${service.title} electrical work by MSC Electrical`}
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover brightness-110 transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-125"
            />
            <div className="absolute inset-0 flex items-center justify-center px-7 text-center text-white">
              <div className="drop-shadow-[0_2px_12px_rgba(8,28,73,0.55)]">
                <h3 className="text-3xl leading-none font-bold transition-transform duration-500 ease-out group-hover:-translate-y-3 sm:text-[40px]">
                  {service.title}
                </h3>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-4 text-sm leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold tracking-wide underline underline-offset-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
