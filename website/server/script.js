import { initDownloadButtons } from './modules/downloads.js';
import { initContactForm } from './modules/form.js';
import { initHeroImageSwitcher } from './modules/hero.js';
import { initSectionTransitions } from './modules/transitions.js';
import { initGalleryCarousel } from './modules/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    initDownloadButtons();
    initContactForm();
    initHeroImageSwitcher();
    initSectionTransitions();
    initGalleryCarousel();
});
