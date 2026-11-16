export const siteUrl = "https://www.mscelectrical.co.uk" as const;

/** Public Google Business Profile (stable place_id link). */
export const googleBusinessProfileUrl =
  "https://www.google.com/maps/search/?api=1&query_place_id=ChIJQYasnZXGeUgRiwy_xQ7D9JE";

export const profileLinks = {
  google: googleBusinessProfileUrl,
  trustATrader:
    "https://www.trustatrader.com/traders/msc-electrical-electricians-nottingham",
  facebook: "https://www.facebook.com/MSCElectricalUK",
  instagram: "https://www.instagram.com/msc.electrical/",
  twitter: "https://twitter.com/MSCElectrical",
} as const;

export const business = {
  name: "MSC Electrical",
  legalName: "MSC Electrical",
  phoneDisplay: "0115 8700442",
  phoneTel: "01158700442",
  phoneE164: "+441158700442",
  email: "info@mscelectrical.co.uk",
  address: {
    streetAddress: "15 Barnet Road",
    locality: "Nottingham",
    region: "Nottinghamshire",
    postalCode: "NG3 7AQ",
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