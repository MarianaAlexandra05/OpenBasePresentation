import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Hero({ onOpenWaitlist }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const command = "uv tool install openbase-coder";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section" id="overview">
      <div className="hero-content">
        <div className="pill-badge" id="hero-pill-badge">
          <span className="badge-dot"></span>
          <span id="hero-badge-text">{t.heroBadgeText}</span>
        </div>

        <h1 className="hero-title" id="hero-title">
          {t.heroTitlePart1}<br />
          <span className="hero-gradient-text">{t.heroTitlePart2} <span className="it">{t.heroTitlePart2Italic}</span></span>
        </h1>

        <p className="hero-description" id="hero-description">
          {t.heroDescription}
        </p>

        <div className="hero-actions">
          <a href="#quickstart-section" className="primary-btn hero-main-btn" id="hero-primary-cta">
            <svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            <span id="hero-btn-download">{t.heroBtnDownload}</span>
          </a>

          <a href="#demo" className="secondary-btn" id="hero-secondary-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span id="hero-btn-demo">{t.heroBtnDemo}</span>
          </a>
        </div>

        {/* Quick Copy Command Bar */}
        <div className="quick-terminal-bar" id="quick-terminal-bar">
          <div className="term-prefix">
            <svg className="powershell-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <span>PS C:\&gt;</span>
          </div>
          <code className="term-command" id="hero-code-command">{command}</code>
          <button 
            onClick={handleCopy}
            className={`copy-btn ${copied ? 'copied' : ''}`} 
            id="hero-copy-btn" 
            aria-label="Copiar comando de instalación"
          >
            <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span className="copy-tooltip" id="hero-copy-tooltip">
              {copied ? (t.heroCopied || "¡Copiado!") : (t.heroCopyHint || "Copiar")}
            </span>
          </button>
        </div>

        {/* Tech Spec Highlights */}
        <div className="tech-spec-bar" id="tech-spec-bar">
          <div className="spec-item">
            <span className="spec-label" id="spec-engine-lbl">{t.specEngine}</span>
            <span className="spec-value">{t.specEngineVal}</span>
          </div>
          <div className="spec-divider"></div>
          <div className="spec-item">
            <span className="spec-label" id="spec-memory-lbl">{t.specMemory}</span>
            <span className="spec-value highlight-green">{t.specMemoryVal}</span>
          </div>
          <div className="spec-divider"></div>
          <div className="spec-item">
            <span className="spec-label" id="spec-voice-lbl">{t.specVoice}</span>
            <span className="spec-value highlight-blue">{t.specVoiceVal}</span>
          </div>
          <div className="spec-divider"></div>
          <div className="spec-item">
            <span className="spec-label" id="spec-docker-lbl">{t.specDocker}</span>
            <span className="spec-value highlight-green">{t.specDockerVal}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
