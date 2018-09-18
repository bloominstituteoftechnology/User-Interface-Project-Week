class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class
    this.content = document.querySelector('.dropdown-content');

    //assign reference to .hamburger-close class in .dropdown-content
    this.closeButton = document.querySelector('.hamburger-close');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      return this.toggleContent();
    })

    // Add a click handler to closeButton reference and call the toggleContent method.
    this.closeButton.addEventListener('click', () => {
      return this.toggleContent();
    })
  }

  toggleContent() {
    //assign reference to .hamburger-close class in .dropdown-content
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));