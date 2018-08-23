class MenuButton {
  constructor(element) {
    this.element = element;
     this.element.addEventListener('click', () => {
      this.selectMenu();
    });
  }
   selectMenu() {
    let nav = document.querySelector('.nav');
    // nav.classList.toggle('full-screen');
     let buttons = document.querySelectorAll('.nav-menu');
    buttons.forEach((button) => {
      button.classList.toggle('display-none');
    });
     let navContent = document.querySelector('.nav-content');
    // navContent.classList.remove('display-none');
    TweenMax.to(navContent, 0.7, { marginTop: 0 });
     let menuClose = document.querySelector('.menu-close');
    menuClose.classList.contains('display-none')
      ? (TweenMax.to(nav, 0.7, { height: '49px' }),
        TweenMax.to(navContent, 0.5, { opacity: 0, y: '-300' }))
      : (TweenMax.to(nav, 0.7, { height: '100%' }),
        TweenMax.to(navContent, 1, { opacity: 1, y: 0 }));
  }
}
 let menuButtons = document.querySelectorAll('.nav-menu');
 menuButtons = Array.from(menuButtons).map(
  (menuButton) => new MenuButton(menuButton)
);
 let navContent = document.querySelector('.nav-content');
// navContent.classList.add('display-none');
class TabLink {
  constructor(element) {
    // assign this.element to the element reference
    this.element = element;
    console.log(this.element);
     // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab;
    console.log(this.tabData);
    // Get card specific to data attribute
    this.card = document.querySelector(`.card[data-tab="${this.tabData}"]`);
    // pass card to new Tab Card class
    this.card = new TabCard(this.card);
    console.log(this.card);
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => {
      this.selectTab();
    });
    console.log('\n');
  }
   selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');
     // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // Set all cards to display none
    cards.forEach((card) => (card.style.display = 'none'));
    // Invoke function on specific card
    this.card.selectCard();
  }
}
 class TabCard {
  constructor(element) {
    // Assign this.element to the passed in element.
    this.element = element;
    console.log(this.element);
  }
  selectCard() {
    // Update the style of this.element to display = flex
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      TweenMax.to(card, 1, { opacity: 0 });
    });
    this.element.style.display = 'flex';
    TweenMax.to(this.element, 1, { opacity: 1 });
    console.log(this.element);
  }
}
 // Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map((tabItem) => new TabLink(tabItem));
 //Once you are complete, call the .select method on the first tab
// tabs[0].selectTab();
