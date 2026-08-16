import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mic, Bot, GitBranch, AlertTriangle, Check, X, Code2, Sparkles, FileCode } from 'lucide-react';

export function HowItWorks() {
  const { t } = useLanguage();
  const [approvedState, setApprovedState] = useState('pending'); // 'pending' | 'approved' | 'denied'

  const handleApprove = () => {
    setApprovedState('approved');
  };

  const handleDeny = () => {
    setApprovedState('denied');
  };

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
          <span>{t.howEyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.howTitle1}{' '}
          <span className="it text-sky-300 font-normal">{t.howTitle2Italic}</span>
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
          {t.howDesc}
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        
        {/* Card 1: DISPATCH */}
        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group">
          <div className="bb-wrap" aria-hidden="true">
            <div className="bb-beam bb-beam-1"></div>
          </div>

          <div>
            {/* Step Stamp */}
            <div className="text-[11px] font-mono font-bold text-sky-400 uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>{t.card1Step}</span>
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            </div>

            {/* Connection Items */}
            <div className="space-y-3 mb-6">
              {/* Voice Item */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-400 font-medium">{t.card1VoiceLabel}</div>
                  <div className="text-xs font-semibold text-slate-100 italic truncate">{t.card1VoiceText}</div>
                </div>
                <div className="flex gap-0.5 items-center">
                  <span className="w-1 h-3 bg-sky-400 rounded-full animate-pulse"></span>
                  <span className="w-1 h-5 bg-sky-400 rounded-full animate-pulse delay-75"></span>
                  <span className="w-1 h-2 bg-sky-400 rounded-full animate-pulse delay-150"></span>
                </div>
              </div>

              {/* Agent Routing */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-400 font-medium">{t.card1AgentLabel}</div>
                  <div className="text-xs font-semibold text-white">{t.card1AgentName}</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {t.card1AgentBadge}
                </span>
              </div>

              {/* Git Branch */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-400 font-medium">{t.card1BranchLabel}</div>
                  <div className="text-xs font-mono font-semibold text-white">{t.card1BranchName}</div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {t.card1BranchBadge}
                </span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-white/[0.06] pt-3">
            El motor de voz enruta el intent en menos de 20ms directamente al agente local.
          </div>
        </div>

        {/* Card 2: APPROVE */}
        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group">
          <div className="bb-wrap" aria-hidden="true">
            <div className="bb-beam bb-beam-2"></div>
          </div>

          <div>
            {/* Step Stamp */}
            <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>{t.card2Step}</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </div>

            {/* Approval Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-white/[0.08] mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">{t.card2Time}</div>
                    <div className="text-xs font-bold text-white">{t.card2Head}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  <AlertTriangle className="w-3 h-3" />
                  <span>{t.card2Badge}</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 mb-3">
                {t.card2Msg}
              </p>

              <div className="p-2 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-xs text-sky-300 mb-4 flex items-center gap-2">
                <span className="text-slate-500">PS&gt;</span>
                <code>pytest tests/test_auth.py --win-lock</code>
              </div>

              {approvedState === 'pending' && (
                <div className="flex gap-2">
                  <button
                    onClick={handleDeny}
                    className="flex-1 py-2 rounded-lg bg-white/[0.06] hover:bg-rose-500/20 text-slate-300 hover:text-rose-300 text-xs font-semibold border border-white/[0.08] hover:border-rose-500/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{t.card2Deny}</span>
                  </button>
                  <button
                    onClick={handleApprove}
                    className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{t.card2Approve}</span>
                  </button>
                </div>
              )}

              {approvedState === 'approved' && (
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{t.card2ApprovedToast}</span>
                  </span>
                  <button onClick={() => setApprovedState('pending')} className="text-[10px] text-slate-400 underline cursor-pointer">Reset</button>
                </div>
              )}

              {approvedState === 'denied' && (
                <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <X className="w-4 h-4 text-rose-400" />
                    <span>Ejecución cancelada por el usuario</span>
                  </span>
                  <button onClick={() => setApprovedState('pending')} className="text-[10px] text-slate-400 underline cursor-pointer">Reset</button>
                </div>
              )}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-white/[0.06] pt-3">
            Garantía de seguridad: ninguna acción destructiva se ejecuta sin autorización explícita.
          </div>
        </div>

        {/* Card 3: REVIEW */}
        <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group">
          <div className="bb-wrap" aria-hidden="true">
            <div className="bb-beam bb-beam-1"></div>
          </div>

          <div>
            {/* Step Stamp */}
            <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-6 flex items-center justify-between">
              <span>{t.card3Step}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {/* Diff Box */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-white/[0.08] font-mono text-xs mb-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-2">
                <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                  <FileCode className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t.card3File}</span>
                </div>
                <div className="text-[10px] space-x-1.5 font-bold">
                  <span className="text-emerald-400">+14</span>
                  <span className="text-rose-400">−3</span>
                </div>
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="diff-line-ctx px-2 py-0.5">def refresh_token(user_id):</div>
                <div className="diff-line-remove px-2 py-0.5">−   if os.path.exists(lock): return token</div>
                <div className="diff-line-add px-2 py-0.5">+   with win32_flock(lock, msvcrt.LK_NBLCK):</div>
                <div className="diff-line-add px-2 py-0.5">+       token = generate_atomic_jwt(user_id)</div>
                <div className="diff-line-ctx px-2 py-0.5">    return token</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="font-semibold text-slate-200">{t.card3Stats}</span>
              <span className="text-emerald-400 font-semibold">Ready to Merge</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-white/[0.06] pt-3">
            {t.card3Foot}
          </div>
        </div>

      </div>
    </section>
  );
}
