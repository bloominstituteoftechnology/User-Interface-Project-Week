class Menu {
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = element.querySelector('.menu-button');
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = element.querySelector('.menu-content');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => {this.toggleContent()});
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('menu-hidden');
      console.log(mainMenus)
    }
  }
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let mainMenus = document.querySelectorAll('#menu');
  mainMenus = Array.from(mainMenus).map( mainMenu => new Menu(mainMenu));