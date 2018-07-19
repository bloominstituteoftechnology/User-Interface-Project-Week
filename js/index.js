let navBtn = document.querySelector('#navToggle');
let navModal = document.querySelector('.nav-expand');
let navCloseBtn = document.querySelector('#navClose');


navBtn.addEventListener('click', () => {
  navModal.style.display = 'block';
  navBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline';
});

navCloseBtn.addEventListener('click', () => {
  navModal.style.display = 'none';
  navBtn.style.display = 'inline';
  navCloseBtn.style.display = 'none';
});

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.service-link');
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select()
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.service-info[data-tab="${data}"]`)
  }

}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select()
    });
  };

  select() {
    this.link.classList.add('service-link-selected')
    this.tabsItem.select();
  }

  deselect() {
    this.link.classList.remove('service-link-selected');
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('service-info-selected');
  }

  deselect() {
    this.element.classList.remove('service-info-selected');
  }
}


let tabs = document.querySelectorAll('.services');
tabs = Array.from(tabs).map( tab => new Tabs(tab));
