import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();
    const [rotationAngle, setRotationAngle] = useState(0);
    const [windowWidth, setWindowWidth] = useState(1024);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartRef = useRef(null);

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

    // Exact trigonometric radius for an authentic polygonal 3D cylinder
    const radius = useMemo(() => {
        if (slides.length <= 1) return 0;
        const isMobile = windowWidth < 640;
        const isTablet = windowWidth >= 640 && windowWidth < 1024;
        const cardWidth = isMobile ? 300 : isTablet ? 450 : 580;
        const halfAngleRad = (Math.PI / slides.length);
        const naturalRadius = Math.round((cardWidth / 2) / Math.tan(halfAngleRad));
        // Add subtle breathing space for cylindrical curvature depth
        return naturalRadius + (isMobile ? 30 : 50);
    }, [slides.length, windowWidth]);

    const activeIndex = useMemo(() => {
        if (slides.length === 0) return 0;
        const normalized = Math.round(-rotationAngle / stepAngle) % slides.length;
        return (normalized + slides.length) % slides.length;
    }, [rotationAngle, stepAngle, slides.length]);

    const showNext = useCallback(() => {
        setRotationAngle((prev) => prev - stepAngle);
    }, [stepAngle]);

    const showPrevious = useCallback(() => {
        setRotationAngle((prev) => prev + stepAngle);
    }, [stepAngle]);

    const goToIndex = useCallback((targetIndex) => {
        let diff = (targetIndex - activeIndex) % slides.length;
        if (diff > slides.length / 2) diff -= slides.length;
        if (diff < -slides.length / 2) diff += slides.length;
        setRotationAngle((prev) => prev - diff * stepAngle);
    }, [activeIndex, slides.length, stepAngle]);

    // Auto-rotation every 6 seconds when not hovered/dragging
    useEffect(() => {
        if (slides.length <= 1 || isHovered || isDragging) return;
        const timer = setInterval(() => {
            showNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length, isHovered, isDragging, showNext]);

    // Touch & pointer handlers for interactive cylinder spin
    const handlePointerDown = (e) => {
        setIsDragging(true);
        dragStartRef.current = { x: e.clientX, initialAngle: rotationAngle };
    };

    const handlePointerMove = (e) => {
        if (!isDragging || !dragStartRef.current) return;
        const deltaX = e.clientX - dragStartRef.current.x;
        // Sensitivity: 0.25 deg per pixel
        setRotationAngle(dragStartRef.current.initialAngle + deltaX * 0.25);
    };

    const handlePointerUp = (e) => {
        if (!isDragging || !dragStartRef.current) return;
        setIsDragging(false);
        const deltaX = e.clientX - dragStartRef.current.x;
        dragStartRef.current = null;
        // Snap to nearest cylinder facet
        if (Math.abs(deltaX) > 40) {
            if (deltaX < 0) {
                setRotationAngle((prev) => Math.floor(prev / stepAngle) * stepAngle);
            } else {
                setRotationAngle((prev) => Math.ceil(prev / stepAngle) * stepAngle);
            }
        } else {
            setRotationAngle((prev) => Math.round(prev / stepAngle) * stepAngle);
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

            {/* 3D Cylindrical Carousel Viewport */}
            <div 
                className="relative flex min-h-[420px] sm:min-h-[520px] md:min-h-[620px] w-full flex-col items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    if (isDragging) setIsDragging(false);
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
            >
                {/* 3D Perspective Stage */}
                <div 
                    className="relative flex w-full flex-1 items-center justify-center py-6" 
                    style={{ 
                        perspective: '1500px', 
                        perspectiveOrigin: '50% 50%' 
                    }}
                >
                    {/* The 3D Rotating Cylinder Drum */}
                    <div
                        className="relative flex items-center justify-center will-change-transform"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: `translateZ(-${radius}px) rotateY(${rotationAngle}deg)`,
                            transition: isDragging ? 'none' : 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        {slides.map((item, index) => {
                            // Compute normalized angle relative to camera front [-180, 180]
                            const cardAbsoluteAngle = index * stepAngle;
                            const totalRelativeAngle = ((cardAbsoluteAngle + rotationAngle) % 360 + 360) % 360;
                            const angleFromFront = totalRelativeAngle > 180 ? totalRelativeAngle - 360 : totalRelativeAngle;
                            const absAngle = Math.abs(angleFromFront);

                            const isFront = absAngle < 28;
                            const isSide = absAngle >= 28 && absAngle < 85;
                            const isBackSide = absAngle >= 85 && absAngle < 135;
                            const isRear = absAngle >= 135;

                            return (
                                <div
                                    key={index}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!isFront) goToIndex(index);
                                    }}
                                    style={{
                                        position: 'absolute',
                                        transform: `rotateY(${cardAbsoluteAngle}deg) translateZ(${radius}px)`,
                                        backfaceVisibility: 'hidden',
                                        WebkitBackfaceVisibility: 'hidden'
                                    }}
                                    className={`flex items-center justify-center transition-all duration-700 ease-out ${
                                        isFront 
                                            ? 'z-30 opacity-100 scale-100 cursor-default' 
                                            : isSide 
                                            ? 'z-20 opacity-75 scale-90 hover:opacity-95 hover:scale-95 cursor-pointer' 
                                            : isBackSide
                                            ? 'z-10 opacity-25 scale-80 pointer-events-none'
                                            : 'z-0 opacity-0 scale-70 pointer-events-none'
                                    }`}
                                >
                                    {/* Pure clean image with adaptive cylinder shading and depth drop-shadow */}
                                    <div 
                                        className="relative transition-all duration-700"
                                        style={{
                                            filter: isFront 
                                                ? 'brightness(1) contrast(1)' 
                                                : isSide 
                                                ? 'brightness(0.85) contrast(0.95)' 
                                                : 'brightness(0.65)'
                                        }}
                                    >
                                        <img
                                            src={item.src}
                                            alt={t(`gallery.${item.altKey}`)}
                                            className={`w-[84vw] max-w-[310px] sm:max-w-[450px] md:max-w-[580px] h-auto max-h-[44vh] sm:max-h-[52vh] object-contain block select-none rounded-xl transition-shadow duration-700 ${
                                                isFront
                                                    ? 'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] ring-1 ring-black/5 dark:ring-white/10'
                                                    : 'shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)]'
                                            }`}
                                            loading="eager"
                                            draggable={false}
                                        />
                                    </div>
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
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrevious();
                            }}
                            aria-label={t('gallery.prev')}
                            className="btn-fluid absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-xl hover:scale-105 active:scale-95 cursor-pointer dark:bg-neutral-900/95 dark:text-neutral-100 backdrop-blur-md border border-black/5 dark:border-white/10"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            aria-label={t('gallery.next')}
                            className="btn-fluid absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex size-10 sm:size-12 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-xl hover:scale-105 active:scale-95 cursor-pointer dark:bg-neutral-900/95 dark:text-neutral-100 backdrop-blur-md border border-black/5 dark:border-white/10"
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>
                        </button>
                    </>
                )}
            </div>

            {/* Clean Cylindrical Dot & Bar Indicators */}
            <div className="flex justify-center items-center gap-2.5 mt-8 z-10 relative" aria-label="Indicadores de carrusel">
                {slides.map((_, idx) => (
                    <button 
                        key={idx} 
                        type="button" 
                        className={`h-[3px] transition-all duration-400 ease-out cursor-pointer rounded-full ${
                            idx === activeIndex 
                                ? 'w-10 bg-brand-primary' 
                                : 'w-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500 hover:w-5'
                        }`} 
                        aria-label={`Ir a diapositiva ${idx + 1}`}
                        onClick={() => goToIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
}