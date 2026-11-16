import { createLocationServicePage } from "@/lib/location-service-page";

const { Page, generateMetadata, generateStaticParams } =
  createLocationServicePage("electrical-maintenance-in");

export { generateMetadata, generateStaticParams };
export default Page;