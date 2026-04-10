"use client";
import { useState } from 'react';

const pricingData = {
  hourly: [
    {
      title: "Intro",
      price: "$12",
      period: "/ hour",
      desc: "For startups testing ideas and building MVPs quickly",
      features: [
        "Junior Flutter Developer",
        "2+ years experience",
        "Cross-platform mobile development",
        "Quality-focused delivery",
        "Dart proficiency, widget architecture, state management foundations"
      ]
    },
    {
      title: "Base",
      price: "$24",
      period: "/ hour",
      desc: "For growing businesses needing consistent development support",
      features: [
        "Mid-Level Flutter Developer",
        "3+ years experience",
        "Independent application development",
        "Flutter framework, Firebase integration, RESTful services",
        "End-to-end feature delivery"
      ]
    },
    {
      title: "Pro",
      price: "$39",
      period: "/ hour",
      desc: "For scaling companies requiring senior-level expertise",
      features: [
        "Senior Flutter Developer",
        "5+ years experience",
        "Enterprise mobile architecture",
        "Advanced state management & platform channels",
        "Technical leadership & mentorship"
      ]
    },
    {
      title: "Enterprices",
      price: "$59",
      period: "/ hour",
      desc: "For established businesses needing strategic technical leadership",
      features: [
        "Lead Flutter Architect",
        "9+ years mobile development experience",
        "Scalable system architecture",
        "Cross-platform expertise (iOS/Android/Web)",
        "Strategic technical direction"
      ]
    }
  ],
  monthly: [], // Can be filled later
  yearly: []   // Can be filled later
};

export default function Pricing() {
  const [billing, setBilling] = useState('hourly');

  return (
    <section className="py-24 px-5 bg-[#020617] font-inter text-white overflow-hidden relative" id="pricing">
      <div className="max-w-[1500px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8">
            Explore <span className="text-cyan-500">Pricing</span> Options
          </h2>
          <p className="text-sm md:text-base text-slate-400 max-w-[900px] mx-auto leading-relaxed">
            Our pricing is built for partnership and scalability. Choose from transparent, flexible plans designed to deliver maximum value and drive your strategic objectives forward, whether you're a scaling startup or an established market leader.
          </p>
        </div>

        {/* Binary/Tertiary Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/[0.05] border border-white/10 p-1.5 rounded-full flex gap-1">
            {['hourly', 'monthly', 'yearly'].map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className={`px-8 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                  billing === option 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {(pricingData[billing]?.length > 0 ? pricingData[billing] : pricingData.hourly).map((plan, i) => (
            <div key={i} className="group bg-white/[0.02] border border-white/[0.05] rounded-[32px] p-8 transition-all duration-400 hover:bg-white/[0.04] hover:border-indigo-500/30 flex flex-col h-full">
              
              {/* Price Header */}
              <div className="mb-8 p-6 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-cyan-400 transition-colors uppercase">{plan.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{plan.desc}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-5 mb-10 flex-grow px-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-cyan-500/30 group-hover/item:bg-cyan-500 group-hover/item:border-cyan-500 transition-all">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 group-hover/item:text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-sm text-slate-400 leading-snug font-medium group-hover/item:text-slate-200 transition-colors">
                        {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className="w-full py-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl text-cyan-400 font-bold text-sm tracking-widest uppercase hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                Contact us
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
}
