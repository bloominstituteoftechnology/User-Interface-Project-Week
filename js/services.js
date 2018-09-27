// JS goes here
//
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.index-hamburger-icon');
const closingX = document.querySelector('.closingX');
const links = document.querySelector('.links');

hamburger.addEventListener('click', ()=>{
  navbar.classList.toggle('navbarFull');
  hamburger.classList.toggle('closingXhidden');
  closingX.classList.toggle('closingXhidden');
  links.classList.toggle('closingXhidden');
});

closingX.addEventListener('click', () => {
  navbar.classList.toggle('navbarFull');
  hamburger.classList.toggle('closingXhidden');
  closingX.classList.toggle('closingXhidden');
  links.classList.toggle('closingXhidden');
});
class Buttons {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.name;

    this.title = document.querySelector(`h1[data-name=${this.data}]`)

// console.log('this is the title', this.title);
    this.pic = document.querySelector(`img[data-name=${this.data}]`)
    this.element.addEventListener('click', () => {
      this.selectButton();
    });

    this.card = document.querySelector(`img[data-name=${this.data}]`)
    // this.picture = new ButtonCard(this.card);
    // console.log(this.card); 

    
  }
    selectButton() {
      const cardData = document.querySelector(`img[data-name=${this.data}]`)
// console.log(cardData);
      const buttons = document.querySelectorAll('.services-button');
     // console.log(buttons); 
      const titles = document.querySelectorAll('.services-headline h1');
// console.log(titles);

      const images = document.querySelectorAll('.text-and-pic img');
// console.log(images);

      buttons.forEach(item => {
        item.classList.remove('selected');
      });

      titles.forEach(item => {
        item.classList.add('hiding');
      });

      images.forEach(item => {
        item.classList.add('hiding-picture');
      });

      cardData.classList.remove('hiding-picture');
      this.title.classList.remove('hiding');
      this.element.classList.add('selected');


   }
}

class ButtonCard {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('showing-picture');
  }

  remove() {
    this.element.classList.remove('showing-picture')
  }
}

let buttons = document.querySelectorAll('.services-button');
buttons = Array.from(buttons).map(button => new Buttons(button));
