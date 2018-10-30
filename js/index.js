// JS goes here
class TabButton {
    constructor(tabButton) {
        this.tabButton = tabButton;
        this.dataTab = this.tabButton.dataset.tabbtn;

        this.itemTab = document.querySelector(`.tab-content[data-tabcont="${this.dataTab}"]`);
        this.contentTab = new TabContent(this.itemTab);

        this.tabButton.addEventListener('click', () => this.select());

    }
    // methods
    select() {
        const tabs = document.querySelectorAll('.tab-link');

        Array.from(tabs).forEach( tab => {
            tab.classList.remove('tabLink-selected');
        });

        this.tabButton.classList.toggle('tabLink-selected');
        this.contentTab.select();
    }
}


class TabContent {
    constructor(tabContent) {
        this.tabContent = tabContent;
    }
    // methods
    select() {
        const contents = document.querySelectorAll('.tab-content');

        Array.from(contents).forEach( content => {
            content.classList.add('tabContent-selected');
        });

        this.tabContent.classList.toggle('tabContent-selected');
    }
}

let tabButtons = document.querySelectorAll('.tab-link');
tabButtons = Array.from(tabButtons).map( tabButton => new TabButton(tabButton));

tabButtons[0].select();