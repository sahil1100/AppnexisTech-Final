export default function WhyChooseUs() {
  const cards = [
    {
      icon: "⚡",
      title: "All-in-One Yearly Subscription",
      desc: "Our industry-first model includes development, hosting, server, domain, and app store publishing — all in one yearly plan. No hidden bills."
    },
    {
      icon: "☁️",
      title: "Powered by AppNexis Infrastructure",
      desc: "Your app runs on our managed cloud. We handle uptime, updates, backups, and security — 24/7 without you lifting a finger."
    },
    {
      icon: "📱",
      title: "Play Store & App Store Publishing",
      desc: "No developer account needed. We publish your app on both stores under the AppNexis umbrella — saving you time and money."
    },
    {
      icon: "🧩",
      title: "Fixed Module Packages",
      desc: "Know exactly what you get. Our subscription plans include a defined set of modules — no scope creep, no surprises, no arguments."
    },
    {
      icon: "💰",
      title: "Flexible One-Time Option Too",
      desc: "Prefer a single upfront payment? We offer traditional one-time project pricing for all services — with the same quality guarantee."
    },
    {
      icon: "🎯",
      title: "Zero Technical Hassle",
      desc: "Non-technical founder? No problem. You speak business, we speak code. We translate your vision into a working digital product."
    },
    {
      icon: "🛡️",
      title: "Enterprise Grade Security",
      desc: "Advanced threat protection, SSL encryption, and regular security audits to keep your intellectual property and data safe."
    },
    {
      icon: "🚀",
      title: "Scale Without Friction",
      desc: "Our architecture is built to grow. Whether you have 10 users or 10 million, our managed infrastructure handles the load."
    }
  ];

  return (
    <section className="py-24 px-5 bg-[#020617] font-inter text-white overflow-hidden relative" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row h-auto lg:h-[850px] gap-12 lg:gap-20 relative z-10">
        
        {/* Left Side: Fixed Content */}
        <div className="lg:w-[45%] flex flex-col justify-center py-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]">Our Edge</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-[-0.04em] leading-[1.05]">
              Why Clients Choose <span className="text-cyan-500">AppNexis</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-medium">
              We don't just build — we deliver, host, maintain, and grow your product. That's our unfair advantage.
            </p>
            
            <div className="pt-8 flex items-center gap-4 group cursor-default">
                <div className="w-12 h-[2px] bg-cyan-500/50 group-hover:w-20 transition-all duration-500"></div>
                <span className="text-slate-500 font-bold text-sm tracking-widest uppercase">Scroll to explore</span>
            </div>
          </div>
        </div>

        {/* Right Side: Scrollable Cards Stack */}
        <div className="lg:w-[55%] h-full lg:overflow-y-auto lg:pr-6 custom-scrollbar space-y-8 py-10">
          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar {
              width: 0px;
            }
            .custom-scrollbar {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
          `}} />
          
          {cards.map((card, i) => (
            <div key={i} className="group relative bg-[#0f172a]/40 border border-white/[0.05] rounded-[32px] p-10 md:p-12 transition-all duration-500 hover:bg-white/[0.03] hover:border-cyan-500/30 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-[32px]"></div>
              
              <div className="flex flex-col md:flex-row gap-8 relative z-10">
                <div className="text-5xl shrink-0 transition-transform group-hover:scale-110 duration-300 drop-shadow-lg">{card.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-50 tracking-tight group-hover:text-cyan-400 transition-colors">{card.title}</h3>
                  <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Bottom indicator */}
          <div className="pt-10 text-center text-slate-600 font-bold text-xs uppercase tracking-[0.3em]">
            End of features
          </div>
        </div>
      </div>
    </section>
  );
}
