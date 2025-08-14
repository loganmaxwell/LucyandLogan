// Dynamically build and append the header navigation
// Adds Home and Photos links

document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    header.className = 'main-header';

    const nav = document.createElement('nav');

    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Home';

    const photosLink = document.createElement('a');
    photosLink.href = 'photos.html';
    photosLink.textContent = 'Photos';

    nav.appendChild(homeLink);
    nav.appendChild(photosLink);
    header.appendChild(nav);

    // Insert header at the top of the body
    document.body.prepend(header);
});
