
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const pricingData = {
  oneTime: [
    {
      title: "Mobile App",
      price: "\u20B915,999",
      period: "Starting from",
      desc: "One-time custom mobile solution.",
      features: [
        "Custom Design & Prototyping",
        "Full Hybrid Development",
        "App Store Submission",
        "3 Months Maintenance",
        "API Integration"
      ],
      popular: false
    },
    {
      title: "Web Development",
      price: "\u20B98,999",
      period: "Starting from",
      desc: "Professional web application.",
      features: [
        "Responsive Modern Design",
        "SEO Optimization",
        "CMS Integration",
        "Speed & Performance Tuning",
        "Admin Dashboard"
      ],
      popular: true
    },
    {
      title: "UI/UX Design",
      price: "\u20B94,999",
      period: "Starting from",
      desc: "Intuitive user interfaces.",
      features: [
        "Deep User Research",
        "Interactive Wireframing",
        "High-Fi Prototyping",
        "Visual Design System",
        "Developer Handoff"
      ],
      popular: false
    },
  ],
  yearly: [
    {
      title: "Basic",
      price: "\u20B915,999",
      period: "/ year",
      desc: "Essential digital commerce kit",
      features: [
        "Launch your store in 5 minutes",
        "Android & iOS Apps",
        "Admin Mobile App",
        "Delivery Management App",
        "Payment Gateway Setup",
        "Multi-store Management"
      ],
      popular: false
    },
    {
      title: "Pro",
      price: "\u20B919,999",
      period: "/ year",
      desc: "Advanced business automation",
      features: [
        "Everything in Basic",
        "Custom CRM Builder",
        "Service Booking System",
        "Live Delivery Tracking",
        "Customer Order Tracking",
        "Dedicated Account Lead"
      ],
      popular: true
    },
    {
      title: "Pro Max",
      price: "\u20B934,999",
      period: "/ year",
      desc: "Ultimate enterprise solution",
      features: [
        "Everything in Pro",
        "Instagram Reels integration",
        "AI Automation & Insights",
        "24/7 Priority Support",
        "Global Infrastructure",
        "Unlimited Bandwidth"
      ],
      popular: false
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16"
      id="pricing"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 font-bold text-cyan-600 dark:text-cyan-400 text-[10px] uppercase tracking-[0.2em]">
            Investment Plans
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,3.2rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
            Strategic <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Pricing</span> for Growth.
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-[700px] mx-auto leading-relaxed font-medium">
            No hidden costs. No complexity. Just a transparent investment in your digital future with dedicated support included.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 p-1 rounded-2xl flex gap-1 backdrop-blur-xl">
            {[
              { key: "oneTime", label: "One Time Project" },
              { key: "yearly", label: "Yearly Subscription" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setBilling(option.key)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 ${
                  billing === option.key
                    ? "bg-white dark:bg-cyan-500 text-slate-900 dark:text-white shadow-xl shadow-black/5 dark:shadow-cyan-500/20"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[billing].map((plan) => (
            <div
              key={plan.title}
              className={`group flex flex-col relative h-full rounded-[40px] p-8 transition-all duration-500 border ${
                plan.popular 
                  ? "bg-slate-50 dark:bg-white/[0.03] border-cyan-500 shadow-2xl shadow-cyan-500/10" 
                  : "bg-white dark:bg-[#080d1e]/50 border-slate-100 dark:border-white/5 hover:border-cyan-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 bg-cyan-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{plan.period}</p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tighter">
                   {plan.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{plan.desc}</p>
              </div>

              <div className="h-px w-full bg-slate-100 dark:bg-white/5 mb-8"></div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircleIcon sx={{ fontSize: 18, color: '#06b6d4' }} className="shrink-0 mt-0.5" />
                    <span className="text-[13px] text-slate-600 dark:text-slate-300 font-semibold leading-relaxed tracking-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={handleContactClick}
                className={`w-full py-4 rounded-2xl font-black text-[11px] tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                  plan.popular 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-black/10" 
                    : "bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Get Started <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-16 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                All yearly plans include basic maintenance & infrastructure management.
            </p>
        </div>
      </div>
    </section>
  );
}
