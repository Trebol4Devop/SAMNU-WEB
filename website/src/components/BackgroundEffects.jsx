import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetMouseX = mouseX;
        let targetMouseY = mouseY;

        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };

        const particleCount = Math.min(36, Math.max(16, Math.floor(width / 40)));
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.6 + 0.6,
            speedX: (Math.random() - 0.5) * 0.25,
            speedY: (Math.random() - 0.5) * 0.25,
            opacity: Math.random() * 0.3 + 0.1,
            pulse: Math.random() * Math.PI
        }));

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            const isDark = document.documentElement.classList.contains('dark');
            const particleRgb = isDark ? '96, 165, 250' : '8, 60, 100';

            // Subtle radial glow following cursor
            const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
            glow.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.04)' : 'rgba(8, 60, 100, 0.03)');
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, width, height);

            for (const p of particles) {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += 0.015;

                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120 && dist > 0) {
                    const force = (120 - dist) / 120;
                    p.x += (dx / dist) * force * 0.7;
                    p.y += (dy / dist) * force * 0.7;
                }

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                const alpha = isDark 
                    ? p.opacity * (0.65 + 0.35 * Math.sin(p.pulse))
                    : p.opacity * (0.8 + 0.2 * Math.sin(p.pulse));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleRgb}, ${alpha})`;
                ctx.fill();
            }

            if (!motionPreference.matches && !document.hidden) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        if (!motionPreference.matches) {
            render();
        }

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Mathematical engineering coordinate grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

            {/* Subtle atmospheric ambient glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/5 dark:bg-brand-primary/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-cyan-500/5 dark:bg-blue-600/10 blur-[140px] pointer-events-none" />

            {/* Interactive ambient particles canvas */}
            <canvas 
                ref={canvasRef} 
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-80 dark:opacity-60" 
            />
        </div>
    );
}
