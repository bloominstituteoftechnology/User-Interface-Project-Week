// JS goes here

// Navigation Menu

const navHamburger = document.querySelector(".nav-hamburger");
const closeNav = document.querySelector(".close-nav");
const navContent = document.querySelector(".open-nav");

function toggleNav() {
    navContent.classList.toggle("hidden");

    if (navContent.classList.contains("hidden")) {
        navHamburger.style.display = "block";
        closeNav.style.display = "none";
        sessionStorage.setItem("openNav", "false");
    } else {
        navHamburger.style.display = "none";
        closeNav.style.display = "block";
        sessionStorage.setItem("openNav", "true");
    }
}

navHamburger.addEventListener("click", toggleNav);
closeNav.addEventListener("click", toggleNav);

window.onload = function() {
    if (sessionStorage.openNav === "true") {
        navContent.classList.remove("hidden");
        navHamburger.style.display = "none";
        closeNav.style.display = "block";
    }
}

// Tabs

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tab-link");
        this.links = Array.from(this.links).map( link => new TabLink(link, this) );
        if (this.links) {
            this.links[0].select();
        }
    }

    redefineSelectedTab(subElement) {
        this.selectedTab = subElement;
    }

    deselectCurrent() {
        if (this.selectedTab) {
            this.selectedTab.deselect();
        }
    }
}

class TabLink {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.content = new TabContent(this.contentElement);
        this.element.addEventListener("click", (event) => this.select(event));
    }

    select() {
        this.parent.deselectCurrent();
        this.element.classList.add("selected-tab");
        this.content.select();
        this.parent.redefineSelectedTab(this);
    }

    deselect() {
        this.element.classList.remove("selected-tab");
        this.content.deselect();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("selected-tab-content");
    }

    deselect() {
        this.element.classList.remove("selected-tab-content");
    }
}

const tabController = new Tabs(document.querySelector(".tabs"));