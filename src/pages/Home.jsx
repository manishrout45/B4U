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
      <section id="home">
        <HeroSection className="fade-up" />
      </section>

      <section id="about">
        <AboutSection className="fade-right" />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="hairsalon">
        <HairSalonSection />
      </section>

      <section id="craftingstyle">
        <CraftingStyle />
      </section>

      <section id="gallery">
        <OurWorkSection />
      </section>

      <section id="whychoose">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <ContactUsSection className="fade-right" />
      </section>
    </>
  );
};

export default Home;