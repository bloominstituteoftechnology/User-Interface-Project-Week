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
    
    // // Create a reference to all ".tab" classes
    // let tabs = document.querySelectorAll('.tab');
    // // console.log tabs to make sure you are receiving the correct elements before you proceed.
    
    // // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
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
        let cards = document.querySelectorAll('.card');
        cards.forEach((card) => card.style.display = 'none');
        this.tabCard.toggleContent();
        this.tab.style.background = '#5E9FB9';
    }
}

class Card {
    constructor(tabCard) {
        this.tabCard = tabCard;
    }

    toggleContent() {
        this.tabCard.classList.toggle('showCard');
    }
}
  
//   let links = document.querySelectorAll('.link');
//   links = Array.from(links).map( link => new TabLink(link));
let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tab(tab));





















// functionality for nav menu to open and close
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



