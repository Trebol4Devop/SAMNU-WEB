export function initHeroImageSwitcher() {
    const heroImage = document.querySelector('.hero-image img');
    if (!heroImage) {
        return;
    }

    const images = [
        './assets/images-proyects/hero/inicioSamnu.png',
        './assets/images-proyects/hero/inicioSamnu1.1.2.0.png'
    ];

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        heroImage.style.opacity = '0.5';

        setTimeout(() => {
            heroImage.src = images[currentIndex];
            heroImage.style.opacity = '1';
        }, 300);
    }, 15000);
}
