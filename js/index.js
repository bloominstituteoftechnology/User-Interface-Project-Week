// JS goes here
class Dropdown {
    constructor(element) {
      

      this.element=element;
      

      this.button = document.querySelector('.hamButton');
      
      
      this.content=this.element.querySelector('.dropdown-content');
      
      
      this.button.addEventListener('click', (event) => {
          this.toggleContent(event)
  
      })
      this.closeButton = document.querySelector('.close-button');
       
      this.closeButton.addEventListener('click', (event) => {
          this.toggleContent(event)
  
      })
    }
  
    toggleContent() {
      
      
      this.content.classList.toggle('dropdown-hidden');
    }
  }
  
  
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));