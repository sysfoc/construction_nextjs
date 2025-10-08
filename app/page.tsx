import HeroSection from "../app/components/User/HeroSection";
import HeroBanner from "../app/components/User/HeroBanner";
import AboutSection from "./components/User/AboutSection";
import PricingCard from "./components/User/BillingAndDetails";
import ConstructionSection from "./components/User/Servicesdetail";
import ServicesGrid from "./components/User/ServicesGrid";
import ProjectsSection from "./components/User/ProjectsSection";
import QuoteSection from "./components/User/QuoteSection";
import ConstructionTestimonial from "./components/User/ConstructionTestimonial";
import AgencyFAQ from "./components/User/AgencyFAQ";
import ConstructionCTA from "./components/General/Banner";
import BlogCards from "./components/User/BlogCards";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HeroBanner/>
      <AboutSection/>
      <PricingCard/>
      <ConstructionSection/>
      <ServicesGrid/>
      <ProjectsSection/>
      <QuoteSection/>
      <ConstructionTestimonial/>
      <AgencyFAQ/>
      <ConstructionCTA/>
      <BlogCards/>
    </div>
  );
}
