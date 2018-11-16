// JS goes here
const workArea = document.querySelector(`.content-wrapper`);

// Replace images with ones appropriate for window size
let ImageReplace = (element) => {
  let tempString = element.getAttribute(`src`).split(`-`);
  tempString.splice(1, 0, `mobile`);
  tempString = tempString.join(`-`);
  element.setAttribute(`src`, tempString);
}

function checkReplace() {
  if (window.innerWidth <= 500) {
    let temp = document.querySelector(`.jumbotron`);
    ImageReplace(temp);
    temp = workArea.getElementsByTagName(`img`);
    temp = Array.from(temp);
    for (let i in temp) {
      ImageReplace(temp[i]);
    }
  }
}

// Add resize event listener to document
document.addEventListener(`resize`, checkReplace());

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

// Navigator tab Component
class NavigatorTab{
  constructor(element) {
    this.element = element;
    this.name = element.getElementsByTagName(`h4`).item(0).textContent;
    this.contentObj = new ContentObj(this.name);
    this.contentContainer = document.querySelector(`.nav-tab-content-container`);
    this.element.addEventListener(`click`, (e => this.select()));
  };

  select() {
    const navTabs = document.querySelectorAll(`.nav-tab-btn`);
    navTabs.forEach(e => {if(e.classList.contains(`selected-tab`)){e.classList.remove(`selected-tab`);}})
    this.element.className += ` selected-tab`;
    this.contentContainer.getElementsByTagName(`h3`).item(0).textContent = this.contentObj.header;
    this.contentContainer.getElementsByTagName(`img`).item(0).setAttribute(`src`, this.contentObj.imgSrc);
  }
}

class ContentObj{
  constructor(elementReference){
    this.header = elementReference;
    this.imgSrc = `img\\services\\services-tab-` + this.header.split(` `).join(`-`) + `-img.png`;
  }
}

let navTabs = document.querySelectorAll(`.nav-tab-btn`);
navTabs.forEach(element => {element = new NavigatorTab(element);});