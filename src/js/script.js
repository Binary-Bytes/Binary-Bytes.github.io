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

function sendMessage() {
    let name = document.getElementById('#name');
    let email = document.getElementById('#email');
    let message = document.getElementById('#message');

    if (name !== null && name !== '' && email !== null && email !== '' && message !== null && message !== '') {
        window.open('https://wa.me/9999108282/?text=' + name + ' (' + email + ') : ' + message);
    } else {
        alert('Fill All The Details Before Sending The Message !!');

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
}