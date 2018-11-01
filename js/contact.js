let contactJumbo = document.querySelector('.contact-img');

if (window.matchMedia('(max-width: 500px)').matches) {
    contactJumbo.src = 'img/contact/contact-mobile-jumbotron.png';
}