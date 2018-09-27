// JS goes here

// Navigation Menu

const navHamburger = document.querySelector(".nav-hamburger");
const closeNav = document.querySelector(".close-nav");
const navContent = document.querySelector(".open-nav");

function toggleNav() {

    if (navContent.classList.contains("hidden")) {
        navHamburger.style.display = "none";
        closeNav.style.display = "block";
        sessionStorage.setItem("openNav", "true");
        navContent.classList.toggle("hidden");
        TweenLite.fromTo(navContent, 1.5,
            {
                opacity: 0
            }, {
                opacity: 0.97
            }
        );
    } else {
        navHamburger.style.display = "block";
        closeNav.style.display = "none";
        sessionStorage.setItem("openNav", "false");
        TweenLite.fromTo(navContent, 1.5,
            {
                opacity: 0.97
            }, {
                opacity: 0,
                onComplete: function() {
                    navContent.classList.toggle("hidden");            
                }
            }
        );
        // navContent.classList.toggle("hidden");
    }
}

navHamburger.addEventListener("click", toggleNav);
closeNav.addEventListener("click", toggleNav);

// Preserve the navigation menu's being open when switching to a new page
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

        if (this.element) {
            // Gather all tab links into a child item
            this.links = this.element.querySelectorAll(".tab-link");
            this.links = Array.from(this.links).map( link => new TabLink(link, this) );
            
            // Select the first tab by default
            if (this.links) { // (In case there are no tabs on the page)
                this.links[0].select();
            }
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

        // Get the custom data index on the link
        this.data = this.element.dataset.tab;

        // Make a child object representing the tab's content
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.content = new TabContent(this.contentElement);

        // Add a click event listener to select this tab
        this.element.addEventListener("click", (event) => this.select(event));
    }

    select() {
        // Deselect the current selected tab, if any
        this.parent.deselectCurrent();

        function finishSelecting(target) {
            target.element.classList.add("selected-tab");
            target.content.select();
            target.parent.redefineSelectedTab(target);
        }

        // Select this tab and its content-child
        setTimeout(finishSelecting(this), 1050);
    }

    deselect() {
        this.element.classList.remove("selected-tab");

        // Deselect content-child
        this.content.deselect();
    }
}

class TabContent {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("selected-tab-content");
        TweenLite.fromTo(this.element, 1, {
                x: 700, 
                opacity: 0
            }, {
                x: 0,
                opacity: 1
        });
    }

    deselect() {
        TweenLite.fromTo(this.element, 1, {
                x: 0,
                opacity: 1
            }, {
            x: -700,
            opacity: 0,
            onComplete: function() {
                this.element.classList.remove("selected-tab-content");
            }
        })
        // this.element.classList.remove("selected-tab-content");
    }
}

const tabController = new Tabs(document.querySelector(".tabs"));