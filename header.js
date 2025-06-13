// Dynamically inject the header with navigation links

document.write(`
<header class="top-header">
    <nav class="desktop-nav">
        <a href="travel.html">Travel</a>
        <a href="accommodation.html">Accommodation</a>
        <a href="index.html">Home</a>
        <a href="events.html">Schedule/Events</a>
        <a href="faqs.html">FAQs</a>
        <a href="gifts.html">Gifts & Thanks</a>
    </nav>
    <select class="mobile-menu" onchange="location = this.value;">
        <option value="index.html" selected>Home</option>
        <option value="travel.html">Travel</option>
        <option value="accommodation.html">Accommodation</option>
        <option value="events.html">Schedule/Events</option>
        <option value="faqs.html">FAQs</option>
        <option value="gifts.html">Gifts & Thanks</option>
    </select>
</header>
`);
