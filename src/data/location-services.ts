export const locationServiceSegments = [
  "domestic-electrical-services-in",
  "electrical-testing-and-inspecting-in",
  "electrical-maintenance-in",
] as const;

export type LocationServiceSegment = (typeof locationServiceSegments)[number];

export type LocationServiceConfig = {
  segment: LocationServiceSegment;
  heading: string;
  description: (place: string) => string;
  heroImage: string;
  heroImageAlt: string;
  servicePath: string;
  serviceType: string;
};

export const locationServices: Record<LocationServiceSegment, LocationServiceConfig> = {
  "domestic-electrical-services-in": {
    segment: "domestic-electrical-services-in",
    heading: "Domestic Electrical Services in",
    description: (place) =>
      `MSC Electrical provides domestic electrical services in ${place} and across Nottinghamshire. From rewires and consumer units to lighting, sockets and EV charge points, our NAPIT-approved electricians deliver safe, tidy work with free quotations.`,
    heroImage: "/images/domestic-hero.png",
    heroImageAlt: "Domestic electrical work by MSC Electrical",
    servicePath: "/domestic",
    serviceType: "Domestic electrician",
  },
  "electrical-testing-and-inspecting-in": {
    segment: "electrical-testing-and-inspecting-in",
    heading: "Electrical Testing & Inspecting in",
    description: (place) =>
      `Need electrical testing or EICR certification in ${place}? MSC Electrical carries out thorough inspections and compliance testing for homes and businesses, using professional test equipment and clear reporting.`,
    heroImage: "/images/testing-hero.png",
    heroImageAlt: "Electrical testing by MSC Electrical",
    servicePath: "/testing-and-inspecting",
    serviceType: "Electrical inspection and testing",
  },
  "electrical-maintenance-in": {
    segment: "electrical-maintenance-in",
    heading: "Electrical Maintenance in",
    description: (place) =>
      `Keep your electrics safe in ${place} with planned maintenance from MSC Electrical. We offer routine checks, fault finding and preventive maintenance for residential and commercial properties.`,
    heroImage: "/images/maintenance-hero.png",
    heroImageAlt: "Electrical maintenance by MSC Electrical",
    servicePath: "/electrical-maintenance",
    serviceType: "Electrical maintenance",
  },
};

export function getLocationServiceBySegment(segment: string): LocationServiceConfig | undefined {
  if (segment in locationServices) {
    return locationServices[segment as LocationServiceSegment];
  }
  return undefined;
}