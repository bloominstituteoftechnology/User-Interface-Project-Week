class NavBurger {
  constructor(element) {
    this.element = element;
     this.element.addEventListener('click', () => {
      this.toggleMenu();
    });
  }
   toggleMenu() {
     console.log('sup!');
    let nav = document.querySelector('.nav');
    nav.classList.toggle('full-screen');
    let navbuttons = document.querySelectorAll('.nav-button');
    navbuttons.forEach((button) => {
      button.classList.toggle('display-none');
    });
    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('display-none');
  }
}

 let navMenuButtons = document.querySelectorAll('.nav-button');
 navMenuButtons = Array.from(navMenuButtons).map((navMenuButton) => new NavBurger(navMenuButton));