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

var width = window.matchMedia('(min-width: 500px)');
alternate(width);
width.addListener(alternate);

function alternate() {

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
    if (width.matches) {
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

    tabSelect(element){
        let allTabs = document.querySelectorAll('.tab-link');
        allTabs.forEach(function(each){
            each.classList.remove('active-link');
        });
        element.classList.add('active-link');
    }
}

let tabs = document.querySelectorAll('.tab-link');

tabs = Array.from(tabs).map(tabs => new TabLink(tabs));

tabs[0].showCard(tabs[0].card);