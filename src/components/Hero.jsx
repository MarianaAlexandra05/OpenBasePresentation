import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Copy, Check, Play, Download, Zap, Cpu, Activity, ShieldCheck } from 'lucide-react';

export function Hero({ onOpenWaitlist }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const command = "uv tool install openbase-coder";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="overview" className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Border Beam Pill Badge */}
        <div className="inline-block relative rounded-full p-[1px] mb-6 overflow-hidden">
          <div className="bb-wrap" aria-hidden="true">
            <div className="bb-beam bb-beam-1"></div>
            <div className="bb-beam bb-beam-2"></div>
          </div>
          <div className="glass-pill bg-slate-900/80 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-sky-400">
              {t.heroBadgeText}
            </span>
          </div>
        </div>

        {/* Hero Headline with Instrument Serif */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          {t.heroTitlePart1}{' '}
          <span className="block mt-2">
            {t.heroTitlePart2}{' '}
            <span className="it text-sky-300 font-normal">{t.heroTitlePart2Italic}</span>
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          {t.heroDescription}
        </p>

        {/* Hero Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#install"
            className="btn-primary px-8 py-3.5 text-base shadow-xl shadow-blue-500/25 group text-decoration-none"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>{t.heroBtnDownload}</span>
          </a>

          <a
            href="#demo"
            className="btn-secondary px-7 py-3.5 text-base group text-decoration-none"
          >
            <Play className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>{t.heroBtnDemo}</span>
          </a>
        </div>

        {/* Quick Copy Command Bar */}
        <div className="inline-flex items-center gap-3 bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-md mb-12">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs">
            <Terminal className="w-4 h-4" />
            <span className="text-slate-500">PS C:\&gt;</span>
          </div>
          <code className="font-mono text-sm text-slate-200 selection:bg-blue-600">
            {command}
          </code>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
            title={copied ? t.heroCopied : t.heroCopyHint}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">{t.heroCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Tech Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="glass-card p-4 rounded-xl border border-white/[0.08] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">{t.specEngine}</div>
              <div className="text-sm font-semibold text-slate-200 mt-0.5">{t.specEngineVal}</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/[0.08] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">{t.specMemory}</div>
              <div className="text-sm font-semibold text-emerald-400 mt-0.5">{t.specMemoryVal}</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/[0.08] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">{t.specVoice}</div>
              <div className="text-sm font-semibold text-sky-300 mt-0.5">{t.specVoiceVal}</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-white/[0.08] flex items-start gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">{t.specDocker}</div>
              <div className="text-sm font-semibold text-purple-300 mt-0.5">{t.specDockerVal}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
