// JS goes here

// ***************************************
// *********NAVIGATION BACKDROP***********
// ***************************************

const hamburger = document.querySelector('img.header__nav-links__hamburger');
const homeNav = document.querySelector('#home');
const servicesNav = document.querySelector('#services');
const contactNav = document.querySelector('#contact');
const fadeIn = document.querySelector('#fade-in');

var t1 = new TimelineMax({paused: true});

t1.to(".menu", 1, {
    display: "flex",
    top: "auto",
    width: "100%",
    ease: Expo.easeInOut,
    delay: -.25,
    opacity: 1,
    position: "fixed"
});

t1.staggerFrom(".menu ul li", .5, {
    marginLeft: "-50rem",
    opacity: 0,
    ease:Expo.easeOut
  }, 0.3);

t1.reverse();

hamburger.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
    if(hamburger.classList.contains('burger')) {
      hamburger.src = "img/nav-hamburger-close.png";
      hamburger.classList.remove('burger');
      hamburger.classList.add('closed');
    } else if (hamburger.classList.contains('closed')) {
      hamburger.src = "img/nav-hamburger.png";
      hamburger.classList.remove('closed');
      hamburger.classList.add('burger');
    }
});

home.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "/";
  }, 2000);

})

services.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "services.html";
  }, 2000);
})

contact.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "contact.html";
  }, 2000);
})

setTimeout(() => {
  fadeIn.style.opacity = "0";
}, 200);
// document.onload = () => {
// }

// ***************************************
// ******* SERVICES TAB COMPONENT ********
// ***************************************

class TabToggle {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services__tabs-card[data-tab='${this.data}']`);
    this.tabCard = new TabCard(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }
  select(){
    const toggleTabs = document.querySelectorAll('.services__tabs-tab');
    toggleTabs.forEach( tab => tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');
    this.tabCard.select();
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }
  select() {
    let tabCards = document.querySelectorAll('.services__tabs-card');
    tabCards.forEach(card => card.classList.remove('active-card'));
    this.element.classList.add('active-card');
  }
}

let tabs = document.querySelectorAll('.services__tabs-tab');
tabs = Array.from(tabs).map(tab => new TabToggle(tab));


