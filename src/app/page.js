"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import WhyYearly from "../components/WhyYearly";
import Comparison from "../components/Comparison";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <WhyYearly />
      <Comparison />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
