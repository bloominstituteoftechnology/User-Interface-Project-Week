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
    // nav.classList.toggle('full-screen');

    let buttons = document.querySelectorAll('.nav-menu');
    buttons.forEach((button) => {
      button.classList.toggle('display-none');
    });

    let navContent = document.querySelector('.nav-content');
    // navContent.classList.remove('display-none');
    TweenMax.to(navContent, 1, { marginTop: 0 });

    let menuClose = document.querySelector('.menu-close');
    menuClose.classList.contains('display-none')
      ? (TweenMax.to(nav, 1, { height: '49px' }),
        TweenMax.to(navContent, 0.5, { opacity: 0, y: '-300' }))
      : (TweenMax.to(nav, 1, { height: '100%' }),
        TweenMax.to(navContent, 1, { opacity: 1, y: 0 }));
  }
}

let menuButtons = document.querySelectorAll('.nav-menu');

menuButtons = Array.from(menuButtons).map(
  (menuButton) => new MenuButton(menuButton)
);

let navContent = document.querySelector('.nav-content');
// navContent.classList.add('display-none');
