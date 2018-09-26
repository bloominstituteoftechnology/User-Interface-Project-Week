// JS goes here

var controller = new ScrollMagic.Controller();

// Tweens
var headerH1 = TweenMax.from("#animate1", 2, {
  right: 1800,
  ease: Back.easeOut.config(1.7)
});

var img1 = TweenMax.from("#animate2", 2, {
  left: 1800,
  ease: Back.easeOut.config(1.7)
});

var img2 = TweenMax.from("#animate3", 2, {
  right: 1800,
  ease: Back.easeOut.config(1.7)
});

var bottomImg = TweenMax.from("#animate4", 2, {
  left: 1800
});

var bottomImg2 = TweenMax.from("#animate5", 2, {
  right: 1800
});

var bottomImg3 = TweenMax.from("#animate6", 2, {
  left: 1800
});

// Scenes
var scene = new ScrollMagic.Scene({
  triggerElement: ".nav-links"
})
  //.addIndicators()
  .setTween(headerH1)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".nav-links"
})
  //.addIndicators()
  .setTween(img1)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".left-info"
})
  //.addIndicators()
  .setTween(img2)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: ".row2"
})
  //.addIndicators()
  .setTween(bottomImg)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#img1"
})
  //.addIndicators()
  .setTween(bottomImg2)
  .addTo(controller);

var scene = new ScrollMagic.Scene({
  triggerElement: "#img2"
})
  //.addIndicators()
  .setTween(bottomImg3)
  .addTo(controller);

let nav = document.querySelector(".nav-expand");
let navLinks = document.querySelector(".nav-links");
let navX = document.querySelector(".navclose");

nav.addEventListener("click", () => {
  navLinks.classList.toggle("nav-extended");
});

navX.addEventListener("click", () => {
  navLinks.classList.toggle("nav-extended");
});

class TabButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.content = document.querySelector(`.content[data-tab='${this.data}']`);

    this.content = new Content(this.content);

    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    let buttons = document.querySelectorAll(".tab-button");

    Array.from(buttons).forEach(tabButtons => {
      tabButtons.classList.remove("button-selected");
    });

    this.element.classList.add("button-selected");

    this.content.select();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;

    this.content = document.querySelector(".tabs");

    this.content = new TabButton(this.content);
  }
}

class Content {
  constructor(element) {
    this.element = element;
  }

  select() {
    let items = document.querySelectorAll(".content");

    Array.from(items).forEach(content => {
      content.classList.remove("tabs-item-selected");
    });

    this.element.classList.add("tabs-item-selected");
  }
}

let buttons = document.querySelectorAll(".tab-button");

buttons = Array.from(buttons).map(element => {
  return new TabButton(element);
});

buttons[0].select();
