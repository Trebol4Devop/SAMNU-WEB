import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LangToggle from './LangToggle';

export default function Navbar() {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            setScrollProgress(scrolled);

            const sections = ['inicio', 'caracteristicas', 'descargas', 'galeria', 'equipo'];
            const scrollPosition = winScroll + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const h = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + h) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'inicio', label: t('nav.inicio') },
        { id: 'caracteristicas', label: t('nav.caracteristicas') },
        { id: 'descargas', label: t('nav.descargas') },
        { id: 'galeria', label: t('nav.galeria') },
        { id: 'equipo', label: t('nav.equipo') }
    ];

    return (
        <>
            {/* Top Scroll Progress Indicator */}
            <div 
                className="fixed top-0 left-0 h-[2px] bg-brand-primary z-[60] transition-all duration-75 pointer-events-none"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            {/* Persistent, High-Contrast Floating Navbar */}
            <header 
                id="header" 
                className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-md shadow-xs transition-colors duration-300"
            >
                <div className="max-w-6xl mx-auto w-full h-full px-5 sm:px-8 flex items-center justify-between">
                    {/* Brand */}
                    <a 
                        href="#inicio" 
                        className="flex items-center gap-3 group cursor-pointer shrink-0"
                        aria-label="Ir al inicio de SAMNU"
                    >
                        <img 
                            src="./assets/images-proyects/logos/Logo SANMU - sin fondo sin nombre.png" 
                            alt="Logo SAMNU" 
                            className="h-8 sm:h-9 w-auto group-hover:scale-105 transition-transform duration-300" 
                        />
                        <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-brand-primary transition-colors leading-none">
                            SAMNU
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="flex items-center gap-5 sm:gap-7 lg:gap-8">
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegación principal">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a 
                                        key={link.id}
                                        href={`#${link.id}`} 
                                        className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                            isActive 
                                                ? 'text-brand-primary dark:text-blue-400 font-semibold' 
                                                : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
                                        }`}
                                    >
                                        {link.label}
                                        {isActive && (
                                            <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-primary dark:bg-blue-400 rounded-full transition-all duration-300" />
                                        )}
                                    </a>
                                );
                            })}
                        </nav>




                        {/* Toggles */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <LangToggle />
                            <ThemeToggle />

                            {/* Mobile Hamburger Menu Toggle */}
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                                className="md:hidden min-h-10 min-w-10 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Drawer */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 z-40 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-2xl px-6 py-6 shadow-2xl transition-all duration-300 animate-fadeIn">
                        <nav className="flex flex-col gap-1.5 font-sans">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center justify-between py-3 px-3.5 text-sm transition-colors ${
                                            isActive
                                                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold'
                                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 font-medium'
                                        }`}
                                    >
                                        <span>{link.label}</span>
                                        <span className="font-mono text-xs opacity-60">0{navLinks.indexOf(link) + 1}</span>
                                    </a>
                                );
                            })}

                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}
