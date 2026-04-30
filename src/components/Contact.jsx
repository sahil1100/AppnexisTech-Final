
import { useState } from "react";

const contactItems = [
  { 
    label: "Phone & WhatsApp", 
    value: "+91 78427 21811, +91 91066 33917", 
    badge: "WA",
    isLink: true 
  },
  { 
    label: "Email", 
    value: "techappnexis@gmail.com", 
    badge: "@",
    link: "mailto:techappnexis@gmail.com" 
  },
  { label: "Location", value: "Ahmedabad, India", badge: "IN" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "App Development",
    message: "",
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "615feb36-f83b-4b7c-a772-9d50813e6366", // Replace this with Web3Forms Access Key
          subject: `New Lead: ${formData.projectType} from ${formData.name}`,
          from_name: "AppNexis Portal",
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", projectType: "App Development", message: "" });
        setTimeout(() => setStatus(""), 5000); // Clear success message after 5 seconds
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      className="py-16 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 dark:opacity-20 transition-opacity duration-500">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full w-fit mb-5">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">Get in Touch</span>
              </div>
              
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.04em] mb-5 leading-[1.05]">
                Ready to Launch Your <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Digital Future?</span>
              </h2>
              
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-[440px] leading-normal font-medium transition-colors">
                Whether you have a fully scoped project or just a rough idea, we handle the tech so you can focus on the business. Let's make it real.
              </p>
            </div>

            <div className="space-y-3.5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-2xl group hover:bg-white dark:hover:bg-white/[0.04] hover:border-cyan-500/30 hover:shadow-sm dark:shadow-none transition-all duration-300"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-100/50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black tracking-wide text-sm transition-colors">
                    {item.badge}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.isLink ? (
                      <div className="flex flex-wrap gap-x-2 text-[15px] font-bold text-slate-900 dark:text-slate-200 transition-colors tracking-tight">
                        <a href="tel:+917842721811" className="hover:text-cyan-500 transition-colors">+91 78427 21811</a>
                        <span className="text-slate-300 dark:text-slate-700">,</span>
                        <a href="tel:+919106633917" className="hover:text-cyan-500 transition-colors">+91 91066 33917</a>
                      </div>
                    ) : item.link ? (
                      <a href={item.link} className="text-[15px] font-bold text-slate-900 dark:text-slate-200 hover:text-cyan-500 transition-colors tracking-tight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-bold text-slate-900 dark:text-slate-200 transition-colors tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-slate-50/50 dark:bg-[#080d1e]/80 border border-slate-200 dark:border-white/[0.05] rounded-[36px] p-7 md:p-10 relative shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-white/5 to-transparent pointer-events-none rounded-[36px]"></div>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="John Doe"
                    required
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0f172a]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-medium text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="john@example.com"
                    required
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0f172a]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-medium text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="+91 00000 00000"
                    required
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0f172a]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-medium text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#0f172a]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-medium text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all appearance-none cursor-pointer"
                  >
                    <option className="bg-white text-slate-900 dark:bg-[#0f172a] dark:text-slate-200 text-xs">App Development</option>
                    <option className="bg-white text-slate-900 dark:bg-[#0f172a] dark:text-slate-200 text-xs">Web Platform</option>
                    <option className="bg-white text-slate-900 dark:bg-[#0f172a] dark:text-slate-200 text-xs">Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  placeholder="Share your vision..."
                  required
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#0f172a]/50 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm font-medium text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <button 
                disabled={status === "loading"}
                className="w-full py-3.5 mt-2 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl text-[15px] shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] group-hover:shadow-cyan-500/30"
              >
                {status === "loading" ? "Sending..." : "Submit Inquiry"}
              </button>

              <div className="pt-1 flex items-center justify-center gap-2">
                 {status === "success" ? (
                    <p className="text-xs text-emerald-500 font-bold tracking-wide transition-all">
                      🎉 Inquiry sent successfully! We will contact you soon.
                    </p>
                 ) : status === "error" ? (
                    <p className="text-xs text-red-500 font-bold tracking-wide transition-all">
                      ❌ Failed to send inquiry. Please email us directly.
                    </p>
                 ) : (
                    <>
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                      <p className="text-[10px] text-slate-500 font-medium tracking-wide">
                        We reply within 24 hours. Guaranteed.
                      </p>
                    </>
                 )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
