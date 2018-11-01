class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);

        this.element.addEventListener('click', () => this.select());
        // console.log(this.element);
    }

    select() {
        const tlinks = document.querySelectorAll('.tab');

        Array.from(tlinks).forEach(tlink => {
            tlink.classList.remove('tab-selected');
        });

        this.element.classList.toggle('tab-selected');
        console.log(this.element);

        this.tabItem.select();
        // console.log(this.tabItem);
    }

    linkClick() {
        this.itemElement.toggleContent();
    }

}

class TabItem {
    constructor(tabContent) {
        this.tabContent = tabContent;
    }
    select() {
        let items = document.querySelectorAll('.service-description');

        Array.from(items).forEach(item => {
            item.classList.add('tab-selected');
        });
    }
    toggleContent() {
        this.tabContent.classList.toggle('change');
        console.log(this.tabContent);
    }

}


let tlinks = document.querySelectorAll('.tab');
console.log(tlinks);
tlinks = Array.from(tlinks).map(tlink => new TabLink(tlink));


/* Navigation */
class OpenNav {
    constructor(link) {
        this.link = link;
        this.openLink = document.querySelector('open-nav');
        this.closeLink = document.querySelector('close-nav');

        this.link.addEventListener('click', () => this.open());
    }

    open() {
        this.openLink.classList.toggle('nav-selected');
        this.closeLink.classList.toggle('nav-selected');

        navLinks.classList.toggle('navShow');
    }
}













let navOpen = document.querySelector('.open-nav');
let navClose = document.querySelector('close-nav');
let navLinks = document.querySelector('nav-link');

navOpen = new OpenNav(navOpen);
navClose = new NavClose(navClose);