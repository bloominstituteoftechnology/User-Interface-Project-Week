class Menu {
  constructor() {
    this.menu = document.querySelector('.mobile-menu');
    this.menuButton = document.querySelector('.mobile-menu-extras');
    this.closeButton = document.querySelector('.close');

    this.menuButton.addEventListener('click', () => this.toggleMenu());
    this.closeButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.menu.classList.toggle('menu-open');
  }
}

document.querySelectorAll('.mobile-menu').forEach(menu => new Menu(menu));
