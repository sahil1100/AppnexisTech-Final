"use client";
import About from "../../components/About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <div className="pt-20"> {/* Spacer for navbar */}
        <About />
      </div>
      <Footer />
    </main>
  );
}
