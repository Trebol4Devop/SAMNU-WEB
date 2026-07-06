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
        className="flex items-center gap-2 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-sm font-bold uppercase text-neutral-800 dark:text-neutral-200 cursor-pointer"
      >
        <Languages size={20} />
        <span className="hidden sm:inline">{(i18n.language || 'es').substring(0, 2)}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#171717] border border-black/10 dark:border-white/10 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                i18n.changeLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800 uppercase font-bold transition-colors cursor-pointer ${
                (i18n.language || '').startsWith(lang) ? 'text-brand-primary bg-black/5 dark:bg-white/5' : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              {lang === 'en' ? '🇺🇸 EN - English' : '🇪🇸 ES - Español'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LangToggle;
