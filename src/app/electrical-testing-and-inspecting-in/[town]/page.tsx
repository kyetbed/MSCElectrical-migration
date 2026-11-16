import { createLocationServicePage } from "@/lib/location-service-page";

const { Page, generateMetadata, generateStaticParams } = createLocationServicePage(
  "electrical-testing-and-inspecting-in",
);

export { generateMetadata, generateStaticParams };
export default Page;