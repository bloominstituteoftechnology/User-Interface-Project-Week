// index.js - JS for index.html

const headerImg = document.querySelector('#jumbotron');
const h1 = document.querySelector('h1');
const firstLinkImg = document.querySelector('.link-img');

let windowResize = () => {

  if (window.innerWidth <= 800) {

    document.querySelector('#jumbotron').src = "./img/home/home-mobile-jumbotron.png";
    document.querySelector('#img1').src = "./img/home/home-mobile-img-1.png";
    document.querySelector('#img2').src = "./img/home/home-mobile-img-2.png";
    document.querySelector('#villas-img').src = "./img/home/home-mobile-villas-img.png";
    document.querySelector('#outskirts-img').src = "./img/home/home-mobile-outskirts-img.png";
    document.querySelector('#blocks-img').src = "./img/home/home-mobile-the-blocks-img.png";

  }

  else {

    document.querySelector('#jumbotron').src = "./img/home/home-jumbotron.png";
    document.querySelector('#img1').src = "./img/home/home-img-1.png";
    document.querySelector('#img2').src = "./img/home/home-img-2.png";
    document.querySelector('#villas-img').src = "./img/home/home-villas-img.png";
    document.querySelector('#outskirts-img').src = "./img/home/home-outskirts-img.png";
    document.querySelector('#blocks-img').src = "./img/home/home-the-blocks-img.png";

  }

}

window.addEventListener('resize', windowResize);

windowResize();

TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
  TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0, onComplete: () => {
    firstLinkImg.classList.remove('scroll-hide');
    TweenMax.fromTo(firstLinkImg, 1, {opacity: 0, yPercent: 20}, {opacity: 1, yPercent: 0});
  }});
}});
