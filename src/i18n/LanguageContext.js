import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import en from './translations/en';
import ja from './translations/ja';

const translations = { en, ja };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage || '';
    return browserLang.startsWith('ja') ? 'ja' : 'en';
  });

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
