// JS goes here

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
            tabButtons.classList.remove("tabs-item-selected");
        });

        this.element.classList.add("tabs-item-selected");

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