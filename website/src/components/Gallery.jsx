import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotationAngle, setRotationAngle] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1024);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartRef = useRef(null);
    const filmstripRef = useRef(null);

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

    // Generous trigonometric radius calculation ensuring elegant spacing and zero overlapping
    const radius = useMemo(() => {
        if (slides.length <= 1) return 0;
        const isMobile = windowWidth < 640;
        const isTablet = windowWidth >= 640 && windowWidth < 1024;
        const halfCardWidth = isMobile ? 150 : isTablet ? 210 : 260;
        const baseRadius = isMobile ? 480 : isTablet ? 660 : 840;
        const halfAngleRadians = (stepAngle * Math.PI) / 360;
        const safeRadius = Math.round(halfCardWidth / Math.tan(halfAngleRadians) + 160);
        return Math.max(baseRadius, safeRadius);
    }, [slides.length, stepAngle, windowWidth]);

    const showNext = useCallback(() => {
        if (slides.length < 2) return;
        setRotationAngle((prev) => prev + stepAngle);
        setActiveIndex((current) => (current + 1) % slides.length);
    }, [slides.length, stepAngle]);

    const showPrevious = useCallback(() => {
        if (slides.length < 2) return;
        setRotationAngle((prev) => prev - stepAngle);
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    }, [slides.length, stepAngle]);

    const goToIndex = useCallback((targetIndex) => {
        if (targetIndex === activeIndex) return;
        let diff = targetIndex - activeIndex;
        if (diff > slides.length / 2) diff -= slides.length;
        if (diff < -slides.length / 2) diff += slides.length;
        setRotationAngle((prev) => prev + diff * stepAngle);
        setActiveIndex(targetIndex);
    }, [activeIndex, slides.length, stepAngle]);

    // Auto-advance every 6s when not hovered
    useEffect(() => {
        if (slides.length <= 1 || isHovered) return;
        const timer = setInterval(() => {
            showNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length, isHovered, showNext]);

    // Keyboard navigation (only when not typing in form inputs)
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
            if (event.key === 'ArrowRight') showNext();
            if (event.key === 'ArrowLeft') showPrevious();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [showNext, showPrevious]);

    // Horizontally center active thumbnail strictly within the filmstrip container without moving window scroll
    useEffect(() => {
        const container = filmstripRef.current;
        const thumbnail = container?.children[activeIndex];
        if (!container || !thumbnail) return;

        const containerRect = container.getBoundingClientRect();
        const thumbRect = thumbnail.getBoundingClientRect();
        const offset = (thumbRect.left - containerRect.left) - (containerRect.width / 2) + (thumbRect.width / 2);

        container.scrollBy({
            left: offset,
            behavior: 'smooth'
        });
    }, [activeIndex]);

    // Touch swipe handling adapted from Photos_Web_Site
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
        <section id="galeria" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto transition-colors duration-300 relative select-none">
            <div className="section-header text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal-on-scroll relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {t('gallery.header_title')}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {t('gallery.header_subtitle')}
                </p>
            </div>

            {/* 3D Cylindrical Carousel Viewport */}
            <div 
                className="relative flex min-h-[400px] sm:min-h-[480px] md:min-h-[560px] w-full flex-col items-center justify-center overflow-hidden py-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => { touchStartRef.current = null; }}
            >
                {/* 3D Perspective Stage */}
                <div 
                    className="relative flex w-full flex-1 items-center justify-center" 
                    style={{ perspective: '1500px', perspectiveOrigin: '50% 50%' }}
                >
                    {/* Continuous 3D Cylinder Drum */}
                    <div
                        className="relative flex items-center justify-center will-change-transform"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(-${radius}px) rotateY(${rotationAngle}deg)`,
                            transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {slides.map((item, index) => {
                            const isCurrent = index === activeIndex;
                            let distance = Math.abs(index - activeIndex);
                            distance = Math.min(distance, slides.length - distance);

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => {
                                        if (!isCurrent) goToIndex(index);
                                    }}
                                    aria-label={t(`gallery.${item.altKey}`)}
                                    aria-current={isCurrent ? 'true' : undefined}
                                    style={{
                                        position: 'absolute',
                                        transform: `rotateY(${-index * stepAngle}deg) translateZ(${radius}px)`,
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                    className={`flex items-center justify-center transition-opacity duration-500 ease-out focus:outline-none ${
                                        isCurrent 
                                            ? 'z-30 opacity-100 cursor-default' 
                                            : distance === 1 
                                            ? 'z-10 opacity-70 hover:opacity-95 cursor-pointer' 
                                            : 'z-0 opacity-20 pointer-events-none'
                                    }`}
                                >
                                    <img
                                        src={item.src}
                                        alt={t(`gallery.${item.altKey}`)}
                                        loading="eager"
                                        decoding="async"
                                        className="block max-h-[38dvh] sm:max-h-[44vh] md:max-h-[48vh] w-auto max-w-[72vw] sm:max-w-[380px] md:max-w-[480px] select-none object-contain rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.85)]"
                                        draggable={false}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Floating Navigation Controls from Photos_Web_Site reference */}
                {slides.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={showPrevious}
                            aria-label={t('gallery.prev')}
                            className="absolute left-2 sm:left-6 top-1/2 z-30 flex size-11 sm:size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary dark:bg-neutral-900/95 dark:text-neutral-100 dark:hover:bg-neutral-800 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 cursor-pointer"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={showNext}
                            aria-label={t('gallery.next')}
                            className="absolute right-2 sm:right-6 top-1/2 z-30 flex size-11 sm:size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-md transition-all duration-500 ease-out hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary dark:bg-neutral-900/95 dark:text-neutral-100 dark:hover:bg-neutral-800 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 cursor-pointer"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Filmstrip Thumbnail Bar (Clean without border or ring box) */}
            <div className="z-20 w-full max-w-xl mx-auto mt-6 px-4">
                <div
                    ref={filmstripRef}
                    className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-3 bg-neutral-100/60 dark:bg-neutral-900/60 rounded-2xl backdrop-blur-md shadow-xs"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {slides.map((item, index) => {
                        const isSelected = index === activeIndex;
                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => goToIndex(index)}
                                aria-label={t(`gallery.${item.altKey}`)}
                                className={`relative h-10 sm:h-11 w-12 sm:w-14 shrink-0 overflow-hidden rounded-lg transition-all duration-500 ease-out cursor-pointer ${
                                    isSelected
                                        ? 'scale-105 opacity-100 shadow-sm'
                                        : 'opacity-40 hover:opacity-80 scale-95'
                                }`}
                            >
                                <img
                                    src={item.src}
                                    alt=""
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
