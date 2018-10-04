// JS goes here


// nav links
let container = document.querySelector('.overlay');
let burger = document.querySelector('.burger');
let logo = document.querySelector('.logo');
let navH1 = document.querySelector('.navH1');
console.log(logo);

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  container.classList.toggle('expandNav');
  if (container.classList.contains('expandNav')) {
    navH1.classList.add('open');
    navH1.classList.remove('navH1');
    burger.classList.remove('burger');
    burger.classList.add('burgerClose');
    logo.classList.remove('logo');
    logo.classList.add('logoClose');

  } else {
    navH1.classList.add('navH1');
    navH1.classList.remove('open');
    burger.classList.add('burger');
    burger.classList.remove('burgerClose');
    logo.classList.remove('logoClose');
    logo.classList.add('logo');
  }
});

let navLinks = document.querySelectorAll('navH1');
console.log(navLinks);