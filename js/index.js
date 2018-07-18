// Nav expansion

let nav = document.querySelector('nav');
let navBtn = document.querySelector('.nav-btn');

navBtn.addEventListener('click', e => {
    nav.style.display = (nav.style.display == 'none' ? 'flex' : 'none');
    navBtn.src = (nav.style.display == 'none' ? './img/nav-hamburger.png' : './img/nav-hamburger-close.png');
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
  .filter(img => !(img.classList.contains('mobile-img')))
  .map(img => new Image(img));