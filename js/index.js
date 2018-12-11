// JS goes here
class Menu {
    constructor(menuName, menuButtonName){
        this.menu = document.querySelector(menuName);
        this.menuButton = document.querySelector(menuButtonName);
        this.menuButton.addEventListener("click", () => {
            this.toggleMenu()
        });
        this.isOpen = false;
    }

  toggleMenu() {
      this.menu.classList.toggle("menu-open");
      this.menu.parentElement.classList.toggle("nav-opacity");
      if(this.isOpen) {
          this.menuButton.src = "img/nav-hamburger.png";
          this.isOpen = "false";
      }else{
          this.menuButton.src = "img/nav-hamburger-close.png";
          this.isOpen = true;
      }
  }  
}

const menu = new Menu(".menu", ".menu-button");