import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
