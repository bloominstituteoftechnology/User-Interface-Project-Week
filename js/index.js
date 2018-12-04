// JS goes here

// nav constructor and nav toggle function
class Menu {
  constructor(menuName, menuButtonName) {
    this.menu = document.querySelector(menuName);
    this.menuButton = document.querySelector(menuButtonName);
    this.menuButton.addEventListener("click", () => { this.toggleMenu() });
    this.isOpen = false;
  }

  toggleMenu() {
    this.menu.classList.toggle("menu--open");
    this.menu.parentElement.classList.toggle("nav-opactiy");
    if (this.isOpen) {
      this.menuButton.src = "img/nav-hamburger.png";
      this.isOpen = false;
    } else {
      this.menuButton.src = "img/nav-hamburger-close.png";
      this.isOpen = true;
    }

  }
}

// creates the navigation menu and the tab navigation
const menu = new Menu(".menu", ".menu-button");
