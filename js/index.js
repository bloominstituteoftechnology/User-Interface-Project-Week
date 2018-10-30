// JS goes here
class TabButton {
    constructor(tabButton) {
        this.tabButton = tabButton;
        this.dataTab = this.tabButton.dataset.tabbtn;

        this.itemTab = document.querySelector(`.tab-content[data-tabcont="${this.dataTab}"]`);

        this.tabButton.addEventListener('click', () => this.select());

    }
    // methods
    select() {
        const tabs = document.querySelectorAll('.tab-link');

        Array.from(tabs).forEach( tab => {
            tab.classList.remove('tab-selected');
        });

        this.tabButton.classList.toggle('tab-selected');
        console.log(this.tabButton);
    }
}


class TabContent {
    constructor(tabContent) {
        this.tabContent = tabContent;
        // console.log(this.tabContent);

        this.dataContent = this.tabContent.dataset.tabcont;
        // console.log(this.dataContent);
    }
    // methods
}



let tabButtons = document.querySelectorAll('.tab-link');
tabButtons = Array.from(tabButtons).map( tabButton => new TabButton(tabButton));


let tabsContents = document.querySelectorAll('.tab-content');
tabsContents = Array.from(tabsContents).map( tabContent => new TabContent(tabContent));

// console.log(tabsContents);