import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function TeamTiltCard({ member, roleText }) {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (y - 0.5) * -14;
        const tiltY = (x - 0.5) * 14;

        setTilt({
            x: tiltX,
            y: tiltY,
            glareX: x * 100,
            glareY: y * 100,
            opacity: 0.15
        });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
    };

    return (
        <div 
            style={{ perspective: '1000px' }}
            className="w-full"
        >
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${tilt.opacity > 0 ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'}`,
                    transition: tilt.opacity === 0 ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformStyle: 'preserve-3d'
                }}
                className="team-card relative overflow-hidden bg-neutral-100/70 hover:bg-neutral-100 dark:bg-neutral-900/60 dark:hover:bg-neutral-900 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out flex flex-col items-center text-center cursor-default"
            >
                {/* 3D Dynamic Glare / Specular Layer */}
                <div 
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.2) 0%, transparent 65%)`,
                        opacity: tilt.opacity
                    }}
                />

                {/* Organic Circular Avatar (Seamless, no square-in-container artifacts) */}
                <div 
                    style={{ transform: 'translateZ(30px)' }}
                    className="w-24 h-24 rounded-full overflow-hidden mb-5 p-0.5 ring-2 ring-neutral-300/80 dark:ring-neutral-700/80 shadow-md transition-transform duration-600 ease-out group-hover:scale-105"
                >
                    <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-600 ease-out" 
                        loading="lazy"
                    />
                </div>

                {/* Name & Role with 3D Depth */}
                <div style={{ transform: 'translateZ(20px)' }}>
                    <h3 className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-1">
                        {member.name}
                    </h3>
                    <span className="text-xs font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mb-6 block">
                        {roleText}
                    </span>
                </div>

                {/* Action Link with 3D Depth & Fluid Microinteraction */}
                <div className="mt-auto" style={{ transform: 'translateZ(25px)' }}>
                    <a 
                        href={member.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-fluid group inline-flex min-h-9 items-center gap-2 px-4 py-2 bg-neutral-200/80 hover:bg-neutral-900 hover:text-white dark:bg-neutral-800 dark:hover:bg-white dark:hover:text-neutral-950 text-neutral-800 dark:text-neutral-200 text-xs font-medium uppercase tracking-wider shadow-xs hover:shadow-md cursor-pointer"
                    >
                        <ion-icon name="logo-github" style={{ fontSize: '1.05rem' }}></ion-icon>
                        <span>@{member.username}</span>
                        <span className="text-xs transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Team() {
    const { t } = useTranslation();

    const members = [
        {
            name: 'José Monzón',
            roleKey: 'role_backend',
            username: '0520Jose',
            avatar: 'https://github.com/0520Jose.png',
            url: 'https://github.com/0520Jose'
        },
        {
            name: 'Diego Vásquez',
            roleKey: 'role_frontend',
            username: 'DiegVas',
            avatar: 'https://github.com/DiegVas.png',
            url: 'https://github.com/DiegVas'
        },
        {
            name: 'Carlos del Cid',
            roleKey: 'role_pm',
            username: 'Carlosdelcid05',
            avatar: 'https://github.com/Carlosdelcid05.png',
            url: 'https://github.com/Carlosdelcid05'
        },
        {
            name: 'Ottoniel Vásquez',
            roleKey: 'role_backend',
            username: 'Farot3',
            avatar: 'https://github.com/Farot3.png',
            url: 'https://github.com/Farot3'
        }
    ];

    return (
        <section id="equipo" className="py-24 sm:py-32 px-6 sm:px-12 max-w-6xl mx-auto transition-colors duration-300 relative">
            <div className="section-header text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {t('team.header_title')}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {t('team.header_subtitle')}
                </p>
            </div>
            
            {/* 3D Interactive Team Grid (Continuous, Borderless, Specular Glare) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {members.map((member) => (
                    <TeamTiltCard 
                        key={member.username} 
                        member={member} 
                        roleText={t(`team.${member.roleKey}`)} 
                    />
                ))}
            </div>
            
            {/* Tech Stack Summary (Seamless, Borderless) */}
            <div className="tech-stack max-w-xl mx-auto text-center pt-8 reveal-on-scroll">
                <span className="text-xs font-mono uppercase tracking-[0.16em] text-neutral-400 dark:text-neutral-500 block mb-2">
                    {t('team.tech_stack')}
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-sans tracking-wide">
                    <strong className="text-neutral-900 dark:text-white font-semibold">Flutter</strong> • <strong className="text-neutral-900 dark:text-white font-semibold">Dart</strong> • <strong className="text-neutral-900 dark:text-white font-semibold">KaTeX 2.0</strong> • <strong className="text-neutral-900 dark:text-white font-semibold">LaTeX</strong> • <strong className="text-neutral-900 dark:text-white font-semibold">Desktop C++</strong>
                </p>
            </div>
        </section>
    );
}
