// JS goes here
const open = document.querySelector(".open-button");
const close = document.querySelector(".close-button");
const display = document.querySelector(".display");
open.addEventListener("click", () => {
    display.style.display = "block";
    open.style.display = "none";

});
close.addEventListener("click", () => {
    display.style.display = "none";
    open.style.display = "block";
});

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-info[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener("click", () => this.select());

    };

    select() {
        const links = document.querySelectorAll(".tab");
        Array.from(links).forEach((link) => {
            link.classList.remove("tabs-link-selected");
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
        const items = document.querySelectorAll(".tab-info");
        Array.from(items).forEach((item) => {
            item.classList.remove("tabs-item-selected");
        });
        this.element.classList.add("tabs-item-selected");
    }
}

let links = document.querySelectorAll(".tab");

links = Array.from(links).map(link => new TabLink(link));
links[0].select();
