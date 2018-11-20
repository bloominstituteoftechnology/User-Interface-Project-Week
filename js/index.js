// JS goes here
// class Dropdown {
//   constructor(element) {
//     // assign this.element to the dropdown element
//     this.element = element;
//     // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
//     this.button = this.element.querySelector('#dropdown');

//     // assign the reference to the ".dropdown-content" class found in the dropdown element
//     this.content = this.element.querySelector('.dropdown-content');
//     // Add a click handler to the button reference and call the toggleContent method.
//     this.button.addEventListener('click', () => {
//       this.toggleContent();
//     });
//     // Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
//     // would refer to the button, NOT the current instance of the class.
//   }

//   toggleContent() {
//     // Toggle the ".dropdown-hidden" class off and on
//     this.content.classList.toggle('dropdown-hidden');
//   }
// }
// // Nothing to do here, just study what the code is doing and move on to the Dropdown class
// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

function openNav() {
  document.querySelector('.dropdown').style.width = '0%';
}
function closeNav() {
  document.querySelector('.dropdown').style.width = '100%';
}
