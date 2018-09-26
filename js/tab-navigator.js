class TabNavigator {
  constructor(tabNavigator) {
    this.tabNavigator = tabNavigator;
    this.tabs = Array.from(document.querySelectorAll('.tab')).map(
      tab => new Tab(tab)
    );
    this.imgs = Array.from(document.querySelectorAll('.img')).map(
      img => new Img(img)
    );
    console.log(this.imgs);
  }
}

class Tab {
  constructor(tab) {
    this.tab = tab;
    this.dataTab = this.tab.dataset.tab;
    this.currentCard = new Card(
      document.querySelector(`.card[data-tab='${this.dataTab}']`)
    );
    this.tab.addEventListener('click', () => this.select());
  }
  select() {
    this.deselect();
    this.tab.classList.add('tab-active');
    this.currentCard.select();
  }

  deselect() {
    // this.tab.classList.remove('tab-active');
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('tab-active'));
  }
}

class Img extends Tab {
  constructor(img) {
    super(img);
    this.img = img;
    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // Button Event Listeners
    this.rightButton.addEventListener('click', () => this.imgSelect());
    this.leftButton.addEventListener('click', () => this.imgSelect());
  }

  imgSelect() {
    if (this.img.classList.contains('current-img')) {
      this.currentCard.select();
    }
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  select() {
    this.deselect();
    this.card.classList.add('card-active');
  }

  deselect() {
    // this.card.classList.remove('card-active');
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('card-active'));
  }
}

// create objects from
let tabNavigators = Array.from(document.querySelectorAll('.tab-navigator')).map(
  item => new TabNavigator(item)
);
