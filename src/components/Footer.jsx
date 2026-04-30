import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BrandLogo from "./BrandLogo";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-[#020617] text-slate-500 dark:text-slate-400 py-12 px-5 border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Brand & Social */}
                    <div className="max-w-xs transition-all">
                        <div className="mb-6 scale-110 origin-left">
                            <BrandLogo size="footer" />
                        </div>
                        <p className="text-[13px] leading-relaxed font-medium mb-6 text-slate-500 dark:text-slate-400">
                            Enterprise-grade development for visionary brands. Build, host, and launch with total technical peace of mind.
                        </p>
                        <div className="flex items-center gap-4">
                            <a 
                                href="https://www.linkedin.com/company/appnexix/?viewAsMember=true" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-white/[0.03] flex items-center justify-center hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-100 dark:border-white/5"
                            >
                                <LinkedInIcon sx={{ fontSize: 20 }} />
                            </a>
                            <a 
                                href="https://www.instagram.com/techappnexis?igsh=MWJibDRyaDF4cGttYw%3D%3D&utm_source=qr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-white/[0.03] flex items-center justify-center hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-100 dark:border-white/5"
                            >
                                <InstagramIcon sx={{ fontSize: 20 }} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="grid grid-cols-2 gap-12 lg:gap-24">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[.25em] text-slate-900 dark:text-white mb-6">Explore</h4>
                            <ul className="space-y-3.5 text-[13px] font-bold">
                                <li><Link to="/" className="hover:text-cyan-500 transition-colors">Home</Link></li>
                                <li><Link to="/#services" className="hover:text-cyan-500 transition-colors">Services</Link></li>
                                <li><Link to="/#pricing" className="hover:text-cyan-500 transition-colors">Pricing</Link></li>
                                <li><Link to="/#about" className="hover:text-cyan-500 transition-colors">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[.25em] text-slate-900 dark:text-white mb-6">Contact</h4>
                            <ul className="space-y-3.5 text-[13px] font-bold">
                                <li><a href="mailto:techappnexis@gmail.com" className="hover:text-cyan-500 transition-colors">Email Support</a></li>
                                <li><a href="tel:+917842721811" className="hover:text-cyan-500 transition-colors">+91 78427 21811</a></li>
                                <li><a href="tel:+919106633917" className="hover:text-cyan-500 transition-colors">+91 91066 33917</a></li>
                                <li className="text-slate-400 dark:text-slate-500 font-medium">Ahmedabad, India</li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0 pt-2">
                        <a href="/#contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black uppercase tracking-widest hover:translate-y-[-2px] transition-all shadow-xl shadow-black/10 dark:shadow-none">
                            Get Started <ArrowForwardIcon sx={{ fontSize: 16 }} />
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        &copy; {new Date().getFullYear()} AppNexis - All Rights Reserved
                    </p>
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Link to="#" className="hover:text-cyan-500">Privacy</Link>
                        <Link to="#" className="hover:text-cyan-500">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
