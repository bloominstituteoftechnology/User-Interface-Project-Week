AOS.init();

class Carousel {
  constructor(el) {
    // reference to DOM element
    this.el = el;

    // reference to left and right buttons
    this.btnLeft = this.el.querySelector('.left-button');
    this.btnRight = this.el.querySelector('.right-button');

    // reference to images
    this.images = this.el.querySelectorAll('img');

    // reference to texts
    this.texts = this.el.querySelectorAll('.carousel-text');

    // set current index and display current image
    this.index = 0;
    this.images[this.index].style.display = 'block';
    this.texts[this.index].style.display = 'block';
    this.interval = null;

    this.btnRight.addEventListener('click', () => this.slideRight());
    this.btnRight.addEventListener('mousedown', () => this.start(this.slideRight.bind(this)));
    this.btnRight.addEventListener('mouseup', () => this.stop());
    this.btnRight.addEventListener('mouseleave', () => this.stop());
    this.btnLeft.addEventListener('click', () => this.slideLeft());
    this.btnLeft.addEventListener('mousedown', () => this.start(this.slideLeft.bind(this)));
    this.btnLeft.addEventListener('mouseup', () => this.stop());
    this.btnLeft.addEventListener('mouseleave', () => this.stop());

    this.btnLeft.style.zIndex = 2;
  }

  start(cb) {
    this.interval = setInterval(cb, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  slideRight() {
    const nextIndex = (this.index + 1) % this.images.length;
    this.slideOut(nextIndex);
    this.fadeInOut(nextIndex);
  }

  slideLeft() {
    const nextIndex = this.index === 0 ? this.images.length-1 : this.index-1;
    this.slideIn(nextIndex);
    this.fadeInOut(nextIndex);
  }

  slideOut(nextIndex) {
    TweenLite.to(this.images[this.index], .2, {xPercent: '+=100', autoAlpha: 1, ease:Power1.easeOut, onComplete: () => {
      TweenLite.set(this.images[this.index], {xPercent: '-=100', display: 'none'});
      TweenLite.set(this.images[nextIndex], {xPercent: '-=50', autoAlpha: 0, display: 'block'});
      TweenLite.to(this.images[nextIndex], .2, {xPercent: '+=50', autoAlpha: 1, ease:Power1.easeOut, onComplete: () => {
        this.index = nextIndex;
      } })
    }})
  }

  slideIn(nextIndex) {
    TweenLite.to(this.images[this.index], .2, {xPercent: '-=100', autoAlpha: 1, ease:Power1.easeOut, onComplete: () => {
      TweenLite.set(this.images[this.index], {xPercent: '+=100', display: 'none'});
      TweenLite.set(this.images[nextIndex], {xPercent: '+=50', autoAlpha: 0, display: 'block'});
      TweenLite.to(this.images[nextIndex], .2, {xPercent: '-=50', autoAlpha: 1, ease:Power1.easeOut, onComplete: () => {
        this.index = nextIndex;
      } })
    }})
  }

  fadeInOut(nextIndex) {
    TweenLite.to(this.texts[this.index], .4, {autoAlpha: '0', onComplete: () => {
      this.texts[this.index].style.display = 'none';
      this.texts[nextIndex].style.display = 'block';
    }});

    TweenLite.fromTo(this.texts[nextIndex], .4, {autoAlpha: 0}, {autoAlpha: 1, delay: .4});
  }
}

let carousel = new Carousel(document.querySelector('.carousel-container'));

////////////////

var app = new Vue({
  el: '#app',
  data: {
    personnel: [{
      name: 'Chief Tui',
      job: 'president',
      image: '../img/about/man.png',
      message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
      name: 'Moana Motunui',
      job: 'CFO',
      image: '../img/about/woman.png',
      message: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.'
    },
    {
      name: 'Tamatoa',
      job: 'HR and Internal Operations Manager',
      image: '../img/about/man.png',
      message: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'
    },
    {
      name: 'Heihei',
      job: 'Executive Sales Assistant',
      image: '../img/about/man.png',
      message: 'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.'
    },
    {
      name: 'Te Ka Tefiti',
      job: 'Sales Manager',
      image: '../img/about/woman.png',
      message: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'
    },
    {
      name: 'Maui',
      job: 'Canvassing Team Supervisor',
      image: '../img/about/man.png',
      message: 'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.'
    }] 
  }
});