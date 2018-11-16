// JS goes here

class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.service-items .service-item[data-tab='${this.data}']`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', () => this.select());
  }

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

  select() {
    const items = document.querySelectorAll('.service-item');
    console.log(items);
    Array.from(items).forEach(item => item.classList.remove('service-item-selected'));
    this.element.classList.add('service-item-selected');
  }
}

const tabs = document.querySelectorAll('.service-tabs .service-tab')
                     .forEach(tab => new TabLink(tab));
                     
let menu = document.querySelector('.menu img');
let nav = document.querySelector('.nav-links');

// Add Functionality to the Nav Menu
menu.addEventListener('click', function() {
  nav.classList.toggle('nav-links-hidden');
  if(menu.src.includes("img/nav-hamburger.png")) {
    menu.src = "img/nav-hamburger-close.png";
  } else {
    menu.src = "img/nav-hamburger.png"
  }
})