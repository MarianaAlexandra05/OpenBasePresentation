import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, Copy, Check, Sparkles, Download, CheckCircle2, Monitor } from 'lucide-react';

export function InstallationGuide() {
  const { t } = useLanguage();
  const [activeInstallTab, setActiveInstallTab] = useState('uv'); // 'uv' | 'winget' | 'msi' | 'ps'
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const steps = [
    {
      title: t.step1Title || "Instala la CLI nativa con uv",
      desc: t.step1Desc || "Ejecuta en PowerShell como usuario normal (sin permisos de administrador requeridos):",
      cmd: activeInstallTab === 'uv'
        ? "uv tool install openbase-coder"
        : activeInstallTab === 'winget'
        ? "winget install Openbase.Coder"
        : activeInstallTab === 'ps'
        ? "irm https://openbase.cloud/install.ps1 | iex"
        : "Descargar instalador: Openbase-Coder-v2.4-x64.msi"
    },
    {
      title: t.step2Title || "Ejecuta el Asistente de Configuración Guiada",
      desc: t.step2Desc || "Configura tu proveedor de voz (Cartesia/ElevenLabs), backend de código y autenticación:",
      cmd: "openbase setup"
    },
    {
      title: t.step3Title || "Inicia los Servicios en Segundo Plano",
      desc: t.step3Desc || "El supervisor Win32 levantará LiveKit Server y la API automáticamente:",
      cmd: "openbase run --detached"
    }
  ];

  return (
    <section id="install" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
          <span>{t.installTag}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.installTitle}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
          {t.installDesc}
        </p>

        {/* Method Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveInstallTab('uv')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${
              activeInstallTab === 'uv'
                ? 'bg-blue-600/30 border-sky-400 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white'
            }`}
          >
            Astral uv (Recomendado)
          </button>

          <button
            onClick={() => setActiveInstallTab('winget')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${
              activeInstallTab === 'winget'
                ? 'bg-blue-600/30 border-sky-400 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white'
            }`}
          >
            Windows Package Manager (winget)
          </button>

          <button
            onClick={() => setActiveInstallTab('ps')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${
              activeInstallTab === 'ps'
                ? 'bg-blue-600/30 border-sky-400 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white'
            }`}
          >
            PowerShell One-Liner
          </button>

          <button
            onClick={() => setActiveInstallTab('msi')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all border ${
              activeInstallTab === 'msi'
                ? 'bg-blue-600/30 border-sky-400 text-white shadow-lg shadow-blue-500/20'
                : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:text-white'
            }`}
          >
            Instalador Windows .MSI
          </button>
        </div>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.1] flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-sky-400 border border-blue-500/30 flex items-center justify-center font-bold text-xs font-mono mb-4">
                0{idx + 1}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">{step.desc}</p>
            </div>

            <div className="mt-4">
              <div className="p-3 rounded-xl bg-slate-950/90 border border-white/[0.08] flex items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-2 min-w-0 font-mono text-xs text-sky-300">
                  <span className="text-slate-500 shrink-0">&gt;</span>
                  <code className="truncate">{step.cmd}</code>
                </div>
                <button
                  onClick={() => copyToClipboard(step.cmd, idx)}
                  className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white shrink-0 cursor-pointer transition-colors"
                  title="Copiar comando"
                >
                  {copiedIndex === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
