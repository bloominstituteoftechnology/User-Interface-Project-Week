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
    ease: Back.easeOut.config(1.2)
  });
  TweenMax.from(".home__img2--mobile", 1, {
    y: 30,
    opacity: 0,
    ease: Back.easeOut.config(1.2)
  });
  TweenMax.staggerFrom(".about__text", 1, { y: 20, opacity: 0 }, 0.4);
});

// Menu Button
const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector("header");
const expand = function() {
  TweenMax.from(".expanded", 0.3, { y: -800, opacity: 0 });
};

// let menu = new TimelineMax();
// menu.reversed(true);
// menu({ paused: true, reversed: true });

// menu
//   .from(".expanded", 0.3, { y: -800, opacity: 0 })
//   .from(".nav", 0.5, { autoAlpha: 0 });

// function menuToggle() {
//   // menu.reversed() ? menu.play() : menu.reverse();
//   menu.reversed(!menu.reversed());
// }

menuBtn.addEventListener("click", event => {
  event.stopPropagation();
  header.classList.toggle("expanded");
  expand();
  expand.reversed(true);
  console.log(expand.reversed());
  // TweenMax.from("nav", 0.5, {
  //   autoAlpha: 0,
  //   delay: 0.3
  // });
});

// menuBtn.addEventListener("click", function(event) {
//   // event.stopPropagation();
//   // header.classList.toggle("expanded");

//   // let expand = TweenMax.from(".expanded", 0.3, { y: -800, opacity: 0 });
//   // header.classList.toggle("expanded");
//   // if (header.style.height !== "100vh") {
//   //   TweenMax.to(expand, 0.3, { height: "100vh", opacity: 1 });
//   // } else {
//   //   // header.classList.toggle("expanded");
//   //   TweenMax.fromTo(
//   //     expand,
//   //     0.3,
//   //     { height: "100vh", opacity: 0.95 },
//   //     { height: 0, opacity: 0 }
//   //   );
//   // }
// });

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
    TweenMax.from(cards, 0.6, { opacity: 0 });
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

// ========= CAROUSEL ==========

let carousel = document.querySelector(".carousel");
let leftButton = carousel.firstElementChild;
let rightButton = carousel.lastElementChild;
let images = carousel.querySelectorAll(".slide");
let index = 0;

// window.addEventListener("load", () => {
//   TweenMax.from(".slide__text", 1, { autoAlpha: 0 });
// });

images[index].style.display = "block";
rightButton.addEventListener("click", () => {
  if (index === 3) {
    index = 0;
  }
  images.forEach(image => (image.style.display = "none"));
  images[++index].style.display = "block";
  TweenMax.from(images[index], 1, { opacity: 0 });
});
