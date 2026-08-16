import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function ArchitectureComparison() {
  const { t } = useLanguage();

  return (
    <section className="comparison-section" id="comparison">
      <div className="section-header">
        <span className="section-tag" id="comp-tag">{t.compTag}</span>
        <h2 className="section-title" id="comp-title">{t.compTitle}</h2>
        <p className="section-desc" id="comp-desc">
          {t.compDesc}
        </p>
      </div>

      <div className="comparison-grid">
        {/* Legacy Docker Container Column */}
        <div className="comparison-column">
          <div className="comparison-column-header">
            <h3 className="text-white font-bold text-lg">Versión Legacy (Docker / VM)</h3>
            <span className="col-tag legacy">DEPRECADO</span>
          </div>

          <div className="comparison-metrics-list">
            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name" id="metric-ram-title">{t.metricRamTitle}</span>
                <span className="metric-stat bad">~ 4,000 MB</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill legacy" style={{ width: '92%' }}></div>
              </div>
              <span className="metric-desc" id="metric-ram-sub">{t.metricRamSub}</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name" id="metric-lat-title">{t.metricLatTitle}</span>
                <span className="metric-stat bad">180 - 320 ms</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill legacy" style={{ width: '78%' }}></div>
              </div>
              <span className="metric-desc" id="metric-lat-sub">{t.metricLatSub}</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name" id="metric-vm-title">{t.metricVmTitle}</span>
                <span className="metric-stat bad">45 - 90 segs</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill legacy" style={{ width: '85%' }}></div>
              </div>
              <span className="metric-desc" id="metric-vm-sub">{t.metricVmSub}</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name" id="metric-compat-title">{t.metricCompatTitle}</span>
                <span className="metric-stat bad">Aislado en Linux</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill legacy" style={{ width: '40%' }}></div>
              </div>
              <span className="metric-desc" id="metric-compat-sub">{t.metricCompatSub}</span>
            </div>
          </div>
        </div>

        {/* Windows Native Column */}
        <div className="comparison-column native-highlight">
          <div className="comparison-column-header">
            <h3 className="text-white font-bold text-lg">Nueva Versión Windows Nativa (v2.4)</h3>
            <span className="col-tag native">RECOMENDADO</span>
          </div>

          <div className="comparison-metrics-list">
            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name">{t.metricRamTitle}</span>
                <span className="metric-stat good">&lt; 45 MB (-88%)</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill native" style={{ width: '12%' }}></div>
              </div>
              <span className="metric-desc">Servicio en segundo plano ligero y ultra optimizado.</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name">{t.metricLatTitle}</span>
                <span className="metric-stat good">Sub-20 ms (WASAPI)</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill native" style={{ width: '95%' }}></div>
              </div>
              <span className="metric-desc">Procesamiento de audio PCM directo sin puentes virtuales.</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name">{t.metricVmTitle}</span>
                <span className="metric-stat good">0 segs (Instantáneo)</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill native" style={{ width: '99%' }}></div>
              </div>
              <span className="metric-desc">Arranque inmediato sin máquinas virtuales ni Hyper-V.</span>
            </div>

            <div className="comparison-metric-card">
              <div className="metric-header">
                <span className="metric-name">{t.metricCompatTitle}</span>
                <span className="metric-stat good">100% Nativo Windows</span>
              </div>
              <div className="meter-container">
                <div className="meter-bar meter-fill native" style={{ width: '100%' }}></div>
              </div>
              <span className="metric-desc">Integrado con PowerShell, VS Code y Windows Terminal.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
