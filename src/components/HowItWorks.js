"use client";

import { motion } from "framer-motion";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HowItWorks() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const steps = [
        {
            icon: <LightbulbOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Share Your Idea",
            description: "Tell us what you want to build — app, website, or custom business system.",
            color: "from-amber-400 to-orange-500",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20"
        },
        {
            icon: <AssignmentOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Planning & Proposal",
            description: "We analyze your requirements and give you a clear plan, timeline, and yearly pricing.",
            color: "from-blue-400 to-indigo-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: <CodeOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Development",
            description: "We build your app or website with modern, scalable, and clean architecture.",
            color: "from-fuchsia-400 to-purple-500",
            bg: "bg-fuchsia-500/10",
            border: "border-fuchsia-500/20"
        },
        {
            icon: <CloudDoneOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Hosting & Setup",
            description: "We handle servers, deployment, and all technical setup — no action needed from you.",
            color: "from-emerald-400 to-teal-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 32 }} />,
            title: "Launch & Support",
            description: "Your product goes live, and we continue to manage updates, maintenance, and support.",
            color: "from-cyan-400 to-blue-500",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20"
        }
    ];

    return (
        <section className="py-24 md:py-32 px-5 bg-[#020617] font-sans text-white overflow-hidden relative" id="how-it-works">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <motion.div {...fadeIn} className="text-center mb-16 md:mb-24">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                        <RocketLaunchOutlinedIcon sx={{ fontSize: 16 }} /> How It Works
                    </span>
                    <h2 className="text-[clamp(2.2rem,5vw,3.5rem)] font-black tracking-tight mb-6 leading-tight">
                        From idea to live app — <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">we handle everything for you.</span>
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-slate-300">
                            <AccessTimeOutlinedIcon sx={{ fontSize: 20, color: '#60a5fa' }} /> 
                            Setup: <span className="text-white font-bold">2–5 Days</span>
                        </div>
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium text-slate-300">
                            <RocketLaunchOutlinedIcon sx={{ fontSize: 20, color: '#34d399' }} /> 
                            Launch: <span className="text-white font-bold">1–3 Weeks</span>
                        </div>
                    </div>
                </motion.div>

                {/* Steps Layout */}
                <div className="relative mb-20 max-w-[1000px] mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Step Number & Node */}
                                <div className="relative mb-8 pt-6 lg:pt-0">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${step.bg} ${step.border} border border-opacity-50 backdrop-blur-xl relative z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] bg-gradient-to-br transition-all`}>
                                        <div className={`text-white`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xs font-black text-slate-500 z-20 group-hover:text-white group-hover:bg-slate-800 transition-colors">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-[250px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Unique Touch Highlight */}
                <motion.div {...fadeIn} className="text-center mb-24 px-4">
                    <div className="inline-block p-[1px] rounded-[2rem] bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 max-w-full">
                        <div className="bg-[#020617] px-6 md:px-12 py-5 rounded-[1.95rem] flex items-center gap-4 border border-white/5 shadow-2xl">
                            <span className="text-2xl animate-pulse">💡</span>
                            <p className="text-sm md:text-lg font-bold text-slate-200 tracking-wide">
                                No servers. No setup. No repeated calls. <span className="text-white italic bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Everything is handled for you.</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Strong Closing */}
                <motion.div {...fadeIn} className="text-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-8">
                        🚀 Ready to get started? Let’s launch your idea.
                    </h3>
                    <a href="#contact" className="inline-flex items-center justify-center h-14 pl-8 pr-6 rounded-full bg-white text-slate-900 font-bold text-lg tracking-wide hover:bg-slate-200 hover:scale-[1.02] transition-all group overflow-hidden relative">
                        <span className="relative z-10 flex items-center gap-3">
                            Start Project <ArrowForwardIcon sx={{ fontSize: 20 }} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
