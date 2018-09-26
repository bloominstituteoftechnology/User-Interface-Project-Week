// JS goes here
window.addEventListener("load", () => {
  TweenLite.from("h1", 2, { opacity: 0, x: 200 });
  TweenLite.from(".home__img1--destkop", 1, { opacity: 0, delay: 2 });
  TweenLite.from(".about__text", 1.5, { opacity: 0, delay: 2 });
});

// Menu Button
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  header.classList.toggle("expanded");
  TweenMax.from(".expanded", 0.3, { scale: 0, x: 510, y: -515 });
});

// Tab Nav Constructor
class TabLink {
  constructor(tab) {
    this.tab = tab;
    this.linkData = this.tab.dataset.tab;
    this.tabContent = document.querySelector(
      `.tab__content[data-tab='${this.linkData}']`
    );

    this.tabItem = new Card(this.tabContent);
    this.tab.addEventListener("click", event => this.selectTab(event));
    console.log(this.tabItem);
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");
    Array.from(tabs).forEach(tab => tab.classList.remove("active-tab"));
    this.tab.classList.add("active-tab");
    console.log(this.tabItem);
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
  }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map(tab => new TabLink(tab));

tabs[1].selectTab();

// const tweenMenu = TweenMax.fromTo(
//   ".expanded",
//   0.3,
//   { scale: 0, x: 510, y: -515 },
//   { scale: 1, x: 0, y: 0 }
// ).reverse();

//   if (!tweenMenu.isActive()) {
//     tweenMenu.reversed(!tweenMenu.reversed());
//   }
