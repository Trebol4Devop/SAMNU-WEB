import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Team() {
    const { t } = useTranslation();

    return (
        <section id="equipo" className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-50 dark:bg-[#0A0A0A] transition-colors duration-300 relative">
            <div className="section-header text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-neutral-900 dark:text-white mb-4">
                    {t('team.header_title')} <span className="text-brand-primary">Trebol4Devop</span>
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans">
                    {t('team.header_subtitle')}
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
                <div className="team-card group relative bg-neutral-100 dark:bg-[#171717] p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-brand-primary/20 group-hover:border-brand-primary group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 shadow-md">
                        <img src="https://github.com/0520Jose.png" alt="José Monzón" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-1">José Monzón</h3>
                    <span className="text-xs font-mono tracking-wider uppercase text-brand-primary font-semibold mb-6 block">
                        {t('team.role_backend')}
                    </span>
                    <div className="boton mt-auto">
                        <a 
                            href="https://github.com/0520Jose" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-brand-primary hover:text-white text-neutral-800 dark:text-neutral-200 text-xs font-bold group-hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> GitHub
                        </a>
                    </div>
                </div>

                <div className="team-card group relative bg-neutral-100 dark:bg-[#171717] p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-brand-primary/20 group-hover:border-brand-primary group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 shadow-md">
                        <img src="https://github.com/DiegVas.png" alt="Diego Vásquez" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-1">Diego Vásquez</h3>
                    <span className="text-xs font-mono tracking-wider uppercase text-brand-primary font-semibold mb-6 block">
                        {t('team.role_frontend')}
                    </span>
                    <div className="boton mt-auto">
                        <a 
                            href="https://github.com/DiegVas" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-brand-primary hover:text-white text-neutral-800 dark:text-neutral-200 text-xs font-bold group-hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> GitHub
                        </a>
                    </div>
                </div>

                <div className="team-card group relative bg-neutral-100 dark:bg-[#171717] p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-brand-primary/20 group-hover:border-brand-primary group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 shadow-md">
                        <img src="https://github.com/Carlosdelcid05.png" alt="Carlos del Cid" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-1">Carlos del Cid</h3>
                    <span className="text-xs font-mono tracking-wider uppercase text-brand-primary font-semibold mb-6 block">
                        {t('team.role_pm')}
                    </span>
                    <div className="boton mt-auto">
                        <a 
                            href="https://github.com/Carlosdelcid05" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-brand-primary hover:text-white text-neutral-800 dark:text-neutral-200 text-xs font-bold group-hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> GitHub
                        </a>
                    </div>
                </div>

                <div className="team-card group relative bg-neutral-100 dark:bg-[#171717] p-8 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 dark:hover:border-brand-primary/50 hover:-translate-y-2.5 hover:shadow-[0_15px_35px_rgba(59,130,246,0.2)] transition-all duration-500 rounded-xl shadow-sm reveal-on-scroll flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-brand-primary/20 group-hover:border-brand-primary group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 shadow-md">
                        <img src="https://github.com/Farot3.png" alt="Ottoniel Vásquez" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-1">Ottoniel Vásquez</h3>
                    <span className="text-xs font-mono tracking-wider uppercase text-brand-primary font-semibold mb-6 block">
                        {t('team.role_backend')}
                    </span>
                    <div className="boton mt-auto">
                        <a 
                            href="https://github.com/Farot3" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-brand-primary hover:text-white text-neutral-800 dark:text-neutral-200 text-xs font-bold group-hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            <ion-icon name="logo-github" style={{ fontSize: '1.1rem' }}></ion-icon> GitHub
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="tech-stack max-w-xl mx-auto text-center pt-8 border-t border-black/10 dark:border-white/10 reveal-on-scroll">
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans">
                    {t('team.tech_stack')} <strong className="text-neutral-900 dark:text-white">Dart</strong> • <strong className="text-neutral-900 dark:text-white">Flutter</strong> • <strong className="text-neutral-900 dark:text-white">LaTeX</strong>
                </p>
            </div>
        </section>
    );
}
