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
                <img src="img/our_venue.png" alt="Our Venue">
                <div style="text-align: center; margin-top: 20px;">
                        <a href="https://goo.gl/maps/9s3n8PjJRhU9D2X59" target="_blank" 
                           style="text-decoration: none; color: #007aff; font-weight: bold;">
                            View on Google Maps
                        </a>
                    </p>
                </div>
            </div>
        
        `;
    } else if (section === 'save-date') {
        content = `
            <div class="centered-image">
                <img src="img/savethedate.png" alt="Save the Date">
                <div style="text-align: center; margin-top: 20px;">

                    <div style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
                        <!-- Google Calendar -->
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lucy+%26+Logan%27s+Wedding&dates=20250827T000000Z/20250828T235900Z&details=Save+the+date+for+Lucy+%26+Logan%27s+wedding+from+August+27+-+28,+2025.+Can%27t+wait+to+celebrate+with+you!&location=The+Millhouse,+Slane,+Co.+Meath,+Ireland" 
                           target="_blank" 
                           style="text-decoration: none; color: #2a7d9d; font-weight: bold;">
                            <img src="img/googlecal.png" alt="Google Calendar" style="width: 40px; vertical-align: middle;"> Google Calendar
                        </a>

                        <!-- Outlook Calendar -->
                        <a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=Lucy+%26+Logan%27s+Wedding&body=Save+the+date+for+Lucy+%26+Logan%27s+wedding+from+August+27+-+28,+2025.+Can%27t+wait+to+celebrate+with+you!&startdt=2025-08-27T00:00:00&enddt=2025-08-28T23:59:59&location=The+Millhouse,+Slane,+Co.+Meath,+Ireland" 
                           target="_blank" 
                           style="text-decoration: none; color: #217346; font-weight: bold;">
                            <img src="img/outlook.webp" alt="Outlook Calendar" style="width: 40px; vertical-align: middle;"> Outlook Calendar
                        </a>

                        <!-- iOS Calendar -->
                        <a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ASUMMARY:Lucy+%26+Logan%27s+Wedding%0ADTSTART:20250827T000000Z%0ADTEND:20250828T235900Z%0ADESCRIPTION:Save+the+date+for+Lucy+%26+Logan%27s+wedding+from+August+27+-+28,+2025.+Can%27t+wait+to+celebrate+with+you!%0ALOCATION:The+Millhouse,+Slane,+Co.+Meath,+Ireland%0AEND:VEVENT%0AEND:VCALENDAR" 
                           download="Lucy_and_Logan_Wedding.ics" 
                           style="text-decoration: none; color: #007aff; font-weight: bold;">
                            <img src="img/ios.png" alt="iOS Calendar" style="width: 40px; vertical-align: middle;"> iOS Calendar
                        </a>
                    </div>
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
