import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function InstallationGuide() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('uv'); // 'uv' | 'winget' | 'msi' | 'ps'
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const getStep1Cmd = () => {
    switch (activeTab) {
      case 'uv': return "uv tool install openbase-coder";
      case 'winget': return "winget install Openbase.Coder";
      case 'ps': return "irm https://openbase.cloud/install.ps1 | iex";
      case 'msi': return "msiexec /i OpenbaseCoder-v2.4-x64.msi /quiet";
      default: return "uv tool install openbase-coder";
    }
  };

  return (
    <section className="quickstart-section" id="quickstart-section">
      <div className="section-header">
        <span className="section-tag" id="install-tag">{t.installTag}</span>
        <h2 className="section-title" id="install-title">{t.installTitle}</h2>
        <p className="section-desc" id="install-desc">
          {t.installDesc}
        </p>
      </div>

      <div className="install-switcher-box">
        {/* Method Switcher Tabs */}
        <div className="install-tabs" role="tablist">
          <button 
            onClick={() => setActiveTab('uv')}
            className={`install-tab-btn ${activeTab === 'uv' ? 'active' : ''}`}
            role="tab"
          >
            uv (Recomendado)
          </button>
          <button 
            onClick={() => setActiveTab('winget')}
            className={`install-tab-btn ${activeTab === 'winget' ? 'active' : ''}`}
            role="tab"
          >
            winget / Windows Package
          </button>
          <button 
            onClick={() => setActiveTab('ps')}
            className={`install-tab-btn ${activeTab === 'ps' ? 'active' : ''}`}
            role="tab"
          >
            PowerShell Script
          </button>
          <button 
            onClick={() => setActiveTab('msi')}
            className={`install-tab-btn ${activeTab === 'msi' ? 'active' : ''}`}
            role="tab"
          >
            Instalador Windows .MSI
          </button>
        </div>

        {/* Panel Body */}
        <div className="install-panel-body">
          {/* Step 1 */}
          <div className="install-step-box">
            <div className="step-num">1</div>
            <div className="step-details">
              <h4 id="step1-title">{t.step1Title}</h4>
              <p id="step1-desc">{t.step1Desc}</p>
              <div className="code-copy-row">
                <code>{getStep1Cmd()}</code>
                <button 
                  onClick={() => handleCopy(getStep1Cmd(), 1)}
                  className={`copy-btn mini ${copiedIdx === 1 ? 'copied' : ''}`}
                  aria-label="Copiar comando paso 1"
                >
                  <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span className="copy-tooltip">{copiedIdx === 1 ? "¡Copiado!" : "Copiar"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="install-step-box">
            <div className="step-num">2</div>
            <div className="step-details">
              <h4 id="step2-title">{t.step2Title}</h4>
              <p id="step2-desc">{t.step2Desc}</p>
              <div className="code-copy-row">
                <code>openbase-coder setup</code>
                <button 
                  onClick={() => handleCopy("openbase-coder setup", 2)}
                  className={`copy-btn mini ${copiedIdx === 2 ? 'copied' : ''}`}
                  aria-label="Copiar comando paso 2"
                >
                  <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span className="copy-tooltip">{copiedIdx === 2 ? "¡Copiado!" : "Copiar"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="install-step-box">
            <div className="step-num">3</div>
            <div className="step-details">
              <h4 id="step3-title">{t.step3Title}</h4>
              <p id="step3-desc">{t.step3Desc}</p>
              <div className="code-copy-row">
                <code>openbase-coder services start</code>
                <button 
                  onClick={() => handleCopy("openbase-coder services start", 3)}
                  className={`copy-btn mini ${copiedIdx === 3 ? 'copied' : ''}`}
                  aria-label="Copiar comando paso 3"
                >
                  <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <span className="copy-tooltip">{copiedIdx === 3 ? "¡Copiado!" : "Copiar"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
