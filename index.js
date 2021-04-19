let navLinks = document.querySelectorAll('.top__navbar .nav-link');
let navbarCollpse = document.querySelector('.top__navbar-collapse');
let navbarToggler = document.querySelector('.top__navbar-toggler');

for (const navLink of navLinks) {
    navLink.onclick = function() {
        navbarCollpse.classList.remove('show');
        navbarToggler.classList.add('collapsed');
    }
}