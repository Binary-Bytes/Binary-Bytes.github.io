window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    let menu = document.querySelector('.menu');
    let menuToggle = document.querySelector('.toggle');

    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
}