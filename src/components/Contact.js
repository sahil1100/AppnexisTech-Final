"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'App Development',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-5 bg-[#020617] font-inter text-white overflow-hidden relative" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Contact Info & Value Prop */}
          <div className="space-y-10 lg:pt-10">
            <div>
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.2em] mb-6 block">Get in Touch</span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight mb-8 leading-[1.1]">
                Ready to Launch Your <span className="text-cyan-500">Digital Future?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-[500px] leading-relaxed font-medium">
                Whether you have a fully scoped project or just a rough idea, let's talk about how to make it real.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { label: "WhatsApp", value: "+91 99999 99999", icon: "💬" },
                { label: "Email", value: "contact@appnexis.com", icon: "📧" },
                { label: "Location", value: "Surat, Gujarat, India", icon: "📍" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-3xl group hover:border-cyan-500/20 transition-all duration-300">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-bold text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                        {[1,2,3,4].map(n => <div key={n} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800 flex items-center justify-center text-xs">👤</div>)}
                    </div>
                    <p className="text-sm text-slate-500 font-medium">Joined by 50+ successful startups</p>
                </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-[48px] p-8 md:p-12 lg:p-16 backdrop-blur-xl relative shadow-2xl">
             {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] to-transparent pointer-events-none rounded-[48px]"></div>
            
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+91 00000 00000"
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Project Type</label>
                  <select 
                    name="projectType"
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-[#0f172a] transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-[#0f172a]">App Development</option>
                    <option className="bg-[#0f172a]">Web Platform</option>
                    <option className="bg-[#0f172a]">UI/UX Design</option>
                    <option className="bg-[#0f172a]">Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Tell us about your project</label>
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Share your vision..."
                  onChange={handleChange}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl text-lg shadow-xl shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]">
                Submit Inquiry
              </button>
              
              <p className="text-center text-xs text-slate-500 font-medium">
                We'll get back to you within 24 hours. Guaranteed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
