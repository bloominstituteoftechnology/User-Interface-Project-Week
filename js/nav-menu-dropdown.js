class DropdownMenu {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector('.dropdown-button');
      
      this.closeButton = this.element.querySelector('.close-dropdown');
      
      this.content = this.element.querySelector('.dropdown-content');
  
      
      this.button.addEventListener('click', () => {this.expandMenu()});
  
    }
  
    expandMenu() {
       
        console.log('Expand nav menu button clicked.');
        this.content.classList.toggle('dropdown-hidden');
        
        this.button.classList.toggle('dropdown-hidden');
        
        this.closeButton.classList.toggle('dropdown-hidden');
        
        this.closeButton.addEventListener('click', () => this.expandMenu());
        
    }

    
}
  
  
  let dropdowns = document.querySelectorAll('.nav-bar').forEach( dropdown => new DropdownMenu(dropdown));