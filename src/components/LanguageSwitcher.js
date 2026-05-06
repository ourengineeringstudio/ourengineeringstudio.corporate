import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={ref}>
      <button
        className="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        LAN {language.toUpperCase()} ▼
      </button>
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleSelect('en')}
          >
            English
          </button>
          <button
            className={`language-option ${language === 'ja' ? 'active' : ''}`}
            onClick={() => handleSelect('ja')}
          >
            日本語
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
