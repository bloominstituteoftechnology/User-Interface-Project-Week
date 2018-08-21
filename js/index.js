// JS goes here
//Navigation Bar

class Menu {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelectorAll(".button");
    
  }
}



let menu = document.querySelectorAll(".navigation");

menu = Array.from(menu).map(menu => new Menu(menu));