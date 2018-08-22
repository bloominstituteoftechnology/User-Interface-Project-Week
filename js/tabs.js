class HeyTab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.tabElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.tabElement);
        this.element.addEventListener('click', () => {
            this.clickTab()
        });
    }
    clickTab() {
        const tabs = document.querySelectorAll(".btn");
        tabs.forEach(tab => {
            tab.classList.remove("btn-selected");
        });
        this.element.classList.add("button-selected");
        this.tabContent.activate();
    }
}
class TabContent {
    constructor(element) {
        this.element = element;
        console.log(this.element)
    }
    activate() {
        const contents = document.querySelectorAll(".tab-content");
        contents.forEach(content => {
            content.classList.remove("tab-content-selected");
        });

        this.element.classList.add("tab-content-selected");
    }
}
let tabs = document.querySelectorAll(".btn");
tabs = Array.from(tabs).map(tab => new HeyTab(tab));
tabs[3].clickTab();