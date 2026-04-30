import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import BrandLogo from "./BrandLogo";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on scroll or resize
  useEffect(() => {
    const handleEvents = () => setIsMobileMenuOpen(false);
    window.addEventListener("scroll", handleEvents);
    window.addEventListener("resize", handleEvents);
    return () => {
      window.removeEventListener("scroll", handleEvents);
      window.removeEventListener("resize", handleEvents);
    };
  }, []);

  // Handle scroll to hash on mount if there's a hash in the URL
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Technologies", href: "/#tech-stack" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (e, href) => {
    setIsMobileMenuOpen(false);

    if (href === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");

      if (location.pathname === "/") {
        // Let <Link> handle the URL change, just do the smooth scroll after a short delay
        // to let the mobile menu start closing
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#020617]/70 transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo Area */}
        <Link to="/" className="flex items-center shrink-0 group">
          <div className="transition-transform duration-300 group-hover:scale-[1.02] origin-left">
            <BrandLogo size="navbar" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path></svg>
            )}
          </button>

          {/* Contact Button (Desktop) */}
          <Link
            to="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden sm:block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2.5 px-6 rounded-xl text-[13px] tracking-tight shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            Contact Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="bg-cyan-500 text-white text-center font-bold py-4 rounded-2xl text-[15px]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
