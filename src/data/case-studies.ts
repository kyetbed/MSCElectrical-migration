export const caseStudies = [
  {
    slug: "kitchen-spotlights-nottingham",
    title: "Kitchen spotlights throughout Nottingham home",
    area: "Nottingham",
    service: "Domestic",
    summary:
      "Full kitchen downlight upgrade with even lighting layout, minimal disruption, and tidy finishes.",
    challenge:
      "The customer wanted brighter, modern spot lighting across the kitchen without chasing plaster or leaving trailing cables.",
    solution:
      "We planned circuit loading, installed new LED downlights on existing routes where possible, and upgraded protection where required.",
    outcome:
      "Even, efficient kitchen lighting with all work tested, certified, and the property left clean.",
    image: "/images/domestic-pendants.png",
    imageAlt: "Kitchen lighting installed by MSC Electrical",
  },
  {
    slug: "consumer-unit-upgrade-bulwell",
    title: "Consumer unit upgrade in Bulwell",
    area: "Bulwell",
    service: "Domestic",
    summary:
      "Replacement of an ageing fuse board with a modern RCBO consumer unit and full circuit testing.",
    challenge:
      "An older rewireable fuse unit failed an insurance check and lacked RCD protection for socket circuits.",
    solution:
      "We installed a FuseBox consumer unit, labelled every circuit, and tested insulation and polarity across the installation.",
    outcome:
      "The customer received certification for notifiable work and a safer, clearly labelled electrical supply.",
    image: "/images/maintenance-consumer-unit.jpg",
    imageAlt: "Consumer unit upgrade by MSC Electrical",
  },
  {
    slug: "garden-power-gedling",
    title: "Garden power and exterior lighting in Gedling",
    area: "Gedling",
    service: "Domestic",
    summary:
      "Outdoor socket and security lighting for front and rear gardens with weatherproof accessories.",
    challenge:
      "The homeowner needed safe outdoor power for tools and lighting without exposed joins.",
    solution:
      "We routed SWA and appropriate exterior accessories, protected circuits correctly, and commissioned all lighting zones.",
    outcome:
      "Reliable garden power and lighting with workmanship rated highly on TrustATrader.",
    image: "/images/domestic-wall-lights.png",
    imageAlt: "Exterior lighting installation",
  },
  {
    slug: "eicr-rental-sherwood",
    title: "Landlord EICR in Sherwood",
    area: "Sherwood",
    service: "Testing",
    summary:
      "Periodic inspection and testing for a rental property ahead of a new tenancy.",
    challenge:
      "The landlord needed a compliant EICR quickly with a clear list of any remedial actions.",
    solution:
      "We completed a full EICR, explained observation codes, and quoted remedial work for minor C3 items.",
    outcome:
      "Certificate issued for the tenancy pack with optional follow-up visits booked for upgrades.",
    image: "/images/testing-hero.png",
    imageAlt: "Electrical testing for landlords",
  },
  {
    slug: "ev-charger-long-eaton",
    title: "Home EV charger in Long Eaton",
    area: "Long Eaton",
    service: "Domestic",
    summary:
      "Garage EV charge point install with supply upgrade checks and neat cable routing.",
    challenge:
      "The customer needed a dedicated charger circuit without overloading the existing consumer unit.",
    solution:
      "We surveyed the installation, installed appropriate protection, and commissioned a tethered charge point.",
    outcome:
      "Safe overnight charging with notification paperwork supplied on completion.",
    image: "/images/domestic-ev-charger.png",
    imageAlt: "EV charge point installation",
  },
  {
    slug: "shop-maintenance-west-bridgford",
    title: "Retail maintenance in West Bridgford",
    area: "West Bridgford",
    service: "Commercial",
    summary:
      "Fault finding and accessory upgrades for a small retail unit between trading hours.",
    challenge:
      "Intermittent tripping on lighting circuits was affecting opening hours.",
    solution:
      "We traced faulty accessories, replaced damaged fittings, and verified test results before handover.",
    outcome:
      "Stable lighting circuits with maintenance notes left for the store manager.",
    image: "/images/maintenance-hero.png",
    imageAlt: "Commercial electrical maintenance",
  },
] as const;

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}