// JS goes here
class TabLink {
    constructor(element){
      // assign this.element to the element reference
      this.element=element;
      // Get the tab data attribute and save the value here
      this.tabData = this.element.dataset.tab; 
      // Find all elements with the .card class in index.html that correspond to the tab data attribute
      // If the data is 'all' then select all cards regardless of their data attribute
      if(this.tabData==='all'){
        this.info = document.querySelectorAll(`.info`);
      } else {this.info = document.querySelectorAll(`.info[data-tab='${this.tabData}'`);
    }
      // Map over the cards array and convert each card element into a new instance of the TabCard class. 
    // Pass in the card object to the TabCard class.
    this.info = Array.from(this.info).map(info => new TabCard(info));
    // Add a click event that invokes selectTab
    this.element.addEventListener('click',()=>{this.selectTab();
    });
  }
  selectTab(){

    // Select all elements with the .tab class on them
    const buttons = document.querySelectorAll('.buttons');
    // Iterate through the NodeList removing the .active-tab class from each element
    buttons.forEach(function(each){
      each.classList.remove('active-tab');
    })
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');
    // Select all of the elements with the .card class on them
    const information = document.querySelectorAll('.info') ;
    // Iterate through the NodeList setting the display style each one to 'none'
    information.forEach(function(each){
      each.style.display='none';
    })
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.info.forEach(info => info.selectCard());
  }
}
class TabCard {
    constructor(element){
      // Assign this.element to the passed in element.
      this.element=element;
    }
    selectCard(){
      // Update the style of this.element to display = null
      this.element.style.display=null;
    }
  
  }
  // Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.buttons');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tabs=>new TabLink(tabs))

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();