// index.js - JS for index.html

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
