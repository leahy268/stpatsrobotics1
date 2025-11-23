import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import useReveal from "./hooks/useReveal";
import HeroSection from "./sections/HeroSection";
import TeamSection from "./sections/TeamSection";
import InnovationSection from "./sections/InnovationSection";
import MiningSection from "./sections/MiningSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  useReveal();

  return (
    <div className="bg-stp-cream text-stp-dark">
      <Navbar />
      <main className="space-y-0">
        <HeroSection />
        <TeamSection />
        <InnovationSection />
        <MiningSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
