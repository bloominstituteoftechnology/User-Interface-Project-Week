// JS goes here

const navOpen = document.querySelector(".open-btn");
const navClose = document.querySelector(".close-btn");
const bigNav = document.querySelector(".nav-big");
const smallNav = document.querySelector(".nav-small");

navOpen.addEventListener("click", function() {    
    bigNav.classList.toggle("hide");
    smallNav.classList.toggle("hide");
})

navClose.addEventListener("click", function() {
    bigNav.classList.toggle("hide");
    smallNav.classList.toggle("hide");    
})


class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener("click", () => {this.select()});
    };

    select() {
        const links = document.querySelectorAll(".tabs-link");
        Array.from(links).forEach(link => link.classList.remove("tabs-link-selected"));
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
        Array.from(items).forEach(item => item.classList.remove("tabs-item-selected"));
        this.element.classList.add("tabs-item-selected");
    }
}




const links = document.querySelectorAll(".tabs-link").forEach(link => new TabLink(link));