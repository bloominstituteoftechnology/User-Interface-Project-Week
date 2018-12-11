class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`)
    //console.log(this.itemElement);
    this.tabItem = new TabItem(this.itemElement);

    // get links and item 
    this.links = document.querySelectorAll(".tabs-link");
    this.tabItems = document.querySelectorAll('.tabs-item');

    // add click event to all links
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
    // const tabItems = document.querySelectorAll('.tabs-item');
    tabItems.forEach(item => {
      item.classList.remove('tabs-item-selected')
    })
    this.element.classList.add('tabs-item-selected')
  }
}


links = document.querySelectorAll('.tabs-link').forEach((link) => new TabLink(link))



// JS goes here
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
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
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


// animtaed button 
let animateButton = function (e) {
  e.preventDefault;
  //reset animation
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




// carousel

const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector('.slider__item:first-of-type');
const lastChild = document.querySelector('.slider__item:last-of-type');
const jumbotron = document.querySelector('.contact__jumbotron');
// btn
const next = document.querySelector('.right-button');
const previous = document.querySelector('.left-button')
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
  console.log('testing')
}

slide();

next.addEventListener('click', () => {
  slide();
  console.log('clicked next')
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
  console.log('left clicked')

})


setInterval(slide, 4000);