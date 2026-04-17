export function initGalleryCarousel() {
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
            goToSlide(index);
            restartAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.gallery-dot'));

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        updateCarousel();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoplay() {
        if (slides.length <= 1) {
            return;
        }
        autoPlayId = setInterval(nextSlide, 4500);
    }

    function stopAutoplay() {
        if (autoPlayId) {
            clearInterval(autoPlayId);
            autoPlayId = null;
        }
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    btnNext.addEventListener('click', () => {
        nextSlide();
        restartAutoplay();
    });

    btnPrev.addEventListener('click', () => {
        prevSlide();
        restartAutoplay();
    });

    if (slides.length <= 1) {
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        dotsContainer.style.display = 'none';
    }

    updateCarousel();
    startAutoplay();
}
