export type FaqItem = { question: string; answer: string };

export type FaqSectionKey =
  | "domestic"
  | "testing"
  | "maintenance"
  | "location"
  | "eicr"
  | "consumer-unit"
  | "ev-charger"
  | "commercial";

export const faqSections: Record<FaqSectionKey, FaqItem[]> = {
  domestic: [
    {
      question: "How much does a domestic rewire cost in Nottingham?",
      answer:
        "Rewire costs depend on property size, access, and whether the consumer unit needs replacing. We provide free, no-obligation quotations after understanding your layout and priorities, so you get a clear price before any work starts.",
    },
    {
      question: "Do I need Part P notification for electrical work at home?",
      answer:
        "Notifiable work in England must be certified appropriately. As NAPIT-registered electricians, we can self-certify compliant work and issue the paperwork your insurer or solicitor may need.",
    },
    {
      question: "How long does a consumer unit replacement take?",
      answer:
        "Most domestic consumer unit upgrades are completed in a day, with power off only for the periods needed to change over safely. We plan the work to minimise disruption and test everything before we leave.",
    },
    {
      question: "Can you install EV charge points at residential properties?",
      answer:
        "Yes. We install home EV chargers including correct cable routes, protection, and commissioning. We can advise on charger types and arrange installation around your driveway or garage setup.",
    },
  ],
  testing: [
    {
      question: "What is an EICR and do I need one?",
      answer:
        "An Electrical Installation Condition Report (EICR) records the safety of fixed wiring and accessories. Landlords must have valid reports for rentals; homeowners often book them before buying, selling, or after major works.",
    },
    {
      question: "How often should a landlord EICR be renewed?",
      answer:
        "For most domestic lets in England, landlords should have an EICR at least every five years or when the tenancy changes, whichever comes first. We issue clear reports with codes so you know what action is required.",
    },
    {
      question: "What happens if my EICR has C1 or C2 observations?",
      answer:
        "C1 means danger present and should be made safe urgently. C2 means potentially dangerous and should be remedied within a reasonable time. We can quote to put right any issues found during the inspection.",
    },
    {
      question: "How long does electrical testing take?",
      answer:
        "Typical domestic EICR visits take a few hours depending on property size, circuit count, and access. We agree scope beforehand so you know what to expect on the day.",
    },
  ],
  maintenance: [
    {
      question: "What is included in electrical maintenance?",
      answer:
        "Maintenance can include visual inspections, tightening checks, test routines, fault finding, and planned replacement of worn accessories. We tailor visits to homes, shops, offices, and small commercial premises.",
    },
    {
      question: "How often should electrics be maintained?",
      answer:
        "Homes without statutory requirements still benefit from periodic checks. Commercial and rental properties often need formal intervals. We recommend a schedule based on your building type and usage.",
    },
    {
      question: "Can you maintain older consumer units and wiring?",
      answer:
        "Yes. We maintain existing installations where they are safe to keep in service, and we will advise honestly when an upgrade or partial rewire is the better long-term option.",
    },
    {
      question: "Do you offer maintenance contracts?",
      answer:
        "We can arrange planned maintenance visits for landlords and businesses so testing and minor repairs are handled before they become emergencies. Contact us to discuss your property portfolio.",
    },
  ],
  location: [
    {
      question: "Do you charge extra for travel to my area?",
      answer:
        "We serve Nottingham and towns within roughly a 20-mile radius (as far as Newark). Travel is included in quotations for standard jobs unless access or parking needs special arrangement, which we will explain upfront.",
    },
    {
      question: "How quickly can you attend?",
      answer:
        "Availability depends on the type of work. We schedule planned jobs efficiently and prioritise urgent safety issues where possible. Call 0115 8700442 for the soonest appointment.",
    },
    {
      question: "Are you NAPIT approved for work in my postcode?",
      answer:
        "Yes. MSC Electrical is NAPIT registered, allowing us to carry out and certify compliant work across the Nottingham area and the towns we list on our website.",
    },
    {
      question: "Do you provide free quotations?",
      answer:
        "We offer free, no-obligation quotations for most electrical work. Send details through our contact form or call us to describe the job.",
    },
  ],
  eicr: [
    {
      question: "Is an EICR a legal requirement for landlords?",
      answer:
        "Yes, private landlords in England must ensure electrical installations in rented homes are inspected and tested at least every five years by a qualified person, with a report supplied to tenants.",
    },
    {
      question: "What does an EICR cost in Nottingham?",
      answer:
        "Pricing depends on property size and the number of circuits. We quote transparently before booking. Rental properties with clear access are usually completed in a single visit.",
    },
    {
      question: "Can you carry out remedial work after an EICR?",
      answer:
        "Absolutely. If we identify defects, we provide a separate quotation for remedials and can schedule follow-up work to bring the installation up to standard.",
    },
    {
      question: "How do I book a landlord electrical certificate?",
      answer:
        "Use our contact form or call 0115 8700442 with the property address and preferred dates. We will confirm scope, price, and when your certificate will be issued.",
    },
  ],
  "consumer-unit": [
    {
      question: "When should I replace my fuse box?",
      answer:
        "Consider an upgrade if your unit has no RCD protection, uses rewireable fuses, overheats, or fails an EICR. Modern consumer units improve safety with RCBOs and clear labelling.",
    },
    {
      question: "Will I be without power during a fuse board change?",
      answer:
        "Power is switched off while we replace the board and move circuits across safely. We restore supply in stages and test every circuit before signing off.",
    },
    {
      question: "Do you issue certification after a consumer unit upgrade?",
      answer:
        "Yes. Notifiable work includes the appropriate electrical certification and Building Regulations compliance documentation.",
    },
    {
      question: "Can you upgrade a consumer unit without a full rewire?",
      answer:
        "Often yes, if existing wiring tests satisfactorily. If we find deteriorated cables, we will explain whether localised repairs or a larger upgrade is needed.",
    },
  ],
  "ev-charger": [
    {
      question: "What do I need before installing a home EV charger?",
      answer:
        "You need a suitable location, adequate supply capacity, and a compatible charger. We survey your consumer unit, earthing, and cable route before quoting.",
    },
    {
      question: "Can you install chargers for all electric vehicle brands?",
      answer:
        "We install universal tethered or socketed units suitable for most vehicles, following manufacturer and wiring regulations for a safe, tidy finish.",
    },
    {
      question: "Is an EV charger a notified job?",
      answer:
        "Yes, EV charge point installation is notifiable work. We handle certification as NAPIT-registered electricians.",
    },
    {
      question: "How long does home EV charger installation take?",
      answer:
        "Many domestic installs are completed in a day once parts are on site, including testing and demonstration of how to use the unit.",
    },
  ],
  commercial: [
    {
      question: "What commercial electrical work do you cover?",
      answer:
        "We undertake small business and commercial installs, maintenance, emergency lighting checks, power upgrades, and testing for offices, shops, and rental portfolios in Nottingham.",
    },
    {
      question: "Can you work outside business hours?",
      answer:
        "Where possible we arrange access around your trading hours to limit disruption. Discuss your operating times when requesting a quote.",
    },
    {
      question: "Do you provide electrical test certificates for commercial premises?",
      answer:
        "Yes. We carry out periodic inspection and testing and provide formal reports suitable for insurers, landlords, and duty holders.",
    },
    {
      question: "Are you insured for commercial sites?",
      answer:
        "MSC Electrical is fully insured for domestic and commercial electrical work. We follow safe systems of work and leave sites tidy.",
    },
  ],
};

