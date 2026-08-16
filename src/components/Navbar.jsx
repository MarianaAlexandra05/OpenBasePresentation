import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Github, Download, Sparkles, Menu, X, Monitor } from 'lucide-react';

export function Navbar({ onOpenWaitlist, onOpenChangelog }) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#07090E]/80 border-b border-white/[0.08] transition-all">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-950/60 via-sky-950/40 to-indigo-950/60 border-b border-sky-500/20 py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold border border-sky-400/30 text-[11px] uppercase tracking-wider">
              {t.bannerTag}
            </span>
            <span className="text-slate-300">
              {t.bannerText}
            </span>
          </div>
          <button 
            onClick={onOpenChangelog}
            className="text-sky-400 hover:text-sky-300 transition-colors font-semibold flex items-center gap-1 cursor-pointer"
          >
            {t.bannerCta}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center p-0.5 shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <rect width="40" height="40" rx="8" fill="#0A0E1A" />
              <path d="M12 12C12 9.79 13.79 8 16 8H21V18H12V12Z" fill="#0078D4" />
              <path d="M21 18H30V24C30 26.21 28.21 28 26 28H21V18Z" fill="#38BDF8" />
              <path d="M23 8H30V15L21 18L23 8Z" fill="#0EA5E9" />
              <path d="M12 21L21 18L19 28H12V21Z" fill="#0284C7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-lg">OPENBASE</span>
              <span className="text-sky-400 font-medium text-xs tracking-wider">CODER</span>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono font-semibold">
            <Monitor className="w-3 h-3" />
            WIN32 NATIVE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#overview" className="hover:text-white transition-colors">{t.navOverview}</a>
          <a href="#demo" className="hover:text-white transition-colors">{t.navDemo}</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">{t.howEyebrow}</a>
          <a href="#integrations" className="hover:text-white transition-colors">{t.intEyebrow}</a>
          <a href="#comparison" className="hover:text-white transition-colors">{t.navComparison}</a>
          <a href="#diagnostics" className="hover:text-white transition-colors">{t.navDiagnostics}</a>
          <a href="#install" className="hover:text-white transition-colors">{t.navInstall}</a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Switch Language / Cambiar Idioma"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* GitHub Star */}
          <a
            href="https://github.com/MarianaAlexandra05/OpenBasePresentation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-medium text-slate-300 hover:text-white transition-all text-decoration-none"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          {/* Join Beta CTA */}
          <button
            onClick={onOpenWaitlist}
            className="relative px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 border border-sky-400/30 shadow-lg shadow-sky-500/20 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            <span>{t.navJoinWaitlist}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D111A] border-b border-white/[0.1] px-4 py-4 space-y-3">
          <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.navOverview}</a>
          <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.navDemo}</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.howEyebrow}</a>
          <a href="#integrations" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.intEyebrow}</a>
          <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.navComparison}</a>
          <a href="#diagnostics" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.navDiagnostics}</a>
          <a href="#install" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300 hover:text-white">{t.navInstall}</a>
        </div>
      )}
    </header>
  );
}
