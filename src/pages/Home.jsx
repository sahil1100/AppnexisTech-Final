import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import WhyYearly from "../components/WhyYearly";
import Comparison from "../components/Comparison";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyYearly />
      <Pricing />
      <TechStack />
      <Comparison />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
