class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    this.tabItem = new TabItem(this.itemElement);
    this.links = document.querySelectorAll(".tabs-link");
    this.tabItems = document.querySelectorAll('.tabs-item');
    this.element.addEventListener('click', () => this.select(this.links));
  };

  select(links) {
    Array.from(links).forEach(tab =>
      tab.classList.remove("tabs-link-selected")
    );
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select(this.tabItems);
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select(tabItems) {
    tabItems.forEach(item => {
      item.classList.remove('tabs-item-selected')
    })
    this.element.classList.add('tabs-item-selected')
  }
}


links = document.querySelectorAll('.tabs-link').forEach((link) => new TabLink(link))
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', function () {

  if (nav.classList.toggle('toggle')) {
    hamburger.src = "./img/nav-hamburger.png"
    enableScroll();
  } else {
    hamburger.src = "./img/nav-hamburger-close.png"
    disableScroll();
  }
})

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault; browsers, IE
  window.ontouchmove = preventDefault;
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}


let animateButton = function (e) {
  e.preventDefault;

  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

let bubblyButtons = document.getElementsByClassName("bubbly-button");

for (let i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}





const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector('.slider__item:first-child');
const lastChild = document.querySelector('.slider__item:last-child');
const next = document.querySelector('.slider_right_btn');
const previous = document.querySelector('.slider_left_btn')

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {

    firstSlide.classList.add('showing');
  }
}
slide();

next.addEventListener('click', () => {
  slide();
})

previous.addEventListener('click', () => {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`)

  if (currentSlide) {

    currentSlide.classList.remove(SHOWING_CLASS);
    const prevSlide = currentSlide.previousElementSibling;
    if (prevSlide) {
      prevSlide.classList.add(SHOWING_CLASS);
    } else {
      lastChild.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add('showing');
  }
})


setInterval(slide, 10000);




