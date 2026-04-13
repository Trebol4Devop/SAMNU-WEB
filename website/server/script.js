function forzarDescarga(url) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById('btn-android').addEventListener('click', () => {
    const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v1.1.2/SAMNU-Android.apk';
    forzarDescarga(url);
});

document.getElementById('btn-windows').addEventListener('click', () => {
    const url = 'https://github.com/Trebol4Devop/SAMNU/releases/download/v1.1.2/SAMNU-Windows.zip';
    forzarDescarga(url);
});

document.getElementById('btn-manual').addEventListener('click', () => {
    const url = 'https://raw.githubusercontent.com/Trebol4Devop/SAMNU/main/Manual%20de%20Usuario%20-%20SAMNU%20v1.0.0.pdf';
    forzarDescarga(url);
});

// Función para redirigir a un enlace externo
function redirigir(url) {
    window.open(url, '_blank');
}

// Función para abrir el formulario de contacto
function abrirFormulario() {
    const overlay = document.getElementById('contact-form-overlay');
    overlay.classList.add('active');
}

// Función para cerrar el formulario de contacto
function cerrarFormulario() {
    const overlay = document.getElementById('contact-form-overlay');
    overlay.classList.remove('active');
}

// Función para intercalar imágenes cada 15 segundos
function iniciarIntercaladorImagenes() {
    const heroImage = document.querySelector('.hero-image img');
    const imagenes = [
        './assets/images-proyects/inicioSamnu.png',
        './assets/images-proyects/iniciosamnu1.1.2.0.png'
    ];
    
    let indiceActual = 0;
    
    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        heroImage.style.opacity = '0.5';
        
        setTimeout(() => {
            heroImage.src = imagenes[indiceActual];
            heroImage.style.opacity = '1';
        }, 300);
    }, 15000); // 15 segundos
}

function iniciarTransicionesSecciones() {
    const elementosReveal = [
        ...document.querySelectorAll('.section-header'),
        ...document.querySelectorAll('.feature-card'),
        ...document.querySelectorAll('.download-cta'),
        ...document.querySelectorAll('.gallery-item'),
        ...document.querySelectorAll('.team-card'),
        ...document.querySelectorAll('.tech-stack'),
        ...document.querySelectorAll('footer .footer-content')
    ];

    elementosReveal.forEach((el, index) => {
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

    elementosReveal.forEach((el) => revealObserver.observe(el));

    const secciones = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('is-active');
                return;
            }

            const id = entry.target.getAttribute('id');
            entry.target.classList.add('is-active');

            navLinks.forEach((link) => {
                const href = link.getAttribute('href');
                link.classList.toggle('active', href === `#${id}`);
            });
        });
    }, {
        threshold: 0.45,
        rootMargin: '-10% 0px -35% 0px'
    });

    secciones.forEach((seccion) => sectionObserver.observe(seccion));
}

function iniciarCarruselGaleria() {
    const track = document.getElementById('gallery-track');
    const dotsContainer = document.getElementById('gallery-dots');
    const btnPrev = document.querySelector('.gallery-control.prev');
    const btnNext = document.querySelector('.gallery-control.next');

    if (!track || !dotsContainer || !btnPrev || !btnNext) {
        return;
    }

    const slides = Array.from(track.querySelectorAll('.gallery-item'));
    if (slides.length === 0) {
        return;
    }

    let currentIndex = 0;
    let autoPlayId = null;

    dotsContainer.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'gallery-dot';
        dot.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
        dot.addEventListener('click', () => {
            irASlide(index);
            reiniciarAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.gallery-dot'));

    function actualizarCarrusel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function irASlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        actualizarCarrusel();
    }

    function siguienteSlide() {
        irASlide(currentIndex + 1);
    }

    function anteriorSlide() {
        irASlide(currentIndex - 1);
    }

    function iniciarAutoplay() {
        if (slides.length <= 1) {
            return;
        }
        autoPlayId = setInterval(siguienteSlide, 4500);
    }

    function detenerAutoplay() {
        if (autoPlayId) {
            clearInterval(autoPlayId);
            autoPlayId = null;
        }
    }

    function reiniciarAutoplay() {
        detenerAutoplay();
        iniciarAutoplay();
    }

    btnNext.addEventListener('click', () => {
        siguienteSlide();
        reiniciarAutoplay();
    });

    btnPrev.addEventListener('click', () => {
        anteriorSlide();
        reiniciarAutoplay();
    });

    if (slides.length <= 1) {
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        dotsContainer.style.display = 'none';
    }

    actualizarCarrusel();
    iniciarAutoplay();
}

// Event listeners para redirecciones (tiendas)
document.getElementById('btn-playstore').addEventListener('click', () => {
    abrirFormulario();
});

document.getElementById('btn-microsoftstore').addEventListener('click', () => {
    redirigir('https://apps.microsoft.com/detail/9NWF3SF61RHS?hl=en-us&gl=GT&ocid=pdpshare');
});

// Event listeners para cerrar el formulario
document.getElementById('close-contact-form').addEventListener('click', () => {
    cerrarFormulario();
});

// Cerrar el formulario al hacer clic fuera de él
document.getElementById('contact-form-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'contact-form-overlay') {
        cerrarFormulario();
    }
});

// Iniciar comportamientos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    iniciarIntercaladorImagenes();
    iniciarTransicionesSecciones();
    iniciarCarruselGaleria();
});
