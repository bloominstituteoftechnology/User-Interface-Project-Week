let contactJumbo = document.querySelector('.contact-img');

window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 500px)').matches) {
        contactJumbo.src = 'img/contact/contact-mobile-jumbotron.png';
    } else {
        contactJumbo.src = 'img/contact/contact-jumbotron.png';
    }
})