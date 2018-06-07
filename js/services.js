class Tabs {
  constructor(element) {
    this.element = element;
    this.tabs = element.querySelectorAll('.tab');
    this.tabs = Array.from(this.tabs).map(tab => new TabLink(tab, this));
    this.activeTab = this.tabs[0];
    this.init();
  }

  init() {
    this.activeTab.selectTabButton();
  }

  updateActive(tabElement) {
    this.activeTab.deselectTabButton();
    this.activeTab = tabElement;
  }

  getServices(data) {
    return document.querySelectorAll(`.services[data-tab="${data}"]`);
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.services = this.parent.getServices(this.element.dataset.tab);
    this.services = Array.from(this.services).map(
      text => new ServicesText(text),
    );
    this.element.addEventListener('click', this.selectTabButton.bind(this));
  }

  selectTabButton() {
    this.parent.updateActive(this);
    this.element.classList.add('tab-selected');
    this.services.forEach(service => service.selectService());
  }

  deselectTabButton() {
    this.element.classList.remove('tab-selected');
    this.services.forEach(card => card.deselectService());
  }
}

class ServicesText {
  constructor(element) {
    this.element = element;
  }
  selectService() {
    this.element.style.display = null;
    this.element.classList.remove('hide');
  }
  deselectService() {
    this.element.style.display = 'none';
  }
}

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));

// activate hamburger menu
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.close-btn');
let menuBtn = document.querySelector('.hambutton');

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

menuBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

// activate onscroll nav bar color change
let navbar = document.querySelector('.navigation-container');
window.addEventListener('scroll', changeNavColor);

function changeNavColor() {
  let scrollTop = window.pageYOffset || document.navbar.scrollTop;
  if (scrollTop) {
    navbar.style = 'background-color: #9DA7B1';
    navbar.style.opacity = '0.95';
  }
  if (scrollTop < 20) {
    navbar.style = 'background-color: null';
    navbar.style.opacity = '1';
  }
}
