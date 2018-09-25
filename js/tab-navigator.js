class TabNavigator {
  constructor(tabNavigator) {
    this.tabNavigator = tabNavigator;
    this.tabs = Array.from(document.querySelectorAll('.tab')).map(
      tab => new Tab(tab)
    );
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
