const services = [
  {
    title: "Full-Stack Development",
    desc: "Robust, scalable applications built with the latest technologies like Next.js, React, and Node.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6M12 4.5l-2.5 15"/></svg>
    )
  },
  {
    title: "Managed Cloud Hosting",
    desc: "Blazing fast performance with 99.9% uptime. We handle all servers, SSL, and security patches.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c.3 0 .5 0 .8-.1A4.5 4.5 0 0 0 17.5 10c-.2 0-.4 0-.6.1A7 7 0 1 0 5 13.1c0 .3 0 .7.1 1a5.5 5.5 0 0 0 4.9 4.9H17.5z"/></svg>
    )
  },
  {
    title: "App Store Publishing",
    desc: "We manage the entire submission process for Apple App Store and Google Play Store.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
    )
  },
  {
    title: "Continuous Maintenance",
    desc: "Launch is just the beginning. We provide ongoing updates and support to keep your app fresh.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    )
  },
  {
    title: "Strategic UI/UX Design",
    desc: "Conversion-focused interfaces designed to wow your users and improve retention.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
    )
  },
  {
    title: "AI & Automation",
    desc: "Integrate intelligent workflows into your products to stay ahead of the competition.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 12V10"/><path d="M9 16h6"/></svg>
    )
  }
];

export default function Services() {
  return (
    <section className="py-24 px-5 bg-white dark:bg-[#020617] transition-colors duration-500 relative" id="services">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>

      <div className="max-w-[1500px] mx-auto text-center mb-20">
        <span className="inline-block text-sm font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.1em] mb-4">Our Expertise</span>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
          What We <span className="bg-gradient-to-br from-cyan-600 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">Do Best</span>
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-[800px] mx-auto">
          We combine cutting-edge technology with strategic design to build products that don't just work—they excel.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-w-[1500px] mx-auto">
        {services.map((service, index) => (
          <div key={index} 
               className="group relative bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] rounded-[32px] p-10 transition-all duration-400 hover:-translate-y-2 hover:bg-white dark:hover:bg-white/[0.04] hover:border-cyan-500/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col gap-6">
            
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 transition-all duration-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              {service.icon}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-50 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>

            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.03)_0%,transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
