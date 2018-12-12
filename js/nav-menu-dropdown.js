class DropdownMenu {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector('.dropdown-button');      
      
      this.content = this.element.querySelector('.dropdown-content');
  
      
      this.button.addEventListener('click', () => {this.expandMenu()});
  
    }
  
    expandMenu() {
       
        console.log('Expand nav menu button clicked.');
        this.element.classList.toggle('dropdown-hidden');
        
        this.closeButton = this.domElement.querySelector('.close-dropdown');
        
        this.closeButton.addEventListener('click', () => this.closeArticle());
        
    }

    closeMenu() {
        console.log('Nav menu closed.');
        
        this.domElement.classList.toggle('.nav-bar');
      }
  
  
  let dropdowns = document.querySelectorAll('.nav-dropdown').forEach( dropdown => new DropdownMenu(dropdown));