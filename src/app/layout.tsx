import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "@/app/globals.css";
import { WhatsAppChat } from "@/components/whatsapp-chat";
import { locations } from "@/data/locations";
import { business, siteUrl } from "@/data/nap";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const description =
  "MSC Electrical is a NAPIT-approved electrician in Nottingham for domestic, commercial, maintenance and testing work. Free, no-obligation quotations. Call 0115 8700442.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MSC Electrical | Electricians in Nottingham",
    template: "%s | MSC Electrical",
  },
  description,
  applicationName: business.name,
  authors: [{ name: business.name, url: siteUrl }],
  creator: business.name,
  keywords: [
    "electrician Nottingham",
    "MSC Electrical",
    "domestic electrician",
    "electrical maintenance",
    "EICR testing",
    "NAPIT electrician",
    "Nottingham electrician",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: business.name,
    title: "MSC Electrical | Electricians in Nottingham",
    description,
    images: [
      {
        url: "/images/hero.jpg",
        alt: "MSC Electrical van parked outside a home in Nottingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MSC Electrical | Electricians in Nottingham",
    description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Electrician",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "50x50" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: business.name,
  url: siteUrl,
  image: `${siteUrl}/images/hero.jpg`,
  logo: `${siteUrl}/icon.png`,
  telephone: business.phoneE164,
  email: business.email,
  description,
  priceRange: business.priceRange,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    addressCountry: business.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Nottingham" },
  ...locations.map((location) => ({ "@type": "Place", name: location.name })),
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.96",
    reviewCount: "88",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.trustatrader.com/traders/msc-electrical-electricians-nottingham",
    "https://www.facebook.com/MSCElectricalUK",
    "https://www.instagram.com/msc.electrical/",
    "https://twitter.com/MSCElectrical",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${raleway.variable} h-full`}>
      <body className="min-h-full overflow-x-hidden bg-[#EDEDED] font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var dismissed=document.cookie.split("; ").some(function(e){return e.indexOf("msc_radius_banner_dismissed=")===0});document.documentElement.style.setProperty("--site-banner-height",dismissed?"0px":"4rem");}catch(e){}})();',
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}