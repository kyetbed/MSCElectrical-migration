export const siteUrl = "https://www.mscelectrical.co.uk" as const;

export const business = {
  name: "MSC Electrical",
  legalName: "MSC Electrical",
  phoneDisplay: "0115 8700442",
  phoneTel: "01158700442",
  phoneE164: "+441158700442",
  email: "info@mscelectrical.co.uk",
  address: {
    locality: "Nottingham",
    region: "Nottinghamshire",
    country: "GB",
  },
  guarantee: "12 Month Guarantee on all work",
  priceRange: "££",
} as const;

const whatsappDigits = business.phoneE164.replace(/\D/g, "");

const defaultWhatsAppMessage =
  "Hello MSC Electrical, I have a question about an electrical job.";

export const whatsappChatUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(defaultWhatsAppMessage)}`;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}