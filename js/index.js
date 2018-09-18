// JS goes here

//Tab JS
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.contentElement);
        this.element.addEventListener("click", () => {
            this.select();
        });
    };

    select() {
        const links = document.querySelectorAll(".tab");
        Array.from(links).forEach((item) => {
            item.classList.remove("tab-links-selected");
        });

        this.element.classList.add("tab-links-selected");
        this.tabContent.select();
    }

}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        let allItems = document.querySelectorAll(".tab-content");
        Array.from(allItems).forEach((item) => {
            item.classList.remove("tab-content-selected");
        })

        this.element.classList.add("tab-content-selected");
    }
}


let links = document.querySelectorAll(".tab");

links = Array.from(links).map(links => new TabLink(links));
links[0].select();