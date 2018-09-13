
// ref to .menu class
const menu = document.querySelector('.menu');


const toggleDropDown = () => {
  menu.classList.toggle('menu--open');

};

const menuButton = document.querySelector('.hamnburger-button');

menuButton.addEventListener('click', toggleDropDown);


class Dropdown {
  constructor(el) {
    // create reference to element
    this.element = element;

    // assign reference to element with .dropdown-button
    this.button = this.element.querySelector('.dropdown-button');

    // assign reference to element with .dropdown-content
    this.button = this.element.querySelector('.dropdown-content');

    // add click handler to button reference, call toggle
    this.button.addEventListener('click', () => this.toggle.toggleContent);
  }

  // toggleContent method to switch between dropdown-hidden
  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }

}

let drodowns = document.querySelectorAll('.dropdown');
drodowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));