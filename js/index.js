// JS goes here

// =======================   Service Page Tabs and Content
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

// tabButtons[0].select();


// ============================ Navigation

class NavOpen {
    constructor(navLink) {
        this.navLinkO = navLink;
        this.navOpen = document.querySelector('.navHamburger');
        this.navClose = document.querySelector('.navCloseImage');
        // this.navLinkContainer = document.querySelector('.nav-links');

        this.navLinkO.addEventListener('click', () => this.openMenu());
    }
    // methods
    openMenu() {
        this.navOpen.classList.toggle('navMenuOpenSelected');
        this.navClose.classList.toggle('navMenuOpenSelected');

        navLinksContainer.classList.toggle('navLinksShow');
        siteBody.classList.toggle('body-content');
        // navLinksContainer.classList.toggle('nav-Animate-Open');
        
        console.log('menu opened');
    }
}

class NavClose {
    constructor(navLink) {
        this.navLinkC = navLink;
        this.navOpen = document.querySelector('.navHamburger');
        this.navClose = document.querySelector('.navCloseImage');
        // this.navLinkContainer = document.querySelector('.nav-links');

        this.navLinkC.addEventListener('click', () => this.closeMenu());
    }
    // methods
    closeMenu() {
        this.navOpen.classList.toggle('navMenuOpenSelected');
        this.navClose.classList.toggle('navMenuOpenSelected');

        navLinksContainer.classList.toggle('navLinksShow');
        siteBody.classList.toggle('body-content');
        // navLinksContainer.classList.toggle('nav-Animate-Open');
        // navLinksContainer.classList.toggle('nav-Animate-Close');
        console.log('menu closed');
    }
}


let navMenuOpen = document.querySelector('.navHamburger');
let navMenuClose = document.querySelector('.navCloseImage');
let navLinksContainer = document.querySelector('.navShow');
let siteBody = document.querySelector('body');

navMenuOpen = new NavOpen(navMenuOpen);
navMenuClose = new NavClose(navMenuClose);