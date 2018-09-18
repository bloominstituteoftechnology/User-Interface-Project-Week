function services() {
 
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", clickMenu);
  let menu = document.querySelector(".nav");
  const formInput = document.querySelector(".input");
  formInput.addEventListener("click", inputFocus);
  const navButton = document.querySelector(".nav-button");
  navButton.addEventListener("click", clickMenu);
  
  function clickMenu() {
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("menu-button-close");
  }

 function inputFocus() {
    // clears the input for the user to type their email
    if (formInput.value === "Enter Email:") {
      formInput.value = "";
    }
  }

  class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.tabItem = new TabItem(this.itemElement);
      this.element.addEventListener("click", () => { this.select() });
    }

    select() {
      const links = document.querySelectorAll(".tabs-link");
      Array.from(links).forEach(function (item) {
        item.classList.remove('tabs-link-selected');
      });
      this.element.classList.add("tabs-link-selected");
      this.tabItem.select();
    }
  }

  class TabItem {
    constructor(element) {
      this.element = element;
    }

    select() {
      const allItems = document.querySelectorAll(".tabs-item");
      Array.from(allItems).forEach(function (item) {
        item.classList.remove('tabs-item-selected')
      });
      this.element.classList.add("tabs-item-selected")
    }
  }
  let links = document.querySelectorAll(".tabs-link");
  links = Array.from(links).map(item => new TabLink(item));
  links[0].select();
}

services();