const segmentFaqKey = {
  "domestic-electrical-services-in": "domestic",
  "electrical-testing-and-inspecting-in": "testing",
  "electrical-maintenance-in": "maintenance",
} as const;

export type LocalServiceSegment = keyof typeof segmentFaqKey;

export function getFaqKeyForLocationService(segment: string): FaqSectionKey | undefined {
  if (segment in segmentFaqKey) {
    return segmentFaqKey[segment as LocalServiceSegment];
  }
  return undefined;
}

export function getLocationHubFaqs(place: string): FaqItem[] {
  return [
    {
      question: `Do you cover ${place} and the surrounding area?`,
      answer:
        `Yes. MSC Electrical is based in Nottingham and regularly carries out domestic, testing, and maintenance work in ${place} and nearby neighbourhoods. Travel for standard jobs is included in our quotations unless we agree otherwise upfront.`,
    },
    {
      question: `How do I book an electrician in ${place}?`,
      answer:
        `Contact us on 0115 8700442 or use our online form with the property address and a description of the work. We confirm scope, provide a free quotation where applicable, and arrange a visit that suits you.`,
    },
    {
      question: `Can you carry out EICRs and domestic work in ${place}?`,
      answer:
        `We offer landlord EICR testing, consumer unit upgrades, rewires, lighting, sockets, and ongoing maintenance for homes and small businesses in ${place}. All notifiable work is certified through our NAPIT registration.`,
    },
    {
      question: "Are quotations free?",
      answer:
        "We provide free, no-obligation quotations for most planned electrical work. If we need to attend to diagnose a fault first, we explain any charges before visiting.",
    },
  ];
}