class TabLink {
    
    constructor(element) {
      this.element = element;
      //console.log(this.element);
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-box[data-tab="${this.data}"]` );
      this.itemElement = new TabItem(this.itemElement);
      //console.log(this.itemElement);
      this.element.addEventListener("click", () => this.select());
      
    }
  
    select() {
        
      document.querySelectorAll(".tab").forEach(link => link.classList.remove("tab--selected"));
      this.element.classList.add("tab--selected");
      this.itemElement.select();
    
    }
  }
  
  class TabItem {
    constructor(element) {
     this.element = element;
    }
  
    select() {
      document.querySelectorAll(".tabs-box").forEach(item => item.classList.remove("tabs-box--view"));
      this.element.classList.add("tabs-box--view");
    }
    
  }
  
  const tabs = document.querySelectorAll(".tab").forEach(link => new TabLink(link));
  
  // Navigation bar
  const navbar = document.querySelector(".navbar-container");
  const navbarMenu = document.querySelector(".nav-menu");
  const burger = document.querySelector(".burger");
  const body = document.querySelector("body");
  
  burger.addEventListener("click", () => {
    navbar.classList.toggle("navbar--open");
    navbarMenu.classList.toggle("nav-menu--open");
    body.classList.toggle("n");
    if (body.classList.contains("n")) {
      burger.src = "./img/nav-hamburger-close.png";
    } else {
      burger.src = "./img/nav-hamburger.png";
    }
  });