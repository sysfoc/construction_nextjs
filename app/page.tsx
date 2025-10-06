
import Header from "../app/components/User/Header";
import Footer from "../app/components/User/Footer";
import HeroSection from "../app/components/User/HeroSection"
import HeroBanner from "../app/components/User/HeroBanner"
import AboutSection from "./components/User/AboutSection";
import PricingCard from "./components/User/BillingAndDetails";
import ConstructionSection from "./components/User/Servicesdetail";
export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <HeroBanner/>
      <AboutSection/>
      <PricingCard/>
      <ConstructionSection/>
      <Footer/>
    </div>
  );
}
