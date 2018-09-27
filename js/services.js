// Tab Nav Constructor
window.addEventListener("load", () => {
  TweenMax.staggerFrom(".tab", 0.8, { autoAlpha: 0, y: -20 }, 0.1);
});

class TabLink {
  constructor(tab) {
    this.tab = tab;
    this.linkData = this.tab.dataset.tab;
    this.tabContent = document.querySelector(
      `.tab__content[data-tab='${this.linkData}']`
    );

    this.tabItem = new Card(this.tabContent);
    this.tab.addEventListener("click", event => this.selectTab(event));
    //  console.log(this.tabItem);
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("active-tab"));
    this.tab.classList.add("active-tab");
    //  console.log(this.tabItem);
    this.tabItem.selectCard();
  }
}

class Card {
  constructor(card) {
    this.card = card;
  }

  selectCard() {
    const cards = document.querySelectorAll(".tab__content");
    Array.from(cards).forEach(card => card.classList.remove("active"));
    this.card.classList.add("active");
    TweenMax.from(cards, 0.6, { opacity: 0 });
  }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));
// console.log(tabs);
tabs[1].selectTab();
