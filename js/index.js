// JS goes here
class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.button = this.dropdown.querySelector('.hamburger');
    this.closeButton = this.dropdown.querySelector('.close');
    this.content = this.dropdown.querySelector('.site-nav');
    this.closeBtnContent = document.querySelector('.site-nav');

    this.button.addEventListner('click', (event) => { this.toggleContent(event) })
    this.closeButton.addEventListner('click', (event) => { this.closeContent(event) })
  }

  toggleContent(event) {
    this.content.classList.toggle('toggle-on');
  }
  closeContent(event) {
    this.closeBtnContent.classList.toggle('toggle-on');
  }
}



let dropdowns = document.querySelectorAll('header');
dropdowns.Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));