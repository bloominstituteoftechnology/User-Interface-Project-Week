////////////////////////
// JS for menu component
////////////////////////

class MenuButton {
  constructor(element) {
    this.element = element;

    this.element.addEventListener('click', () => {
      this.selectMenu();
    });
  }

  selectMenu() {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('full-screen');

    let buttons = document.querySelectorAll('.nav-menu');
    buttons.forEach((button) => {
      button.classList.toggle('display-none');
    });

    let navContent = document.querySelector('.nav-content');
    navContent.classList.toggle('display-none');
  }
}

let menuButtons = document.querySelectorAll('.nav-menu');

menuButtons = Array.from(menuButtons).map(
  (menuButton) => new MenuButton(menuButton)
);
