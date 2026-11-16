import { createLocationServicePage } from "@/lib/location-service-page";

const { Page, generateMetadata, generateStaticParams } =
  createLocationServicePage("domestic-electrical-services-in");

export { generateMetadata, generateStaticParams };
export default Page;