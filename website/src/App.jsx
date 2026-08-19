import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

export default function App() {

    useEffect(() => {
        const revealElements = [
            ...document.querySelectorAll('.section-header'),
            ...document.querySelectorAll('.feature-card'),
            ...document.querySelectorAll('.download-cta'),
            ...document.querySelectorAll('.gallery-item'),
            ...document.querySelectorAll('.team-card'),
            ...document.querySelectorAll('.tech-stack'),
            ...document.querySelectorAll('footer .footer-content')
        ];

        revealElements.forEach((el, index) => {
            el.classList.add('reveal-on-scroll');
            if (el.classList.contains('feature-card') || el.classList.contains('gallery-item') || el.classList.contains('team-card')) {
                el.style.transitionDelay = `${Math.min(index * 0.04, 0.24)}s`;
            }
        });

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach((el) => revealObserver.observe(el));

        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    entry.target.classList.remove('is-active');
                    return;
                }
                entry.target.classList.add('is-active');
            });
        }, {
            threshold: 0.45,
            rootMargin: '-10% 0px -35% 0px'
        });

        sections.forEach((section) => sectionObserver.observe(section));

        return () => {
            revealObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <BackgroundEffects />
            <Navbar />
            <Hero />
            <Features />
            <Gallery />
            <Team />
            <Footer />
        </div>
    );
}
