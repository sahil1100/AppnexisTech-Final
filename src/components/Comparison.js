"use client";

import { motion } from "framer-motion";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SpeedIcon from "@mui/icons-material/Speed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function Comparison() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const costComparison = {
        traditional: [
            { label: "App & Website Development", value: "₹1,50,000 – ₹3,00,000" },
            { label: "Server Setup & Hosting", value: "₹20,000 – ₹50,000/yr" },
            { label: "Maintenance & Bug Fixes", value: "₹30,000+/yr" },
            { label: "Play / App Store Setup", value: "₹5,000 – ₹25,000" },
            { label: "Security & Backups", value: "Included in Maintenance" },
            { label: "Third-party Integrations", value: "₹10,000+" }
        ],
        managed: [
            "All Builds Included",
            "Full Cloud Hosting",
            "Lifelong Maintenance",
            "Store Publishing & Mgmt",
            "Enterprise Security",
            "Universal Integrations"
        ]
    };

    const setupHassle = {
        traditional: [
            "Manual Play Store account creation",
            "Manual Apple Developer account",
            "Complex payment & verification delays",
            "2–7 days approval wait time",
            "Frequent calls with developers",
            "Confusion about documents & setup"
        ],
        managed: [
            "We handle all account setup",
            "Play & App Store fully managed",
            "No technical knowledge needed",
            "No repeated follow-ups required",
            "Optimized, faster launch roadmap"
        ]
    };

    return (
        <section className="py-32 px-5 bg-[#020617] font-sans text-white overflow-hidden relative" id="comparison">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-red-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-[1300px] mx-auto relative z-10">
                {/* Header */}
                <motion.div {...fadeIn} className="text-center mb-16 md:mb-24">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
                        <AutoAwesomeIcon sx={{ fontSize: 16 }} /> The Peace of Mind Comparison
                    </span>
                    <h2 className="text-[clamp(2.2rem,6vw,4rem)] font-black tracking-tight mb-8 leading-[1.1]">
                        Why Selling <span className="text-slate-500 font-light italic">Development</span> is Old. <br/> Selling <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Peace of Mind</span> is Us.
                    </h2>
                    
                    <div className="flex flex-col items-center gap-4">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                            <span className="flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-base md:text-lg font-semibold tracking-wide text-emerald-100 font-mono italic">
                                “No Server. No Setup. No Headache.”
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm md:text-base font-medium max-w-[600px]">
                            No more calls every 2 days asking about accounts — <span className="text-white italic underline decoration-emerald-500/40 select-none cursor-default">we handle everything.</span>
                        </p>
                    </div>
                </motion.div>

                {/* --- CATEGORY 1: COST COMPARISON --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-20">
                    {/* Traditional Cost Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-[#1e293b]/20 border border-white/5 rounded-[40px] p-8 md:p-10 transition-all duration-500 hover:border-red-500/30"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <CurrencyRupeeIcon sx={{ fontSize: 120 }} className="text-red-500" />
                        </div>
                        
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                                Traditional Approach
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                                Freelancers / Agencies <HighlightOffIcon className="text-red-500/40" />
                            </h3>
                        </div>

                        <div className="space-y-4 mb-10">
                            {costComparison.traditional.map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-sm md:text-base py-3 border-b border-white/5">
                                    <span className="text-slate-500">{item.label}</span>
                                    <span className="text-slate-300 font-mono text-sm">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-red-500/5 border border-red-500/10 rounded-2xl p-6">
                            <p className="text-red-400/60 text-[10px] font-bold uppercase tracking-widest mb-2">Total First Year Cost:</p>
                            <p className="text-2xl md:text-3xl font-extrabold text-red-100">₹2,50,000 – ₹4,00,000+</p>
                        </div>
                    </motion.div>

                    {/* Managed Cost Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-emerald-500/[0.03] border border-emerald-500/30 rounded-[40px] p-8 md:p-10 transition-all duration-500 hover:border-emerald-500/60 shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <TaskAltIcon sx={{ fontSize: 120 }} className="text-emerald-500" />
                        </div>
                        
                        <div className="mb-10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                                All-in-One Solution
                            </div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                Fully Managed Yearly Plan <CheckCircleOutlinedIcon className="text-emerald-500" />
                            </h3>
                        </div>

                        <div className="space-y-4 mb-10 relative z-10">
                            {costComparison.managed.map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-sm md:text-base py-3 border-b border-emerald-500/10">
                                    <span className="text-emerald-50/80 font-medium">{item}</span>
                                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold px-3 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-[10px]">
                                        INCLUDED
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-500/40 rounded-2xl p-6 relative z-10 overflow-hidden">
                            <p className="text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-2">🔥 Simple Annual Pricing:</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tighter">₹15,000 – ₹50,000</p>
                                <p className="text-xs font-medium text-emerald-400/60 uppercase">/ year</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- CATEGORY 2: SETUP & HASSLE --- */}
                <motion.div {...fadeIn} className="mb-32">
                    <div className="text-center mb-16 px-4">
                        <div className="inline-block p-[1px] rounded-[2rem] bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-blue-500/40 mb-10 max-w-full">
                            <div className="bg-[#020617] px-8 md:px-12 py-5 rounded-[1.95rem]">
                                <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
                                    <PhonelinkSetupIcon sx={{ color: '#10b981' }} /> Setup Time & Hassle Comparison
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                        {/* Traditional Hassle */}
                        <div className="relative bg-white/[0.01] border border-white/5 rounded-[40px] p-8 md:p-12 hover:bg-red-500/[0.02] transition-colors group">
                             <div className="flex items-center justify-between mb-8 opacity-50">
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Traditional</span>
                                <SentimentVeryDissatisfiedIcon />
                            </div>
                            <ul className="space-y-5">
                                {setupHassle.traditional.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-slate-500 group-hover:text-slate-400 transition-colors">
                                        <div className="text-red-500/40 font-bold text-xs mt-1">❌</div>
                                        <p className="text-sm md:text-base leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 p-5 bg-red-500/5 rounded-3xl border border-red-500/10 border-dashed">
                                <p className="text-sm text-red-400 font-medium italic">
                                    “Clients often have to call developers every 1–2 days to check status or fix issues.” 😓
                                </p>
                            </div>
                        </div>

                        {/* Managed Ease */}
                        <div className="relative bg-emerald-500/[0.02] border border-emerald-500/20 rounded-[40px] p-8 md:p-12 hover:bg-emerald-500/[0.04] transition-all shadow-[0_0_50px_-20px_rgba(16,185,129,0.1)] group">
                             <div className="flex items-center justify-between mb-8">
                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Our Solution</span>
                                <SupportAgentIcon className="text-emerald-500" />
                            </div>
                            <ul className="space-y-5">
                                {setupHassle.managed.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-emerald-50/90 font-medium">
                                        <div className="text-emerald-500 font-bold text-xs mt-1">✅</div>
                                        <p className="text-sm md:text-base leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 p-5 bg-emerald-500/10 rounded-3xl border border-emerald-500/30 shadow-[inset_0_0_20px_rgba(16,185,129,0.1)]">
                                <p className="text-sm md:text-base text-emerald-300 font-bold tracking-tight text-center">
                                    “No calls. No confusion. Everything handled for you.” ✨
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- CATEGORY 3: REALITY & TIMELINE --- */}
                <motion.div {...fadeIn} className="max-w-[1000px] mx-auto px-4">
                    <div className="text-center mb-16">
                         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 py-10 px-8 rounded-[40px] bg-slate-900/40 border border-white/5 backdrop-blur-3xl shadow-3xl">
                            <div className="text-center md:text-left flex-1 md:border-r border-white/10 pr-0 md:pr-12 last:border-0">
                                <p className="text-slate-500 line-through decoration-red-500/40 text-xs md:text-sm mb-2 opacity-60">
                                    😓 “Most clients get stuck in endless calls and approvals…”
                                </p>
                                <p className="text-emerald-400 font-black text-lg md:text-2xl leading-tight">
                                    🚀 “With us, you skip all that and go straight to launch.”
                                </p>
                            </div>
                            <div className="flex flex-col items-center shrink-0">
                                <div className="text-4xl md:text-5xl font-black text-white italic">Zero</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] -mt-1">Technical Stress</div>
                            </div>
                         </div>
                    </div>

                    <div className="overflow-hidden rounded-[40px] border border-white/5 bg-slate-900/20 backdrop-blur-xl">
                        <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/5 p-6 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                            <div>Process</div>
                            <div className="text-center">Traditional</div>
                            <div className="text-center text-emerald-400">Our Solution</div>
                        </div>
                        <div className="divide-y divide-white/5">
                            {[
                                { step: "Account Setup", others: "2–7 Days ⏳", you: "Handled ✅" },
                                { step: "App Deployment", others: "Complex ❌", you: "Simple & Managed ✅" },
                                { step: "Client Effort", others: "High 😓", you: "Zero 😌" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 p-6 md:p-10 hover:bg-white/[0.01] transition-colors items-center">
                                    <div className="font-bold text-slate-200 text-xs md:text-base flex items-center gap-2">
                                        <WatchLaterIcon sx={{ fontSize: 16 }} className="text-white/20" /> {row.step}
                                    </div>
                                    <div className="text-center text-slate-500 text-xs md:text-sm font-medium">{row.others}</div>
                                    <div className="text-center font-black text-white text-xs md:text-base flex items-center justify-center gap-2">
                                        <span className="bg-emerald-500 px-3 py-1 rounded-full text-[10px]">{row.you}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-500 text-sm md:text-lg font-medium italic">
                            “No more calling developers again and again for updates. Just focus on your business.” 🤝
                        </p>
                    </div>
                </motion.div>
                
                {/* Savings Callout */}
                <motion.div {...fadeIn} className="text-center mt-32 px-4">
                    <div className="inline-block p-[1px] rounded-[2rem] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 mb-8 max-w-full">
                        <div className="bg-[#020617] px-6 md:px-12 py-8 rounded-[1.95rem]">
                            <h4 className="text-xl md:text-4xl font-black text-white tracking-tight flex flex-col md:flex-row items-center justify-center gap-3">
                                <span className="opacity-50 text-base md:text-2xl font-medium italic">Save up to</span>
                                <span className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">80–90%</span>
                                <span className="opacity-50 text-base md:text-2xl font-medium italic">cost with zero technical hassle</span>
                            </h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
