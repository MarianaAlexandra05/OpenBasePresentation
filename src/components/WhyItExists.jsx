import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function WhyItExists({ onOpenWaitlist }) {
  const { t } = useLanguage();

  return (
    <section className="why-section" id="why">
      <div className="section-header">
        <span className="section-tag" id="why-tag">{t.whyEyebrow || "POR QUÉ EXISTE"}</span>
        <h2 className="section-title">El IDE de Voz para Ingeniería Real</h2>
        <p className="section-desc">
          {t.whyLede || "Inicia sesiones de Codex, Claude Code o Gemini por voz y mantenlas activas desde cualquier lugar. Aprueba comandos, revisa reportes y analiza diffs sin estar encadenado a tu escritorio."}
        </p>
      </div>

      {/* 4 Métricas Clave de Rendimiento */}
      <div className="why-metrics-grid">
        <div className="why-stat-card">
          <div className="why-stat-num text-sky-400">{t.whyStat1Count || "24/7"}</div>
          <div className="why-stat-label">{t.whyStat1Label || "LLAMADAS DE VOZ EN VIVO"}</div>
        </div>

        <div className="why-stat-card">
          <div className="why-stat-num text-emerald-400">{t.whyStat2Count || "13/13"}</div>
          <div className="why-stat-label">{t.whyStat2Label || "COMPROBACIONES LOCALES OK"}</div>
        </div>

        <div className="why-stat-card">
          <div className="why-stat-num text-purple-400">{t.whyStat3Count || "45 MB"}</div>
          <div className="why-stat-label">{t.whyStat3Label || "RAM ULTRA BAJA (SIN DOCKER)"}</div>
        </div>

        <div className="why-stat-card">
          <div className="why-stat-num text-cyan-400">{t.whyStat4Count || "<20 ms"}</div>
          <div className="why-stat-label">{t.whyStat4Label || "LATENCIA DE VOZ LOCAL"}</div>
        </div>
      </div>

      {/* Fila de Botones de Acción */}
      <div className="why-cta-row">
        <button
          onClick={onOpenWaitlist}
          className="primary-btn cursor-pointer"
        >
          <span>Solicitar Acceso Temprano</span>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </button>

        <a
          href="https://github.com/MarianaAlexandra05/OpenBasePresentation"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-btn"
        >
          <span>Ver Arquitectura en GitHub</span>
        </a>
      </div>
    </section>
  );
}
