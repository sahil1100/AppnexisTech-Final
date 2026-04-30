

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemoryIcon from '@mui/icons-material/Memory';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const techData = {
  "Mobile App Development": [
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Swift (iOS)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin (Android)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Java (Android)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" },
  ],
  "Frontend Technology": [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  ],
  "Backend Technology": [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  ],
  "Database & Storage": [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
  "Artificial Intelligence": [
    { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" }, // Fallback for OpenAI
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "LangChain", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, // Placeholder
    { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, // Placeholder
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  ]
};

const categories = [
  { id: "Artificial Intelligence", icon: <MemoryIcon fontSize="small" /> },
  { id: "Frontend Technology", icon: <WebIcon fontSize="small" /> },
  { id: "Backend Technology", icon: <StorageIcon fontSize="small" /> },
  { id: "Mobile App Development", icon: <PhoneIphoneIcon fontSize="small" /> },
  { id: "Database & Storage", icon: <StorageIcon fontSize="small" /> },
  { id: "Cloud & DevOps", icon: <CloudQueueIcon fontSize="small" /> },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("Mobile App Development");

  const fadeIn = {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section className="py-16 px-5 bg-slate-50 dark:bg-[#020617] font-sans text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" id="tech-stack">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-0 dark:opacity-20 transition-opacity duration-500">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 backdrop-blur-sm transition-colors duration-500">
                <MemoryIcon sx={{ fontSize: 14 }} /> Technology Stack
            </span>
            <h2 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black tracking-tight mb-5 leading-[1.05] text-slate-900 dark:text-white transition-colors duration-500">
                Advanced Tech Solutions Enabling <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Digital Growth for Businesses</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium max-w-[700px] mx-auto leading-normal transition-colors duration-500">
              By combining innovation, strategy, and modern technologies, we help businesses improve efficiency, scale faster, and achieve sustainable growth.
            </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
            {...fadeIn}
            className="flex flex-wrap justify-center gap-2.5 md:gap-3.5 mb-12 md:mb-16 max-w-5xl mx-auto"
        >
            {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`relative px-4 py-2.5 md:px-5 md:py-3 rounded-full text-xs md:text-[13px] font-bold transition-all duration-300 flex items-center gap-2 overflow-hidden group ${
                            isActive 
                                ? "text-white shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] scale-105" 
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        }`}
                    >
                        {/* Background for inactive state */}
                        <div className={`absolute inset-0 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full opacity-100 transition-all duration-300 ${isActive ? 'opacity-0' : 'group-hover:bg-slate-50 dark:group-hover:bg-white/10 group-hover:border-cyan-500/30 shadow-sm'}`}></div>
                        
                        {/* Background for active state */}
                        {isActive && (
                            <motion.div 
                                layoutId="activeTabBg"
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-600 dark:to-blue-600 rounded-full"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        
                        {/* Border glow for active state */}
                        {isActive && (
                            <div className="absolute inset-0 rounded-full border border-cyan-300/50"></div>
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <span className={`${isActive ? "text-cyan-100" : "text-slate-400 group-hover:text-cyan-500 dark:text-slate-500 dark:group-hover:text-cyan-400"} transition-colors transform scale-90`}>{cat.icon}</span>
                            {cat.id}
                        </span>
                    </button>
                )
            })}
        </motion.div>

        {/* Tech Grid */}
        <div className="min-h-[350px] w-full max-w-4xl mx-auto relative perspective-1000">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, rotateX: -15, y: 30 }}
                    animate={{ opacity: 1, rotateX: 0, y: 0 }}
                    exit={{ opacity: 0, rotateX: 15, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-5 lg:gap-6"
                >
                    {techData[activeTab]?.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-[28px] bg-white dark:bg-[#0c1322]/80 backdrop-blur-md border border-slate-100 dark:border-white/5 hover:border-cyan-200 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none"
                        >
                            {/* Glow behind the card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 dark:from-cyan-500/10 dark:to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px] blur-xl pointer-events-none"></div>
                            
                            {/* Inner ambient light */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px]"></div>

                            <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 mb-4 flex items-center justify-center p-2.5 rounded-xl bg-slate-50/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group-hover:bg-white dark:group-hover:bg-cyan-500/20 transition-all duration-500 group-hover:-translate-y-2 shadow-sm dark:shadow-none group-hover:shadow-md dark:group-hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.5)]">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className={`w-full h-full object-contain filter transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.3)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${tech.name.includes("GitHub") || tech.name.includes("Vercel") || tech.name.includes("AWS") || tech.name.includes("Next.js") || tech.name.includes("Supabase") ? 'dark:invert dark:brightness-0' : ''}`}
                                    loading="lazy"
                                />
                            </div>
                            <span className="relative z-10 text-xs md:text-[13px] font-bold text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors duration-300 text-center tracking-tight">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
