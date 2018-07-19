// JS goes here
class Menu {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.menu-icon');
      this.content = this.element.querySelector('.menu-content');
      this.button.addEventListener('click', () => {this.toggleContent()});
    }
    toggleContent() {
      this.content.classList.toggle('menu-hidden');
    }
  }
 
  let hamburgers = document.querySelectorAll('.hamburger');
  hamburgers = Array.from(hamburgers).map( hamburger => new Menu(hamburgers));