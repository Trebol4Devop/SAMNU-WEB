import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero({ onOpenContactForm }) {
    const { t } = useTranslation();
    const images = [
        './assets/images-proyects/hero/inicioSamnu.png',
        './assets/images-proyects/hero/inicioSamnu1.1.2.0.png'
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

    const handleMicrosoftStore = () => {
        window.open('https://apps.microsoft.com/detail/9NWF3SF61RHS?hl=en-us&gl=GT&ocid=pdpshare', '_blank');
    };

    return (
        <section id="inicio" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 pt-32 pb-20 overflow-hidden bg-neutral-50 dark:bg-[#0A0A0A] transition-colors duration-300">
            {/* Glow / Blur de fondo */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex-1 z-10 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
                <span className="inline-block bg-brand-primary/15 dark:bg-brand-primary/10 text-brand-primary border border-brand-primary/30 font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-widest font-semibold mb-6 hover:scale-105 transition-transform duration-300 cursor-default shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    {t('hero.version')}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                    {t('hero.title_prefix')} <br />
                    <span className="text-brand-primary animate-shimmer inline-block">{t('hero.title_highlight')}</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 mb-8 font-sans leading-relaxed">
                    {t('hero.description')}
                </p>
                <div className="flex flex-col items-center lg:items-start gap-4">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
                        <button 
                            id="btn-playstore" 
                            className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-3.5 rounded-lg hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer"
                            onClick={onOpenContactForm}
                        >
                            <ion-icon name="logo-google-playstore" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            {t('hero.playstore')}
                        </button>
                        <button 
                            id="btn-microsoftstore" 
                            className="inline-flex items-center justify-center gap-2 border border-black/10 dark:border-white/10 px-6 py-3.5 rounded-lg font-bold hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300 text-neutral-900 dark:text-white text-sm sm:text-base cursor-pointer bg-neutral-100 dark:bg-[#171717] hover:border-brand-primary/30"
                            onClick={handleMicrosoftStore}
                        >
                            <ion-icon name="logo-windows" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            {t('hero.microsoftstore')}
                        </button>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-1">
                        {t('hero.official_sources')}
                    </p>
                </div>
            </div>

            <div className="flex-1 flex justify-center relative z-10 w-full max-w-xl lg:max-w-none perspective-2000">
                <img 
                    src={images[currentIndex]} 
                    alt="Interfaz de SAMNU" 
                    className="max-w-[85%] sm:max-w-[75%] lg:max-w-[85%] h-auto rounded-2xl animate-float-3d border border-black/5 dark:border-white/10"
                    style={{ opacity: opacity }}
                />
            </div>
        </section>
    );
}
