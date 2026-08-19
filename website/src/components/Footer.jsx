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
                <div className="flex flex-wrap items-center justify-center gap-3.5 my-1">
                    <a 
                        href="https://buymeacoffee.com/trebol4devop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-neutral-950 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <ion-icon name="cafe-outline" style={{ fontSize: '1.2rem' }}></ion-icon> Buy Me a Coffee
                    </a>
                    <a 
                        href="https://www.paypal.com/paypalme/TrebolDevop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0070BA] hover:bg-[#0070BA]/90 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
                    >
                        <ion-icon name="logo-paypal" style={{ fontSize: '1.2rem' }}></ion-icon> PayPal
                    </a>
                </div>

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
                        href="https://www.linkedin.com/company/trebol4devop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:text-brand-primary transition-colors text-white"
                    >
                        <ion-icon name="logo-linkedin" style={{ fontSize: '1.25rem' }}></ion-icon> LinkedIn
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
