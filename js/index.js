// JS goes here
// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.button = this.element.querySelector('.hamburger-img');
//     this.content = this.element.querySelector('.ham-content');
//     this.button.addEventListener('click', () => {
//       this.toggleContent();
//     });
//   }
//   toggleContent() {
//     this.content.classList.toggle('ham-hidden');
//   }
// }

// document.querySelector('.hamburger-img').addEventListener('click', () => {
//   console.log('click');
// });

// let dropdowns = document.querySelectorAll('.hamburger'); //gets all elements with classname hamburger
// dropdowns = Array.from(dropdowns).map((hamburger) => new Dropdown(hamburger));
// new dropdown is each element(hamburger) from line 3

let open = document.querySelector('.hamburger-img');
let hamburger = document.querySelector('.hamburger-open');
let closed = document.querySelector('.closed');

open.addEventListener('click', () => {
  hamburger.style.display = 'block';
});

closed.addEventListener('click', () => {
  hamburger.style.display = 'none';
});

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map((link) => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.element.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  }

  select() {
    this.element.classList.add('tabs-link-selected');
    this.tabsItem.select();
  }

  deselect() {
    this.element.classList.remove('tabs-link-selected');
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map((tab) => new Tabs(tab));
