function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}
function closeNav() {
    const navbar = document.querySelector('.nav-links');
    navbar.style.display = 'none';
}

// Close navbar when clicking outside
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const isClickInside = navbar.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInside) {
        navbar.style.display = 'none'; // Close navbar
    }
});

// Toggle navbar
document.querySelector('.menu-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.nav-links');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});
