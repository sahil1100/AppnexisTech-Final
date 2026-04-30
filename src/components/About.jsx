import { motion } from "framer-motion";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function About() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const differentiators = [
        { title: "No Tech Barriers", desc: "No servers, no hosting, no technical debt.", icon: <SettingsSuggestIcon sx={{ fontSize: 20 }} /> },
        { title: "Managed Ecosystem", desc: "We manage the entire app lifecycle.", icon: <GroupsIcon sx={{ fontSize: 20 }} /> }
    ];

    return (
        <section className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" id="about">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20 animate-pulse"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Narrative & Philosophy */}
                    <div className="order-2 lg:order-1">
                        <motion.div {...fadeIn}>
                            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 font-bold text-cyan-600 dark:text-cyan-400 text-[10px] uppercase tracking-[0.2em]">
                                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span>
                                Our Philosophy
                            </div>
                            <h2 className="text-[clamp(2.2rem,5vw,3.2rem)] font-black tracking-[-0.04em] leading-[1.05] mb-8">
                                Reimagining the <br />
                                <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Digital Horizon.</span>
                            </h2>
                            <div className="space-y-6 text-[15px] md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium transition-colors">
                                <p>
                                    Technical barriers should never be the bottleneck for business growth. At <span className="text-slate-900 dark:text-white font-bold">AppNexis</span>, we've dismantled the traditional development model.
                                </p>
                                <p>
                                    By managing everything from architecture to delivery, we empower you to operate at the speed of your vision. No servers, no technical debt — just pure growth.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                            {differentiators.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    {...fadeIn}
                                    transition={{ delay: 0.1 * idx }}
                                    className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-2xl group hover:border-cyan-500/30 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-[15px] font-bold mb-1 tracking-tight">{item.title}</h3>
                                    <p className="text-[12px] text-slate-500 dark:text-slate-500 font-medium leading-normal">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button 
                            {...fadeIn}
                            onClick={() => window.location.href = '#contact'}
                            className="mt-10 flex items-center gap-3 px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-[1.03] active:scale-[0.97] transition-all shadow-xl shadow-black/10 dark:shadow-none"
                        >
                            Start Your Project <ArrowForwardIcon sx={{ fontSize: 18 }} />
                        </motion.button>
                    </div>

                    {/* Right: Immersive Creative */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        {/* Decorative Frames */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl opacity-50"></div>
                        
                        <div className="relative rounded-[40px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group">
                            <img 
                                src="/helloworld.png" 
                                alt="Futuristic Tech Workspace" 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 p-4 md:p-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-100 dark:border-white/10 shadow-xl max-w-[200px] md:max-w-[260px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-900 dark:bg-white/5 flex items-center justify-center p-1.5 border border-slate-200 dark:border-white/10">
                                        <img src="/logos.PNG" alt="AppNexis" className="w-6 h-6 object-contain" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Brand</span>
                                </div>
                                <p className="text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                                    "Launched 100+ digital products with zero technical stress."
                                </p>
                            </div>
                        </div> 

                        {/* Floating Element */}
                        <div className="absolute -top-6 -right-6 p-5 bg-cyan-600 rounded-3xl shadow-2xl text-white hidden md:block animate-bounce-slow">
                             <TrendingUpIcon sx={{ fontSize: 24 }} />
                        </div>
                    </motion.div>

                </div>
            </div>
            
        </section>
    );
}
