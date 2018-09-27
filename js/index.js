// JS goes here
// tl = new TimeLineMax();
window.addEventListener("load", () => {
  TweenMax.staggerFrom(
    "h1",
    1.3,
    { autoAlpha: 0, x: 100, ease: Back.easeOut.config(1.1) },
    0.3
  );
  TweenMax.from(".home__img1--destkop", 0.6, {
    y: 30,
    opacity: 0,
    delay: 0.9
  });
  TweenMax.from(".home__img2--desktop", 0.6, { y: 30, opacity: 0, delay: 1 });
  //==== Tablet & Mobile ====
  TweenMax.from(".home__img1--mobile", 1, {
    y: 30,
    opacity: 0,
    ease: Back.easeOut.config(1.2),
    delay: 0.8
  });
  TweenMax.from(".home__img2--mobile", 1, {
    y: 30,
    opacity: 0,
    ease: Back.easeOut.config(1.2),
    delay: 1
  });
  TweenMax.staggerFrom(".about__text", 1, { y: 20, opacity: 0 }, 0.4);
});

// Menu Button
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", function(event) {
  event.stopPropagation();
  // TweenMax.to("header", 6, { x: 400, scale: 0 });
  header.classList.toggle("expanded");
  TweenMax.from(".expanded", 0.3, { scale: 0, x: 510, y: -700 });
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
