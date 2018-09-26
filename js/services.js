// JS goes here
//
class Buttons {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.name;
    this.element.addEventListener('click', () => {
      this.selectButton();
    });

    this.card = document.querySelector(`img[data-name=${this.data}]`)
    this.picture = new ButtonCard(this.card);
    
  }
    selectButton() {
      const cardData = document.querySelector(`img[data-name=${this.data}]`)
      // console.log(cardData);
      const buttons = document.querySelectorAll('.services-button');
      let images = document.querySelectorAll('.services-main-content img');
console.log(images);
      buttons.forEach(item => {
        item.classList.remove('selected');
      });
      this.element.classList.add('selected');
      images.forEach(item => {
        console.log(item);
        item.classList.add('hiding-picture');
      });
      cardData.classList.remove('hiding-picture');


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
