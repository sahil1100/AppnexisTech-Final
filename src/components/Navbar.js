"use client";
import Link from "next/link";
import { useTheme } from "../app/layout";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-xl border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#020617]/70">
      <div className="max-w-[1500px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white text-lg rotate-3 group-hover:rotate-0 transition-transform">
            N
          </div>
          <span className="group-hover:text-cyan-500 transition-colors tracking-tight">AppNexis</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#services" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">Services</Link>
          <Link href="/pricing" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">Pricing</Link>
          <Link href="/about" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors tracking-tight">About</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-xl hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
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
