// projects.js - JS for projects.html

const headerImg = document.querySelector('#jumbotron');
const h1 = document.querySelector('h1');
const projects = document.querySelector('.projects');
const carousel = new Carousel(document.querySelector('.carousel'));

let windowResize = () => {

  if (window.innerWidth <= 800) {

    document.querySelector('#jumbotron').src = "./img/services/services-mobile-jumbotron.png";

  }

  else {

    document.querySelector('#jumbotron').src = "./img/services/services-jumbotron.png";

  }

}

window.addEventListener('resize', windowResize);

windowResize();

TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
  TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0, onComplete: () => {
    carousel.init();
    TweenMax.fromTo(projects, 2, {opacity: 0, yPercent: 10}, {opacity: 1, yPercent: 0});
  }});
}});
