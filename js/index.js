// JS goes here

// Event listeners for the nav bar

const navImg = document.querySelector('nav img');
const navExpand = document.querySelector('.nav-expand');
const navClose = document.querySelector('.nav-expand img');

navImg.addEventListener('click', () => {
    navExpand.style.display = 'flex';
    navExpand.style.position = 'absolulte';
    navImg.style.display = 'none';
})

navClose.addEventListener('click', () => {
    navExpand.style.display = 'none';
    navImg.style.display = 'block';
})

// Event listners for the services tabs

class Tab {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.tabText = document.querySelector(`.tabs-text[data-tab="${this.data}"`);

        this.tabText = new TabInfo(this.tabText);

        this.element.addEventListener('click', () => this.selectTab());
    }

    selectTab() {

        const tabs = document.querySelectorAll('.tab-button');

        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });

        this.element.classList.toggle('active-tab');
        console.log(this.element);
        const tabInfo = document.querySelectorAll('.tabs-text');

        tabInfo.forEach(tab => {
            tab.style.display = 'none';
        });

        this.tabText.selectInfo();
    }
}
console.log(Tab);

class TabInfo {
    constructor(element) {
        this.element = element;
    }

    selectInfo() {
        this.element.style.display = null;
    }
    
}

let tabButton = document.querySelectorAll('.tab-button');

tabButton = Array.from(tabButton).map(tab => new Tab(tab));

tabButton[0].selectTab();
