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


// target the fa-bars
const bars = document.querySelector('.fa-bars');

// add click event to toggle navbar display
bars.addEventListener('click', () => {

  // get navbar and display it
  let nav = document.querySelector('.navbar');
  nav.style.display = 'flex';

  // hide bars
  bars.style.display = 'none';

  // show close;
  close.style.display = 'block';
});

// set up the close icon to close navbar when clicked
const close = document.querySelector('.close');
close.addEventListener('click', () => {

  // get navbar and hide it
  let nav = document.querySelector('.navbar');
  nav.style.display = 'none';

  // hide close
  close.style.display = 'none';

  // show hamburger
  bars.style.display = 'block';
});
