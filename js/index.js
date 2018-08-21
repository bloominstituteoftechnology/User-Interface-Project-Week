// JS goes here

let menu = document.querySelector('.hamburger');
let navLinks = document.querySelector('.links');
let xMark = document.querySelector('.x-mark')

function expand() {
        menu.classList.toggle('hide');
        navLinks.classList.toggle('hide');
        xMark.classList.toggle('hide');
};

menu.addEventListener('click', () => {expand()});
xMark.addEventListener('click', () => {expand()});

//Services-page

class TabLink {
        constructor(element){

          this.element = element;

          this.tabData = this.element.dataset.tab; 

          this.output = document.querySelector(`.output[data-tab="${this.tabData}"]`);

          this.element.addEventListener('click', () => {this.selectTab()});
        }
      
        selectTab(){
      
          const tabs = document.querySelectorAll('.output');
          Array.from(tabs);

          tabs.forEach(function(tab) {
            tab.classList.remove('show');
          })
 
          this.output.classList.add('show');
        }
}

let tabs = document.querySelectorAll('.tab-link');

tabs = Array.from(tabs).map(tab => new TabLink(tab));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();

//Carousel
class Carousel {
  constructor(element) {
      this.element = element;

      this.left = this.element.querySelector('.left-button');
      this.left.addEventListener('click', () => {this.selectLeft()});

      this.right = this.element.querySelector('.right-button');
      this.right.addEventListener('click', () => {this.selectRight()});

      this.imgs = this.element.querySelectorAll('.carousel-img');
      Array.from(this.imgs);

      this.position = 0;

      this.showing = this.imgs[this.position].classList.add('show');

      
  } 

  selectLeft() {

      //attempt at animation
      // play(this.imgs[this.position]);

      // function play(e) {
      //     TweenLite.to(e, 2, {
      //         xPercent: 100,
      //         ease: Power1.easeInOut
      //     })
      // }


      setTimeout(() => {this.imgs.forEach(function(img) {
          img.classList.remove('show');
      })}, 2000);

      if (this.position === 0) {
      this.position = 3;
      } else {
      this.position = this.position - 1;
      }

      this.showing = this.imgs[this.position].classList.add('show');
  }

  selectRight() {
      this.imgs.forEach(function(img) {
          img.classList.remove('show');
      })

      if (this.position === 3) {
      this.position = 0;
      } else {
      this.position = this.position + 1;
      }

      this.showing = this.imgs[this.position].classList.add('show');
  }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

