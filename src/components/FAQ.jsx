import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "What is the difference between One-Time Projects and Yearly Subscriptions?",
    answer: "Our One-Time Projects are custom-built solutions where you retain full ownership of the IP from day one. Yearly Subscriptions follow a 'Tech-as-a-Service' model, providing continuous feature updates, managed cloud hosting, and 24/7 technical support for a fixed annual investment."
  },
  {
    question: "Do you specialize in specialized industries like Healthcare (HIPAA) or Solar Energy?",
    answer: "Yes. We have a proven track record with enterprise-grade platforms like MediAdmin (HIPAA-compliant healthcare administration) and SOLVIOX (Solar Energy management). We understand the complex regulatory requirements and technical challenges of these sectors."
  },
  {
    question: "What technology stack do you use for custom software development?",
    answer: "We use modern, industry-leading stacks including Next.js, React, and Vue for frontend; Node.js and Python for backend; and PostgreSQL, MongoDB, or Redis for databases. For mobile, we specialize in React Native and Flutter for high-performance cross-platform apps."
  },
  {
    question: "How do you ensure the scalability of my application as my business grows?",
    answer: "We build all our products with a scalable, cloud-native architecture. Using microservices, containerization (Docker/Kubernetes), and serverless functions, we ensure your application can handle thousands of concurrent users without performance degradation."
  },
  {
    question: "Is my application secure and compliant with data privacy laws like GDPR or HIPAA?",
    answer: "Security is integrated into every stage of our development lifecycle. We implement end-to-end encryption, multi-factor authentication (MFA), and strict access controls. For healthcare, we ensure full HIPAA compliance, and for global apps, we adhere to GDPR and SOC2 standards."
  },
  {
    question: "Do you provide managed cloud hosting and infrastructure support?",
    answer: "Yes. We offer fully managed hosting on AWS, Google Cloud, and Azure. This includes server monitoring, automatic backups, SSL certificate management, and security patches, allowing you to run your business while we handle the DevOps."
  },
  {
    question: "Can you integrate AI and LLMs into my existing digital products?",
    answer: "Absolutely. We specialize in AI integration, including custom GPT implementations, automated customer support bots, predictive analytics, and natural language processing (NLP) to streamline your business workflows and improve user engagement."
  },
  {
    question: "Do I own the source code and intellectual property (IP) of the project?",
    answer: "Yes. For all our One-Time Projects, you retain 100% ownership of the source code and IP upon project completion. We provide a clean developer handoff with documentation to ensure you have total control over your digital assets."
  },
  {
    question: "How long does it typically take to launch a custom web or mobile app?",
    answer: "Most enterprise-grade applications take between 8 to 14 weeks from the discovery phase to live deployment. This includes UI/UX design, full-stack development, rigorous QA testing, and final submission to the App Store or Google Play."
  },
  {
    question: "Do you handle App Store (iOS) and Google Play Store (Android) submissions?",
    answer: "We manage the entire submission and approval process. This includes setting up your developer accounts, managing app metadata, ensuring compliance with store guidelines, and handling any correspondence with Apple or Google reviewers."
  },
  {
    question: "What is your approach to UI/UX design and user research?",
    answer: "Our design process is data-driven. We start with user personas and journey mapping, followed by interactive wireframes and high-fidelity prototypes. We focus on conversion-optimized interfaces that provide a seamless and premium user experience."
  },
  {
    question: "Do you offer API development and third-party software integrations?",
    answer: "Yes, we are experts in building robust RESTful and GraphQL APIs. We also specialize in integrating third-party services like payment gateways (Stripe/PayPal), CRMs (Salesforce/HubSpot), and marketing tools to extend the functionality of your platform."
  },
  {
    question: "Can you migrate my legacy system to a modern tech stack?",
    answer: "We specialize in digital transformation. We can safely migrate your legacy data and architecture to modern frameworks like Next.js and Node.js, ensuring zero data loss and maintaining your existing SEO rankings throughout the process."
  },
  {
    question: "Do you provide white-label software development for other agencies?",
    answer: "Yes, we partner with agencies worldwide to provide high-quality white-label development services. We act as your invisible technical arm, delivering premium products that you can proudly brand as your own."
  },
  {
    question: "What kind of post-launch support and maintenance do you offer?",
    answer: "We don't just launch and leave. Our support includes 24/7 monitoring, bug fixes, performance optimization, and regular security updates. Our Yearly Subscription plans include these services by default to ensure your app stays ahead of the curve."
  },
  {
    question: "Do you build mobile-first and fully responsive web applications?",
    answer: "Every application we build follows a mobile-first philosophy. We ensure your web app is fully responsive and optimized for all screen sizes, from mobile devices to large desktop monitors, which is critical for both user experience and Google SEO rankings."
  },
  {
    question: "Can you develop custom CRM or ERP solutions tailored to my business?",
    answer: "Yes, we specialize in building bespoke CRM and ERP systems that align perfectly with your unique business processes. We move away from 'one-size-fits-all' software to create tools that actually improve your team's efficiency and data management."
  },
  {
    question: "Is your pricing transparent, and do you offer fixed-cost projects?",
    answer: "Transparency is our core value. We provide detailed, fixed-price quotes for all projects and clear, no-hidden-fee pricing for our subscriptions. You'll know exactly what you're paying for, from infrastructure costs to developer hours."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section 
      className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" 
      id="faq"
      itemScope 
      itemType="https://schema.org/FAQPage"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Image & Header (35%) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[35%] lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  Help Center
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,3.2rem)] font-black tracking-[-0.04em] leading-[1.1] mb-6">
              Questions?<br />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">We're here.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10">
              Get detailed insights into our process, technology stack, and how we deliver world-class digital products.
            </p>

            <div className="relative group rounded-[32px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-slate-900/50 aspect-square lg:aspect-auto">
              <img 
                src="/faq-image.png" 
                alt="Support Illustration" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Support CTA */}
            <div className="mt-8 p-6 rounded-[24px] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 flex items-center gap-5">
              <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-slate-900 dark:text-white">Still have questions?</h4>
                <a href="#contact" className="text-cyan-600 dark:text-cyan-400 text-xs font-black uppercase tracking-widest mt-1 inline-block hover:underline">Get in touch →</a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: FAQs (65%) */}
          <div className="w-full lg:w-[65%] flex flex-col">
            <div className="lg:max-h-[85vh] overflow-y-auto pr-2 lg:pr-6 space-y-4 custom-faq-scrollbar">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    itemScope 
                    itemProp="mainEntity" 
                    itemType="https://schema.org/Question"
                    className={`group relative rounded-[24px] transition-all duration-500 ${
                        isOpen 
                            ? 'bg-slate-50 dark:bg-white/[0.04] border border-cyan-500/30 shadow-2xl shadow-cyan-500/5' 
                            : 'bg-white dark:bg-white/[0.01] border border-slate-100 dark:border-white/5 hover:border-cyan-500/20 hover:bg-slate-50/50 dark:hover:bg-white/[0.02]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-5">
                        <span className={`hidden md:flex w-8 h-8 rounded-lg items-center justify-center text-[11px] font-black tracking-tighter border transition-all duration-500 ${
                          isOpen 
                            ? 'bg-cyan-500 border-cyan-500 text-white' 
                            : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-400'
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span 
                          itemProp="name"
                          className={`text-[15px] md:text-[17px] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white'}`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-cyan-500 text-white rotate-180 shadow-lg' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                        {isOpen ? <RemoveIcon sx={{ fontSize: 18 }} /> : <AddIcon sx={{ fontSize: 18 }} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "circOut" }}
                          itemScope 
                          itemProp="acceptedAnswer" 
                          itemType="https://schema.org/Answer"
                        >
                          <div 
                            itemProp="text"
                            className="px-6 pb-7 md:px-7 md:ml-12 text-[14px] md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium"
                          >
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
            
            <style jsx="true">{`
              .custom-faq-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .custom-faq-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-faq-scrollbar::-webkit-scrollbar-thumb {
                background: #06b6d41a;
                border-radius: 20px;
              }
              .custom-faq-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #06b6d433;
              }
            `}</style>
          </div>

        </div>

      </div>
    </section>
  );
}
