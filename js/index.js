// // JS goes here

const toggleMenu = () => {
  dropdown.classList.toggle('dropdown-open');
}

const dropdown = document.querySelector('.dropdown-content');
const button = document.querySelector('.dropdown-button');

button.addEventListener('click', () => {
  return toggleMenu(dropdown);
});

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

