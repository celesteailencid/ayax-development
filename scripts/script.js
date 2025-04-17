AOS.init();

// START Navbar con animacion en scroll
const navbar = document.querySelector('.navbar');
const logo_light = document.querySelector('.navbar-brand-light');
const logo_dark = document.querySelector('.navbar-brand-dark');


// START Navbar con animacion en scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navbar.classList.add('navbar-scrolled');
        logo_light.classList.add('logo-hidden');
        logo_light.classList.remove('logo-visible');
        logo_dark.classList.add('logo-visible');
        logo_dark.classList.remove('logo-hidden');
    } else if (window.scrollY < 56) {
        navbar.classList.remove('navbar-scrolled');
        logo_dark.classList.add('logo-hidden');
        logo_dark.classList.remove('logo-visible');
        logo_light.classList.add('logo-visible');
        logo_light.classList.remove('logo-hidden');
    }
});
// END Navbar con animacion en scroll

$(document).ready(function () {
    $('.navbar .navbar-nav > li.dropdown').hover(function () {
        $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
        $(this).addClass('open');
    }, function () {
        $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
        $(this).removeClass('open');
    });
});