import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation();

    const forceDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleAndroidDownload = () => {
        const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v2.3.1/SAMNU-Android-2.3.1.apk';
        forceDownload(url);
    };

    const handleWindowsDownload = () => {
        const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v2.3.1/SAMNU-Windows-2.3.1.exe';
        forceDownload(url);
    };

    const handleLinuxDownload = () => {
        const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v2.3.1/SAMNU-Linux-2.3.1.AppImage';
        forceDownload(url);
    };

    const handleManualDownload = () => {
        const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v1.1.9/Manual-Usuario-SAMNU-v1.1.9.pdf';
        forceDownload(url);
    };

    const handleGitHubReleases = () => {
        window.open('https://github.com/Trebol4Devop/SAMNU/releases/tag/v2.3.1', '_blank');
    };

    return (
        <div id="info">
            {/* Features Section */}
            <section id="caracteristicas" className="py-24 sm:py-32 px-6 sm:px-12 max-w-6xl mx-auto transition-colors duration-300 relative">
                <div className="section-header text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                        {t('features.header_title')}
                    </h2>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                        {t('features.header_subtitle')}
                    </p>
                </div>
                
                {/* Continuous, Borderless Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="feature-card group relative bg-neutral-100/70 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 p-7 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-neutral-200/80 dark:bg-neutral-800 flex items-center justify-center text-brand-primary mb-6 transition-colors">
                                <ion-icon name="calculator-outline" style={{ fontSize: '1.5rem' }}></ion-icon>
                            </div>
                            <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 dark:text-white mb-2">
                                {t('features.card1_title')}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                                {t('features.card1_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="feature-card group relative bg-neutral-100/70 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 p-7 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-neutral-200/80 dark:bg-neutral-800 flex items-center justify-center text-brand-primary mb-6 transition-colors">
                                <ion-icon name="document-text-outline" style={{ fontSize: '1.5rem' }}></ion-icon>
                            </div>
                            <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 dark:text-white mb-2">
                                {t('features.card2_title')}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                                {t('features.card2_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="feature-card group relative bg-neutral-100/70 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 p-7 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-neutral-200/80 dark:bg-neutral-800 flex items-center justify-center text-brand-primary mb-6 transition-colors">
                                <ion-icon name="code-slash-outline" style={{ fontSize: '1.5rem' }}></ion-icon>
                            </div>
                            <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 dark:text-white mb-2">
                                {t('features.card3_title')}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                                {t('features.card3_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="feature-card group relative bg-neutral-100/70 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 p-7 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-neutral-200/80 dark:bg-neutral-800 flex items-center justify-center text-brand-primary mb-6 transition-colors">
                                <ion-icon name="school-outline" style={{ fontSize: '1.5rem' }}></ion-icon>
                            </div>
                            <h3 className="text-base sm:text-lg font-display font-bold text-neutral-900 dark:text-white mb-2">
                                {t('features.card4_title')}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                                {t('features.card4_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dedicated Direct Downloads Section (High-visibility, Borderless, Smooth Continuous Fluid Canvas) */}
            <section id="descargas" className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto transition-colors duration-300 relative">
                <div className="download-cta relative bg-neutral-100/70 dark:bg-neutral-900/70 p-8 sm:p-14 shadow-lg reveal-on-scroll flex flex-col items-center text-center">
                    
                    <div className="z-10 relative mb-8 max-w-2xl">
                        <h3 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                            {t('features.cta_title')}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('features.cta_desc')}
                        </p>
                    </div>

                    {/* Primary OS Direct Download Buttons (No borders, solid high-contrast) */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-7 z-10 relative w-full">
                        <button 
                            id="btn-android" 
                            className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 shadow-md shadow-black/10 cursor-pointer min-w-[160px]" 
                            onClick={handleAndroidDownload}
                        >
                            <ion-icon name="logo-android" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            <span>{t('features.btn_android')}</span>
                        </button>

                        <button 
                            id="btn-windows" 
                            className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 shadow-md shadow-black/10 cursor-pointer min-w-[160px]" 
                            onClick={handleWindowsDownload}
                        >
                            <ion-icon name="logo-windows" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            <span>{t('features.btn_windows')}</span>
                        </button>

                        <button 
                            id="btn-linux" 
                            className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 shadow-md shadow-black/10 cursor-pointer min-w-[160px]" 
                            onClick={handleLinuxDownload}
                        >
                            <ion-icon name="logo-tux" style={{ fontSize: '1.25rem' }}></ion-icon> 
                            <span>{t('features.btn_linux')}</span>
                        </button>
                    </div>

                    {/* Secondary Actions (Borderless, soft background) */}
                    <div className="flex flex-wrap items-center justify-center gap-3.5 z-10 relative">
                        <button 
                            id="btn-manual" 
                            className="inline-flex min-h-10 items-center gap-2 bg-neutral-200/70 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer" 
                            onClick={handleManualDownload}
                        >
                            <ion-icon name="book-outline" style={{ fontSize: '1.1rem' }}></ion-icon> 
                            <span>{t('features.btn_manual')}</span>
                        </button>

                        <button 
                            id="btn-github-release" 
                            className="inline-flex min-h-10 items-center gap-2 bg-neutral-200/70 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer" 
                            onClick={handleGitHubReleases}
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> 
                            <span>{t('features.btn_github_release')}</span>
                            <span className="text-xs">↗</span>
                        </button>
                    </div>

                    {/* Security Notice */}
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500 mt-6 z-10 relative">
                        {t('features.security_notice')}
                    </span>
                </div>
            </section>
        </div>
    );
}
