// JS goes here

// replace images if screen width is below 500px

const switchImages = (id, src) => {
  id = document.getElementById(id);

  screen.width < 501 ? id.setAttribute('src', src) : true;
}
switchImages("jumbotron", './img/home/home-mobile-jumbotron.png')
switchImages("homeImgOne", './img/home/home-mobile-img-1.png')
switchImages("homeImgTwo", './img/home/home-mobile-img-2.png')
switchImages("villas", './img/home/home-mobile-villas-img.png')
switchImages("outskirts", './img/home/home-mobile-outskirts-img.png')
switchImages("blocks", './img/home/home-mobile-the-blocks-img.png')
