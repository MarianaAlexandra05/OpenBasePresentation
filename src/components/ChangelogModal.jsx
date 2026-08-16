import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Tag, Monitor, CheckCircle, Zap, Shield } from 'lucide-react';

export function ChangelogModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-left">
      <div className="relative w-full max-w-2xl glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.15] bg-[#0B0F1A]/95 shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="bb-wrap" aria-hidden="true">
          <div className="bb-beam bb-beam-1"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white cursor-pointer transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider w-fit mb-3">
          <Tag className="w-3.5 h-3.5" />
          <span>Release v2.4.0 — Windows Native</span>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-2">
          Notas de la Versión v2.4.0
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          Esta versión marca la transición histórica del stack basado en Docker hacia una arquitectura 100% nativa sobre el kernel Win32 de Windows.
        </p>

        <div className="space-y-6 text-sm">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08]">
            <h4 className="text-xs font-bold font-mono text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>1. Supervisor de Servicios Win32 Desacoplado</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reemplaza dependencias de systemd/launchd por descriptores JSON en <code>~/.openbase/windows-units</code> y procesos detached con banderas <code>CREATE_NEW_PROCESS_GROUP</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08]">
            <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>2. Servidor de Voz LiveKit Binario Nativo (.exe)</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Descarga y orquestación automática del binario oficial de LiveKit Server para Windows x86_64 y ARM64, eliminando cualquier puente de red virtual.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08]">
            <h4 className="text-xs font-bold font-mono text-purple-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>3. Bloqueo Concurrente msvcrt.locking</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implementación especializada de bloqueo atómico sobre el sistema de archivos NTFS para permitir múltiples agentes autónomos trabajando en paralelo sin condiciones de carrera.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary py-2.5 px-6 text-xs cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
