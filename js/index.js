class Overlay{
    constructor(element) {
      
      // Assign this.element to the dropdown element
      this.element = element;
      console.log(this.element);
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector('.close-burger');
      console.log(this.button);
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => {this.toggleContent(event)});
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.element.classList.toggle('hide');
    }
  }
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let overlays = document.querySelectorAll('.expanded');
  overlays = Array.from(overlays).map(expand => new Overlay(expand));