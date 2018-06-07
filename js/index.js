// JS goes here

// Tab Navigation Services

// .active-tab provides blue color

// .hide display: none

// .show display: block

// Scroll main page -- I can't get it work the way I want to -_-
const navScroll = () => {
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.style.backgroundColor = "#9DA7B1";
        nav.style.opacity = .95;
    } else {
        nav.style.backgroundColor= "transparent";
        nav.style.opacity = 1;
    }
    
}
const nav = document.querySelector(".navigation")
document.addEventListener("scroll", navScroll);


class Tabs {
    constructor(element) {
        this.element = element;
        this.tabs = this.element.querySelectorAll('.tab__text');
        this.activeTab = this.tabs[0];
        console.log(this.activeTab);
    }
    select() {

    }
    deselect() {

    }
}

let tabs = document.querySelectorAll('.section-container');
console.log(tabs)
tabs = Array.from(tabs).map(tabs => new Tabs(tab));
