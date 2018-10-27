const toggleMenu = () => {
    nav.classList.toggle("expand");
    menu.classList.toggle("menu-open");

    if (menu.classList.contains("menu-open")) {
    menuButton.src="./img/nav-hamburger-close.png";
    }
    else {
        menuButton.src="./img/nav-hamburger.png";
    }
}

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navigation");
const menuButton = document.querySelector(".menu-button");
// menuButton.src="/img/nav-hamburger.png";

menuButton.addEventListener("click", toggleMenu);

class TabLink {
    constructor(element) {
        this.element = element; // creates a reference to the tabs within the constructor
        this.data = this.element.dataset.tab; //creates a reference to the custom data attr on the tabs
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`); // connects to the corresponding data attr on the content
        this.tabItem = new TabItem(this.itemElement); //creates a new instance of the TabItem class that is passed the corresponding data attr
    
        this.element.addEventListener("click", (event) => this.select(event));
    }
    select() {
        const links = document.querySelectorAll(".tabs-link");
        Array.from(links).forEach((element) => element.classList.remove("tabs-link-selected")); 
        this.element.classList.add("tabs-link-selected");
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll(".tabs-item");
        Array.from(items).forEach((element) => element.classList.remove("tabs-item-selected"));
        this.element.classList.add("tabs-item-selected");
    }
}

let links = document.querySelectorAll(".tabs-link");

links = Array.from(links).map(element => new TabLink(element));
links[0].select();