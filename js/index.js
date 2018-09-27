// JS goes here
class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    console.log('hello')
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.toggle-overlay')
    console.log(this.button);
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.aside');
    console.log( this.content);
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', (event) => { this.toggleContent(event) })
    // Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
    // would refer to the button, NOT the current instance of the class. 
  }

  toggleContent(event) {
    // Toggle the ".dropdown-hidden" class off and on
    console.log('hello, you clicked')
    this.content.classList.toggle('open');
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('header');
console.log(dropdowns);
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));