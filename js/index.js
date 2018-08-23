// JS goes here
//Navigation Bar
timeline = new TimelineMax();

class Menu {
  constructor(element) {
    this.element = element;

    //buttons
    this.hamburger = this.element.querySelector(".hamburger");
    this.cross = this.element.querySelector(".cross");

    //Menus
    this.nonExtend = this.element.querySelector(".main-navigation");
    this.extend = this.element.querySelector(".overlay");

    this.hamburger.addEventListener('click', () => { this.openNav() });
    this.cross.addEventListener('click', () => { this.closeNav() });
  }

  openNav() {
    this.element.classList.add("extend");

    this.nonExtend.classList.add("hidden");
    this.extend.classList.remove("hidden");


    timeline.fromTo(this.extend, 1.2, {  y: "-100%" }, { ease: Power4.easeOut, y: "0%" })
    .addLabel("logoCross", "-=0.5")
    .fromTo(this.extend.querySelector("h3"), 1.2, {y: "-150%", opacity: 0 }, {ease: Circ.easeOut, y:"0%", opacity: 1}, "logoCross")
    .fromTo(this.extend.querySelector(".cross"), 1.2, {y: "-150%", opacity: 0 }, {ease: Circ.easeOut, y:"0%", opacity: 1}, "logoCross")
    .fromTo(this.extend.querySelector(".links"), 1, {y: "-100%", opacity: 0 }, {ease: Power1.easeOut, y:"0%", opacity: 1},"-=0.9");
    

  }

  closeNav() {

    timeline.fromTo(".overlay", 1, {  y: "0%" }, { ease: Back.easeInOut.config(1), y: "-100%", onComplete: () => {
      this.element.classList.remove("extend");

      this.nonExtend.classList.remove("hidden");
      this.extend.classList.add("hidden");


    }})
    .fromTo(".main-navigation", 1, {  y:"-100%" }, { y: "0%" });

  }
}



let menu = document.querySelectorAll(".navigation");

menu = Array.from(menu).map(menu => new Menu(menu));
