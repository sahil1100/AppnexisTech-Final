"use client";
import { useState } from "react";

const pricingData = {
  oneTime: [
    {
      title: "Mobile App",
      price: "\u20B912,999",
      period: "",
      desc: "One-time custom mobile solution.",
      features: [
        "Custom Design",
        "Full Development",
        "App Store Submission",
        "3 Months Support",
      ],
    },
    {
      title: "Web Development",
      price: "\u20B98,999",
      period: "",
      desc: "Professional web application.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "CMS Integration",
        "Performance Tuning",
      ],
    },
    {
      title: "UI/UX Design",
      price: "\u20B94,999",
      period: "",
      desc: "Intuitive user interfaces.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
  ],
  yearly: [
    {
      title: "Basic",
      price: "\u20B915,999",
      period: "/ year",
      desc: "Essential premium features",
      features: [
        "Launch your online store in 5 minutes",
        "Android & iOS Consumer App",
        "Android & iOS Admin Mobile App",
        "Android & iOS Delivery App",
        "Admin Portal for managing products & orders",
        "Secure payment gateway integration",
        "Delivery staff assignment & tracking",
        "Multi-store & branch management",
        "Advanced analytics & sales reports",
        "Discounts, coupons & promotions",
      ],
    },
    {
      title: "Pro Max",
      price: "\u20B934,999",
      period: "/ year",
      desc: "Complete premium solution",
      features: [
        "Everything in Pro, plus:",
        "Instagram Reels integration",
        "AI Integration & Automation",
        "24/7 Phone Support",
        "Custom Branding Solutions",
      ],
    },
    {
      title: "Pro",
      price: "\u20B919,999",
      period: "/ year",
      desc: "Advanced business tools",
      features: [
        "Annual Plan",
        "Everything in Basic, plus:",
        "Custom forms builder",
        "Video support in gallery",
        "Service booking system",
        "Ready-to-use product images",
        "Live delivery boy tracking for admin",
        "Order tracking for customers",
      ],
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section
      className="py-24 px-5 bg-slate-50 dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500"
      id="pricing"
    >
      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8">
            Explore <span className="text-cyan-500">Pricing</span> Options
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-[900px] mx-auto leading-relaxed transition-colors duration-500">
            Our pricing is built for partnership and scalability. Choose from transparent, flexible plans designed to deliver maximum value and drive your strategic objectives forward, whether you&apos;re a scaling startup or an established market leader.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300 dark:border-white/10 p-1.5 rounded-full flex gap-1 transition-colors duration-500">
            {[
              { key: "oneTime", label: "One Time" },
              { key: "yearly", label: "Yearly" },
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setBilling(option.key)}
                className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  billing === option.key
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-300"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pricingData[billing].map((plan) => (
            <div
              key={plan.title}
              className="group bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] rounded-[32px] p-8 transition-all duration-400 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.04] hover:border-cyan-500/40 dark:hover:border-indigo-500/30 hover:shadow-[0_20px_40px_-20px_rgba(14,165,233,0.18)] dark:hover:shadow-none flex flex-col h-full"
            >
              <div className="mb-8 p-6 bg-slate-50 dark:bg-white/[0.02] rounded-2xl border border-slate-200 dark:border-white/[0.05] transition-colors duration-500">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {plan.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-colors duration-500">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-5 mb-10 flex-grow px-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30 group-hover/item:bg-cyan-500 group-hover/item:border-cyan-500 transition-all">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-cyan-500 dark:text-cyan-400 group-hover/item:text-white"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400 leading-snug font-medium group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-cyan-500 text-white border border-cyan-500 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-cyan-600 hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                Contact us
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-40 dark:opacity-20 transition-opacity duration-500">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/10 dark:bg-indigo-600/10 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
}
