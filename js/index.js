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

    this.hamburger.addEventListener('click', () => { this.openNav() });
    this.cross.addEventListener('click', () => { this.closeNav() });
  }

  openNav() {
    this.element.classList.add("extend");

    this.nonExtend.classList.add("hidden");
    this.extend.classList.remove("hidden");

    this.hamburger.classList.remove("active");
    this.cross.classList.add("active");

    TweenMax.fromTo(".overlay", 1, { ease: Power4.easeOut, y: "-100%" }, { y: "0%" });

  }

  closeNav() {
    const timeline = new TimelineMax();

    timeline.fromTo(".overlay", 1, {  y: "0%" }, { ease: Back.easeInOut.config(1), y: "-100%", onComplete: () => {
      this.element.classList.remove("extend");

      this.nonExtend.classList.remove("hidden");
      this.extend.classList.add("hidden");

      this.hamburger.classList.add("active");
      this.cross.classList.remove("active");

    }}).fromTo(".main-navigation", 1, {  y:"-100%" }, { y: "0%" } );

  }
}



let menu = document.querySelectorAll(".navigation");

menu = Array.from(menu).map(menu => new Menu(menu));
