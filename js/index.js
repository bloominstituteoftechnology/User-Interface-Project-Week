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


// document.getElementById('hamopen').addEventListener("click", function() {
//   let hamburger = element.getElementById('hamopen');
//   let change = hamburger.getAttribute("src");

//   if (change == "img\/nav-hamburger.png"){
//     change = "img\/nav-hamburger-close.png"
//   } else {
//     change = "img\/nav-hamburger.png"
//   }
//   hamburger.setAttribute("src", change);
// })

// //closed.setAttribute("src", 'img/nav-hamburger-close.png');

document.getElementById('hamopen').addEventListener('click', () => {
  document.getElementById('hamopen').src = 'img/nav-hamburger-close.png';
})

// document.getElementById('hamopen').removeEventListener('click', () => {
//   document.getElementById('hamopen').src = 'img/nav-hamburger-close.png';
// })

document.getElementById('hamclose').removeEventListener('click', () => {
  document.getElementById('hamclose').src = 'img/nav-hamburger-close.png';
})

