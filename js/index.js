// JS goes here
class NavButton {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.nav-button-close[data-tab='${this.data}']`);
      this.closeButton = new CloseButtonWhileOpen(this.itemElement);
      this.element.addEventListener('click', () => {this.select() })
    };
    select() {    
      this.element.classList.add('active');
      this.closeButton.select();
    }
  }

  class CloseButtonWhileOpen {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      this.element.classList.add('active');
  
    }
  }

  class NavButtonClose {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.nav-button[data-tab='${this.data}']`);
      this.openButton = new NavButtonOpen(this.itemElement);
      this.element.addEventListener('click', () => {this.select() })
    };
  
    select() {    
      this.element.classList.remove('active');
      this.openButton.select();
    }
  }

  class NavButtonOpen {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      this.element.classList.remove('active');
  
    }
  }











navButton = new NavButton (document.querySelector('.nav-button'));
navButtonClose = new NavButtonClose (document.querySelector('.nav-button-close'));
