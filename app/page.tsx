import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CambridgeSpec from "./components/CambrdigeSpecs";
import { StatsSection } from "./components/StatsSection";
import AITutor from "./components/AITutor";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollSection from "./components/ScrollSection";

const Home = () => {
  return (
    <>
      <ScrollSection variant="hero">
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <StatsSection />
      </ScrollSection>
      <ScrollSection>
        <Features />
      </ScrollSection>
      <ScrollSection>
        <HowItWorks />
      </ScrollSection>
      <ScrollSection>
        <CambridgeSpec />
      </ScrollSection>
      <ScrollSection>
        <AITutor />
      </ScrollSection>
      <ScrollSection>
        <CTA />
      </ScrollSection>
      <ScrollSection>
        <Footer />
      </ScrollSection>
    </>
  );
};

export default Home;
