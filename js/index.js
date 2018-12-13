// JS goes here
// -------------Nav system------------------------
class Menu {
    constructor(homeMenu, menuButtonName){
        this.menu = document.querySelector(homeMenu);
        this.menuButton = document.querySelector(menuButtonName);
        this.menuButton.addEventListener("click", () => this.toggleMenu());
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



// ------------- tab on service page-------------

class Tab {
    constructor(tab){
        this.tab =(tab);
        this.tabContent = document.querySelector(`.tab-content[data-tab="${this.tab.dataset.tab}"]`);

    }
    setActive(start) {
        if (start){
            this.tab.classList.add("start");
            this.tabContent.classList.add("start");
        } else {
            this.tab.classList.remove("start");
            this.tabContent.classList.remove("start");
        }
    }
}

class TabNavigator {
    constructor(tabNavigatorName) {
        this.tabNavigator = document.querySelector(tabNavigatorName);
        this.tabs = this.tabNavigator.querySelectorAll(".tab");
        this.tabs = Array.from(this.tabs).map(tab => new Tab(tab));
        this.tabs.forEach(tab => tab.tab.addEventListener("click", element => this.select(element)));


    }

    select(element) {
        this.tabs.forEach(tab => {
            if(tab.tab.dataset.tab === element.target.dataset.tab) tab.setActive(true);
            else tab.setActive(false);
        });
    }
}

const menu = new Menu(".menu", ".menu-button");

const tabNavigator = new TabNavigator(".tab-nav");

