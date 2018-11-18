// JS goes here

class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.service-items .service-item[data-tab='${this.data}']`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', () => this.select());
  }

  // Selects the tab that was just clicked along with its linked Item
  select() {
    const tabs = document.querySelectorAll('.service-tab');

    Array.from(tabs).forEach(tab => tab.classList.remove('service-tab-selected'));

    this.element.classList.add('service-tab-selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  // Selects the item of the tab that was clicked
  select() {
    const items = document.querySelectorAll('.service-item');

    Array.from(items).forEach(item => item.classList.remove('service-item-selected'));

    this.element.classList.add('service-item-selected');
    TweenMax.from(this.element, 0.3, {scale: 0.7});
  }
}

// Assigns the elements on the page to Components defined above
const tabs = document.querySelectorAll('.service-tabs .service-tab')
                     .forEach(tab => new TabLink(tab));

let menu = document.querySelector('.menu img');
let nav = document.querySelector('.nav-links');

let serviceHeaderImg = document.querySelector('.service-header img');

window.addEventListener('resize', function() {
  if(window.outerWidth < 513) {
    serviceHeaderImg.src = 'img/services/services-mobile-jumbotron.png';
  } else {
    serviceHeaderImg.src = 'img/services/services-jumbotron.png';
  }
})

// Add Functionality to the Nav Menu
menu.addEventListener('click', function() {
  nav.classList.remove('nav-links-hidden');
  if(menu.src.includes("img/nav-hamburger.png")) {
    menu.src = "img/nav-hamburger-close.png";
    TweenMax.fromTo(nav, 0.5, {height: 0, display: "flex"}, {height: "100%"});
  } else {
    menu.src = "img/nav-hamburger.png"
    TweenMax.fromTo(nav, 0.5, {height: "100%"}, {height: 0, display: "none"});
  }
})