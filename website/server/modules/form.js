function openContactForm() {
    const overlay = document.getElementById('contact-form-overlay');
    overlay?.classList.add('active');
}

function closeContactForm() {
    const overlay = document.getElementById('contact-form-overlay');
    overlay?.classList.remove('active');
}

function openExternal(url) {
    window.open(url, '_blank');
}

export function initContactForm() {
    document.getElementById('btn-playstore')?.addEventListener('click', () => {
        openContactForm();
    });

    document.getElementById('btn-microsoftstore')?.addEventListener('click', () => {
        openExternal('https://apps.microsoft.com/detail/9NWF3SF61RHS?hl=en-us&gl=GT&ocid=pdpshare');
    });

    document.getElementById('close-contact-form')?.addEventListener('click', () => {
        closeContactForm();
    });

    document.getElementById('contact-form-overlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'contact-form-overlay') {
            closeContactForm();
        }
    });
}
