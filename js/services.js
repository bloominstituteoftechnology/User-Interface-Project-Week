
// change background image url if below 500px
let ctaServices = document.querySelector('.cta-services');
if (screen.width < 501) {
ctaServices.style.backgroundImage = 'url(./img/services/services-mobile-jumbotron.png)';
}

switchImages("pre-construction", './img/services/services-tab-mobile-pre-construction-img.png');
switchImages("construction", './img/services/services-tab-mobile-construction-img.png');
switchImages("design-build", './img/services/services-tab-mobile-design-build-img.png');
switchImages("sustainability", './img/services/services-tab-mobile-sustainability-img.png');
