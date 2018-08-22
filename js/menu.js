class MenuConstructor {
    constructor(element) {
      this.element = element;
      this.button = element.querySelector('.menu-button');
      this.content = element.querySelector('.menu-content');
      this.closeButton = element.querySelector('.menu-close');
      this.button.addEventListener('click', () => {this.toggleContent()});
      this.closeButton.addEventListener('click', () => {this.toggleContent()});
      this.link = element.querySelectorAll('.menu-link')
    }
    toggleContent() {
      this.content.classList.toggle('menu-hidden');
      console.log('activating menu')
    }
  }
let mainMenu = document.querySelectorAll('.menu');
mainMenu = Array.from(mainMenu).map( mainMenuArray => new MenuConstructor(mainMenuArray));