const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.index-hamburger-icon');
const closingX = document.querySelector('.closingX');
hamburger.addEventListener('click', ()=>{
  navbar.classList.toggle('navbarFull');
  closingX.classList.toggle('closingXhidden');
  hamburger.classList.toggle('hamburgerHidden');
});
//
// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.hamburger = document.querySelector('.index-hamburger-icon');
// 


//   }

// }
