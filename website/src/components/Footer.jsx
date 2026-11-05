import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-100/80 dark:bg-[#070707] text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300 pt-20 pb-12 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto flex flex-col gap-14">
                
                {/* Upper Tier: Support & Patronage Hub */}
                <div className="bg-white/80 dark:bg-neutral-900/60 p-8 sm:p-10 rounded-2xl shadow-sm border border-neutral-200/60 dark:border-neutral-800/80 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left reveal-on-scroll">
                    <div className="max-w-xl">
                        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-primary font-semibold block mb-2">
                            {t('footer.support_tag')}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                            {t('footer.support_title')}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('footer.support_desc')}
                        </p>
                    </div>

                    {/* Donation Buttons with Fluid Hover Physics */}
                    <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                        <a 
                            href="https://buymeacoffee.com/trebol4devop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 bg-[#FFDD00] hover:bg-[#ffe338] text-neutral-950 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm hover:shadow-xl hover:shadow-amber-500/20 cursor-pointer"
                        >
                            <ion-icon name="cafe-outline" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            <span>Buy Me a Coffee</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>

                        <a 
                            href="https://www.paypal.com/paypalme/TrebolDevop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 px-6 py-3 bg-[#0070BA] hover:bg-[#007ed1] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                        >
                            <ion-icon name="logo-paypal" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            <span>PayPal</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>
                    </div>
                </div>

                {/* Middle Tier: Official Channels (Discord, LinkedIn, GitHub, Contact) */}
                <div className="flex flex-col items-center gap-6 text-center reveal-on-scroll">
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                        {t('footer.community_title')}
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        {/* Discord */}
                        <a 
                            href="https://discord.gg/h9c6M97b" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-fluid group inline-flex min-h-10 items-center gap-2 px-5 py-2.5 bg-neutral-200/80 hover:bg-[#5865F2] hover:text-white dark:bg-neutral-900 dark:hover:bg-[#5865F2] text-neutral-800 dark:text-neutral-200 dark:hover:text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="logo-discord" style={{ fontSize: '1.2rem' }}></ion-icon>
                            <span>{t('footer.discord')}</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>

                        {/* LinkedIn */}
                        <a 
                            href="https://www.linkedin.com/company/trebol4devop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-fluid group inline-flex min-h-10 items-center gap-2 px-5 py-2.5 bg-neutral-200/80 hover:bg-[#0A66C2] hover:text-white dark:bg-neutral-900 dark:hover:bg-[#0A66C2] text-neutral-800 dark:text-neutral-200 dark:hover:text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="logo-linkedin" style={{ fontSize: '1.2rem' }}></ion-icon>
                            <span>{t('footer.linkedin')}</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>

                        {/* GitHub */}
                        <a 
                            href="https://github.com/trebol4devop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-fluid group inline-flex min-h-10 items-center gap-2 px-5 py-2.5 bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900 dark:hover:bg-white dark:hover:text-neutral-950 text-neutral-800 dark:text-neutral-200 text-xs font-medium uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.2rem' }}></ion-icon>
                            <span>{t('footer.github')}</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                        </a>

                        {/* Contact */}
                        <a 
                            href="mailto:trebol4devop@proton.me"
                            className="btn-fluid group inline-flex min-h-10 items-center gap-2 px-5 py-2.5 bg-neutral-200/80 hover:bg-brand-primary hover:text-white dark:bg-neutral-900 dark:hover:bg-brand-primary text-neutral-800 dark:text-neutral-200 dark:hover:text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow-xs hover:shadow-md cursor-pointer"
                        >
                            <ion-icon name="mail-outline" style={{ fontSize: '1.2rem' }}></ion-icon>
                            <span>{t('footer.contact')}</span>
                            <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">✉</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Tier: Branding, USAC Notice & Copyright */}
                <div className="border-t border-neutral-200/70 dark:border-neutral-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-xs text-neutral-500 dark:text-neutral-500 font-sans">
                    <div className="flex items-center gap-3">
                        <img 
                            src="./assets/images-proyects/logos/Logo Trébol Asociados_sinFondo.png" 
                            alt="Logo Trébol Asociados" 
                            className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert" 
                        />
                        <p className="leading-snug max-w-sm">
                            <strong className="text-neutral-800 dark:text-neutral-200 font-medium">SAMNU</strong> {t('footer.edu_notice')}
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-1 font-mono text-[11px]">
                        <span>{t('footer.version_info')}</span>
                        <p className="uppercase tracking-wider">
                            {t('footer.copyright')}
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}