import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

export function WhyItExists({ onOpenWaitlist }) {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glowing oval accents */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-25" aria-hidden="true">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-600/30 via-sky-500/20 to-purple-600/30 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Eyebrow + Heading + Lede */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
              <span>{t.whyEyebrow}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              El IDE de voz para <br />
              <span className="it text-sky-300 font-normal">ingeniería de software seria.</span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed">
              {t.whyLede}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenWaitlist}
                className="btn-primary text-sm px-6 py-3 cursor-pointer shadow-lg shadow-sky-500/20"
              >
                <span>Solicitar Acceso Temprano</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/MarianaAlexandra05/OpenBasePresentation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-5 py-3 text-decoration-none"
              >
                <span>Ver Arquitectura en GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Metrics Bento Stats from Openbase Cloud */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
              <div className="bb-wrap" aria-hidden="true">
                <div className="bb-beam bb-beam-1"></div>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-400 mb-2">
                {t.whyStat1Count}
              </div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase leading-snug">
                {t.whyStat1Label}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
              <div className="bb-wrap" aria-hidden="true">
                <div className="bb-beam bb-beam-2"></div>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 mb-2">
                {t.whyStat2Count}
              </div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase leading-snug">
                {t.whyStat2Label}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400 mb-2">
                {t.whyStat3Count}
              </div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase leading-snug">
                {t.whyStat3Label}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/[0.08] relative overflow-hidden group">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 mb-2">
                {t.whyStat4Count}
              </div>
              <div className="text-xs font-bold tracking-wider text-slate-300 uppercase leading-snug">
                {t.whyStat4Label}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
