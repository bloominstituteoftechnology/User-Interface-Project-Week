// Nav Vars
const navBtn = document.querySelectorAll('.nav-menu-btn');
const navOpen = document.querySelector('.open');
const navClose = document.querySelector('.close');
const nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-link');
const topBar = document.querySelector('.topbar');
const logo = document.querySelector('.logo');

// Nav expanding and retracting
navBtn.forEach( (item) => {
item.addEventListener('click', () => {                                navOpen.classList.toggle('display-toggle');
        nav.classList.toggle('nav-display-toggle'); 
        navClose.classList.toggle('display-toggle');
        // logo.classList.toggle('display-toggle');
        navLinks.forEach( (link) => link.classList.toggle('display-toggle'));
    })
})

// Services Tabs
class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(
        `.tab-content[data-tab='${this.data}']`
        );
        this.tabContent = new TabContent(this.itemElement);
        this.element.addEventListener("click", () => {
            this.select();
        });
    }

    select() {
        let links = document.querySelectorAll(".tab-link");
        Array.from(links).forEach(element => 
            element.classList.remove("tab-link-selected")
        );
        this.element.classList.add("tab-link-selected");
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.toggle("tab-content-selected");
        let allTabs = document.querySelectorAll(".tab-content");
        // TweenMax.from(".tabs-item", 0.25, {opacity:0, x:50, ease:Power0.easeNone});
        Array.from(allTabs).forEach(element => 
            element.classList.remove("tab-content-selected")
        );
        this.element.classList.add("tab-content-selected");
        console.log(this.element.classList);
    }
}


let links = document.querySelectorAll(".tab-link");

links = Array.from(links).map(link => new TabLink(link));
links[0].select();