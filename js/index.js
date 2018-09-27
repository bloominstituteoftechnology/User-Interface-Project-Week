// JS goes here
class Dropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.dropdown-button');
      this.content = document.querySelector('.dropdown-content');
      this.button.addEventListener('click', () => {
        this.toggleContent();
      })
      this.button.addEventListener('click', () => {
        this.toggleTransform();
      })
    }
    toggleContent() {
      this.content.classList.toggle('dropdown-hidden');
    }
    toggleTransform() {
      this.button.classList.toggle('cross')
    }
  }
  
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));