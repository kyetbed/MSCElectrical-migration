import { createIntentPage } from "@/lib/intent-page";

const { Page, metadata } = createIntentPage({
  path: "/eicr-landlord-certificates-nottingham",
  title: "EICR & Landlord Electrical Certificates Nottingham",
  description:
    "Landlord EICR and electrical safety certificates in Nottingham. NAPIT-approved testing, clear reports, and remedial quotes from MSC Electrical.",
  h1: "EICR & Landlord Electrical Certificates",
  intro:
    "Domestic EICR testing for Nottingham landlords, agents, and homeowners with clear codes and certification.",
  heroImage: "/images/testing-hero.png",
  heroImageAlt: "Electrical testing equipment used by MSC Electrical",
  splitImage: "/images/testing-socket.png",
  splitImageAlt: "Electrical testing at a domestic property",
  breadcrumbs: [{ name: "Home", href: "/" }, { name: "EICR & landlord certificates" }],
  bodyHeading: "EICR Testing in Nottingham",
  bodyParagraphs: [
    "Private landlords in England must ensure rental properties have a valid Electrical Installation Condition Report (EICR) at least every five years. MSC Electrical carries out landlord inspections across Nottingham and nearby areas with clear, easy-to-understand reporting.",
    "We explain observation codes in plain English so you know whether immediate action is required. If remedial work is needed, we quote separately so your property can be let safely.",
    "After testing you receive a formal EICR suitable for tenancy packs and managing agents. We can also arrange repeat visits for portfolio landlords so certificates do not lapse.",
  ],
  bullets: [
    "Full periodic inspection",
    "Landlord-compliant certification",
    "Clear defect explanations",
    "Remedial quotations",
  ],
  gallery: [
    { src: "/images/testing-hero.png", alt: "Multifunction testing equipment" },
    { src: "/images/testing-socket.png", alt: "Socket testing on site" },
    { src: "/images/testing-fluke.png", alt: "Fluke tester" },
    { src: "/images/testing-megger.png", alt: "Megger tester" },
  ],
  serviceType: "EICR and landlord electrical certificate",
  faqKey: "eicr",
});

export { metadata };
export default Page;