const menuButton = document.getElementById('hamb');
const menu = document.getElementById('menu-items');



class Dropdown {
  constructor(menu, menuButton) {
    this.menu = menu;
    this.menuButton = menuButton;
    this.menuButton.addEventListener('click', () => this.toggleMenu());
  }
  toggleMenu() {
    this.menu.classList.toggle('menu-hidden');
    this.menuButton.classList.toggle('open');
  }
}

new Dropdown(menu, menuButton);

