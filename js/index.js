// JS goes here

// Header menu button
let menuButton = document.querySelector(".menu-button");
let expandedMenu = document.querySelector(".expanded-menu");
let hamburger = document.querySelector(".hamburger")

menuButton.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-close");
  expandedMenu.classList.toggle("display_none");
});


class Tabs {
  constructor(element){
    this.element = element;
    this.buttons = document.querySelectorAll(".tab-button");
    this.buttons = Array.from(this.buttons).map(button => new ButtonLink(button,this));
    this.CurrentButton = this.buttons[0];
    this.init();
  }

  init(){

  }

  updateActive(newActive) {
    this.activeButton.deselect();
    this.activeButton = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tab-item[data-tab="${data}"]`)
  }

}

class ButtonLink {

}

class TabItem{

}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
