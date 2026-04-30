import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const projectsData = [
  {
    id: "mediadmin",
    title: "MediAdmin",
    subtitle: "Modern Healthcare Administration",
    description: "A comprehensive, HIPAA-compliant Modern Healthcare Administration system. Streamlines hospital workflows including Doctor & Staff Management, Patient Records & History, and Digital Prescription Tracking. Features a centralized dashboard for real-time analytics, appointment scheduling, and smart notifications.",
    icon: <MedicalServicesIcon sx={{ fontSize: 24 }} />,
    features: [
      "Patient & Staff Management",
      "Digital Prescription Tracking",
      "HIPAA-Compliant Security",
      "Real-time Analytics Dashboard"
    ],
    media: [
      { type: "image", src: "/p1.jpg", alt: "MediAdmin Login & Hero" },
      { type: "image", src: "/P2.jpg", alt: "MediAdmin Features" },
      { type: "image", src: "/P4.png", alt: "MediAdmin Dashboard" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "solviox",
    title: "SOLVIOX",
    subtitle: "Premium Solar Energy Solutions",
    description: "A premium platform empowering homes and businesses to switch to clean, renewable energy. Emphasizes sustainability with high efficiency and eco-friendly impact. Highlights include a 25+ years warranty, complete project management (from design to installation), and government subsidy integration.",
    icon: <SolarPowerIcon sx={{ fontSize: 24 }} />,
    features: [
      "Quick & Efficient Installation",
      "25+ Years Warranty Tracking",
      "Government Subsidy Integration",
      "24/7 Monitoring & Maintenance"
    ],
    media: [
      { type: "video", src: "/Screencast from 30-04-26 03:07:14 PM IST.webm", alt: "SOLVIOX Video Demo" },
      { type: "image", src: "/S1.png", alt: "SOLVIOX Hero Section" },
      { type: "image", src: "/S2.png", alt: "SOLVIOX Features" }
    ],
    color: "from-amber-400 to-orange-500"
  }
];

export default function Projects() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 px-5 bg-slate-50 dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" id="projects">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">Featured Work</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
            Projects We've <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Delivered.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-[700px] mx-auto leading-relaxed font-medium">
            Take a look at some of our recent enterprise-grade solutions built for scale, security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-32">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                {/* Media Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2 flex flex-col gap-4"
                >
                  {/* Main Media */}
                  <div className="relative aspect-video rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-slate-900 group">
                    {project.media[0].type === 'video' ? (
                      <video
                        src={project.media[0].src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={project.media[0].src}
                        alt={project.media[0].alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => { e.target.src = 'https://placehold.co/800x450/0f172a/06b6d4?text=' + project.title }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-2 gap-4">
                    {project.media.slice(1).map((mediaItem, mIdx) => (
                      <div key={mIdx} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md bg-slate-100 dark:bg-slate-900 group">
                        <img
                          src={mediaItem.src}
                          alt={mediaItem.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => { e.target.src = 'https://placehold.co/400x225/0f172a/06b6d4?text=' + project.title + '+' + (mIdx + 2) }}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20`}>
                    {project.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-bold text-sm tracking-widest uppercase mb-6">
                    {project.subtitle}
                  </p>

                  <p className="text-[15px] md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                    {project.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="text-cyan-500 mt-0.5 shrink-0" sx={{ fontSize: 20 }} />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>


                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
