import { googleBusinessProfileUrl, profileLinks } from "@/data/nap";

export const trustATraderUrl = profileLinks.trustATrader;

export const trustATraderRating = {
  score: "4.96",
  count: 88,
};

export const googleMapsUrl = googleBusinessProfileUrl;

export const googleRating = {
  score: "5.0",
  count: 166,
  href: googleMapsUrl,
} as const;

/** Shown in the top site banner (marketing figures). */
export const bannerRatings = {
  trustATrader: {
    score: "4.6",
    href: trustATraderUrl,
  },
  google: {
    score: googleRating.score,
    reviewCount: googleRating.count,
    href: googleRating.href,
  },
} as const;

export type ReviewSource = "google" | "trustatrader";

export type CustomerReview = {
  author: string;
  date: string;
  quote: string;
  source: ReviewSource;
};

/** Recent Google reviews (sourced from the public Google Business listing). */
export const googleReviews: CustomerReview[] = [
  {
    author: "Ian S.",
    date: "November 2026",
    source: "google",
    quote:
      "Really pleased with the work completed by MSC Electrical. Friendly, reliable, and clearly takes pride in doing a quality job. Everything was finished efficiently and to a very high standard. I wouldn't hesitate to use them again.",
  },
  {
    author: "Emma S.",
    date: "October 2026",
    source: "google",
    quote:
      "Upgraded our fuse box and installed a last minute socket for us. The team were lovely, very professional, clean and efficient - would highly recommend!",
  },
  {
    author: "Jonathan M.",
    date: "September 2026",
    source: "google",
    quote:
      "I've used MSC electrical a few times now and every time Matt has been great kept me updated on everything when doing a re wire, responsive to every question I will definitely be using MSC as my electrician for my portfolio and will highly recommend.",
  },
  {
    author: "Felipe Lessa",
    date: "15 June 2026",
    source: "google",
    quote:
      "Installed my EVSE. Did a great and neat job. Knew everything that needed to be done. Second time I've used MSC Electrical, second time a happy customer.",
  },
  {
    author: "Liam Soar",
    date: "21 April 2026",
    source: "google",
    quote:
      "I rang MSC Electrical for a issue I had with my shower. They turned up on time, was professional and carried the work out for an excellent price. They also carried out additional work for no additional cost. I did originally ring an alternative emergency electrician who was over double the price! Very happy and highly recommend.",
  },
  {
    author: "Tammy Flynn",
    date: "12 March 2026",
    source: "google",
    quote:
      "Electrician who doesn't let you down! Turns up when he says he will. Matt moved some electrical sockets for us. Kept me informed of different options. Explained things clearly and in detail. Had Matt do our fuse board as well. He was very thorough with all the checks. Thank you Matt :)",
  },
  {
    author: "Lori Hemingway",
    date: "9 March 2026",
    source: "google",
    quote:
      "Matt was great to work with start to finish. Gave good advice over the phone when I initially called so I had the parts ready for his visit. He visited on the day and time we agreed and did the job quickly. Friendly too. Thanks so much!",
  },
  {
    author: "Aiden Sharp",
    date: "8 February 2026",
    source: "google",
    quote:
      "Matt has replaced all of our spot lights - they look so much brighter and cost a lot less to run. He also did an electrical safety check. All prices agreed in advance and very happy with the quote. Would highly recommend for knowledge, customer service and price.",
  },
];

export const trustATraderReviews: CustomerReview[] = [
  {
    author: "Peter Harrison",
    date: "5th November 2026",
    source: "trustatrader",
    quote:
      "Matt’s work involved installation of sockets and lights. All work done to a high standard. Matt performed the tasks quietly, without fuss and made welcome suggestions to achieve the best outcome. Would recommend. 👍",
  },
  {
    author: "Ian",
    date: "30th October 2026",
    source: "trustatrader",
    quote:
      "Excellent service from Matt. Professional, punctual, tidy, and the work was completed to a very high standard. Great communication throughout and I'd happily use him again. Highly recommended.",
  },
  {
    author: "Laura",
    date: "13th August 2026",
    source: "trustatrader",
    quote:
      "I’m delighted with the work that’s been done (three new light switches, two extractor fans replaced and a new bathroom light fitted). I spent time looking around for an electrician - and I’m so glad I found MSC Electrical. From my initial enquiry phone call to receiving my invoice - it’s been a smooth and brilliant experience. Punctual, tidy, professional and kind - they did a great job - communicating what they’d done and explaining and checking with me as needed. I’ll have some more electrical jobs coming up and there is no one else I’d call! Highly recommend!",
  },
  {
    author: "Liam Soar",
    date: "21st April 2026",
    source: "trustatrader",
    quote:
      "I rang MSC Electrical for a issue I had with my shower. They turned up on time, was professional and carried the work out for an excellent price. They also carried out additional work for no additional cost. I did originally ring an alternative emergency electrician who was over double the price! Very happy and highly recommend.",
  },
  {
    author: "Emily Widdowson",
    date: "15th April 2026",
    source: "trustatrader",
    quote:
      "Matt is a fantastic electrician who came to install an outdoor socket recently. He was efficient, professional and the quality of work was superb. Highly recommend!",
  },
  {
    author: "Philip",
    date: "19th February 2026",
    source: "trustatrader",
    quote:
      "Came and fitted 2 lights in my hallway and landing arrived spot on time and got the work finished really quickly the engineer was extremely polite and professional price was excellent and quality workmanship I can't rate them highly enough very satisfied with the service top drawer many many thanks",
  },
  {
    author: "Stuart",
    date: "4th November 2025",
    source: "trustatrader",
    quote:
      "Very satisfied with the work carried out by Matthew. Punctual, informative, polite, and cleared up at the end of the work.",
  },
  {
    author: "Amy",
    date: "22nd October 2025",
    source: "trustatrader",
    quote:
      "Matt did a brilliant job with several electrical tasks for us: moving a plug socket, fitting garden lights front and back, and installing a new kitchen socket for a dishwasher. He was professional, efficient, and tidy throughout. He gave us great advice on the best way to approach each job and was completely transparent from start to finish. Everything was done to a high standard and left spotless. We highly recommend Matt – a reliable, skilled, and honest electrician!",
  },
  {
    author: "John",
    date: "27th August 2025",
    source: "trustatrader",
    quote:
      "Matt came expecting to deal with 3 small electrical issues, all of which turned out to be somewhat complicated. He dealt with them all with great skill and patience and with no increased cost. I would recommend him highly.",
  },
  {
    author: "Keisha",
    date: "2nd June 2025",
    source: "trustatrader",
    quote:
      "Matt was friendly, knowledgeable and explained everything clearly. He did a great job and so much work in such a short amount of time and he kept the place extremely tidy!! Would 1000% refer to him for future services and would recommend him to everyone.",
  },
  {
    author: "Hayden",
    date: "1st May 2025",
    source: "trustatrader",
    quote:
      "Amazing! Friendly and professional service from start to finish. New spot lights installed throughout the kitchen. No mess, no fuss. Couldn't recommend enough. Thank you MSC!",
  },
  {
    author: "Charlotte",
    date: "30th April 2025",
    source: "trustatrader",
    quote:
      "Great price. Very tidy and professional . Very happy with the work would highly recommend.",
  },
];

/** Homepage carousel & footer reviews (TrustATrader). */
export const reviews = trustATraderReviews;
