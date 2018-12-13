// JS goes here

class NavbarComponent {
    constructor (element) {
        this.element = element;
        this.buttonOpen = this.element.querySelector('.navbar-button-open');
        this.buttonClose = this.element.querySelector('.navbar-button-close');
        this.linksContainer = this.element.querySelector('.navbar-links-container');

        this.buttonOpen.addEventListener('click', _ => {
            this.linksContainer.classList.add('navbar-links-container-open');
            this.buttonOpen.classList.remove('navbar-button-visible');
            this.buttonClose.classList.add('navbar-button-visible');
        })

        this.buttonClose.addEventListener('click', _ => {
            this.linksContainer.classList.remove('navbar-links-container-open');
            this.buttonOpen.classList.add('navbar-button-visible');
            this.buttonClose.classList.remove('navbar-button-visible');
        })
    }
}

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

document.querySelectorAll('.navbar-component').forEach(elem => new NavbarComponent(elem));
document.querySelectorAll('.tabs-component').forEach(elem => new TabsComponent(elem));
