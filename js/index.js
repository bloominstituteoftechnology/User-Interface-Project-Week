AOS.init();

(function() {
  const header = document.querySelector('.header'); 
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
    header.style.opacity = 0;
    TweenLite.to([navbarMenu, header], 1, {autoAlpha: .9, ease:Power1.easeOut, delay:.1});
    TweenLite.to(openBurger, .2, {autoAlpha: 0, ease:Power1.easeOut, onComplete: function() {
      openBurger.classList.toggle('close');
      closeBurger.classList.toggle('close');
      TweenLite.set(closeBurger, {autoAlpha: 0});
      TweenLite.to(closeBurger, 1, {autoAlpha: 1});
    }});
  }

  function closeMenu() {
    TweenLite.killTweensOf(openBurger);
    TweenLite.killTweensOf(navbarMenu);
    navbarMenu.style.opacity = 1;
    TweenLite.to(navbarMenu, 1, {autoAlpha: 0, ease:Power1.easeOut, delay: .1, onComplete: function() {
      navbarMenu.classList.toggle('display__toggle');
    }});
    TweenLite.to(closeBurger, .2, {autoAlpha: 0, ease:Power1.easeOut, onComplete: function() {
      openBurger.classList.toggle('close');
      closeBurger.classList.toggle('close');
      TweenLite.set(openBurger, {autoAlpha: 0});
      TweenLite.to(openBurger, 1, {autoAlpha: 1});
    }});
  }
})();