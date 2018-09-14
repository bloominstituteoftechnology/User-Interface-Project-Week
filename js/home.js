

switchImages("jumbotron", './img/home/home-mobile-jumbotron.png');
switchImages("homeImgOne", './img/home/home-mobile-img-1.png');
switchImages("homeImgTwo", './img/home/home-mobile-img-2.png');
switchImages("villas", './img/home/home-mobile-villas-img.png');
switchImages("outskirts", './img/home/home-mobile-outskirts-img.png');

// get all large sections and move them out of the screen view
let largeSections = document.querySelectorAll('.large-section section');
largeSections[0].style.position = 'relative';

document.addEventListener('scroll', (e) => {
  if (largeSections[0].offsetTop - 500 > e.pageY) {
    TweenMax.fromTo(largeSections[0], 1, {right: '-9999px'}, {right: 0})

    if (largeSections[0].style.right === 0 ) {
      return true;

      
    }
  }
});
