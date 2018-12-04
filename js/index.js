// JS goes here
// Navigation Button

class Menu {
    //declare variables

    constructor(menuContent, menuBtn) {
      this.menu = document.querySelector(menuContent);
      this.menuButton = document.querySelector(menuBtn);
      this.menuButton.addEventListener("click", () => this.toggleMenu());
      this.Open = false
    }

    //Toggle

     toggleMenu() {
      this.menu.classList.toggle("menu-nav");
    
      if (this.Open) {
        this.menuButton.src = "img/nav-hamburger.png";
        //false
      } 
      
      else {
        this.menuButton.src = "img/nav-hamburger-close.png";
        //true
      }
    }
}

    //Call function
  const menu = new Menu(".menu-content", ".menu-btn");
