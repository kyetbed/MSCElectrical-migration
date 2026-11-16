import { createIntentPage } from "@/lib/intent-page";

const { Page, metadata } = createIntentPage({
  path: "/consumer-unit-replacement-nottingham",
  title: "Consumer Unit Replacement Nottingham",
  description:
    "Fuse box and consumer unit replacement in Nottingham. RCBO upgrades, certification, and testing from NAPIT-approved MSC Electrical.",
  h1: "Consumer Unit Replacement Nottingham",
  intro:
    "Upgrade your fuse board for safer, certifiable protection with a tidy, labelled installation.",
  heroImage: "/images/maintenance-hero.png",
  heroImageAlt: "Consumer unit and circuit breakers",
  splitImage: "/images/maintenance-consumer-unit.jpg",
  splitImageAlt: "Consumer unit installed by MSC Electrical",
  breadcrumbs: [{ name: "Home", href: "/" }, { name: "Consumer unit replacement" }],
  bodyHeading: "Fuse Board Upgrades in Nottingham",
  bodyParagraphs: [
    "Older fuse boards may lack RCD protection, use obsolete fuse wire, or fail insurance and mortgage checks. A modern consumer unit improves safety with clear circuit labelling and the right protective devices.",
    "MSC Electrical replaces consumer units across Nottingham homes and small businesses, testing every circuit before handover and supplying certification for notifiable work.",
    "We survey your existing installation, agree a switchover plan, and minimise time without power. Upgrades can often be completed without a full rewire when cables test satisfactorily.",
  ],
  bullets: [
    "RCBO / modern consumer units",
    "Circuit labelling",
    "Full testing on completion",
    "Building Regulations certification",
  ],
  gallery: [
    { src: "/images/maintenance-fusebox-1.jpg", alt: "Consumer unit wiring" },
    { src: "/images/maintenance-fusebox-2.png", alt: "Fuse box installation" },
    { src: "/images/maintenance-fusebox-3.jpg", alt: "Circuit breaker panel" },
    { src: "/images/maintenance-isolator.png", alt: "Outdoor isolator installation" },
  ],
  serviceType: "Consumer unit replacement",
  faqKey: "consumer-unit",
});

export { metadata };
export default Page;