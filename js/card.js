
class CardLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.card[data-tab="${this.data}"]`);
    this.cardItem = new Card(this.item);
    this.element.addEventListener('click', () => {this.select()
    });
  };

  select() {
    const links = document.querySelectorAll('.service-item');
      links.forEach( link => {
      link.classList.remove('service-item-selected')
    });
    this.element.classList.add('service-item-selected');
    this.cardItem.select();
  }
}

class Card {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.card');
    items.forEach( item => {
      item.classList.remove('card-item-selected');
    })
    this.element.classList.add('card-item-selected');
  }
}

let links = document.querySelectorAll('.service-item');
links = Array.from(links).map( link => new CardLink(link));

links[0].select()