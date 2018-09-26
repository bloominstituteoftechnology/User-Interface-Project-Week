// JS goes here
class Dropdown {
  constructor(dropdown) {

  //assign this.element to the dropdown element
  this.element = dropdown;

  //get the element with the '.dropdown-button' class found in
  //the dropdown element (html for context)
  this.button = this.element.querySelector('.dropdown-button');

  //assign the reference to the '.dropdown-content' class found in
  //the dropdown element
  this.content = this.element.querySelector('.dropdown-content');

  //add a click handler to the button reference and
  //toggleContent
  this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    //toggle the '.dropdown-hidden' class
    this.content.classList.toggle('dropdown-hidden');  
  }
}


let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

console.log(dropdowns)