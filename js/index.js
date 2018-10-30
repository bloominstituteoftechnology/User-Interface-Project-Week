// JS goes here


// ***************************************
// *********NAVIGATION BACKDROP***********
// ***************************************

const hamburger = document.querySelector('img.header__nav-links__hamburger');
const navBackdrop = document.querySelector(".nav-backdrop");
const navContainer = document.querySelector('.nav-link-container');


hamburger.addEventListener('click', () => {
  if(!navBackdrop.classList.contains('active') && !navContainer.classList.contains('open')) {
    navBackdrop.classList.add('active');
    navContainer.classList.add("open");
    hamburger.src="img/nav-hamburger-close.png";
  } else if (navBackdrop.classList.contains('active') && navContainer.classList.contains('open')) {
    navBackdrop.classList.remove('active');
    navContainer.classList.remove("open");
    hamburger.src="img/nav-hamburger.png";
  }
})
