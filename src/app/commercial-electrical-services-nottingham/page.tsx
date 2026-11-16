import { createIntentPage } from "@/lib/intent-page";

const { Page, metadata } = createIntentPage({
  path: "/commercial-electrical-services-nottingham",
  title: "Commercial Electrical Services Nottingham",
  description:
    "Commercial electricians in Nottingham for maintenance, testing, power upgrades, and fault finding. MSC Electrical — fully insured, NAPIT approved.",
  h1: "Commercial Electrical Services Nottingham",
  intro:
    "Maintenance, upgrades, and testing for shops, offices, and rental portfolios around Nottingham.",
  heroImage: "/images/hero.jpg",
  heroImageAlt: "MSC Electrical commercial and domestic services",
  splitImage: "/images/maintenance-fusebox-2.png",
  splitImageAlt: "Commercial electrical installation work",
  breadcrumbs: [{ name: "Home", href: "/" }, { name: "Commercial electrical services" }],
  bodyHeading: "Commercial Electricians in Nottingham",
  bodyParagraphs: [
    "MSC Electrical supports small commercial premises with maintenance visits, periodic testing, lighting upgrades, and fault finding. We plan work around your opening hours where possible.",
    "From retail units in West Bridgford to offices in Nottingham city, we deliver tidy workmanship and clear communication throughout.",
    "Duty holders need evidence that electrical systems are safe. We provide inspection reports, remedial quotations, and follow-up visits so compliance is easier to manage.",
  ],
  bullets: [
    "Maintenance and fault finding",
    "Periodic inspection and testing",
    "Lighting and power upgrades",
    "Fully insured work",
  ],
  gallery: [
    { src: "/images/maintenance-hero.png", alt: "Electrical maintenance" },
    { src: "/images/testing-fluke.png", alt: "On-site testing" },
    { src: "/images/domestic-wall-lights.png", alt: "Exterior lighting" },
    { src: "/images/maintenance-isolator.png", alt: "Isolator installation" },
  ],
  serviceType: "Commercial electrical services",
  faqKey: "commercial",
});

export { metadata };
export default Page;