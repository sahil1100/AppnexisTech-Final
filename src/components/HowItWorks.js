"use client";

import { motion } from "framer-motion";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HowItWorks() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const steps = [
        {
            icon: <LightbulbOutlinedIcon sx={{ fontSize: 28 }} />,
            title: "Share Your Vision",
            description: "Everything starts with a conversation. Tell us about your idea, your goals, and your target audience.",
            tag: "Insight"
        },
        {
            icon: <AssignmentOutlinedIcon sx={{ fontSize: 28 }} />,
            title: "Strategy & Roadmap",
            description: "We translate your idea into a technical blueprint with clear milestones and transparent yearly pricing.",
            tag: "Planning"
        },
        {
            icon: <CodeOutlinedIcon sx={{ fontSize: 28 }} />,
            title: "High-End Development",
            description: "Our experts build your product using cutting-edge frameworks for maximum performance and security.",
            tag: "Build"
        },
        {
            icon: <CloudDoneOutlinedIcon sx={{ fontSize: 28 }} />,
            title: "Managed Deployment",
            description: "We handle servers, SSL, and store publishing. Zero technical stress on your end.",
            tag: "Setup"
        },
        {
            icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 28 }} />,
            title: "Continuous Growth",
            description: "We manage updates, security patches, and scaling as your business expands.",
            tag: "Launch"
        }
    ];

    return (
        <section className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500" id="how-it-works">
            {/* Aesthetic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <div className="absolute -left-20 top-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30 animate-pulse"></div>
            <div className="absolute -right-20 bottom-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-30"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div {...fadeIn} className="max-w-[600px]">
                        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-5">
                            <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                            <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Our Process</span>
                        </div>
                        <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
                            The Path to <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Digital Excellence</span>
                        </h2>
                        <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                            A streamlined, transparent workflow designed to take you from a rough idea to a market-ready product in weeks.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex items-center gap-8 py-6 px-10 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-3xl backdrop-blur-xl"
                    >
                        <div className="text-center border-r border-slate-200 dark:border-white/10 pr-8">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Onboarding</p>
                            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">2–5 Days</p>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Production</p>
                            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">1–3 Weeks</p>
                        </div>
                    </motion.div>
                </div>

                {/* Modern Timeline Steps */}
                <div className="relative">
                    {/* Vertical Connected Line (Mobile & Tablet) */}
                    <div className="absolute left-[27px] top-10 bottom-10 w-px border-l border-dashed border-slate-200 dark:border-white/10 md:hidden"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 lg:items-start">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-8"
                            >
                                {/* Sequential Number & Icon Container */}
                                <div className="relative shrink-0 flex items-center justify-center lg:w-full">
                                    {/* Horizontal Connecting Line (Desktop Only) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute left-1/2 right-[-50%] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-cyan-500/30 to-transparent z-0"></div>
                                    )}
                                    
                                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-white dark:bg-[#080d1e] border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-slate-500 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] shadow-sm">
                                        {step.icon}
                                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black flex items-center justify-center border-2 border-white dark:border-[#020617] group-hover:bg-cyan-600 dark:group-hover:bg-cyan-400 transition-colors">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="lg:text-center pt-1 lg:pt-0">
                                    <span className="inline-block text-[9px] font-black text-cyan-600 dark:text-cyan-500 uppercase tracking-[0.2em] mb-3 opacity-80">
                                        Step {index + 1}: {step.tag}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[240px] lg:mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Interactive CTA Box */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-10 md:p-14 bg-slate-950 dark:bg-white/[0.02] rounded-[48px] border border-white/5 relative overflow-hidden text-center group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 max-w-[600px] mx-auto">
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-6">
                            Ready to Transform Your Workflow?
                        </h3>
                        <p className="text-slate-400 font-medium mb-10 text-base">
                            Stop worrying about tech debt. Focus on your growth while we handle the heavy lifting.
                        </p>
                        <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-black text-sm tracking-widest uppercase hover:scale-[1.03] active:scale-[0.97] transition-all shadow-2xl shadow-black/40">
                            Start Your Project <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
