// JS goes here
let nav = document.querySelector(".nav-expand");
let navLinks = document.querySelector(".nav-links");
let navX = document.querySelector(".navclose");

nav.addEventListener("click", () => {
    navLinks.classList.toggle("nav-extended");
})

navX.addEventListener("click", () => {
    navLinks.classList.toggle("nav-extended");
})

class TabButton {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        
        this.content = document.querySelector(
            `.content[data-tab='${this.data}']`
        );

        this.content = new Content(this.content);

        this.element.addEventListener("click", () => {
            this.select();
        });
    }

    select() {
        let buttons = document.querySelectorAll(".tab-button");

        Array.from(buttons).forEach((tabButtons) => {
            tabButtons.classList.remove("button-selected");
        });

        this.element.classList.add("button-selected");

        this.content.select();
    }
}

class Tabs {
    constructor(element) {
        this.element = element;

        this.content = document.querySelector(".tabs");

        this.content = new TabButton(this.content);

    }
}

class Content {
    constructor(element) {
        this.element = element;
    }

    select() {
        let items = document.querySelectorAll(".content");

        Array.from(items).forEach((content) => {
            content.classList.remove("tabs-item-selected");
        })

        this.element.classList.add("tabs-item-selected");
    }
}




let buttons = document.querySelectorAll(".tab-button");

buttons = Array.from(buttons).map(element => {
    return new TabButton(element);
})

buttons[0].select();