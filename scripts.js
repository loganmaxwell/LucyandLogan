function showContent(section) {
    const contentDiv = document.getElementById('content');

    // Clear existing content
     contentDiv.innerHTML = '';
    
    let content = '';


    if (section === 'our-story') {
        content = `
                <div class="centered-image">
                    <img src="img/our_story.png" alt="Our Story Timeline">
                </div>
            `;
    } else if (section === 'venue-details') {
        content = `
                <div class="centered-image">
                    <img src="img/our_venue.png" alt="Our Venue">
                </div>
            `;        
    } else if (section === 'save-date') {
        content = `
                <div class="centered-image">
                    <img src="img/savethedate.png" alt="Save the Date">
                </div>
            `;
    } else if (section === 'contact') {
        content = '<p>Here are a few ways to contact us</p>';
    }

    contentDiv.innerHTML = content;
}
