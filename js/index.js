// JS goes here
























// Nav hamburger recipe
let burger = document.querySelector(`.burger`);
let burgerButton = burger.querySelector(`#hamburger`);
let menuToExpand = burger.querySelector(`nav`);
burgerButton.addEventListener(`click`, function(){
  burger.classList.toggle(`shrink-header-bar`);
  menuToExpand.classList.toggle(`hide-nav`);
  if (burgerButton.getAttribute(`src`) == `img/nav-hamburger.png`){
    burgerButton.setAttribute(`src`, `img/nav-hamburger-close.png`);
  } else {
    burgerButton.setAttribute(`src`, `img/nav-hamburger.png`);
  }
})