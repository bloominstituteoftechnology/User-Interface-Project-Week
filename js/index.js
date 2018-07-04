// JS goes here

// Header menu button
let menuButton = document.querySelector(".menu-button");
let expandedMenu = document.querySelector(".expanded-menu");
let hamburger = document.querySelector(".hamburger")

menuButton.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-close");
  expandedMenu.classList.toggle("display_none");
});

// Services tabs
class Tabs {
  constructor(element){
    this.element = element;
    this.buttons = document.querySelectorAll(".tab-button");
    this.tabItems = document.querySelectorAll(".tab-item");
    // loop through buttons and join corresponding tabItem with that button
    this.buttons = Array.from(this.buttons).map( (button,index) => new ButtonLink(button,this.tabItems[index], this));
    this.currentButton = this.buttons[0];
    this.init();
  }

  init(){
    this.currentButton.select();
  }

  updateActive(newActive) {
    console.log(this.element);
    this.currentButton.deselect();
    this.currentButton = newActive;
  }

}

class ButtonLink {
  constructor(buttonIn, tabItemIn, parent) {
    this.element = buttonIn;
    this.buttons = parent;
    this.tabItem = new TabItem(tabItemIn);
    this.element.addEventListener("click", () => {
      this.buttons.updateActive(this);
      this.select();
    });
  }

  select(){
    this.element.classList.add("selectedButton");
    this.tabItem.select();
  }

  deselect(){
    this.element.classList.remove("selectedButton");
    this.tabItem.deselect();
  }

}

class TabItem{
  constructor(element){
    this.element = element;
    this.deselect();
  }

  select(){
    this.element.classList.remove("display_none");
  }

  deselect(){
    this.element.classList.add("display_none");
  }

}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));


// Header Background change on scroll
// Largely taken from https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling/39575616
// Yahya Essam's answer
let headerNav = document.querySelector(".container-fluid.sticky-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset >= 100){
    headerNav.classList.add("nav-colored");
  }
  else {
    headerNav.classList.remove("nav-colored");
  }
});
