// JS goes here

//****** Services tab/card logic *******
class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Check to see if this.tabData is equal to 'all'
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);

	// Map over the newly converted NodeList we just created in our if statement above.
	// Convert each this.cards element into a new instance of the TabCard class. 
	// Pass in a card object to the TabCard class. 
	this.cards = Array.from(this.cards).map(tabElement => new TabCard(tabElement));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => { this.selectTab() });  
  }

  selectTab(){

    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(`.tab`);
    
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach( function(tab){
      tab.classList.remove('active-tab'); // = {};
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(`.card`);

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(function(card){
      card.style.display = 'none';
    });
    
    // Add a class of ".active-tab" to this.tabElement
    console.log(this.tabElement);
    this.tabElement.classList.add('active-tab');
    
    // Notice we are looping through the this.cards array and invoking selectCard() 
    // from the TabCard class. Just un-comment the code and study what is happening here.
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
    this.cardElement.style.display = "flex";
  }

}

// First step! Create a reference to all ".tab" classes.
let tabs = document.querySelectorAll('.tab');

// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.  After you finish this line of code, it's time to build out your TabLink class at the top of the page!
tabs = Array.from(tabs).map(tab => new TabLink(tab));


//******* menu animation and navigation logic ********
const toggleMenu = () => {
	// Toggle the "menu--open" class on your menu refence.
	menu.classList.toggle('menu--open'); 
	body.classList.toggle('body-no-scroll'); //disabling scrolling seemed interesting. not sure if better UX
	mainNavigation.classList.toggle('main-nav-no-border');
	menuButton.classList.toggle('menu-button-image');
	console.log('toggle');
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const mainNavigation = document.querySelector('.main-navigation');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
	console.log('click');
	//not sure if i should be using this here; since only 1 menu exists and we hard reference it i think not
	toggleMenu();

});


