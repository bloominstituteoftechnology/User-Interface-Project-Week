// JS goes here
const toggleMenu = () => {
    console.log("Toggled menu.");

    menu.classList.toggle('active');
    menuButton.classList.toggle('not-active');
    navLogo.classList.toggle('not-active');
}
  
const menu = document.querySelector('.nav-text-extended');
const menuButton = document.querySelector('.hamburger');
const menuCloseButton = document.querySelector('.nav-extended-topbar img');
const navLogo = document.querySelector('.nav-logo');

menuButton.addEventListener('click', (e) => {
  
    console.log("Calling the toggleMenu const.");
    toggleMenu();
});

menuCloseButton.addEventListener('click', (e) => {
  
    console.log("Calling the toggleMenu const.");
    toggleMenu();
});




class TabLink {
    constructor(tab){
      // assign this.element to the element reference
      this.element = tab;
      //console.log(this.element);
      // Find all elements with the .card class in index.html that correspond to the tab data attribute. If the data is 'all' then select all cards regardless of their data attribute
      this.cards = document.querySelectorAll('.services-bottom-content .img-content img');
      //console.log(this.cards);
  
      // Map over the cards array and convert each card element into a new instance of the TabCard class. Pass in the card object to the TabCard class.
      this.cards = Array.from(this.cards).map( cards => new TabCard(cards));
      // Add a click event that invokes selectTab
      this.element.addEventListener('click', (e) => {
        console.log(`Got click on ` + this.element);
        this.selectTab();
      });
    }
  
    selectTab(){
        console.log(`Selecting tab`);
        // Select all elements with the .tab class on them
        const tabs = document.querySelectorAll('.services-tab');
        // Iterate through the NodeList removing the .active-tab class from each element
        tabs.forEach(function(tab) {
            tab.classList.remove('active-tab');
        });
        // Add a class of ".active-tab" to this.element
        this.element.classList.add('active-tab');

      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll('.services-bottom-content .img-content img');
      //console.log(cards);
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach(function(card) {
          console.log(card);
        card.classList.add('not-active');
        card.classList.remove('active');
      });
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(card){
      // Assign this.element to the passed in element.
      this.element = card;
      //console.log(this.element.dataset.tab);
    }
    selectCard(){
      // Update the style of this.element to display = null
      this.element.classList.add('active');
      this.element.classList.remove('not-active');
    }
  }
  
  // Create a reference to all ".tab" classes
  let tabs = document.querySelectorAll('.services-tab');
  // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
  tabs = Array.from(tabs).map( tabs => new TabLink(tabs));
  
  //Once you are complete, call the .selectTab method on the first tab
  tabs[0].selectTab();