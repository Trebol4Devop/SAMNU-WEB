import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactModal({ isOpen, onClose }) {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.id === 'contact-form-overlay') {
            onClose();
        }
    };

    return (
        <div id="contact-form-overlay" className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={handleOverlayClick}>
            <div className="w-full max-w-lg bg-white dark:bg-[#171717] border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative animate-slideUp text-left">
                <button 
                    type="button" 
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold" 
                    id="close-contact-form" 
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3 pr-8 leading-snug">
                    {t('contact.title')}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-sans mb-6">
                    {t('contact.desc')}
                </p>

                <form action="https://formspree.io/f/xbdjevkz" method="POST" className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300">
                            {t('contact.label_name')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder={t('contact.placeholder_name')} 
                            required 
                            className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 focus:border-brand-primary focus:outline-none text-neutral-900 dark:text-white text-sm transition-colors" 
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300">
                            {t('contact.label_email')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder={t('contact.placeholder_email')} 
                            required 
                            className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 focus:border-brand-primary focus:outline-none text-neutral-900 dark:text-white text-sm transition-colors" 
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300">
                            {t('contact.label_message')} <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            placeholder={t('contact.placeholder_message')} 
                            required 
                            className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 focus:border-brand-primary focus:outline-none text-neutral-900 dark:text-white text-sm transition-colors resize-none" 
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-3.5 rounded-lg hover:bg-brand-primary/80 transition-all duration-300 text-sm sm:text-base shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer w-full"
                    >
                        {t('contact.btn_send')}
                    </button>
                </form>
            </div>
        </div>
    );
}
