export type ChatLink = {
  href: string;
  label: string;
};

export type ChatOption = {
  id: string;
  label: string;
  next: string;
};

export type ChatNode = {
  id: string;
  message: string;
  options?: ChatOption[];
  link?: ChatLink;
  whatsappHint?: string;
};

export const chatNodes: Record<string, ChatNode> = {
  start: {
    id: "start",
    message:
      "Hi — I'm the MSC Electrical assistant. We're NAPIT-approved electricians in Nottingham and cover an 8-mile radius around the city. How can I help today?",
    options: [
      { id: "quote", label: "Request a free quote", next: "quote" },
      { id: "services", label: "What services do you offer?", next: "services" },
      { id: "areas", label: "Areas you cover", next: "areas" },
      { id: "urgent", label: "I need to speak to someone", next: "human" },
    ],
  },
  quote: {
    id: "quote",
    message:
      "We offer free, no-obligation quotations. The quickest way is our contact form — we usually reply within 1–2 working days. You can also message us on WhatsApp with photos or details of the job.",
    link: { href: "/contact", label: "Open contact form" },
    whatsappHint: "I'd like a free quote for an electrical job.",
    options: [
      { id: "back", label: "Show main menu", next: "start" },
      { id: "human", label: "Continue on WhatsApp", next: "human" },
    ],
  },
  services: {
    id: "services",
    message: "Choose a service for more detail, or browse the main menu.",
    options: [
      { id: "domestic", label: "Domestic", next: "domestic" },
      { id: "testing", label: "Testing & inspecting", next: "testing" },
      { id: "maintenance", label: "Electrical maintenance", next: "maintenance" },
      { id: "specialist", label: "EV / EICR / commercial", next: "specialist" },
      { id: "back", label: "Main menu", next: "start" },
    ],
  },
  domestic: {
    id: "domestic",
    message:
      "Domestic work includes rewires, consumer units, lighting, sockets, outside lighting and EV charge points. All work comes with our 12-month guarantee.",
    link: { href: "/domestic", label: "Domestic services page" },
    options: [
      { id: "quote", label: "Request a quote", next: "quote" },
      { id: "services", label: "Other services", next: "services" },
    ],
  },
  testing: {
    id: "testing",
    message:
      "We provide EICR testing, landlord certificates, and full inspection & testing for homes and businesses across Nottingham.",
    link: { href: "/testing-and-inspecting", label: "Testing & inspecting" },
    options: [
      { id: "quote", label: "Request a quote", next: "quote" },
      { id: "services", label: "Other services", next: "services" },
    ],
  },
  maintenance: {
    id: "maintenance",
    message:
      "Planned and reactive electrical maintenance helps keep your property safe and compliant. We work with homeowners and businesses.",
    link: { href: "/electrical-maintenance", label: "Maintenance services" },
    options: [
      { id: "quote", label: "Request a quote", next: "quote" },
      { id: "services", label: "Other services", next: "services" },
    ],
  },
  specialist: {
    id: "specialist",
    message:
      "We also specialise in EV charger installation, consumer unit replacement, EICR/landlord certificates, and commercial electrical work in Nottingham.",
    options: [
      { id: "ev", label: "EV chargers", next: "ev" },
      { id: "eicr", label: "EICR / landlord", next: "eicr" },
      { id: "commercial", label: "Commercial", next: "commercial" },
      { id: "services", label: "Back to services", next: "services" },
    ],
  },
  ev: {
    id: "ev",
    message: "Home and workplace EV charge point installation with free quotations.",
    link: { href: "/ev-charger-installation-nottingham", label: "EV charger installation" },
    options: [{ id: "quote", label: "Request a quote", next: "quote" }],
  },
  eicr: {
    id: "eicr",
    message: "Landlord and homeowner EICR certificates and electrical safety reports.",
    link: { href: "/eicr-landlord-certificates-nottingham", label: "EICR certificates" },
    options: [{ id: "quote", label: "Request a quote", next: "quote" }],
  },
  commercial: {
    id: "commercial",
    message: "Commercial electrical installations, maintenance and testing for Nottingham businesses.",
    link: { href: "/commercial-electrical-services-nottingham", label: "Commercial services" },
    options: [{ id: "quote", label: "Request a quote", next: "quote" }],
  },
  areas: {
    id: "areas",
    message:
      "We're based in Nottingham and work within an 8-mile radius, including surrounding towns across Nottinghamshire. See our full coverage list online.",
    link: { href: "/areas-we-cover", label: "Areas we cover" },
    options: [
      { id: "quote", label: "Request a quote", next: "quote" },
      { id: "back", label: "Main menu", next: "start" },
    ],
  },
  human: {
    id: "human",
    message:
      "Tap below to open WhatsApp and chat with our team on 0115 8700442, or call us if your enquiry is urgent.",
    whatsappHint: "Hello, I'd like to speak to someone at MSC Electrical about an electrical job.",
    options: [{ id: "back", label: "Main menu", next: "start" }],
  },
};

const keywordRoutes: { pattern: RegExp; next: string }[] = [
  { pattern: /\b(quote|quotation|price|cost|estimate)\b/i, next: "quote" },
  { pattern: /\b(domestic|home|house|rewire|socket)\b/i, next: "domestic" },
  { pattern: /\b(test|eicr|inspection|landlord|certificate)\b/i, next: "testing" },
  { pattern: /\b(maintenance|repair)\b/i, next: "maintenance" },
  { pattern: /\b(ev|charger|charge\s*point)\b/i, next: "ev" },
  { pattern: /\b(commercial|business)\b/i, next: "commercial" },
  { pattern: /\b(area|cover|location|nottingham)\b/i, next: "areas" },
  { pattern: /\b(hello|hi|hey|help)\b/i, next: "start" },
];

export function routeFreeText(text: string): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  for (const route of keywordRoutes) {
    if (route.pattern.test(trimmed)) return route.next;
  }
  return null;
}

export const freeTextFallback =
  "Thanks for your message. Pick an option below, or continue on WhatsApp and our team will reply as soon as they can.";