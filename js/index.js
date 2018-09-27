// JS goes here
let menu = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('toggle');
  document.querySelector('.dropdown-content').classList.toggle('dropShow');

  let img = document.querySelector('img');

if(img.src === 'http://127.0.0.1:5500/img/nav-hamburger.png') {
  img.src = 'img/nav-hamburger-close.png'
} else {
  img.src = 'img/nav-hamburger.png'
}


});


///Tabs
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabs-item');
    Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }
}


let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map( link => new TabLink(link));


links[0].select();









