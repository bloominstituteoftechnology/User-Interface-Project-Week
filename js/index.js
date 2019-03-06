// JS goes here
class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.button = dropdown.querySelector('.hamburger');
    this.closeButton = dropdown.querySelector('.close');
    this.content = dropdown.querySelector('.site-nav');
    this.closeBtnContent = document.querySelector('.site-nav');

    this.button.addEventListner('click', (event) => { this.toggleContent(event) })
    this.closeButton.addEventListner('click', (event) => { this.closeContent(event) })
  }

  toggleContent(event) {
    this.content.classList.toggle('toggle-on');
  }
  closeContent(event) {
    this.closeBtnContent.classList.toggle('close');
  }
}



let dropdowns = document.querySelectorAll('.menucontainer');
dropdowns.forEach(dropdown => new Dropdown(dropdown));