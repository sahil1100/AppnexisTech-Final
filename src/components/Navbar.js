"use client";
import Link from "next/link";
import { useTheme } from "../app/layout";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#020617]/70">
      <div className="max-w-[1500px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="transition-transform duration-300 group-hover:scale-[1.02] origin-left">
            <BrandLogo theme={darkMode ? "dark" : "light"} size="navbar" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">Services</Link>
          <Link href="/pricing" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">Pricing</Link>
          <Link href="/about" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">About</Link>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-700 dark:text-slate-200"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
              </svg>
            )}
          </button>

          <Link
            href="#contact"
            className="hidden sm:block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-7 rounded-xl text-sm tracking-tight shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
