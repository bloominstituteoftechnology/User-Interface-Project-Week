// services.js - JS for services.html

const headerImg = document.querySelector('#jumbotron');
const h1 = document.querySelector('h1');
const p = document.querySelector('.description');
const content = document.querySelector('.content');

let windowResize = () => {

  if (window.innerWidth <= 800) {

    document.querySelector('#jumbotron').src = "./img/services/services-mobile-jumbotron.png";
    document.querySelector('#construction').src = "./img/services/services-tab-mobile-construction-img.png";
    document.querySelector('#preconstruction').src = "./img/services/services-tab-mobile-pre-construction-img.png";
    document.querySelector('#sustainability').src = "./img/services/services-tab-mobile-sustainability-img.png";
    document.querySelector('#design').src = "./img/services/services-tab-mobile-design-build-img.png";

  }

  else {

    document.querySelector('#jumbotron').src = "./img/services/services-jumbotron.png";
    document.querySelector('#construction').src = "./img/services/services-tab-construction-img.png";
    document.querySelector('#preconstruction').src = "./img/services/services-tab-pre-construction-img.png";
    document.querySelector('#sustainability').src = "./img/services/services-tab-sustainability-img.png";
    document.querySelector('#design').src = "./img/services/services-tab-design-build-img.png";

  }

}

window.addEventListener('resize', windowResize);

windowResize();

TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
  TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0, onComplete: () => {
    TweenMax.fromTo(p, 1, {opacity: 0, yPercent: 15}, {opacity: 1, yPercent: 0, onComplete: () => {
      TweenMax.fromTo(content, 1, {opacity: 0, xPercent: -25}, {opacity: 1, xPercent: 0});
    }});
  }});
}});
