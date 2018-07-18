// Nav expansion

let nav = document.querySelector('nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', e => {
    if (nav.style.display == 'none') {
      TweenMax.fromTo(nav, .75, {y: -600}, {y: 0, ease: Power2.ease});
      nav.style.display =  'flex';
      navBtn.src = './img/nav-hamburger-close.png';
    } else {
      TweenMax.fromTo(nav, .5, {y: 0}, {y: -800, ease: Power2.ease, onComplete: () => {
        nav.style.display = 'none';
        navBtn.src = './img/nav-hamburger.png';
      }});
    }
});


// Image zoom

class Image {
  constructor(img) {
    this.img = img;
    this.boxName = this.img.parentNode.querySelector('h3');
    this.img.addEventListener('mouseenter', () => this.zoom());
    this.img.addEventListener('mouseleave', () => this.unzoom());
  }

  zoom() {
    this.img.style.transition = '300ms';
    this.img.style.transform = 'scale(1.1)';
    if (this.img.parentNode.classList.contains('embed')) {
      this.boxName.style.transition = '300ms';
      this.boxName.style.transform = 'scale(1.28)';
    }
  }
  unzoom() {
    this.img.style.transition = '300ms';
    this.img.style.transform = 'scale(1)';
    if (this.img.parentNode.classList.contains('embed')) {
      this.boxName.style.transition = '300ms';
      this.boxName.style.transform = 'scale(1)';
    }
  }
}

let images = document.querySelectorAll('.img-fluid');
images = Array.from(images)
  .filter(img => !(img.classList.contains('mobile-img'))) // take in only desktop images
  .map(img => new Image(img));