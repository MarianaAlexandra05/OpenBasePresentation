import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

export function Navbar({ onOpenWaitlist, onOpenChangelog }) {
  const { lang, toggleLang, t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <aside className="announcement-banner" id="announcement-banner">
        <div className="banner-container">
          <span className="banner-tag" id="banner-tag">{t.bannerTag}</span>
          <span className="banner-text" id="banner-text">
            <strong>Openbase Coder v2.4 para Windows</strong> — Soporte 100% nativo Win32, LiveKit integrado y cero necesidad de Docker.
          </span>
          <a href="#quickstart-section" className="banner-link" id="banner-cta">{t.bannerCta}</a>
        </div>
      </aside>

      {/* Navigation Bar */}
      <header className="site-header" id="site-header">
        <nav className="nav-container" aria-label="Navegación principal">
          
          {/* Brand Logo */}
          <a href="#" className="brand-logo" id="brand-logo" aria-label="Openbase Coder Inicio">
            <svg className="logo-symbol" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="#141824" />
              <path d="M12 12C12 9.79 13.79 8 16 8H21V18H12V12Z" fill="#0078D4" />
              <path d="M21 18H30V24C30 26.21 28.21 28 26 28H21V18Z" fill="#38BDF8" />
              <path d="M23 8H30V15L21 18L23 8Z" fill="#0EA5E9" />
              <path d="M12 21L21 18L19 28H12V21Z" fill="#0284C7" />
            </svg>
            <span className="brand-text">OPENBASE <span className="brand-sub">CODER</span></span>
            <span className="edition-badge" id="edition-badge">
              <svg className="win-icon" viewBox="0 0 16 16" fill="currentColor" width="11" height="11">
                <path d="M0 2.25L6.5 1.3V7.5H0V2.25ZM0 8.5H6.5V14.7L0 13.75V8.5ZM7.5 1.15L16 0V7.5H7.5V1.15ZM7.5 8.5H16V16L7.5 14.85V8.5Z" />
              </svg>
              WIN32
            </span>
          </a>

          {/* Desktop Navigation Links (with ample spacing) */}
          <div className="nav-links" id="nav-links">
            <a href="#overview" className="nav-link">{t.navOverview}</a>
            <a href="#demo" className="nav-link">{t.navDemo}</a>
            <a href="#comparison" className="nav-link">{t.navComparison}</a>
            <a href="#features" className="nav-link">{t.navFeatures}</a>
            <a href="#mobile-sync" className="nav-link">Móvil</a>
            <a href="#diagnostics" className="nav-link">{t.navDiagnostics}</a>
            <a href="#quickstart-section" className="nav-link">{t.navInstall}</a>
          </div>

          {/* Right Action Items */}
          <div className="nav-actions">
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="lang-toggle-btn" 
              id="lang-toggle-btn" 
              title="Cambiar idioma (ES/EN)" 
              aria-label="Cambiar idioma"
            >
              <span className="lang-label" id="current-lang">{lang.toUpperCase()}</span>
              <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>

            {/* GitHub Link */}
            <a 
              href="https://github.com/MarianaAlexandra05/OpenBasePresentation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-btn" 
              id="github-header-link" 
              aria-label="Repositorio en GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="github-text">GitHub</span>
            </a>

            {/* Primary Action Button */}
            <button 
              onClick={onOpenWaitlist}
              className="primary-btn nav-download-btn" 
              id="nav-download-cta"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14">
                <path d="M0 2.25L6.5 1.3V7.5H0V2.25ZM0 8.5H6.5V14.7L0 13.75V8.5ZM7.5 1.15L16 0V7.5H7.5V1.15ZM7.5 8.5H16V16L7.5 14.85V8.5Z" />
              </svg>
              <span id="nav-btn-text">{t.navBtnText}</span>
            </button>

            {/* Hamburger Button for Mobile / Small Screens */}
            <button 
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="nav-burger-btn"
              aria-label="Abrir menú de navegación"
            >
              {isDrawerOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isDrawerOpen && (
          <div className="nav-mobile-drawer">
            <a href="#overview" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navOverview}</a>
            <a href="#demo" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navDemo}</a>
            <a href="#comparison" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navComparison}</a>
            <a href="#features" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navFeatures}</a>
            <a href="#mobile-sync" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">Móvil</a>
            <a href="#diagnostics" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navDiagnostics}</a>
            <a href="#quickstart-section" onClick={() => setIsDrawerOpen(false)} className="nav-drawer-link">{t.navInstall}</a>
          </div>
        )}
      </header>
    </>
  );
}
