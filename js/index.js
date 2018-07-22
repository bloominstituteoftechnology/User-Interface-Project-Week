// JS goes here
class Menu {
    constructor(element) {
      this.element = element;
      this.menu = this.element.querySelector('.menu-icon');
      this.content = this.element.querySelector('.menu-content');
      this.button.addEventListener('click', () => {this.toggleMenu()});
    }
    toggleMenu() {
      this.content.classList.toggle('.menu-hidden');
    }
  }
 
  let menus = document.querySelectorAll('.menu-icon');
  menus = Array.from(menus).map( menu => new Menu(menus));