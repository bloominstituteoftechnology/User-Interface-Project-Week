// JS goes here
class NavMenu {
  constructor(element) {
    this.element = element;
    this.button = document.querySelector(".hamburger");
    this.exit = document.querySelector(".cross");
    this.content = this.element.querySelector(".navbar-expanded");
    this.button.addEventListener('click', () => {
      console.log("Clicked");
      this.toggleContent();
            });
      this.exit.addEventListener('click', () => {
        console.log("Exited");
        this.toggleContent();

    });
  }

  toggleContent() {
    this.element.classList.toggle("open");
    this.element.parentNode.classList.toggle("open");

  }
}

let navItems = document.querySelectorAll(".navbar-expanded");
navItems = Array.from(navItems).map( item => new NavMenu(item));
