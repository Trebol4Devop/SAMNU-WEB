import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1024);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartRef = useRef(null);

    const slides = useMemo(() => [
        { src: './assets/images-proyects/gallery/gallery_1_calculo_biseccion.png', altKey: 'slide0_alt' },
        { src: './assets/images-proyects/gallery/gallery_2_modo_oscuro.png', altKey: 'slide1_alt' },
        { src: './assets/images-proyects/gallery/gallery_3_tarea_entradas_pdf.png', altKey: 'slide2_alt' },
        { src: './assets/images-proyects/gallery/gallery_4_tabla_iteraciones_pdf.png', altKey: 'slide3_alt' },
        { src: './assets/images-proyects/gallery/gallery_5_grafica_convergencia_pdf.png', altKey: 'slide4_alt' },
        { src: './assets/images-proyects/gallery/gallery_6_datos_caratula.png', altKey: 'slide5_alt' },
        { src: './assets/images-proyects/gallery/gallery_7_acerca_de_samnu.png', altKey: 'slide6_alt' }
    ], []);

    useEffect(() => {
        const updateWidth = () => setWindowWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const stepAngle = slides.length > 0 ? 360 / slides.length : 0;

    const radius = useMemo(() => {
        if (slides.length <= 1) return 0;
        const isMobile = windowWidth < 640;
        const isTablet = windowWidth >= 640 && windowWidth < 1024;
        const halfCardWidth = isMobile ? 150 : isTablet ? 230 : 290;
        const baseRadius = isMobile ? 420 : isTablet ? 640 : 860;
        const halfAngleRadians = (stepAngle * Math.PI) / 360;
        const safeRadius = Math.round(halfCardWidth / Math.tan(halfAngleRadians) + 90);
        return Math.max(baseRadius, safeRadius);
    }, [slides.length, stepAngle, windowWidth]);

    const showNext = useCallback(() => {
        if (slides.length < 2) return;
        setCurrentIndex((current) => (current + 1) % slides.length);
    }, [slides.length]);

    const showPrevious = useCallback(() => {
        if (slides.length < 2) return;
        setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (slides.length <= 1 || isHovered) return;
        const timer = setInterval(() => {
            showNext();
        }, 5500);
        return () => clearInterval(timer);
    }, [slides.length, isHovered, showNext]);

    const handleTouchStart = (event) => {
        const touch = event.touches[0];
        touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event) => {
        const start = touchStartRef.current;
        touchStartRef.current = null;
        if (!start || slides.length < 2) return;
        const touch = event.changedTouches[0];
        const deltaX = start.x - touch.clientX;
        const deltaY = start.y - touch.clientY;
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) showNext();
            else showPrevious();
        }
    };

    return (
        <section id="galeria" className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto transition-colors duration-300 relative select-none">
            <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {t('gallery.header_title')}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {t('gallery.header_subtitle')}
                </p>
            </div>

            {/* 3D Cylindrical Perspective Carousel */}
            <div 
                className="relative flex min-h-[380px] sm:min-h-[500px] md:min-h-[580px] w-full flex-col items-center justify-center overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* 3D Viewport with Perspective */}
                <div 
                    className="relative flex w-full flex-1 items-center justify-center overflow-hidden py-6" 
                    style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}
                >
                    <div
                        className="relative flex items-center justify-center will-change-transform"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(-${radius}px) rotateY(${-currentIndex * stepAngle}deg)`,
                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {slides.map((item, index) => {
                            const isCurrent = index === currentIndex;
                            let distance = Math.abs(index - currentIndex);
                            distance = Math.min(distance, slides.length - distance);

                            const slideZ = isCurrent ? radius + 40 : radius - 30;

                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        if (!isCurrent) setCurrentIndex(index);
                                    }}
                                    style={{
                                        position: 'absolute',
                                        transform: `rotateY(${index * stepAngle}deg) translateZ(${slideZ}px)`,
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                    className={`flex items-center justify-center transition-all duration-500 ${
                                        isCurrent 
                                            ? 'z-30 opacity-100 scale-100 cursor-default' 
                                            : distance === 1 
                                            ? 'z-10 opacity-65 scale-85 hover:opacity-85 cursor-pointer' 
                                            : 'z-0 opacity-0 scale-75 pointer-events-none'
                                    }`}
                                >
                                    {/* Pure image without container or text */}
                                    <img
                                        src={item.src}
                                        alt={t(`gallery.${item.altKey}`)}
                                        className="w-[82vw] max-w-[320px] sm:max-w-[460px] md:max-w-[580px] h-auto max-h-[44vh] sm:max-h-[52vh] object-contain block select-none shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
                                        loading="eager"
                                        draggable={false}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Floating Navigation Controls */}
                {slides.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label={t('gallery.prev')}
                            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer dark:bg-neutral-900/95 dark:text-neutral-100 backdrop-blur-md"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label={t('gallery.next')}
                            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer dark:bg-neutral-900/95 dark:text-neutral-100 backdrop-blur-md"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Clean Minimalist Indicators */}
            <div className="flex justify-center gap-2 mt-8 z-10 relative" aria-label="Indicadores de galería">
                {slides.map((_, idx) => (
                    <button 
                        key={idx} 
                        type="button" 
                        className={`h-[2px] transition-all duration-300 cursor-pointer ${
                            idx === currentIndex 
                                ? 'w-8 bg-neutral-900 dark:bg-white' 
                                : 'w-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                        }`} 
                        aria-label={`Ir a imagen ${idx + 1}`}
                        onClick={() => setCurrentIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
