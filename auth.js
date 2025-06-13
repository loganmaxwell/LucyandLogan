(function () {
    const correctPassword = "ireland2025";
    const storedPassword = localStorage.getItem("weddingSitePassword");

    if (storedPassword !== correctPassword) {
        window.location.replace("password.html");
    } else {
        document.documentElement.style.display = "block";
    }
})();
