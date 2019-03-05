// JS goes here
class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.hamburger');
    this.closeButton = this.element.querySelector('.close');
    this.content = this.element.querySelector('.site-nav');
    this.closeBtnContent = document.querySelector('.site-nav');

    this.button.addEventListner('click', (event) => { this.toggleContent(event) })
    this.closeButton.addEventListner('click', (event) => { this.closeContent(event) })
  }

  toggleContent(event) {
    this.content.classList.toggle('site-nav');
  }
  closeContent(event) {
    this.closeBtnContent.classList.toggle('site-nav');
  }
}



let dropdowns = document.querySelectorAll('header');
dropdowns = Array.from(dropdowns).map(dropdown => dropdown(dropdown));