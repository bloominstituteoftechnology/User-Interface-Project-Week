
//**********************Navigation Open and Close**********************

const navButton = document.querySelector('.navContainer__top-bar img');

navButton.addEventListener('click', () => document.querySelector('.menu').classList.toggle('open'));
