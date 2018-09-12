// change background image url if below 500px
let ctaContact = document.querySelector('.cta-contact');

if (screen.width < 501) {
ctaContact.style.backgroundImage = 'url(./img/contact/contact-mobile-jumbotron.png)';
}
