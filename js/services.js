// JS goes here
//
class Buttons {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.name;
    this.title = document.querySelector(`h1[data-name=${this.data}]`)
    this.pic = document.querySelector(`img[data-name=${this.data}]`)
    this.element.addEventListener('click', () => {
      this.selectButton();
    });

    this.card = document.querySelector(`img[data-name=${this.data}]`)
    this.picture = new ButtonCard(this.card);
    
  }
    selectButton() {
      const cardData = document.querySelector(`img[data-name=${this.data}]`)
      const buttons = document.querySelectorAll('.services-button');
      const titles = document.querySelectorAll('.card-header');
      const images = document.querySelectorAll('.services-main-content img');

      buttons.forEach(item => {
        item.classList.remove('selected');
      });

      titles.forEach(item => {
        item.classList.add('hiding');
        console.log(item);
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
