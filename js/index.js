let navBtn = document.querySelector('.nav-btn');
let nav = document.querySelector('.hamburger-content');
let navImg = document.querySelector('.nav-img');
let close = document.querySelector('.close-btn');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  close.classList.toggle('hidden');
  navImg.classList.toggle('hidden');
});

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll('.tab');
    console.log(this.links);
    this.links = Array.from(this.links).map(link => {
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
    this.activeLink = newActive;;
  }

  getTab(data) {
    console.log(this.element);
    console.log(this.element.querySelector(`.tabs-item[data-tab="${data}"]`));
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }

}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    this.tabs = parent;
    // console.log(parent);
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    // console.log(this.tabsItem);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });
  };

  select() {
    this.link.classList.add('active-tab');
    this.tabsItem.select();
  }

  deselect() {
    this.link.classList.remove('active-tab');
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.remove('inactive-tab-item');

  }

  deselect() {
    this.element.classList.add('inactive-tab-item');
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));