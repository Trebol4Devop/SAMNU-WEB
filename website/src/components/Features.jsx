import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation();

    const forceDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleAndroidDownload = () => {
        const url = 'https://release-assets.githubusercontent.com/github-production-release-asset/1150943887/563a5059-8702-40aa-97a7-f8f96b8e5230?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-08-19T22%3A54%3A00Z&rscd=attachment%3B+filename%3DSAMNU-Android.-1.1.9.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-08-19T21%3A53%3A50Z&ske=2026-08-19T22%3A54%3A00Z&sks=b&skv=2018-11-09&sig=1k0%2FEp%2BRxMGTZh48zCgo5vhTiyY5GpASYPIvkPKqrug%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NzE3OTM5MywibmJmIjoxNzg3MTc3NTkzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.VSFHP9rOQx2gblDuzAqGfa__NL5VX-Qev65UXVP-fac&response-content-disposition=attachment%3B%20filename%3DSAMNU-Android.-1.1.9.apk&response-content-type=application%2Fvnd.android.package-archive';
        forceDownload(url);
    };

    const handleWindowsDownload = () => {
        const url = 'https://release-assets.githubusercontent.com/github-production-release-asset/1150943887/2a0df9e1-a6bd-4020-be52-cc1ece95b900?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-08-19T22%3A52%3A03Z&rscd=attachment%3B+filename%3DSAMNU-Windows-1.1.9.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-08-19T21%3A51%3A14Z&ske=2026-08-19T22%3A52%3A03Z&sks=b&skv=2018-11-09&sig=p2A14fNy4GjFj4p2jzwE51J9NFeOu8QrDRrTh2QO8NI%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NzE3OTU1MCwibmJmIjoxNzg3MTc3NzUwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.z0jbY_NdTUYF7Z7EQZ1WhVj1m0b72ZyquKct-aNE0D0&response-content-disposition=attachment%3B%20filename%3DSAMNU-Windows-1.1.9.exe&response-content-type=application%2Foctet-stream';
        forceDownload(url);
    };

    const handleManualDownload = () => {
        const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf';
        forceDownload(url);
    };

    return (
        <section id="info" className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-50 dark:bg-[#0A0A0A] transition-colors duration-300 relative">
            <div className="section-header text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-neutral-900 dark:text-white mb-4">
                    {t('features.header_title')}
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
                    {t('features.header_subtitle')}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
                <div className="feature-card group relative bg-neutral-100 dark:bg-[#171717] p-6 sm:p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/15 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            <ion-icon name="calculator-outline" style={{ fontSize: '1.75rem' }}></ion-icon>
                        </div>
                        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                            {t('features.card1_title')}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('features.card1_desc')}
                        </p>
                    </div>
                </div>

                <div className="feature-card group relative bg-neutral-100 dark:bg-[#171717] p-6 sm:p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/15 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            <ion-icon name="document-text-outline" style={{ fontSize: '1.75rem' }}></ion-icon>
                        </div>
                        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                            {t('features.card2_title')}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('features.card2_desc')}
                        </p>
                    </div>
                </div>

                <div className="feature-card group relative bg-neutral-100 dark:bg-[#171717] p-6 sm:p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/15 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            <ion-icon name="code-slash-outline" style={{ fontSize: '1.75rem' }}></ion-icon>
                        </div>
                        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                            {t('features.card3_title')}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('features.card3_desc')}
                        </p>
                    </div>
                </div>

                <div className="feature-card group relative bg-neutral-100 dark:bg-[#171717] p-6 sm:p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col justify-between">
                    <div>
                        <div className="w-14 h-14 rounded-lg bg-brand-primary/10 dark:bg-brand-primary/15 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                            <ion-icon name="school-outline" style={{ fontSize: '1.75rem' }}></ion-icon>
                        </div>
                        <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">
                            {t('features.card4_title')}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            {t('features.card4_desc')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="download-cta relative bg-neutral-100 dark:bg-[#171717] p-8 sm:p-12 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-primary/30 transition-all duration-300 shadow-sm reveal-on-scroll overflow-hidden flex flex-col items-center text-center max-w-4xl mx-auto">
                {/* Luz de fondo azul */}
                <div className="absolute inset-0 bg-brand-primary/10 blur-[80px] rounded-full transform scale-75 pointer-events-none" />
                
                <div className="z-10 relative mb-8">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-900 dark:text-white mb-2">
                        {t('features.cta_title')}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-sans">
                        {t('features.cta_desc')}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-6 z-10 relative">
                    <button 
                        id="btn-android" 
                        className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-lg hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer min-w-[160px]" 
                        onClick={handleAndroidDownload}
                    >
                        <ion-icon name="logo-android" style={{ fontSize: '1.4rem' }}></ion-icon> {t('features.btn_android')}
                    </button>
                    <button 
                        id="btn-windows" 
                        className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white font-bold px-6 py-3.5 md:px-8 md:py-4 rounded-lg hover:bg-brand-primary/80 hover:scale-105 active:scale-95 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer min-w-[160px]" 
                        onClick={handleWindowsDownload}
                    >
                        <ion-icon name="logo-windows" style={{ fontSize: '1.4rem' }}></ion-icon> {t('features.btn_windows')}
                    </button>
                </div>

                <div className="z-10 relative">
                    <button 
                        id="btn-manual" 
                        className="border border-black/10 dark:border-white/10 px-6 py-3 rounded-lg font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all text-neutral-900 dark:text-white text-sm sm:text-base cursor-pointer inline-flex items-center gap-2 bg-white/50 dark:bg-[#171717]" 
                        onClick={handleManualDownload}
                    >
                        <ion-icon name="book-outline" style={{ fontSize: '1.2rem' }}></ion-icon> {t('features.btn_manual')}
                    </button>
                </div>
            </div>
        </section>
    );
}
