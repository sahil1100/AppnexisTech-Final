import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqs = [
  {
    question: "What exactly does \"fully managed\" mean?",
    answer: "It means we handle 100% of the technical heavy lifting. From UI/UX design and full-stack development to cloud hosting, App Store submission, and continuous maintenance, you get a completely hands-off technical experience so you can focus on growing your business."
  },
  {
    question: "Do I own the source code and IP?",
    answer: "Yes, absolutely. For all our One-Time Projects, you retain 100% ownership of the intellectual property and source code upon project completion."
  },
  {
    question: "How long does it take to launch an app?",
    answer: "Depending on the complexity and the plan chosen, a standard application can take anywhere from 4 to 12 weeks from initial design to live deployment on the App Store and Google Play."
  },
  {
    question: "Do you build responsive web applications?",
    answer: "Absolutely. Every web application we build is designed with a mobile-first approach, ensuring a seamless and fully responsive experience across desktops, tablets, and smartphones."
  },
  {
    question: "Will my web app be SEO optimized?",
    answer: "Yes! We implement technical SEO best practices, including Server-Side Rendering (SSR) where applicable, fast load times, and proper meta tagging to ensure your web application ranks well on search engines."
  },
  {
    question: "Can you migrate my existing website to a modern web app?",
    answer: "We certainly can. We offer complete migration services to upgrade legacy systems to modern, fast, and scalable web architectures without losing your existing SEO rankings or data."
  },
  {
    question: "What happens if I need changes after launch?",
    answer: "Launching is just the beginning! All our Yearly Subscription plans include continuous maintenance, which covers essential updates, server hosting, and security patches. For new features, our team is always ready to scale your product."
  },
  {
    question: "Do you handle App Store and Google Play submissions?",
    answer: "Yes. We manage the entire complex submission process, ensuring your application meets all Apple and Google guidelines for a smooth, rejection-free launch."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

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
    <section className="py-24 px-5 bg-white dark:bg-[#020617] font-inter text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-500 scroll-mt-16" id="faq">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 dark:opacity-20"></div>

      <div className="max-w-[800px] mx-auto relative z-10">
        
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="text-cyan-600 dark:text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                Support & Answers
            </span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">Questions.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            Everything you need to know about how we manage your digital products and ensure your technical success.
          </p>
        </motion.div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border rounded-[24px] transition-all duration-300 overflow-hidden ${
                    isOpen 
                        ? 'bg-slate-50 dark:bg-white/[0.04] border-cyan-500/30 shadow-lg shadow-cyan-500/5' 
                        : 'bg-white dark:bg-[#020617] border-slate-200 dark:border-white/10 hover:border-cyan-500/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={`text-[15px] md:text-[17px] font-bold tracking-tight pr-6 transition-colors duration-300 ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-cyan-500 text-white rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400'}`}>
                    {isOpen ? <RemoveIcon sx={{ fontSize: 18 }} /> : <AddIcon sx={{ fontSize: 18 }} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-8 text-[14px] md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
