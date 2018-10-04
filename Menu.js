class Menu {
  constructor(element) {
    
    this.element = element;
    
    this.button = this.element.querySelector('.menu-button');
    
    this.content = this.element.querySelector('.menu-content');
    
    this.button.addEventListener('click', (event) => {this.toggleContent(event)});

  }

  toggleContent() {
    
    this.content.classList.toggle('menu-hidden');

  }
}

let menus = document.querySelectorAll('.menu');
menus = Array.from(menus).map( menu => new Menu(menu));