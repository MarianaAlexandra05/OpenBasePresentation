import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Globe, Sparkles, Terminal, Heart } from 'lucide-react';

export function Footer({ onOpenWaitlist }) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070B] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center p-0.5 shadow-md">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <rect width="40" height="40" rx="8" fill="#0A0E1A" />
                  <path d="M12 12C12 9.79 13.79 8 16 8H21V18H12V12Z" fill="#0078D4" />
                  <path d="M21 18H30V24C30 26.21 28.21 28 26 28H21V18Z" fill="#38BDF8" />
                  <path d="M23 8H30V15L21 18L23 8Z" fill="#0EA5E9" />
                  <path d="M12 21L21 18L19 28H12V21Z" fill="#0284C7" />
                </svg>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">OPENBASE</span>
              <span className="text-sky-400 font-mono text-xs font-semibold">v2.4 Win32</span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm">
              {t.footerTagline}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{t.footerStatus}</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-4">Producto</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#overview" className="hover:text-white transition-colors">{t.navOverview}</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">{t.navDemo}</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">{t.howEyebrow}</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">{t.navComparison}</a></li>
              <li><a href="#diagnostics" className="hover:text-white transition-colors">{t.navDiagnostics}</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-4">Comunidad</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a 
                  href="https://github.com/MarianaAlexandra05/OpenBasePresentation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenWaitlist} 
                  className="hover:text-sky-400 transition-colors text-left cursor-pointer flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t.navJoinWaitlist}</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Openbase. {t.footerRights}
          </div>
          <div className="flex items-center gap-1">
            <span>Desarrollado para la comunidad de Windows & Openbase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
