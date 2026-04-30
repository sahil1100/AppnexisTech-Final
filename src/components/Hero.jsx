import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 px-5 text-center bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden font-inter">
        
        {/* Background Grids & Glows */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12] dark:opacity-[0.35] transition-opacity" 
             style={{ backgroundImage: 'linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)', backgroundSize: '70px 70px' }}>
        </div>
        
        <div className="absolute inset-0 pointer-events-none" 
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.04) 0%, transparent 60%)' }}>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center">
          
          {/* Problem Hook */}
          <div className="flex items-center gap-2 mb-5" style={{ animation: 'fadeInDown 0.8s ease-out' }}>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase flex items-center gap-2">
              <span className="animate-pulse text-base">🚧</span> Most businesses get stuck before launch…
            </span>
          </div>

          {/* New Strategic Headline */}
          <h1 className="text-[clamp(1.5rem,3.2vw,2.8rem)] font-black leading-[1.05] max-w-[900px] mx-auto mb-5 tracking-tighter text-slate-900 dark:text-white relative z-10"
              style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' }}>
            Launch Your App Without <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-600 via-emerald-500 to-cyan-600 dark:from-cyan-400 dark:via-emerald-400 dark:to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent" style={{ animation: 'shine 5s linear infinite' }}>Servers, Hosting</span> or Tech Stress.
          </h1>

          {/* Subheading & Strategic Positioning */}
          <div className="space-y-4 mb-8" style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}>
            <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-slate-500 dark:text-slate-400 max-w-[750px] leading-normal font-bold">
                We build, host, and launch your app or website — all under a simple yearly plan. No technical setup required.
            </p>
            <p className="text-cyan-600 dark:text-cyan-400 italic text-[15px] font-medium tracking-tight">
                “You focus on your business. We handle everything technical.”
            </p>
          </div>

          {/* Trust Elements / Checkboxes */}
          <div className="flex flex-wrap justify-center gap-3 mb-9" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}>
            {[
                "No server needed",
                "No developer account required",
                "Yearly simple pricing"
            ].map((trust, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full">
                    <svg className="text-emerald-500 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-[0.15em]">{trust}</span>
                </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 relative z-10"
               style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}>
            <a href="#contact" className="group flex items-center gap-2.5 bg-cyan-600 hover:bg-cyan-500 text-white py-3.5 px-7 rounded-2xl font-bold text-[15px] shadow-2xl shadow-cyan-600/20 transition-all duration-400 hover:-translate-y-1 active:scale-95">
              Start Your Project <ArrowForwardIcon sx={{ fontSize: 20 }} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/917842721811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 py-3.5 px-7 rounded-2xl font-bold text-[15px] border border-emerald-500/20 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Social Proof / Trust Stats */}
          <div className="w-full max-w-[1100px] grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-8 px-8 bg-white dark:bg-white/2 border border-slate-200 dark:border-white/5 rounded-[32px] shadow-lg shadow-black/[0.02] dark:shadow-none backdrop-blur-2xl relative z-10"
               style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both' }}>
            {[
              { value: "50+", label: "Apps & Sites Launched" },
              { value: "100%", label: "Managed Hosting" },
              { value: "Secure", label: "Scalable Systems" },
              { value: "Direct", label: "24/7 Support" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-xl md:text-2xl font-black text-cyan-600 dark:text-white drop-shadow-sm">{stat.value}</span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
    </>
  );
}
