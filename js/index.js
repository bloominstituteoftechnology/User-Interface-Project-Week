// Homepage Navigation Button

class NavButton {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.nav-button-close[data-tab='${this.data}']`);
        this.closeButton = new CloseButtonWhileOpen(this.itemElement);
        this.element.addEventListener('click', () => { this.select() })
    };
    select() {
        this.element.classList.add('active');
        this.closeButton.select();
    }
}
class CloseButtonWhileOpen {
    constructor(element) {
        this.element = element;
    }
     select() {
        this.element.classList.add('active');
     }
}
 class NavButtonClose {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.nav-button[data-tab='${this.data}']`);
        this.openButton = new NavButtonOpen(this.itemElement);
        this.element.addEventListener('click', () => { this.select() })
    };
    select() {
        this.element.classList.remove('active');
        this.openButton.select();
    }
}
 class NavButtonOpen {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.remove('active');
     }
}
 navButton = new NavButton(document.querySelector('.nav-button'));
navButtonClose = new NavButtonClose(document.querySelector('.nav-button-close'));

// Services Tab Buttons

class TabButton {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.services-body-section-container[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => { this.select() })
    };
    select() {
        const links = document.querySelectorAll('.services-button');
        Array.from(links).forEach(link => link.classList.remove('button-selected'));
        this.element.classList.add('button-selected');
        this.tabItem.select();
    }
}
 class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const items = document.querySelectorAll('.services-body-section-container');
        Array.from(items).forEach(item => item.classList.remove('container-selected'));
        this.element.classList.add('container-selected');
    }
}
 buttons = document.querySelectorAll('.services-button')
    .forEach(button => new TabButton(button)); 