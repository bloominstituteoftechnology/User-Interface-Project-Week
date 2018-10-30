(function() {
  const navbarButton = document.querySelector('.header--hamburger');
  const openBurger = document.querySelector('.header--hamburger .burger');
  const closeBurger = document.querySelector('.header--hamburger .burger-close');
  const navbarMenu = document.querySelector('.header .navbar');

  openBurger.addEventListener('click', function() {
    openMenu();
  });
  closeBurger.addEventListener('click', function() {
    closeMenu();
  });

  function openMenu() {
    navbarMenu.classList.toggle('display__toggle');
    navbarMenu.style.opacity = 0;
    TweenLite.to(navbarMenu, 1, {autoAlpha: .9, delay:.5});
    TweenLite.to(openBurger, .5, {autoAlpha: 0, onComplete: function() {
      openBurger.classList.toggle('close');
      closeBurger.classList.toggle('close');
      TweenLite.set(closeBurger, {autoAlpha: 0});
      TweenLite.to(closeBurger, 1, {autoAlpha: 1});
    }});
  }

  function closeMenu() {
    TweenLite.to(navbarMenu, 1, {autoAlpha: 0, delay: .2, onComplete: function() {
      navbarMenu.classList.toggle('display__toggle');
    }});
    TweenLite.to(closeBurger, .5, {autoAlpha: 0, onComplete: function() {
      openBurger.classList.toggle('close');
      closeBurger.classList.toggle('close');
      TweenLite.set(openBurger, {autoAlpha: 0});
      TweenLite.to(openBurger, 1, {autoAlpha: 1});
    }});
  }
})()