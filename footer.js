// Dynamically inject the footer
document.write(`
    <footer class="tabs">
        <button onclick="navigateAndShow('our-story')">Our Story</button>
        <button onclick="navigateAndShow('venue-details')">Venue</button>
        <button onclick="navigateAndShow('save-date')">Save the Date</button>
        <button onclick="location.href='rsvp.html'">RSVP</button>
    </footer>
`);

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
        content = `<div class="centered-image"><img src="img/our_story.png" alt="Our Story Timeline"></div>`;
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
    } else if (section === 'save-date') {
        content = `
        <a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:Lucy+%26+Logan%27s+Wedding%0ADTSTART:20250827T000000Z%0ADTEND:20250828T235900Z%0ADESCRIPTION:Save+the+date+for+Lucy+%26+Logan%27s+wedding+from+August+27+-+28,+2025.+Can%27t+wait+to+celebrate+with+you!%0ALOCATION:The+Millhouse,+Slane,+Co.+Meath,+Ireland%0AEND:VEVENT%0AEND:VCALENDAR" 
            download="Lucy_and_Logan_Wedding.ics"
            style="text-decoration: none;">
            <img src="img/savethedate.png" alt="Save the Date">
        </a>
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
