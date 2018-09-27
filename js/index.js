const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.index-hamburger-icon');
const closingX = document.querySelector('.closingX');
const links = document.querySelector('.links');
hamburger.addEventListener('click', ()=>{
  navbar.classList.toggle('navbarFull');
  hamburger.classList.toggle('closingXhidden');
  closingX.classList.toggle('closingXhidden');
  links.classList.toggle('closingXhidden');
});

closingX.addEventListener('click', () => {
  navbar.classList.toggle('navbarFull');
  hamburger.classList.toggle('closingXhidden');
  closingX.classList.toggle('closingXhidden');
  links.classList.toggle('closingXhidden');
});
//
// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.hamburger = document.querySelector('.index-hamburger-icon');
// 


//   }

// }
