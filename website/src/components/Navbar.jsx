import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

export default function Navbar() {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'info', 'galeria', 'equipo'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-12 py-4 bg-neutral-100/80 dark:bg-[#171717]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="flex items-center gap-3 group cursor-pointer">
                <img src="./assets/images-proyects/logos/Logo SANMU - sin fondo sin nombre.png" alt="Logo SAMNU" className="h-10 sm:h-11 w-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <h1 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-brand-primary transition-colors">SAMNU</h1>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-6 font-sans text-sm font-medium">
                        <li>
                            <a 
                                href="#inicio" 
                                className={`relative py-1 transition-colors duration-200 hover:text-brand-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 ${activeSection === 'inicio' ? 'text-brand-primary font-bold after:w-full' : 'text-neutral-600 dark:text-neutral-300 after:w-0 hover:after:w-full'}`}
                            >
                                {t('nav.inicio')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#info" 
                                className={`relative py-1 transition-colors duration-200 hover:text-brand-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 ${activeSection === 'info' ? 'text-brand-primary font-bold after:w-full' : 'text-neutral-600 dark:text-neutral-300 after:w-0 hover:after:w-full'}`}
                            >
                                {t('nav.info')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#galeria" 
                                className={`relative py-1 transition-colors duration-200 hover:text-brand-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 ${activeSection === 'galeria' ? 'text-brand-primary font-bold after:w-full' : 'text-neutral-600 dark:text-neutral-300 after:w-0 hover:after:w-full'}`}
                            >
                                {t('nav.galeria')}
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#equipo" 
                                className={`relative py-1 transition-colors duration-200 hover:text-brand-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand-primary after:transition-all after:duration-300 ${activeSection === 'equipo' ? 'text-brand-primary font-bold after:w-full' : 'text-neutral-600 dark:text-neutral-300 after:w-0 hover:after:w-full'}`}
                            >
                                {t('nav.equipo')}
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-2 border-l border-black/10 dark:border-white/10 pl-4">
                    <LangToggle />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
