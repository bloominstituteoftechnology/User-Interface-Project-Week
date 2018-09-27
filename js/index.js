// JS goes here

// ************************ tab navigator *************************
class Tab {
    constructor(tab) {
        this.tab = tab;
        this.tabMatcher = this.tab.dataset.matcher;
        this.tabCard = document.querySelector(`.card[data-matcher="${this.tabMatcher}"]`);
        this.tabCard = new Card(this.tabCard);
        this.tab.addEventListener('click', (event) => {this.tabClick(event)});
    }

    tabClick() {
        this.tabCard.toggleContent();
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('tabSelected'));
        this.tab.classList.toggle('tabSelected');
    }
}

class Card {
    constructor(tabCard) {
        this.tabCard = tabCard;
    }

    toggleContent() {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.remove('showCard'));
        this.tabCard.classList.toggle('showCard');
    }
}

// only run this code on Services.html in order to avoid error when '.tab' can't be found
let activePg = document.querySelector('title').innerText;
if (activePg === 'Services') {
    let tabs = document.querySelectorAll('.tab');
    tabs = Array.from(tabs).map( tab => new Tab(tab));
    tabs[0].tabClick();
}


// ********************** nav menu ******************************

// i would refactor this 
const navBurger = document.querySelector('.nav-burger');
const dropdownNav = document.querySelector('.dropdown-nav');
const navBar = document.querySelector('nav');
const fixedNav = document.querySelector('.fixed-nav');

navBurger.addEventListener('click', () => {
    // menu-open should be menu-closed. got it backwards. whoops
    if (navBurger.classList.contains('menu-open')) {
        // expand
        navBurger.classList.remove('menu-open');
        navBurger.src = '/img/nav-hamburger-close.png';
        dropdownNav.style.display = 'flex';
        dropdownNav.style['flex-direction'] = 'column';
        navBar.style.display = 'block';
        fixedNav.style['justify-content'] = 'space-around';
    } else {
        // hide menu
        navBurger.classList.add('menu-open');
        navBurger.src = '/img/nav-hamburger.png';
        dropdownNav.style.display = 'none';
    }
});



