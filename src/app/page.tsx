import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Reviews } from "@/components/reviews";
import { ServiceCards } from "@/components/service-cards";
import { WhyChoose } from "@/components/why-choose";
import { SiteNav } from "@/components/site-nav";
import { TrustStrip } from "@/components/trust-strip";
import { WhoWeAre } from "@/components/who-we-are";

export default function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <Reviews />
      <ServiceCards />
      <WhyChoose />
      <Footer />
    </main>
  );
}
