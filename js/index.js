// navigation bar JS
let hamburger = document.querySelector('.navigation img');
let navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation-active');
  hamburger.src.includes('img/nav-hamburger.png') ? hamburger.src = 'img/nav-hamburger-close.png' : hamburger.src = 'img/nav-hamburger.png';
})

// services page tab content JS


// let tabs = document.querySelectorAll('')