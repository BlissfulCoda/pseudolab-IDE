import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import { StatsSection } from "./components/StatsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <Features />
      <HowItWorks />
    </>
  );
};

export default Home;
