/* NAV DROPDOWN */
class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdownButton');
    this.nav = this.element.querySelector('nav');
    this.button.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    const container = document.querySelector('header');

    container.classList.toggle('headerExpanded');
    this.nav.classList.toggle('navExpanded');
    this.button.classList.toggle('closeNav');
  }
}

let dropdowns = document.querySelectorAll('header')
  .forEach(el => new Dropdown(el));


/* TABS SELECTION */
class TabButton {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabComponent[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    const links = document.querySelectorAll('.tab');

    Array.from(links).forEach(el => {
      el.classList.remove('selected');
    });

    this.element.classList.add('selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tabComponent');

    items.forEach(el => {
      el.classList.remove('tabSelected');
    });

    this.element.classList.add('tabSelected');
  }
}

links = document.querySelectorAll('.tab')
  .forEach(el => new TabButton(el));