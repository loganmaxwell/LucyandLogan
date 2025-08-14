// Dynamically build and append the footer
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.createElement('footer');
    footer.className = 'tabs';

    const buttons = [
        { text: 'Our Story', handler: () => navigateAndShow('our-story') },
        { text: 'Venue', handler: () => navigateAndShow('venue-details') },
        { text: 'Schedule of Events', handler: () => { location.href = 'events.html'; } }
    ];

    buttons.forEach(info => {
        const btn = document.createElement('button');
        btn.textContent = info.text;
        btn.addEventListener('click', info.handler);
        footer.appendChild(btn);
    });

    document.body.appendChild(footer);
});

// Function to navigate to the index page and show the desired section
function navigateAndShow(section) {
    if (!location.href.includes('index.html')) {
        location.href = `index.html#${section}`;
    } else {
        showContent(section);
    }
}

// Function to dynamically display content
function showContent(section) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    let content = '';
    if (section === 'our-story') {
        content = `        <div class="centered-image">
            <div style="text-align: center; margin-top: 20px;">
        <img src="img/our_story.png" alt="Our Story Timeline">
        </div></div>`;
    } else if (section === 'venue-details') {
        content = `
        
        <div class="centered-image">
            <div style="text-align: center; margin-top: 20px;">
                <a href="https://maps.app.goo.gl/5EsRTo3rXqSsEGTe6">
                    <img src="img/our_venue.png" alt="Our Venue">
                </a>

            </div>
        </div>
        
        `;
    } else if (section === 'contact') {
        content = `
            <div class="centered-image">
                <p>Here are a few ways to contact us:</p>
                <p>Email: lucylogan2025@gmail.com</p>
                <p>Phone: +01 403 860 6164 (Logan)</p>
                <p>Phone: +01 403 200 6081 (Lucy)</p>
            </div>
        `;
    }
    contentDiv.innerHTML = content;
}

// Detect hash changes and show the correct content when the page loads
window.onload = function () {
    const hash = location.hash.replace('#', '');
    if (hash) {
        showContent(hash);
    }
};

// Detect changes in the hash and show the appropriate section
window.onhashchange = function () {
    const hash = location.hash.replace('#', '');
    if (hash) {
        showContent(hash);
    }
};
