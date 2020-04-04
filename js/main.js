const navbar = document.querySelector('.navbar');
const navbarToggler = navbar.querySelector('.navbar-header .navbar-toggler');
const navbarCollapse = navbar.querySelector('.navbar-collapse');
navbarToggler.addEventListener('click', function() {
    navbarToggler.classList.toggle('active');
    navbarCollapse.classList.toggle('active');
});
