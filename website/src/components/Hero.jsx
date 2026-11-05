import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    const images = [
        './assets/images-proyects/hero/hero_v231_light.png',
        './assets/images-proyects/hero/hero_v231_dark.png'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0.5);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setOpacity(1);
            }, 300);
        }, 15000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePlayStore = () => {
        window.open('https://play.google.com/store/apps/details?id=com.samnu.app&pcampaignid=web_share', '_blank');
    };

    const handleMicrosoftStore = () => {
        window.open('https://apps.microsoft.com/detail/9NWF3SF61RHS?hl=en-us&gl=GT&ocid=pdpshare', '_blank');
    };

    return (
        <section id="inicio" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
            <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                
                {/* Left Column: Information & Actions */}
                <div className="flex-1 z-10 text-center lg:text-left">
                    
                    {/* Prominent Version Title (Free-flowing, no container) */}
                    <div className="text-lg sm:text-2xl font-mono uppercase tracking-[0.2em] text-brand-primary font-semibold mb-3">
                        {t('hero.version_headline')}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-neutral-900 dark:text-white leading-[1.08] mb-6 tracking-tight">
                        {t('hero.title_prefix')}{' '}
                        <span className="text-brand-primary animate-shimmer inline-block">
                            {t('hero.title_highlight')}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-sans">
                        {t('hero.description')}
                    </p>

                    {/* Action Buttons (Fluid kinetic micro-interactions) */}
                    <div className="flex flex-col items-center lg:items-start gap-4">
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full">
                            <button 
                                id="btn-playstore" 
                                className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-lg shadow-black/15 dark:shadow-white/5 hover:shadow-xl cursor-pointer"
                                onClick={handlePlayStore}
                            >
                                <ion-icon name="logo-google-playstore" style={{ fontSize: '1.2rem' }}></ion-icon> 
                                <span>{t('hero.playstore')}</span>
                                <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                            </button>

                            <button 
                                id="btn-microsoftstore" 
                                className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 bg-neutral-100 hover:bg-neutral-200/90 dark:bg-neutral-900 dark:hover:bg-neutral-850 px-7 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-900 dark:text-white shadow-sm hover:shadow-md cursor-pointer"
                                onClick={handleMicrosoftStore}
                            >
                                <ion-icon name="logo-windows" style={{ fontSize: '1.2rem' }}></ion-icon> 
                                <span>{t('hero.microsoftstore')}</span>
                                <span className="text-xs transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                            </button>

                            <a 
                                href="#descargas" 
                                className="btn-fluid inline-flex min-h-12 items-center justify-center gap-1.5 px-5 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span>{t('hero.btn_direct_downloads')}</span>
                                <span className="text-xs transition-transform duration-300 ease-out hover:translate-y-0.5">↓</span>
                            </a>
                        </div>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                            {t('hero.official_sources')}
                        </p>
                    </div>

                </div>

                {/* Right Column: 3D High-Tech Hero Display Image (Decoupled Fluid Levitation & Tilt) */}
                <div className="flex-1 w-full flex justify-center items-center relative py-8 lg:py-0">
                    <div className="hero-float-wrapper w-full max-w-[540px] flex items-center justify-center">
                        <div 
                            className="hero-mockup-interactive relative z-10 w-full aspect-[16/10] flex items-center justify-center cursor-pointer select-none"
                            onClick={() => {
                                setOpacity(0.35);
                                setTimeout(() => {
                                    setCurrentIndex((prev) => (prev + 1) % images.length);
                                    setOpacity(1);
                                }, 220);
                            }}
                            title="Clic para alternar tema de la captura"
                        >
                            <img 
                                src={images[currentIndex]} 
                                alt="SAMNU v2.3.1 Software Interface" 
                                className="w-full h-auto max-h-[460px] object-contain select-none pointer-events-none"
                                style={{ 
                                    opacity: opacity,
                                    transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                                draggable={false}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
