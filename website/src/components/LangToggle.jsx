import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LangToggle() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['es', 'en'];

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target && !e.target.closest('.lang-dropdown')) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div className="relative lang-dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-xs font-mono uppercase font-semibold text-neutral-700 dark:text-neutral-300 cursor-pointer"
      >
        <Languages size={16} />
        <span>{(i18n.language || 'es').substring(0, 2)}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#141414] shadow-2xl z-50 overflow-hidden flex flex-col">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                i18n.changeLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                (i18n.language || '').startsWith(lang) 
                  ? 'text-brand-primary bg-neutral-100 dark:bg-neutral-800 font-semibold' 
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'
              }`}
            >
              {lang === 'en' ? 'EN — English' : 'ES — Español'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LangToggle;
