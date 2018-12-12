class DropdownMenu {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector('.dropdown-button');      
      
      this.content = this.element.querySelector('.dropdown-content');
  
      
      this.button.addEventListener('click', () => {this.expandMenu()});
  
    }
  
    expandMenu() {
       
        console.log('Expand nav menu button clicked.');
        this.content.classList.toggle('dropdown-hidden');
        
        this.element.classList.remove('dropdown-button');
        this.closeButton = this.element.querySelector('.close-dropdown');
        this.button.classList.toggle('close-dropdown');
        
        this.closeButton.addEventListener('click', () => this.closeMenu());
        
    }

    closeMenu() {
        console.log('Nav menu closed.');
        
        this.element.classList.toggle('.nav-bar');
      }
}
  
  
  let dropdowns = document.querySelectorAll('.nav-bar').forEach( dropdown => new DropdownMenu(dropdown));