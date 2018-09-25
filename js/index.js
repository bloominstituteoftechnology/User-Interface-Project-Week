// JS goes here
class NavDropdown {
    constructor(element) {
      this.element = element;
      this.button = this.element.querySelector('.nav-button');
      this.content = this.element.querySelector('.nav-content');
      this.closeButton = this.element.querySelector('.close-button')
      this.button.addEventListener('click', (event) => {
        this.toggleContent(event)
      });
      this.closeButton.addEventListener('click', (event) => {
        this.toggleContent(event)
      });
    }
  
    toggleContent() {
      
      this.content.classList.toggle('nav-hidden');
      this.button.classList.toggle('img-hide');
      this.closeButton.classList.toggle('img-hide');
    }
  }
  
  let navDropdowns = document.querySelectorAll('.nav-bar');
  navDropdowns = Array.from(navDropdowns).map( navDropdown => new NavDropdown(navDropdown));