import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('openbase_lang') || 'es';
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('openbase_lang', next);
      return next;
    });
  };

  const t = translations[lang] || translations.es;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
