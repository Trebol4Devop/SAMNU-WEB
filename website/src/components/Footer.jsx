import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-900 dark:bg-[#050505] text-neutral-400 py-12 px-6 border-t border-black/10 dark:border-white/5 transition-colors duration-300">
            <div className="footer-content max-w-4xl mx-auto flex flex-col items-center text-center gap-6 reveal-on-scroll">
                <img src="./assets/images-proyects/logos/Logo Trébol Asociados_sinFondo.png" alt="Trebol Logo" className="h-10 sm:h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-all" />
                <p className="text-sm text-neutral-300 font-sans">
                    <strong className="text-white font-semibold">SAMNU</strong> {t('footer.edu_notice')}
                </p>
                <div className="socials flex items-center gap-6 text-sm font-medium">
                    <a 
                        href="https://github.com/trebol4devop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-brand-primary transition-colors text-white"
                    >
                        <ion-icon name="logo-github" style={{ fontSize: '1.25rem' }}></ion-icon> GitHub
                    </a>
                    <a 
                        href="mailto:trebol4devop@proton.me"
                        className="inline-flex items-center gap-2 hover:text-brand-primary transition-colors text-white"
                    >
                        <ion-icon name="mail-outline" style={{ fontSize: '1.25rem' }}></ion-icon> {t('footer.contact')}
                    </a>
                </div>
                <p className="copyright text-xs text-neutral-500 dark:text-neutral-600 font-mono tracking-wider uppercase mt-4">
                    {t('footer.copyright')}
                </p>
            </div>
        </footer>
    );
}
