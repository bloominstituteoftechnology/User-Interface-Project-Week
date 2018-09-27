// JS goes here

// functionality for tab menu
//class TabLink {
    // constructor(element){
    //     this.element = element;
    //     this.tabData = this.element.dataset.tab; 
    //     // Map over the cards array and convert each card element into a new instance of the TabCard class. Pass in the card object to the TabCard class.
    //     this.cards = Array.from(this.cards).map( card => new TabCard(card));
    //     // Add a click event that invokes selectTab
    //     this.element.addEventListener('click', () => {this.selectTab()});
    //   }
    
    //   selectTab(){
    //     // Select all elements with the .tab class on them
    //     const tabs = document.querySelectorAll(".tab");
    //     // Iterate through the NodeList removing the .active-tab class from each element
    //     tabs.forEach( tab => {
    //       tab.classList.remove("active-tab");
    //     })
    
    //     // Select all of the elements with the .card class on them
    //     const cards = document.querySelectorAll('.card');
    //     // Iterate through the NodeList setting the display style each one to 'none'
    //     cards.forEach(card => card.style.display = 'none');
    
    
    //     // Add a class of ".active-tab" to this.element
    //     this.element.classList.add("active-tab");
    //     // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    //     this.cards.forEach(card => card.selectCard());
    //   }
    // }
    
    // class TabCard {
    //   constructor(element){
    //     // Assign this.element to the passed in element.
    //     this.element = element;
    //   }
    //   selectCard(){
    //     // Update the style of this.element to display = "flex"
    //     this.element.style.display = "flex";
    //   }
    
    // }
    
    // let tabs = document.querySelectorAll('.tab');
    // tabs = Array.from(tabs).map(tab => new TabLink(tab))
    
    // //Once you are complete, call the .selectTab method on the first tab
    // // tabs[0].selectTab()


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
  

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tab(tab));
tabs[0].tabClick();


// ********************** nav menu ******************************

// i know, i know, this is an ugly function. i was in a time crunch.
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



