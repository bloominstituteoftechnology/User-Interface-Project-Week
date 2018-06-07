// GLOBAL FUNCTIONALITY

//navigation overlays screeen when icon is clicked
let overlay = document.querySelector('.overlay');
let menuBtn = document.querySelector('.hamburger-dropdown');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});



//turns scrollbar to opaque grey when user scrolls page 
let navBar = document.querySelector('.navigation');
window.addEventListener('scroll', () => {
    navBar.setAttribute('style', 'background-color: #9DA7B1; opacity: .95' )
});


// SERVICES PAGE


// (in-progress)use buttons to switch between tab content
class serviceTab {
    constructor(service) {
        this.tab = service;
        this.button = this.service.querySelectorAll('.tab-button');
        this.button = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        this.activeLink = this.links[0];
        this.init();
    }

    ini() {
        this.activeLink.select();
    }

    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        return this.service.querySelector(`.tab-content[data-tab='${data}']`);
    }
}

class TabsLink {
    constructor(service, parent) {
        this.service = service;
        this.tabs = parent;
        this.tabsContent = parent.getTab()
    }
}

let tabs = document.querySelectorAll('.tabs')
tabs = Array.from(tabs).map( tab => new serviceTab(tab));