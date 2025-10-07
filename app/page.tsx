
import Header from "../app/components/User/Header";
import Footer from "../app/components/User/Footer";
import HeroSection from "../app/components/User/HeroSection"
import HeroBanner from "../app/components/User/HeroBanner"
import AboutSection from "./components/User/AboutSection";
import PricingCard from "./components/User/BillingAndDetails";
import ConstructionSection from "./components/User/Servicesdetail";
import ServicesGrid from "./components/User/ServicesGrid";
import ProjectsSection from "./components/User/ProjectsSection";
import QuoteSection from "./components/User/QuoteSection";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HeroBanner/>
      <AboutSection/>
      <PricingCard/>
      <ConstructionSection/>
      <ServicesGrid/>
      <ProjectsSection/>
      <QuoteSection/>
      <Footer/>
    </div>
  );
}
