// Tab Navigation
class Tabs {
    constructor(element) {
        this.element = element;
        this.links = document.querySelectorAll(".tabs-link");
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });

        this.activeLink = this.links[0];

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
        return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
}

class TabsLink {
    constructor(link, parent) {
        this.link = link;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.link.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.link.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }

    select() {
        this.link.classList.add("tab-active");
        this.tabsItem.select();
    }

    deselect() {
        this.link.classList.remove("tab-active");
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tab-item-active");
    }

    deselect() {
        this.element.classList.remove("tab-item-active");
    }
}

let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));



// Expand Navigation
class ExpandedNav {
    constructor(element) {
        this.element = element;
        this.openButton = document.querySelector(".hamburger-button");
        this.closeButton = document.querySelector(".close-button");
        this.content = document.querySelector(".nav-content");
        this.links = document.querySelectorAll(".nav-content a");
        this.links = Array.from(this.links);
        this.openButton.addEventListener('click', () => {
            console.log("Open button pressed.")
            this.expandContent()});
        this.closeButton.addEventListener('click', () => {this.contractContent()});
    }

    expandContent() {
        this.content.classList.toggle("nav-expanded");
        this.closeButton.classList.toggle("show-close");
        this.closeButton.style.display = "block";
        this.openButton.style.display = "none";
    }

    contractContent() {
        // this.element.style.display = "none";
        this.closeButton.style.display = "none";
        this.openButton.style.display = "block";
        this.content.classList.toggle("nav-expanded");
        this.closeButton.classList.toggle("show-close");
    }
}


let expandedNav = document.querySelectorAll(".nav");
console.log(expandedNav);
expandedNav = Array.from(expandedNav).map(expanded => new ExpandedNav(expanded));
console.log(expandedNav);


// Carousel


class Carousel {
    constructor(element) {
        this.carousel = element;
        this.images = document.querySelectorAll(".carousel img");

        this.images = Array.from(this.images);

        this.prevButton = document.querySelector(".left-button");
        this.nextButton = document.querySelector(".right-button");

        this.activeImg = this.images[0];
        this.activeImg.style.display = "block";

        this.prevImg = this.images[this.images.length - 1];
        this.nextImg = this.images[1];

        this.prevButton.addEventListener("click", () => {
            this.prevImg.style.display = "block";
            this.goToPrevious();
        });

        this.nextButton.addEventListener("click", () => {
            this.nextImg.style.display = "block";
            this.goToNext();
        });
    }

    goToPrevious() {
        let toDisappear = this.activeImg;
        toDisappear.style.position = "absolute";

        TweenMax.fromTo(this.prevImg, 2, {xPercent:-100}, {xPercent:0});
        TweenMax.fromTo(this.activeImg, 2, {xPercent:0}, {xPercent:100});

        console.log(this.activeImg);
        if ((parseInt(this.activeImg.dataset.img)) === 0) {
            this.activeImg = this.images[this.images.length - 1];
        } else {
            this.activeImg = this.images[(parseInt(this.activeImg.dataset.img)) - 1];
            this.activeImg.style.position = "absolute";
        }

        this.setPrevNext();
    }

    goToNext() {
        let toDisappear = this.activeImg;
        toDisappear.style.position = "absolute";

        TweenMax.fromTo(this.nextImg, 2, {xPercent:100}, {xPercent:0});
        TweenMax.fromTo(this.activeImg, 2, {xPercent:0}, {xPercent:-100, onComplete: () => {
            // toDisappear.style.display = "none";
            // toDisappear.style.position = "relative"; 
        }});

        if ((parseInt(this.activeImg.dataset.img)) === (this.images.length - 1)) {
            this.activeImg = this.images[0];
        } else {
            this.activeImg = this.images[(parseInt(this.activeImg.dataset.img)) + 1];
        }

        this.setPrevNext();
    }

    setPrevNext() {
        if ((parseInt(this.activeImg.dataset.img)) === 0) {
            this.prevImg = this.images[this.images.length - 1];
        } else {
            this.prevImg = this.images[(parseInt(this.activeImg.dataset.img)) - 1];
        }
        if ((parseInt(this.activeImg.dataset.img)) === (this.images.length - 1)) {
            this.nextImg = this.images[0];
        } else {
            this.nextImg = this.images[(parseInt(this.activeImg.dataset.img)) + 1];
        }
    }
}


let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));