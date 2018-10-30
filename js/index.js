(function() {
  const navbarButton = document.querySelector('.header--hamburger');
  const openBurger = document.querySelector('.header--hamburger .burger');
  const closeBurger = document.querySelector('.header--hamburger .burger-close');
  const navbarMenu = document.querySelector('.header .navbar');

  navbarButton.addEventListener('click', function() {
    navbarMenu.classList.toggle('display__toggle');
    openBurger.classList.toggle('close');
    closeBurger.classList.toggle('close');
  });
})()