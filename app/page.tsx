import HeroSection from "../app/components/User/HeroSection";
import HeroBanner from "../app/components/User/HeroBanner";
import AboutSection from "./components/User/AboutSection";
import PricingCard from "./components/User/BillingAndDetails";
import ConstructionSection from "./components/User/Servicesdetail";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <HeroBanner />
      <AboutSection />
      <PricingCard />
      <ConstructionSection />
    </div>
  );
}
