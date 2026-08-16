import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function DiagnosticsDoctor() {
  const { t } = useLanguage();
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true);

  const checks = [
    { title: "Windows NT Kernel 10.0 (x64)", result: "PASS (OK)" },
    { title: "LiveKit Server Nativo (~/.openbase/bin/livekit-server.exe)", result: "PRESENTE (v1.8.2)" },
    { title: "Puerto TCP 7999 Binding (WASAPI Audio)", result: "LIBRE & VINCULADO" },
    { title: "Audio Subsystem (WASAPI DirectSound)", result: "24-bit / 48kHz OK" },
    { title: "Win32 Units Registry (~/.openbase/windows-units)", result: "4 UNIDADES REGISTRADAS" },
    { title: "Bloqueo NTFS Concurrente (msvcrt.locking)", result: "MUTEX OK" }
  ];

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 1000);
  };

  return (
    <section className="diagnostics-section" id="diagnostics">
      <div className="section-header">
        <span className="section-tag" id="diag-tag">{t.diagTag}</span>
        <h2 className="section-title" id="diag-title">{t.diagTitle}</h2>
        <p className="section-desc" id="diag-desc">
          {t.diagDesc}
        </p>
      </div>

      <div className="doctor-console-card">
        <div className="doctor-header-bar">
          <div className="doctor-title-group">
            <h3 id="diag-subheading">{t.diagSubheading || "Simulador de openbase-coder doctor"}</h3>
            <p id="diag-subdesc">{t.diagSubdesc || "Comprueba la salud del puerto 7999, LiveKit server nativo, backend de audio y directorios de unidades de Windows."}</p>
          </div>
          <button 
            onClick={handleRun}
            disabled={isRunning}
            className="primary-btn" 
            id="run-doctor-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span id="run-doctor-btn-text">
              {isRunning ? "Verificando..." : (t.runDoctorBtnText || "Ejecutar Diagnóstico")}
            </span>
          </button>
        </div>

        <div className="doctor-terminal-box">
          <div className="doctor-results-list" id="doctor-results-list">
            {checks.map((chk, i) => (
              <div className="doctor-row" key={i}>
                <div className="diag-item-left">
                  <span className="diag-icon-ok">✓</span>
                  <span>{chk.title}</span>
                </div>
                <div className="diag-item-right">
                  <code>{chk.result}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
