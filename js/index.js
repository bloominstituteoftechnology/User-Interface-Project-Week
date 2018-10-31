// JS goes here

<<<<<<< HEAD
// "Tab"
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


let activePg = document.querySelector('title').innerText;
if (activePg === 'Services') {
    let tabs = document.querySelectorAll('.tab');
    tabs = Array.from(tabs).map( tab => new Tab(tab));
    tabs[0].tabClick();
}


// "Nav Bar"


const navBurger = document.querySelector('.nav-burger');
const dropdownNav = document.querySelector('.dropdown-nav');
const navBar = document.querySelector('nav');
const fixedNav = document.querySelector('.fixed-nav');

navBurger.addEventListener('click', () => {
    
    if (navBurger.classList.contains('menu-open')) {
        // -- this is for the exand view
        navBurger.classList.remove('menu-open');
=======
// navbar menu

const navBurger = document.querySelector('.navBurger');
const dropdownNav = document.querySelector('.dropdownNav');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.navBar');

navBurger.addEventListener('click', () => {
    // menu-open should be menu-closed. got it backwards. whoops
    if (navBurger.classList.contains('navOpen')) {
        // expand
        navBurger.classList.remove('navOpen');
>>>>>>> c89449366ef30e0a5e1f47e9cf098dd9cf32c3ff
        navBurger.src = '/img/nav-hamburger-close.png';
        dropdownNav.style.display = 'flex';
        dropdownNav.style['flex-direction'] = 'column';
        navBar.style.display = 'block';
        fixedNav.style['justify-content'] = 'space-around';
    } else {
<<<<<<< HEAD
        //  -- this hides the menu
        navBurger.classList.add('menu-open');
        navBurger.src = '/img/nav-hamburger.png';
        dropdownNav.style.display = 'none';
    }
});



=======
        // hide menu
        navBurger.classList.add('navOpen');
        navBurger.src = '/img/nav-hamburger.png';
        dropdownNav.style.display = 'none';
    }
});
>>>>>>> c89449366ef30e0a5e1f47e9cf098dd9cf32c3ff
