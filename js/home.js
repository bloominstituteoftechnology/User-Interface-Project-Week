

switchImages("jumbotron", './img/home/home-mobile-jumbotron.png');
switchImages("homeImgOne", './img/home/home-mobile-img-1.png');
switchImages("homeImgTwo", './img/home/home-mobile-img-2.png');
switchImages("villas", './img/home/home-mobile-villas-img.png');
switchImages("outskirts", './img/home/home-mobile-outskirts-img.png');

// get all large sections
const largeSections = document.querySelectorAll('.large-section section');

// scroll event for largeSections
window.addEventListener('scroll', (e) => {

  largeSections.forEach(image => {
    // halfway point of image
    const slideInPoint = (window.scrollY + window.innerHeight) - (image.clientHeight / 2);

    // bottom of image
    const imageBottom = image.offsetTop + image.clientHeight;

    const isHalfShown = slideInPoint > image.offsetTop;

    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast){

      image.classList.add('active');
    }
    else {
      image.classList.remove('active');
    }
  });
});

// get all sections with dissolved class
const dissolved  = document.querySelectorAll('.dissolved')
window.addEventListener('scroll', (e) => {

  dissolved.forEach(image => {
    // halfway point of image
    const slideInPoint = (window.scrollY + window.innerHeight) - (image.clientHeight / 4);

    // bottom of image
    const imageBottom = image.offsetTop + image.clientHeight;

    const isHalfShown = slideInPoint > image.offsetTop;

    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast){
      image.classList.add('undissolved');
    }
    else {
      image.classList.remove('undissolved');
    }
  });
});
