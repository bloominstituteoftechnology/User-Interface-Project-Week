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