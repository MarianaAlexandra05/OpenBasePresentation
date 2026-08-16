import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Footer({ onOpenWaitlist }) {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="brand-logo" aria-label="Openbase Coder Inicio">
            <svg className="logo-symbol" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="#141824" />
              <path d="M12 12C12 9.79 13.79 8 16 8H21V18H12V12Z" fill="#0078D4" />
              <path d="M21 18H30V24C30 26.21 28.21 28 26 28H21V18Z" fill="#38BDF8" />
              <path d="M23 8H30V15L21 18L23 8Z" fill="#0EA5E9" />
              <path d="M12 21L21 18L19 28H12V21Z" fill="#0284C7" />
            </svg>
            <span className="brand-text">OPENBASE <span className="brand-sub">CODER</span></span>
          </a>
          <p className="footer-tagline" id="footer-tagline">
            {t.footerTagline}
          </p>
          <div className="system-status-indicator">
            <span className="status-dot green"></span>
            <span id="footer-status-text">{t.footerStatusText || "Servicios Windows Nativo: Operacionales"}</span>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Producto</h4>
            <ul>
              <li><a href="#overview">Resumen</a></li>
              <li><a href="#demo">Demo en Vivo</a></li>
              <li><a href="#comparison">Arquitectura</a></li>
              <li><a href="#features">Capacidades</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Ecosistema</h4>
            <ul>
              <li><a href="https://github.com/MarianaAlexandra05/OpenBasePresentation" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="https://openbase.cloud" target="_blank" rel="noopener noreferrer" className="highlight-link">Openbase Cloud</a></li>
              <li><a href="https://livekit.io" target="_blank" rel="noopener noreferrer">LiveKit WebRTC</a></li>
              <li><a href="https://docs.astral.sh/uv" target="_blank" rel="noopener noreferrer">Astral uv</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Comunidad</h4>
            <ul>
              <li><a href="https://discord.gg/openbase" target="_blank" rel="noopener noreferrer">Discord Oficial</a></li>
              <li><a href="https://twitter.com/openbase" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href="#diagnostics">Herramienta Doctor</a></li>
              <li><a href="#quickstart-section">Instalación</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; 2026 Openbase Community. Licencia Apache 2.0. Código Abierto para Ingeniería Real.
        </div>
        <div className="footer-sub-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Seguridad</a>
        </div>
      </div>
    </footer>
  );
}
