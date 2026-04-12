"use client";

import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function Comparison() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const comparisonItems = [
        { feature: "Server & Hosting", traditional: "Self-Managed (Complex)", appnexis: "Fully Managed (Zero Stress)" },
        { feature: "Store Submission", traditional: "Manual Setup & Approval", appnexis: "100% Handled for You" },
        { feature: "Maintenance", traditional: "Pay per fix or hourly", appnexis: "Continuous & Included" },
        { feature: "Security Patches", traditional: "Inconsistent updates", appnexis: "Proactive & Enterprise-grade" },
        { feature: "Success Support", traditional: "Tickets & Long Waits", appnexis: "Priority Direct Line" }
    ];

    return (
        <section className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" id="comparison">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <motion.div {...fadeIn} className="text-center mb-20">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                        <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">The Peace of Mind Comparison</span>
                    </div>
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
                        The End of <span className="text-slate-400 font-light italic">Technical Stress.</span><br />
                        The Start of <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Digital Freedom.</span>
                    </h2>
                </motion.div>

                {/* Main Comparison Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* Traditional Development Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-[48px] p-8 md:p-12 transition-all group"
                    >
                        <div className="mb-10">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-4">
                                Traditional Way <CancelIcon className="text-red-500/40" />
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                The standard model built on complexity, hidden fees, and constant manual oversight.
                            </p>
                        </div>

                        <div className="space-y-6 mb-12">
                            {comparisonItems.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between py-4 border-b border-slate-200/50 dark:border-white/5">
                                    <span className="text-[13px] font-bold text-slate-400 dark:text-slate-500">{item.feature}</span>
                                    <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-400 italic">
                                        {item.traditional}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="p-7 bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 rounded-[32px] transition-all">
                             <div className="flex items-center gap-2 mb-3">
                                <TrendingDownIcon sx={{ fontSize: 18, color: '#ef4444' }} />
                                <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400">Total 1st Year Cost</span>
                             </div>
                             <p className="text-2xl font-black text-red-600 dark:text-red-100 tracking-tight">₹2,50,000 – ₹4,00,000+</p>
                        </div>
                    </motion.div>

                    {/* AppNexis Managed Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 dark:bg-white/[0.04] border border-slate-800 dark:border-white/10 rounded-[48px] p-8 md:p-12 transition-all relative overflow-hidden shadow-2xl shadow-cyan-500/10 group animate-pulse-subtle"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative z-10">
                            {/* Popular Badge */}
                            <div className="absolute top-0 right-0 px-4 py-1.5 bg-cyan-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-cyan-500/20">
                                Recommended Plan
                            </div>

                            <div className="mb-10">
                                <h3 className="text-2xl font-black text-white flex items-center gap-3 mb-4">
                                    AppNexis Way <CheckCircleIcon className="text-cyan-500" />
                                </h3>
                                <p className="text-sm text-slate-400 dark:text-slate-400 font-medium leading-relaxed">
                                    A revolutionary managed service where we handle 100% of the technical burden.
                                </p>
                            </div>

                            <div className="space-y-6 mb-12">
                                {comparisonItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5">
                                        <span className="text-[13px] font-bold text-slate-500 dark:text-slate-500">{item.feature}</span>
                                        <span className="text-[13px] font-black text-white dark:text-cyan-400 flex items-center gap-2">
                                            <VerifiedUserIcon sx={{ fontSize: 14 }} className="text-cyan-500" />
                                            {item.appnexis}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-7 bg-cyan-500 text-white rounded-[32px] shadow-xl shadow-cyan-500/30 group-hover:bg-cyan-600 transition-all">
                                <div className="flex items-center gap-2 mb-3">
                                    <SpeedIcon sx={{ fontSize: 18 }} />
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Simple Yearly Plan</span>
                                </div>
                                <div className="flex items-baseline gap-1.5">
                                    <p className="text-2xl font-black tracking-tight">₹15,000 – ₹50,000</p>
                                    <p className="text-[10px] font-black uppercase opacity-60">/ yr</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Final Comparison Summary */}
                <motion.div 
                    {...fadeIn}
                    className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-slate-100 dark:border-white/10">
                            <AutoAwesomeIcon />
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">No Hidden Fees</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">Fixed Yearly Model</p>
                        </div>
                    </div>
                    <div className="h-px md:h-12 w-24 md:w-px bg-slate-200 dark:bg-white/10"></div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-slate-100 dark:border-white/10">
                            <SpeedIcon />
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Faster Launch</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">Optimized Deployment</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
