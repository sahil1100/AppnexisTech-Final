"use client";

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
    { name: "Swift (iOS)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Kotlin (Android)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Java (Android)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
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
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  ],
  "Database & Storage": [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
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
    <section className="py-24 md:py-32 px-5 bg-[#020617] font-sans text-white overflow-hidden relative" id="tech-stack">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400">
                <MemoryIcon sx={{ fontSize: 16 }} /> Technology Stack
            </span>
            <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-black tracking-tight mb-6 leading-tight">
                Advanced Tech Solutions Enabling <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Growth for Businesses</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-medium max-w-[800px] mx-auto leading-relaxed">
              By combining innovation, strategy, and modern technologies, we help businesses improve efficiency, scale faster, and achieve sustainable growth.
            </p>
        </motion.div>

        {/* Main Interface */}
        <motion.div {...fadeIn} className="flex flex-col-reverse lg:flex-row bg-[#0f172a]/60 backdrop-blur-2xl border border-white/5 rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-white/10">
          
          {/* Left Panel: Tech Grid */}
          <div className="flex-1 p-8 md:p-12 border-t lg:border-t-0 lg:border-r border-white/5">
            <div className="mb-8">
              <h3 className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase mb-2">Featured Technologies</h3>
              <p className="text-xl font-bold text-white capitalize">{activeTab}</p>
            </div>

            <div className="min-h-[400px] lg:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
                >
                  {techData[activeTab]?.map((tech, index) => (
                    <div 
                      key={index} 
                      className="group flex flex-col items-center justify-center p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)]"
                    >
                      <div className="w-16 h-16 mb-4 flex items-center justify-center p-2 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        {/* Using standard img for external devicons */}
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className={`w-full h-full object-contain ${tech.name.includes("GitHub") || tech.name.includes("Vercel") || tech.name.includes("AWS") ? 'invert brightness-0 filter' : ''}`}
                          style={{ filter: tech.name.includes("Next.js") || tech.name.includes("Supabase") ? "brightness(0) invert(1)" : "" }}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Panel: Categories */}
          <div className="lg:w-[400px] bg-slate-900/50 p-6 md:p-8">
            <div className="flex flex-col gap-2">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center justify-between w-full p-4 rounded-2xl transition-all duration-300 group ${
                      isActive 
                        ? "bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)]" 
                        : "bg-transparent border border-transparent hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                        isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-slate-400 group-hover:text-slate-300"
                      }`}>
                        {cat.icon}
                      </div>
                      <span className={`font-semibold text-sm md:text-base transition-colors ${
                        isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-200"
                      }`}>
                        {cat.id}
                      </span>
                    </div>
                    
                    {isActive && (
                      <motion.div layoutId="activeArrow">
                        <ChevronRightIcon className="text-cyan-400" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
