// JS goes here

class TabsLink {
    constructor (element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tabs-content-box[data-tab='${this.data}']`);
        this.element.addEventListener('click', _ => this.switchTab());
    }

    switchTab () {
        document.querySelectorAll('.tabs-link').forEach(elem => elem.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        document.querySelectorAll('.tabs-content-box').forEach(elem => elem.classList.remove('tabs-content-selected'));
        this.content.classList.add('tabs-content-selected');
    }
}

class TabsComponent {
    constructor (element) {
        this.element = element;
        this.tabsLinks = element.querySelectorAll('.tabs-link');
        this.tabsLinks.forEach(elem => new TabsLink(elem));
    }
}

document.querySelectorAll('.tabs-component').forEach(elem => new TabsComponent(elem));