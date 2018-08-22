// JS goes here

// class for dropdown Menu

class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector('.dropdown-button'); // hamburger icon
    this.content = this.element.querySelector('.dropdown-content'); // every linked element in the dropdown menu

    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }


// create the toggleContent() method for use with the Dropdown class

toggleContent() {
  this.content.classList.toggle('dropdown-hidden'); // dropdown-content elements also contain the dropdown-hidden property for use with the toggle

  // if the content is hidden, use the default hamburger icon; otherwise (menu open), present the icon to close it

  if (this.content.classList.contains('dropdown-hidden')) {
    this.button.src = './img/nav-hamburger.png';
  }
  else {
    this.button.src = './img/nav-hamburger-close.png';
  }
 }
} //dropdown class

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown)); // mapping new dropdown elements via the Dropdown class
