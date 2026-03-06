import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CambridgeSpec from "./components/CambrdigeSpecs";
import { StatsSection } from "./components/StatsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <Features />
      <HowItWorks />
      <CambridgeSpec />
    </>
  );
};

export default Home;
