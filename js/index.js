// JS goes here
/// Hamburger menu

const toggleMenu = (event) => {
    // Toggle the "menu--open" class on menu reference. 
    console.log("toggleMenu was called");
    menu.classList.toggle("menu--open");
    menuButton.classList.toggle("burgerClicked");
  }
  
  // Start Here: Create a reference to the ".menu" class
  
  let menu = document.querySelector(".menu");
  
  // create a reference to the ".menu-button" class
  
  let menuButton = document.querySelector(".hamburgerIcon");
  
  // Using your menuButton reference, add a click handler that calls toggleMenu
  
  menuButton.addEventListener('click', e => {
    toggleMenu();
  })

  /// Services Tab navigator

  class TabCard {
    constructor(element){
      // Assign this.element to the passed in element.
      this.element = element;
    }
    
    selectCard(){
      // Update the style of this.element to display = null
      this.element.style.display = null;
    }
 
 }
 

  class TabLink {
    constructor(tabLinkElement){
      // assign this.element to the element reference
      this.tabLinkElement = tabLinkElement;
      // Get the tab data attribute and save the value here
      this.tabData = this.tabLinkElement.dataset.tab; 
      // Find all elements with the .card class in index.html that correspond to the tab data attribute. If the data is 'all' then select all cards regardless of their data attribute
   
      this.card = document.querySelector(`.card[data-tab='${this.tabData}']`);
    

       // Map over the cards array and convert each card element into a new instance of the TabCard class. Pass in the card object to the TabCard class.
       this.card = Array.from(this.card).map( element => new TabCard(element));
       // Add a click event that invokes selectTab
        this.tabLinkElement.addEventListener('click',    (event) => {
         this.selectTab(event);
        });
       }
        selectTab(event){
          // Select all elements with the .tab class on them
          const tabs = document.querySelectorAll(".tab");
          // Iterate through the NodeList removing the .active-tab class from each element
          tabs.forEach( tab => tab.classList.remove     ("active-tab"));
          // Add a class of ".active-tab" to this.element
          this.tabLinkElement.classList.add("active-tab");
     
     
          // // Select all of the elements with the .card class on them
          const cards = document.querySelectorAll   (".card");

          // // Iterate through the NodeList setting the display style each one to 'none'
          cards.forEach( card => card.style.display = "none")
          // // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
          // this.cards.forEach( card => card.selectCard());
      }
    }


  // Create a reference to all ".tab" classes
let tabs = document.querySelectorAll(".tab");
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map( tabLinkElement => new TabLink(tabLinkElement));

//Once you are complete, call the .select method on the first tab
