// JS goes here
// Services tab nav
class Tabs {
    constructor(element) {
        this.element = element;

        this.links = this.element.querySelectorAll(".tabs-link");

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
    constructor(element, parent) {
        this.element = element;

        this.tabs = parent;

        this.tabsItem = parent.getTab(this.element.dataset.tab);

        this.tabsItem = new TabsItem(this.tabsItem);

        this.element.addEventListener("click", () => {
            this.tabs.updateActive(this);

            this.select();
        });
    };

    select() {
        this.element.classList.add("tabs-link-selected");
        this.element.classList.toggle("border");

        this.tabsItem.select();
    }

    deselect() {
        this.element.classList.remove("tabs-link-selected");
        this.element.classList.toggle("border");

        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        this.element.classList.add("tabs-item-selected");
    }

    deselect() {
        this.element.classList.remove("tabs-item-selected");
    }
}

let tabs = document.querySelectorAll(".tabs");

tabs = Array.from(tabs).map(tab => new Tabs(tab));

// Nav scroll
function scrollCheck(){
    let startY = $('.navbar').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        scrollCheck();
    });
}

// Nav overlay
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".navbar img");
let closeBtn = document.querySelector(".overlay img");

menuBtn.addEventListener("click", function() {
    overlay.classList.toggle("display");
});