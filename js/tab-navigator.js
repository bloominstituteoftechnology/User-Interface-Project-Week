class TabNavigator {
  constructor(tabNavigator) {
    this.tabNavigator = tabNavigator;
    this.tabs = Array.from(document.querySelectorAll('.tab')).map(
      tab => new Tab(tab)
    );
    this.currentTab = this.tabs.filter(tab =>
      tab.tab.classList.contains('tab-active')
    )[0];

    this.tabs.forEach(tab => {
      tab.tab.addEventListener('click', () => {
        this.currentTab.deselect();
        tab.select();
        this.currentTab = tab;
      });
    });

    // this.imgs = Array.from(document.querySelectorAll('.img')).map(
    //   img => new Img(img)
    // );

    // this.currentImg = this.imgs.filter(image =>
    //   image.img.classList.contains('current-img')
    // );

    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // Button Event Listeners
    // this.rightButton.addEventListener('click', () => this.imgSelect());
    // this.leftButton.addEventListener('click', () => this.imgSelect());

    // console.log(this.imgs[0].img);
    // console.log(this.currentImg);
  }
  imgSelect() {
    this.img.classList.add('current-img');
    this.currentCard.select();
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

class Img extends Tab {
  constructor(img) {
    super(img);
    this.img = img;
  }

  // imgSelect() {
  //   let imgs = document.querySelectorAll('.img');
  //   imgs.forEach(img => img.classList.remove('card-active'));
  //   this.img.classList.add('current-img');
  //   this.currentCard.select();
  // }
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
