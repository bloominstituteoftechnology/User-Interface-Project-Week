// JS goes here

// Navigation expand/collapse

let navButton = document.querySelector('.nav-button');
let navigation = document.querySelector('#navigation');
let isOpen = false;

navButton.addEventListener('click', function () {
    if (isOpen == false) {
        navigation.style.display = 'flex';
        navButton.innerHTML = `<img src = './img/nav-hamburger-close.png'></img>`;
        isOpen = true;
    } else {
        navigation.style.display = 'none';
        navButton.innerHTML = `<img src = './img/nav-hamburger.png'></img>`
        isOpen = false;
    }
});

var mobileWidth = window.matchMedia('(min-width: 500px)');

shiftLeft(mobileWidth);
mobileWidth.addListener(shiftLeft);

function shiftLeft() {

    // Shifts every other project title to the left on desktop
    let projects = document.querySelectorAll('.project');
    let everyOther = [];

    projects.forEach(function (each) {
        if (each.dataset.tab % 2 === 0) {
            everyOther.push(each);
        }
    });

    let eoTitle = [];

    for (i = 0; i < everyOther.length; i++) {
        eoTitle.push(everyOther[i].querySelector('.project-title'));
    }
    if (mobileWidth.matches) {
        for (i = 0; i < eoTitle.length; i++) {
            eoTitle[i].style.cssText = 'left: 0; right: initial;';
        }

    } else {
        for (i = 0; i < eoTitle.length; i++) {
            eoTitle[i].style.cssText = 'left: initial; right: initial;';
        }

    }

}

//take all tabs and map them into a constructor
class TabLink {
    constructor(element) {
        this.element = element;

        // collect tab's data
        this.tabData = element.dataset.tab;

        // find element that matches data
        this.card = document.querySelector(`.card[data-tab='${this.tabData}'`);
        //add click event that runs a method
        this.element.addEventListener('click', () => {
            this.showCard(this.card);
            this.tabSelect(this.element);
        });
    }

    // hide all cards that do not match this.card
    showCard(card) {
        let hideAll = document.querySelectorAll('.card');
        hideAll.forEach(function (each) {
            each.style.display = 'none';
        });
        card.style.display = 'inline-block';
    }

    tabSelect(element) {
        let allTabs = document.querySelectorAll('.tab-link');
        allTabs.forEach(function (each) {
            each.classList.remove('active-link');
        });
        element.classList.add('active-link');
    }
}

if (document.title === 'Services') {

    let tabs = document.querySelectorAll('.tab-link');

    tabs = Array.from(tabs).map(tabs => new TabLink(tabs));

    tabs[0].showCard(tabs[0].card);


}

class ImageSwap {
    constructor(element) {
        this.element = element;

        this.imgData = element.dataset.tab;

        this.pageTitle = document.title.toLowerCase();

        window.addEventListener('load', () => {
            if (window.innerWidth <= 500) {
                this.mobileSrc();
            } else if (window.innerWidth > 500){
                this.desktopSrc();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 500) {
                this.mobileSrc();
            } else if (window.innerWidth > 500){
                this.desktopSrc();
            }
        });
    }

    mobileSrc() {
        if (this.imgData !== 'exclude') {
            this.element.src = `./img/${this.pageTitle}/${this.pageTitle}-mobile-${this.imgData}.png`;
        }
    }

    desktopSrc() {
        if (this.imgData !== 'exclude') {
            this.element.src = `./img/${this.pageTitle}/${this.pageTitle}-${this.imgData}.png`;
        }
    }

}




let images = document.querySelectorAll('img');

images = Array.from(images).map(images => new ImageSwap(images));