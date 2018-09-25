
const hamburger = document.querySelector('.hamburgerlogo');
const header = document.querySelector('header');
const dropdown = document.querySelector('.dropdown');
let imagetracker = '1';

hamburger.addEventListener('click', () => {
   if(imagetracker === 1){
       hamburger.src = "../img/nav-hamburger-close.png";
       imagetracker = 2;
       header.style.height = "100vh";
       header.style.opacity = "0.8";
       dropdown.classList.add('dropdown-toggle');
   } else {
       hamburger.src = "../img/nav-hamburger.png";
       imagetracker = 1;
       header.style.height = "50px";
       header.style.opacity = "1";
       dropdown.classList.remove('dropdown-toggle');
   }
})

// JS goes here