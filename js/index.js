// HEADER TURNS GREY WHEN SCROLLED

greyScrollbar = function() {
     if (window.scrollY !== headerY) {   
        header.style.background = '#9DA7B1';
        header.style.opacity = '.95';
    } else {
        header.style.background = null;
    }
}

let header = document.querySelector('.header');
let headerY = header.offsetTop;
window.addEventListener('scroll', greyScrollbar);

// NAVIGATION OVERLAYS SCREEN WHEN CLICKED ON AND OFF

let overlay = document.querySelector('.navigation-overlay');
let navBtn = document.querySelector('.header-icon');
let navCloseBtn = document.querySelector('.header-close-icon');
let headerLogo = document.querySelector('.logo');

navBtn.addEventListener('click', () => {
    overlay.setAttribute('style', 'display: block');
    navCloseBtn.setAttribute('style', 'display: block');
    navBtn.setAttribute('style', 'display: none');
})

navCloseBtn.addEventListener('click', () => {
    overlay.setAttribute('style', 'display: none');
    navCloseBtn.setAttribute('style', 'display: none');
    navBtn.setAttribute('style', 'display: block');
});


// SERVICES PAGE: CLICKABLE TABS

class Tabs {
    constructor(element) {
        this.element = element;
        this.btn = this.element.querySelectorAll('.tab-btn');
        this.btn = Array.from(this.btn).map( button => {
            return new TabsBtn(button, this);
        });
        this.activeLink = this.btn[0];
        this.init();
    }

    init() {
        this.activeLink.select();
    }

    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }

    getTab(data) {
        return this.element.querySelector(`.tab-content[data-tab='${data}']`)
    }
}

class TabsBtn {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsContent = parent.getTab(this.element.dataset.tab);
        this.tabsContent = new TabsContent(this.tabsContent);
        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.element.classList.add('tab-btn-selected');
        this.tabsContent.select();
    }

    deselect() {
        this.element.classList.remove('tab-btn-selected')
        this.tabsContent.deselect();
    }
}

class TabsContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add('tab-content-selected');
    }

    deselect() {
        this.element.classList.remove('tab-content-selected');
    }
}

console.log(TabsContent)

let tabs = document.querySelectorAll('.tabs')
tabs = Array.from(tabs).map(tab => new Tabs(tab));

