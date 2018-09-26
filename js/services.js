class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        
        this.element.addEventListener('click', (event) => {this.select(); event.preventDefault();});
    };

    select() {
        const tabLinks = document.querySelectorAll('.tab-link');
        Array.from(tabLinks).forEach(item => item.classList.remove('tab-link-selected'));

        this.element.classList.add('tab-link-selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        let items = document.querySelectorAll('.tab-item');
        items.forEach(item => item.classList.remove('tab-item-selected'));
        items.forEach(item => {TweenMax.to(item, .7, {autoAlpha: 0, y:-40})})

        this.element.classList.add('tab-item-selected');
        TweenMax.to(this.element, .7, {autoAlpha: 1, y: 0});
    }
}

let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link => {return new TabLink(link);});
links[0].select();


// Navigation JS -----------------------------------------
let dropdown = document.querySelector(".dropdown-button");
let content = document.querySelector(".dropdown-content");
let header = document.querySelector("header");
content.style.opacity = '0';
content.style.visibility = 'hidden';

dropdown.addEventListener('click', function() {
    // change the hamburger to an X
    dropdown.src = "./img/nav-hamburger-close.png";
    
    // toggle the class to hide the nav menu
    content.classList.toggle('dropdown-hidden');

    // toggle the X back to hamburger
    if (content.classList.contains('dropdown-hidden') === true) {
        dropdown.src = "./img/nav-hamburger.png";
        TweenMax.to(content, 0.5, {autoAlpha:0, y:0});
        header.style.opacity = "1";

    }
    else {
        TweenMax.to(content, 0.5, {autoAlpha:0.98, y:0});
        header.style.opacity = "0.98";
    }
});

// Picture Replacement for Mobile ----------------------------
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let bkgd = document.querySelector('.hero');
    let preconstruction = document.querySelector('#preconstruction');
    let construction = document.querySelector('#construction');
    let designbuild = document.querySelector('#designbuild');
    let sustainability = document.querySelector('#sustainability');

    if (width <= 500) {
        bkgd.style.backgroundImage = "url('../img/services/services-mobile-jumbotron.png')";
        preconstruction.src = "./img/services/services-tab-mobile-pre-construction-img.png";
        construction.src = "./img/services/services-tab-mobile-construction-img.png";
        designbuild.src = "./img/services/services-tab-mobile-design-build-img.png";
        sustainability.src = "./img/services/services-tab-mobile-sustainability-img.png";
    }

    else if (width > 500) {
        bkgd.style.backgroundImage = "url('../img/services/services-jumbotron.png')";
        preconstruction.src = "./img/services/services-tab-pre-construction-img.png";
        construction.src = "./img/services/services-tab-construction-img.png";
        designbuild.src = "./img/services/services-tab-design-build-img.png";
        sustainability.src = "./img/services/services-tab-sustainability-img.png";
    }
});

// // Page Load Effect ----------------------------------------
let bkgd = document.querySelector('.hero');
let heroCopy = document.querySelector('.hero-copy');
TweenMax.from(bkgd, .8, {autoAlpha:0, y:-50, ease: Circ.easeOut,});
TweenMax.from(heroCopy, .8, {autoAlpha:0, y:100, ease: Circ.easeOut,});