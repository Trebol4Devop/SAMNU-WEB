export function initSectionTransitions() {
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

    sections.forEach((section) => sectionObserver.observe(section));
}
