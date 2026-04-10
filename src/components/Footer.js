import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 py-16 px-5 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs">
                ▲
              </span>
              AppNexis
            </h3>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium max-w-[300px]">
              Build, Host & Launch — All in One Yearly Plan. We handle the tech so you can focus on the business.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                <LinkedInIcon fontSize="small" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                <InstagramIcon fontSize="small" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors border border-white/5 hover:border-cyan-500/30">
                <TwitterIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Managed Solutions</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div> App Development</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div> Website Development</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></div> Cloud Hosting Service</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></div> App Store Publishing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Ready to Launch?</h4>
            <ul className="space-y-4 text-sm font-medium mb-6">
              <li className="flex items-center gap-3">
                <span className="text-xl">📍</span> Surat, Gujarat, India
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📧</span> contact@appnexis.com
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-cyan-500 hover:text-slate-900 border border-white/10 hover:border-cyan-500 transition-all group">
              Start Project <ArrowForwardIcon fontSize="small" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} AppNexis. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
