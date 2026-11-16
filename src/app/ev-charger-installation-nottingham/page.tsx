import { createIntentPage } from "@/lib/intent-page";

const { Page, metadata } = createIntentPage({
  path: "/ev-charger-installation-nottingham",
  title: "EV Charger Installation Nottingham",
  description:
    "Home and workplace EV charger installation in Nottingham. Survey, supply, protection, and certification by MSC Electrical.",
  h1: "EV Charger Installation Nottingham",
  intro:
    "Safe, certifiable charge points for driveways and garages across Nottingham and surrounding towns.",
  heroImage: "/images/domestic-hero.png",
  heroImageAlt: "MSC Electrical domestic installations in Nottingham",
  splitImage: "/images/domestic-ev-charger.png",
  splitImageAlt: "Home EV charge point installed by MSC Electrical",
  breadcrumbs: [{ name: "Home", href: "/" }, { name: "EV charger installation" }],
  bodyHeading: "EV Charger Installation in Nottingham",
  bodyParagraphs: [
    "We install home and small workplace EV charge points with correct cable routes, earthing checks, and consumer unit capacity confirmed before work begins.",
    "Installations are notifiable under Building Regulations. As NAPIT-registered electricians we certify every job, test on completion, and show you how to use your charger safely.",
    "We attend site, advise on the best location, confirm supply arrangements, and provide a fixed quotation. Most domestic installs are completed in a day once materials are on site.",
  ],
  bullets: [
    "Site survey and quotation",
    "Dedicated charger circuit",
    "Earthing and bonding checks",
    "NAPIT certification",
  ],
  gallery: [
    { src: "/images/domestic-ev-charger.png", alt: "EV charge point installation" },
    { src: "/images/domestic-sockets.png", alt: "Consumer unit and circuits" },
    { src: "/images/maintenance-consumer-unit.jpg", alt: "Consumer unit work" },
    { src: "/images/domestic-wall-lights.png", alt: "Exterior electrical work" },
  ],
  serviceType: "EV charge point installation",
  faqKey: "ev-charger",
});

export { metadata };
export default Page;