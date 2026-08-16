import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { doctorSteps } from '../data/mockData';
import { Stethoscope, CheckCircle2, RefreshCw, AlertCircle, Play, Sparkles } from 'lucide-react';

export function DiagnosticsDoctor() {
  const { t } = useLanguage();
  const [isRunning, setIsRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState(doctorSteps.map(s => s.id)); // default all checked or active
  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  const startDoctor = () => {
    setIsRunning(true);
    setCompletedSteps([]);
    setActiveStepIndex(0);

    doctorSteps.forEach((step, idx) => {
      setTimeout(() => {
        setCompletedSteps((prev) => [...prev, step.id]);
        setActiveStepIndex(idx + 1);

        if (idx === doctorSteps.length - 1) {
          setIsRunning(false);
          setActiveStepIndex(-1);
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="diagnostics" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
          <span>{t.diagTag}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.diagTitle}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
          {t.diagDesc}
        </p>
      </div>

      {/* Doctor Card Stage */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.12] max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="bb-wrap" aria-hidden="true">
          <div className="bb-beam bb-beam-1"></div>
        </div>

        {/* Doctor Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                WIN32 SUBSYSTEM HEALTH CHECK
              </div>
              <h3 className="text-lg font-bold text-white">openbase doctor --verbose</h3>
            </div>
          </div>

          <button
            onClick={startDoctor}
            disabled={isRunning}
            className="btn-primary py-2.5 px-5 text-xs font-bold flex items-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
          >
            {isRunning ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>{t.diagRunning}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>{t.diagBtn}</span>
              </>
            )}
          </button>
        </div>

        {/* Diagnostic Steps Grid */}
        <div className="space-y-3 mb-6">
          {doctorSteps.map((step, idx) => {
            const isCompleted = completedSteps.includes(step.id);
            const isCurrent = activeStepIndex === idx;

            return (
              <div
                key={step.id}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                  isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-100'
                    : isCurrent
                    ? 'bg-blue-950/30 border-sky-400/50 text-white animate-pulse'
                    : 'bg-white/[0.02] border-white/[0.05] text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 stroke-[2.5]" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-5 h-5 text-sky-400 animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600"></div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{step.name}</div>
                    <div className="text-xs font-mono text-slate-400 truncate">{step.detail}</div>
                  </div>
                </div>

                <div className="shrink-0">
                  {isCompleted ? (
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                      PASS
                    </span>
                  ) : isCurrent ? (
                    <span className="px-2.5 py-1 rounded-md bg-sky-500/20 text-sky-300 font-mono text-xs font-bold animate-pulse">
                      TESTING...
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-600">QUEUED</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Doctor Results Summary */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Subsistema Windows:</span>
            <span className="text-emerald-400 font-bold">100% OPERACIONAL</span>
          </div>
          <span className="text-xs font-mono text-slate-500">Kernel: NT 10.0 (Win32 API)</span>
        </div>

      </div>
    </section>
  );
}
