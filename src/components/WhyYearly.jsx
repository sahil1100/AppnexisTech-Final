

import VerifiedIcon from "@mui/icons-material/Verified";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import LayersIcon from "@mui/icons-material/Layers";

export default function WhyChooseUs() {
  const cards = [
    { icon: <VerifiedIcon />, color: "text-amber-500", title: "Yearly Subscription", desc: "Our model includes development, hosting, server, domain, and app store publishing — everywhere in one plan." },
    { icon: <CloudQueueIcon />, color: "text-blue-500", title: "Managed Infrastructure", desc: "Your app runs on our managed cloud. We handle uptime, updates, backups, and security 24/7 automatically." },
    { icon: <AppShortcutIcon />, color: "text-cyan-500", title: "App Store Publishing", desc: "No developer account needed. We publish your app on both stores under the AppNexis umbrella." },
    { icon: <LayersIcon />, color: "text-purple-500", title: "Fixed Module Packages", desc: "Know exactly what you get. Subscription plans include defined modules with zero scope creep or disputes." }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500" id="why-us">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-500 opacity-0 dark:opacity-100">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 mb-16 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full w-fit mb-6">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
          <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Our Competitive Edge</span>
        </div>
        
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
          Why Visionary Leaders <br className="hidden md:block" />
          Choose <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">AppNexis</span>
        </h2>
        
        <p className="text-base text-slate-500 dark:text-slate-400 max-w-[700px] leading-relaxed font-medium">
          We combine enterprise-grade development with high-performance infrastructure to provide the only development partner you'll ever need.
        </p>
      </div>

      {/* Constrained Marquee Container */}
      <div className="max-w-[1240px] mx-auto overflow-hidden relative py-10 z-10">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% - 24px)); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />

        {/* Mask gradients for the edges within the 1200px container */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-20 pointer-events-none"></div>

        <div className="flex animate-marquee gap-6">
          {/* Group 1 */}
          <div className="flex shrink-0 gap-6">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[285px] lg:w-[282px] bg-white dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/10 rounded-[32px] p-8 flex flex-col gap-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center ${card.color} group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm`}>
                        {card.icon}
                    </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[17px] md:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Group 2 (Duplicate for infinite effect) */}
          <div className="flex shrink-0 gap-6">
            {cards.map((card, i) => (
              <div 
                key={`dup-${i}`} 
                className="w-[280px] md:w-[285px] lg:w-[282px] bg-white dark:bg-white/[0.02] border-2 border-slate-200 dark:border-white/10 rounded-[32px] p-8 flex flex-col gap-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 group active:scale-[0.98]"
              >
                <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center ${card.color} group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 shadow-sm`}>
                        {card.icon}
                    </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-[17px] md:text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
