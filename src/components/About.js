const differentiators = [
  "No servers. No setup.",
  "No developer accounts needed",
  "Zero technical knowledge required",
  "Build + Host + Launch — all included",
  "Simple yearly pricing. No surprises",
];

export default function About() {
  return (
    <section className="py-24 px-5 bg-[#020617] font-inter text-white overflow-hidden relative" id="about">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Content */}
          <div className="space-y-10">
            <div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6 block">Our Story</span>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight mb-8 leading-[1.1]">
                Launch Your App Without <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">Servers, Hosting</span> or Tech Stress
              </h2>
              
              <div className="space-y-8 text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
                <p>
                  Most businesses have great ideas but get stuck before <span className="text-slate-100 font-semibold underline decoration-cyan-500 decoration-2">launch</span> — not because of lack of vision, but because of technical barriers like <span className="text-slate-100 font-semibold italic">servers, hosting</span>, and deployment.
                </p>
                <p>
                  That’s exactly what we solve.
                </p>
                <p className="text-cyan-400 font-bold border-l-4 border-cyan-500 pl-6 py-2">
                  "You shouldn’t need technical knowledge to launch your own app."
                </p>
              </div>
            </div>

            {/* Founder Touch Section */}
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500">
               <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/20 shrink-0">
                    👤
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-200 mb-1 tracking-tight">Built by a developer who understands real business problems</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic">
                      "I started this because I saw many people struggle not with building apps — but with launching them. This platform is designed to remove that barrier completely."
                    </p>
                  </div>
               </div>
            </div>

            <div className="mt-12 flex flex-col gap-8">
              <h4 className="text-xl font-bold flex items-center gap-3">
                🚀 Ready to launch your app without technical hassle?
              </h4>
              <button 
                onClick={() => window.location.href = '#contact'}
                className="w-fit bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 text-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Right: Difference Cards */}
          <div className="sticky top-32">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-8 md:p-12 relative overflow-hidden backdrop-blur-xl">
               {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-transparent pointer-events-none rounded-[40px]"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-10 text-slate-50 tracking-tight">What Makes Us Different</h3>
              
              <ul className="space-y-8">
                {differentiators.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-300 group">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all shadow-[0_0_15px_rgba(16,185,129,0)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 group-hover:text-white transition-colors"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-lg font-bold group-hover:text-slate-100 transition-colors tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-3xl relative group hover:bg-cyan-500/10 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path></svg>
                </div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.3em] mb-3">Our Vision</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  AppNexis aims to be the standard platform where any business—technical or not—can easily launch, manage, and scale their digital future.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
