import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function SamnuWeb() {
    const { t } = useTranslation();
    const [isIframeActive, setIsIframeActive] = useState(false);
    const [isLoadingIframe, setIsLoadingIframe] = useState(false);
    const iframeRef = useRef(null);

    const handleLaunchEmbedded = () => {
        setIsLoadingIframe(true);
        setIsIframeActive(true);
    };

    const handleReload = () => {
        if (iframeRef.current) {
            setIsLoadingIframe(true);
            iframeRef.current.src = './web/';
        }
    };

    const handleOpenNewTab = () => {
        window.open('./web/', '_blank', 'noopener,noreferrer');
    };

    return (
        <section 
            id="web" 
            className="py-20 sm:py-28 px-6 sm:px-12 max-w-6xl mx-auto transition-colors duration-300 relative"
            aria-label={t('web_app.header_title')}
        >
            {/* Section Header */}
            <div className="section-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white">
                    {t('web_app.header_title')}
                </h2>
            </div>

            {/* Mac Window Mockup */}
            <div className="reveal-on-scroll relative w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl shadow-neutral-950/10 dark:shadow-black/50">
                {/* Mac Window Title Bar */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-100/90 dark:bg-neutral-900/90 border-b border-neutral-200/80 dark:border-neutral-800">
                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-2xs"></span>
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-2xs"></span>
                        <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-2xs"></span>
                    </div>

                    {/* Window Controls on Top Right */}
                    <div className="flex items-center gap-2">
                        {isIframeActive && (
                            <button
                                type="button"
                                onClick={handleReload}
                                title={t('web_app.reload')}
                                aria-label={t('web_app.reload')}
                                className="btn-fluid inline-flex items-center justify-center p-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white rounded-lg cursor-pointer"
                            >
                                <ion-icon name="refresh-outline" style={{ fontSize: '1.15rem' }}></ion-icon>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mac Window Stage / Body */}
                <div className="w-full relative flex flex-col items-center justify-center bg-neutral-50/50 dark:bg-neutral-950">
                    {!isIframeActive ? (
                        /* Pre-Launch Content */
                        <div className="w-full py-16 sm:py-24 px-6 sm:px-12 flex flex-col items-center text-center max-w-2xl mx-auto">
                            {/* Logo Avatar */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 flex items-center justify-center mb-6 shadow-sm">
                                <img 
                                    src="./assets/images-proyects/logos/Logo SANMU - sin fondo sin nombre.png" 
                                    alt="Logo SAMNU" 
                                    className="h-12 sm:h-14 w-auto transform transition-transform duration-500 hover:scale-110" 
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                                {t('web_app.preview_heading')}
                            </h3>

                            {/* Subheading */}
                            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed mb-8">
                                {t('web_app.preview_subheading')}
                            </p>

                            {/* Action Buttons: Integrated Mode + Open New Tab */}
                            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                                <button 
                                    type="button"
                                    onClick={handleLaunchEmbedded}
                                    className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 shadow-lg shadow-black/15 dark:shadow-white/5 hover:shadow-xl rounded-xl cursor-pointer min-w-[200px]"
                                >
                                    <ion-icon name="play-outline" style={{ fontSize: '1.25rem' }}></ion-icon>
                                    <span>{t('web_app.launch_embedded')}</span>
                                </button>

                                <button 
                                    type="button"
                                    onClick={handleOpenNewTab}
                                    className="btn-fluid group inline-flex min-h-12 items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-200/80 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-xs sm:text-sm font-medium uppercase tracking-wider text-neutral-800 dark:text-neutral-200 shadow-xs hover:shadow-md rounded-xl cursor-pointer min-w-[200px]"
                                >
                                    <ion-icon name="open-outline" style={{ fontSize: '1.2rem' }}></ion-icon>
                                    <span>{t('web_app.open_new_tab')}</span>
                                    <span className="text-xs transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Live Integrated View */
                        <div className="w-full min-h-[580px] sm:min-h-[700px] lg:min-h-[760px] relative flex flex-col bg-black">
                            {isLoadingIframe && (
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-neutral-950/90">
                                    <div className="w-8 h-8 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin mb-3"></div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                                        {t('web_app.loading_app')}
                                    </span>
                                </div>
                            )}
                            <iframe
                                ref={iframeRef}
                                src="./web/"
                                title="SAMNU Web Application"
                                className="w-full h-[580px] sm:h-[700px] lg:h-[760px] border-0"
                                allow="fullscreen; clipboard-write; storage-access"
                                onLoad={() => setIsLoadingIframe(false)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
