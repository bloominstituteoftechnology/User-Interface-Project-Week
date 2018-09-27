class TabNavigator {
  constructor(tabNavigator) {
    this.tabNavigator = tabNavigator;
    // TABS
    this.tabs = Array.from(document.querySelectorAll('.tab')).map(
      tab => new Tab(tab)
    );
    // CURRENT TAB
    this.currentTab = this.tabs.filter(tab =>
      tab.tab.classList.contains('tab-active')
    )[0];

    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // EVENT LISTENERS
    this.tabs.forEach(tab => {
      tab.tab.addEventListener('click', () => {
        this.currentTab.deselect();
        this.currentTab = tab;
        this.currentTab.select();
      });
    });

    this.rightButton.addEventListener('click', () => {
      this.tabs.forEach((tab, i) => {
        if (tab.tab.classList.contains('current-img')) {
          this.currentTab.deselect();
          if (i === this.tabs.length - 1) {
            this.currentTab = this.tabs[0];
          } else {
            this.currentTab = this.tabs[i + 1];
          }
          this.currentTab.select();
        }
      });
    });

    this.leftButton.addEventListener('click', () => {
      this.tabs.forEach((tab, i) => {
        if (tab.tab.classList.contains('current-img')) {
          this.currentTab.deselect();
          if (i === 0) {
            this.currentTab = this.tabs[this.tabs.length - 1];
          } else {
            this.currentTab = this.tabs[i - 1];
          }
          this.currentTab.select();
        }
      });
    });
  }
}

class Tab {
  constructor(tab) {
    this.tab = tab;
    this.dataTab = this.tab.dataset.tab;
    this.currentCard = new Card(
      document.querySelector(`.card[data-tab='${this.dataTab}']`)
    );
  }
  select() {
    this.tab.classList.add('tab-active');
    this.currentCard.select();
  }

  deselect() {
    this.tab.classList.remove('tab-active');
    this.currentCard.deselect();
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  select() {
    this.card.classList.add('card-active');
  }

  deselect() {
    this.card.classList.remove('card-active');
  }
}

// create objects from
let tabNavigators = Array.from(document.querySelectorAll('.tab-navigator')).map(
  item => new TabNavigator(item)
);
