//Menu Toggle
const toggleMenu = () => {
    menu.classList.add('open-menu');
    xButton.classList.add('show-x-button');
    menuButton.classList.add('hide-menu-button');
  }

  const toggleX = () => {
    menu.classList.remove('open-menu');
    xButton.classList.remove('show-x-button');
    menuButton.classList.remove('hide-menu-button');
  }

  const xButton = document.querySelector('.x-button');

  const menu = document.querySelector('.menu');

  const menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    toggleMenu();
  });

  xButton.addEventListener('click', () => {
    toggleX();
  })


//Tab-Navigation



class TabLink {
  constructor(element){
    this.element = element;
    this.tabData = this.element.dataset.tab;
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    this.cards = Array.from(this.cards).map( card => new TabCard(card));
    this.element.addEventListener('click', () => {this.selectTab() });
    window.addEventListener("load", function(event) {
      tabs[0].selectTab();
    });
  }

  selectTab(){
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach( tab => {tab.classList.remove('active-tab');
  });
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'none');
    this.element.classList.add('active-tab');
    this.cards.forEach( card => card.selectCard());
    }
  }


class TabCard {
  constructor(element){
    this.element = element;
  }
  selectCard(){
    this.element.style= 'display: block;';
  }

}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new TabLink(tab));

//Select tabNavigator initial loading tab


//Carousel

class Carousel {
  constructor(element){
      this.element = element;
      this.rightButton = element.querySelector('.right');
      this.leftButton = element.querySelector('.left');
      this.currentIndex = 0;
      this.images = element.querySelectorAll('img');
      this.images[0].style = 'display: flex';
      this.leftButton.addEventListener('click', () => {this.scrollLeft()})
      this.rightButton.addEventListener('click', () => { this.scrollRight() })
  }

  scrollLeft(){
      this.images[this.currentIndex].style = 'display: none';
      if(this.currentIndex === 0){
          this.currentIndex = this.images.length - 1
      } else {
          this.currentIndex = this.currentIndex - 1
      }
      this.images[this.currentIndex].style = 'display: flex';
  }

  scrollRight(){
      this.images[this.currentIndex].style = 'display: none';
      if (this.currentIndex === this.images.length - 1) {
          this.currentIndex = 0
      } else {
          this.currentIndex = this.currentIndex + 1
      }
      this.images[this.currentIndex].style = 'display: flex';
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

//Submit button

// let submitButton = document.querySelector('.submit');
// submitButton.addEventListener('click', (e) => {
//   alert('Thanks for your input! We will be in touch.')
//   e.preventDefault();
// });

