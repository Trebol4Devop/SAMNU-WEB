import React from 'react';

export default function BackgroundEffects() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Patrón de cuadrícula interactiva sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
            
            {/* Orbe superior izquierdo */}
            <div className="absolute -top-[20%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-brand-primary/15 dark:bg-brand-primary/10 blur-[140px] animate-drift-slow" />
            
            {/* Orbe centro derecho */}
            <div className="absolute top-[35%] -right-[15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-[160px] animate-drift-slower" />
            
            {/* Orbe inferior izquierdo */}
            <div className="absolute -bottom-[20%] left-[15%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-cyan-500/10 dark:bg-sky-500/10 blur-[150px] animate-drift-slow" />
        </div>
    );
}
