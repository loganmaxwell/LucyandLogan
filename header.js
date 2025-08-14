// Dynamically build and append the header navigation
// Adds Home and Photos links

document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    header.className = 'top-header';

    const desktopNav = document.createElement('nav');
    desktopNav.className = 'desktop-nav';

    const links = [
        { href: 'travel.html', text: 'Travel' },
        { href: 'accommodation.html', text: 'Accommodation' },
        { href: 'index.html', text: 'Home' },
        { href: 'photos.html', text: 'Photos' },
        { href: 'events.html', text: 'Schedule/Events' },
        { href: 'faqs.html', text: 'FAQs' },
        { href: 'gifts.html', text: 'Gifts & Thanks' }
    ];

    const currentPage = location.pathname.split('/').pop();

    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.text;
        if (currentPage === link.href) {
            anchor.classList.add('active');
        }
        desktopNav.appendChild(anchor);
    });

    const mobileMenu = document.createElement('select');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.addEventListener('change', function () {
        location = this.value;
    });

    links.forEach(link => {
        const option = document.createElement('option');
        option.value = link.href;
        option.textContent = link.text;
        if (currentPage === link.href) {
            option.selected = true;
        }
        mobileMenu.appendChild(option);
    });

    header.appendChild(desktopNav);
    header.appendChild(mobileMenu);

    // Insert header at the top of the body
    document.body.prepend(header);
});
