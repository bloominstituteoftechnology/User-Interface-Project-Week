// Mobile menu toggle functionality
class Menu {
  constructor() {
    // grab mobile menu, mobile menu button, and close anchor tag
    this.menu = document.querySelector('.mobile-menu');
    this.menuButton = document.querySelector('.mobile-menu-extras');
    this.closeButton = document.querySelector('.close');
    // add event listeners for "Menu" and "Close" tags
    this.menuButton.addEventListener('click', () => this.toggleMenu());
    this.closeButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    // toggle .menu-open styles
    this.menu.classList.toggle('menu-open');
  }
}

document.querySelectorAll('.mobile-menu').forEach(menu => new Menu(menu));
