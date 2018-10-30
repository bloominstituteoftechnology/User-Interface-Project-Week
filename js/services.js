// services.js - JS for services.html

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
