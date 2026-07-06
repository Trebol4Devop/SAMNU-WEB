import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    const { t } = useTranslation();

    const slides = [
        { src: './assets/images-proyects/gallery/asistente.jpeg', altKey: 'slide0_alt', captionKey: 'slide0_caption' },
        { src: './assets/images-proyects/gallery/pdfs.jpeg', altKey: 'slide1_alt', captionKey: 'slide1_caption' },
        { src: './assets/images-proyects/gallery/carrucel_1.png', altKey: 'slide2_alt', captionKey: 'slide2_caption' },
        { src: './assets/images-proyects/gallery/carrucel_2.png', altKey: 'slide3_alt', captionKey: 'slide3_caption' },
        { src: './assets/images-proyects/gallery/carrucel_3.png', altKey: 'slide4_alt', captionKey: 'slide4_caption' },
        { src: './assets/images-proyects/gallery/carrucel_4.png', altKey: 'slide5_alt', captionKey: 'slide5_caption' },
        { src: './assets/images-proyects/gallery/carrucel_5.png', altKey: 'slide6_alt', captionKey: 'slide6_caption' },
        { src: './assets/images-proyects/gallery/carrucel_6.png', altKey: 'slide7_alt', captionKey: 'slide7_caption' },
        { src: './assets/images-proyects/gallery/carrucel_7.png', altKey: 'slide8_alt', captionKey: 'slide8_caption' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;
        const autoPlayId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4500);

        return () => clearInterval(autoPlayId);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentIndex((index + slides.length) % slides.length);
    };

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    return (
        <section id="galeria" className="py-24 px-6 sm:px-12 lg:px-24 bg-neutral-900 dark:bg-[#080808] text-white transition-colors duration-300 relative overflow-hidden">
            {/* Luz de fondo azul */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] h-[600px] sm:h-[700px] bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="section-header text-center max-w-3xl mx-auto mb-16 reveal-on-scroll relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white mb-4">
                    {t('gallery.header_title')}
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 font-sans">
                    {t('gallery.header_subtitle')}
                </p>
            </div>

            <div className="gallery-carousel relative max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-2xl z-10" aria-label="Carrusel de imágenes de SAMNU">
                <button 
                    className="gallery-control prev absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-primary hover:text-white text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer border border-white/10 shadow-lg" 
                    type="button" 
                    aria-label={t('gallery.prev')} 
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                <div className="gallery-grid flex w-full transition-transform duration-500 ease-out" id="gallery-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {slides.map((item, idx) => (
                        <div key={idx} className="gallery-item min-w-full relative overflow-hidden bg-[#171717] flex flex-col justify-between">
                            <div className="flex items-center justify-center bg-black/40 p-4 min-h-[400px] sm:min-h-[500px]">
                                <img src={item.src} alt={t(`gallery.${item.altKey}`)} className="w-full h-auto max-h-[65vh] object-contain mx-auto block transition-all duration-700 hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer" />
                            </div>
                            <div className="gallery-caption bg-[#171717] border-t border-white/10 py-4 px-6 text-center font-display font-semibold text-sm sm:text-base text-neutral-200">
                                {t(`gallery.${item.captionKey}`)}
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    className="gallery-control next absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-primary hover:text-white text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer border border-white/10 shadow-lg" 
                    type="button" 
                    aria-label={t('gallery.next')} 
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>

            <div className="gallery-dots flex justify-center gap-2 mt-8 z-10 relative" id="gallery-dots" aria-label="Indicadores de galería">
                {slides.map((_, idx) => (
                    <button 
                        key={idx} 
                        type="button" 
                        className={`gallery-dot h-2 rounded-full transition-all duration-300 cursor-pointer border-none ${idx === currentIndex ? 'w-8 bg-brand-primary shadow-[0_0_12px_rgba(59,130,246,0.8)]' : 'w-2 bg-white/30 hover:bg-white/60 hover:scale-125'}`} 
                        aria-label={`Ir a imagen ${idx + 1}`}
                        onClick={() => goToSlide(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
