// JS goes here
const workArea = document.querySelector(`.content-wrapper`);

// Replace images with ones appropriate for window size
let ImageReplace = (element) => {
  let tempString = element.getAttribute(`src`).split(`-`);
  tempString.splice(1, 0, `mobile`);
  tempString = tempString.join(`-`);
  element.setAttribute(`src`, tempString);
}

if (window.innerWidth <= 500) {
  let temp = document.querySelector(`.jumbotron`);
  ImageReplace(temp);
  temp = workArea.getElementsByTagName(`img`);
  temp = Array.from(temp);
  for (let i in temp) {
    ImageReplace(temp[i]);
  }
}

// Nav hamburger recipe
let burger = document.querySelector(`.burger`);
let burgerButton = burger.querySelector(`#hamburger`);
let menuToExpand = burger.querySelector(`nav`);
burgerButton.addEventListener(`click`, function () {
  burger.classList.toggle(`shrink-header-bar`);
  menuToExpand.classList.toggle(`hide-nav`);
  if (burgerButton.getAttribute(`src`) == `img/nav-hamburger.png`) {
    burgerButton.setAttribute(`src`, `img/nav-hamburger-close.png`);
  } else {
    burgerButton.setAttribute(`src`, `img/nav-hamburger.png`);
  }
})