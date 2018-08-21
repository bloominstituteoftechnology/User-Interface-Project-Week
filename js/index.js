// JS goes here
//Navigation Bar

class Menu {
  constructor(element) {
    this.element = element;

    //buttons
    this.hamburger = this.element.querySelector(".hamburger");
    this.cross = this.element.querySelector(".cross");

    //Menus
    this.nonExtend = this.element.querySelector(".main-navigation");
    this.extend = this.element.querySelector(".overlay");

    this.hamburger.addEventListener('click', () => { this.clickNav() });
    this.cross.addEventListener('click', () => { this.clickNav() });
  }
  clickNav() {
    this.element.classList.toggle("extend");

    this.nonExtend.classList.toggle("hidden");
    this.extend.classList.toggle("hidden");

    this.hamburger.classList.toggle("active");
    this.cross.classList.toggle("active");

    console.log(this.button)

  }
}



let menu = document.querySelectorAll(".navigation");

menu = Array.from(menu).map(menu => new Menu(menu));