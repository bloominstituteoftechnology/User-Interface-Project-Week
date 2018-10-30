// JS goes here

const hamburger = document.querySelector(".ham");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
hamburger.addEventListener("click", function(event) {
//   event.stopPropogation;
  nav.classList.toggle("nav-off");
  header.classList.toggle("header-open");
});






class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      // console.log(this.tabElement);
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab; 
      // console.log(this.tabData);
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
        this.cards = document.querySelectorAll(`.tabs-item[data-tab='${this.tabData}']`);
      
      
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      this.cards = Array.from(this.cards).map(item => new TabCard(item));
  
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll('.tabs-link');
      
      // Iterate through the NodeList removing the .active-tab class from each element
      tabs.forEach((item) => {
        item.classList.remove('active-tab');
      });
  
      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll('.tabs-item');
  
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach((item)=>{
        return item.style.display = 'none';
      })
      
      // Add a class of ".active-tab" to this.tabElement
      this.tabElement.classList.add('active-tab');
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      this.cardElement.style.display = 'flex';
    }
  
  }
  
  // First step! Create a reference to all ".tab" classes.
  let tabs = document.querySelectorAll('.tabs-link');
  
  // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
  tabs = Array.from(tabs).map( item => new TabLink(item));
  // console.log(tabs);