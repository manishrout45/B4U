import AboutSection from "../components/AboutSection";

import HeroSection from "../components/HeroSection";
import ContactUsSection from "../components/ContactUsSection";
import OurWorkSection from "../components/OurWorkSection";
import CraftingStyle from "../components/CraftingStyle";
import HairSalonSection from "../components/Hairsalonsection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
const Home = () => {

  return (
    <>
      <HeroSection className="fade-up" />
      <AboutSection className="fade-right" />
      <ServicesSection />
      <HairSalonSection />
      <CraftingStyle />
      <OurWorkSection />
      
      <WhyChooseUs />
      <ContactUsSection className="fade-right" />
      

    </>
  );
};

export default Home;
