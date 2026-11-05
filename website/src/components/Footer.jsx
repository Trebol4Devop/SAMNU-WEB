import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-100/60 dark:bg-[#070707] text-neutral-600 dark:text-neutral-400 py-16 px-6 transition-colors duration-300">
            <div className="footer-content max-w-4xl mx-auto flex flex-col items-center text-center gap-6 reveal-on-scroll">
                
                {/* Team Logo */}
                <div className="flex items-center gap-2 group cursor-default">
                    <img 
                        src="./assets/images-proyects/logos/Logo Trébol Asociados_sinFondo.png" 
                        alt="Trebol Asociados Logo" 
                        className="h-8 sm:h-9 w-auto opacity-75 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert" 
                    />
                </div>

                {/* Educational Notice */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans max-w-md leading-relaxed">
                    <strong className="text-neutral-900 dark:text-white font-medium">SAMNU</strong> {t('footer.edu_notice')}
                </p>

                {/* Support Actions (Borderless, clean solid buttons) */}
                <div className="flex flex-col items-center gap-2 my-1">
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500">
                        {t('footer.support')}
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a 
                            href="https://buymeacoffee.com/trebol4devop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex min-h-9 items-center gap-2 px-4 py-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-neutral-950 font-medium text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="cafe-outline" style={{ fontSize: '1.05rem' }}></ion-icon> 
                            <span>Buy Me a Coffee</span>
                            <span className="text-[10px] opacity-70">↗</span>
                        </a>
                        <a 
                            href="https://www.paypal.com/paypalme/TrebolDevop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex min-h-9 items-center gap-2 px-4 py-2 bg-[#0070BA] hover:bg-[#0070BA]/90 text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="logo-paypal" style={{ fontSize: '1.05rem' }}></ion-icon> 
                            <span>PayPal</span>
                            <span className="text-[10px] opacity-70">↗</span>
                        </a>
                    </div>
                </div>

                {/* Social Links */}
                <div className="socials flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-medium pt-2">
                    <a 
                        href="https://github.com/trebol4devop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> GitHub
                        <span className="text-[10px] opacity-60">↗</span>
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/trebol4devop" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ion-icon name="logo-linkedin" style={{ fontSize: '1.1rem' }}></ion-icon> LinkedIn
                        <span className="text-[10px] opacity-60">↗</span>
                    </a>
                    <a 
                        href="mailto:trebol4devop@proton.me"
                        className="inline-flex items-center gap-1.5 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ion-icon name="mail-outline" style={{ fontSize: '1.1rem' }}></ion-icon> {t('footer.contact')}
                    </a>
                </div>

                {/* Institution & Copyright */}
                <div className="flex flex-col items-center gap-1 pt-4 w-full">
                    <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                        {t('footer.version_info')}
                    </span>
                    <p className="copyright text-[11px] text-neutral-400 dark:text-neutral-500 font-mono tracking-wider uppercase">
                        {t('footer.copyright')}
                    </p>
                </div>

            </div>
        </footer>
    );
}
