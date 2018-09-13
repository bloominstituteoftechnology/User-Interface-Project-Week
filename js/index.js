// JS goes here
class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector(".menu-button");
      
      this.content = this.element.querySelector(".menu-content");

      this.close = this.element.querySelector(".icon-close")
      
      this.element.addEventListener('click', () => {
        this.toggleContent()
      })
    }
  
    toggleContent() {
      this.content.classList.toggle('menu-hidden');
    }
  }
  
  let menuContent = document.querySelectorAll('.dropdown-menu');
  dropdowns = Array.from(menuContent).map( menu => new Dropdown(menu));