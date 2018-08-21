class TabButton {
    constructor(tabBtn) {
        this.tabBtn = tabBtn;
        this.data = this.tabBtn.dataset.tab;
        this.tabElement = document.querySelector(`.btn[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.tabElement);
        this.tabItem.element.addEventListener("click", () => this.select());
    }

    select() {
        const tabButtons = document.querySelectorAll(".btn");

        Array.from(tabButtons).map(btn => btn.classList.remove("tab-selected"));

        this.tabElement.classList.add("tab-selected");

        this.tabItem.select();
    }
};

class TabItem {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
    }

    select() {
        const tabNavigatorItems = document.querySelectorAll(".tab-navigator-item");

        Array.from(tabNavigatorItems).map(item => item.style.display = "none");

        document.querySelector(`.tab-navigator-item[data-tab="${this.data}"]`).style.display = "flex";
    }
}

let tabBtns = document.querySelectorAll(".btn");

tabBtns = Array.from(tabBtns).map(tabBtn => new TabButton(tabBtn));

tabBtns[1].select();
