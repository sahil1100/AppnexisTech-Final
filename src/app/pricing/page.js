import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function PricingPage() {
  return (
    <main className="bg-white dark:bg-[#020617] min-h-screen transition-colors duration-500">
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Contact />
      {/* Add Footer here if you have one */}
    </main>
  );
}
