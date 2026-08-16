import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Zap, Box, ShieldCheck, Check, X, ArrowRight } from 'lucide-react';

export function ArchitectureComparison() {
  const { t } = useLanguage();

  const comparisonRows = [
    {
      metric: "Consumo de Memoria RAM",
      metricEn: "RAM Memory Footprint",
      docker: "4,000 MB (VM Docker Desktop)",
      native: "< 45 MB en reposo (-88%)",
      winIcon: true
    },
    {
      metric: "Tiempo de Arranque del IDE",
      metricEn: "Cold Boot Time",
      docker: "45 - 90 segundos (Hyper-V / WSL2)",
      native: "< 0.4 segundos (Proceso Win32)",
      winIcon: true
    },
    {
      metric: "Latencia de Audio en Vivo",
      metricEn: "Real-time Voice Latency",
      docker: "180 - 320 ms (Puente de red virtual)",
      native: "Sub-20 ms (DirectSound / WASAPI)",
      winIcon: true
    },
    {
      metric: "Bloqueo Concurrente de Archivos",
      metricEn: "Concurrent File Locking",
      docker: "Inestable en monturas 9P/SMB",
      native: "Nativo con msvcrt.locking en NTFS",
      winIcon: true
    },
    {
      metric: "Supervisor de Servicios",
      metricEn: "Service Supervisor",
      docker: "Docker Compose / Daemon Linux",
      native: "JSON Units (~/.openbase/windows-units)",
      winIcon: true
    },
    {
      metric: "Soporte de Terminales",
      metricEn: "Native Terminal Support",
      docker: "Limitado dentro del contenedor",
      native: "PowerShell 7, CMD, Warp & Windows Terminal",
      winIcon: true
    }
  ];

  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-sm"></span>
          <span>{t.compTag}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          {t.compTitle}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
          {t.compDesc}
        </p>
      </div>

      {/* Comparison Table */}
      <div className="glass-card rounded-2xl border border-white/[0.12] overflow-hidden max-w-5xl mx-auto shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/90 border-b border-white/[0.1] text-xs uppercase font-bold tracking-wider text-slate-300">
              <tr>
                <th className="p-4 sm:p-6 w-1/3">Capacidad Técnica</th>
                <th className="p-4 sm:p-6 text-slate-400 w-1/3">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-slate-500" />
                    <span>{t.compDockerHead}</span>
                  </div>
                </th>
                <th className="p-4 sm:p-6 text-sky-300 bg-blue-600/10 border-l border-blue-500/20 w-1/3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>{t.compNativeHead}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] bg-slate-950/60">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-6 font-semibold text-slate-200">
                    {row.metric}
                  </td>
                  <td className="p-4 sm:p-6 text-slate-400 font-mono text-xs flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{row.docker}</span>
                  </td>
                  <td className="p-4 sm:p-6 font-mono text-xs font-semibold text-emerald-300 bg-blue-600/5 border-l border-blue-500/20">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400 stroke-[3] shrink-0" />
                      <span>{row.native}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
