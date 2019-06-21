// // JS goes here

class ButtonLink {
    constructor(element){
      // assign this.element to the element reference
      this.element = element;
      // Get the tab data attribute and save the value here
      this.btnData = this.element.dataset.btn; 
      // Find all elements with the .card class in index.html that correspond to the tab data attribute
      this.paneData = document.querySelectorAll(`.service-pane[data-btn="${this.btnData}"]`);
      console.log(`this.btnData is ${this.btnData}`);
      // If the data is 'all' then select all cards regardless of their data attribute
      this.panes = document.querySelectorAll(`.service-pane[data-btn="${this.btnData}"]`);
  
      // Map over the cards array and convert each card element into a new instance of the TabCard class. 
      // Pass in the card object to the TabCard class.
      this.panes = Array.from(this.panes).map( pane => new ButtonPane(pane));
      // Add a click event that invokes selectTab
      this.element.addEventListener('click', () => {this.selectButton()});
    }
  
    selectButton(){
  
      // Select all elements with the .tab class on them
      const buttons = document.querySelectorAll('.services-list-button');
      // Iterate through the NodeList removing the .active-tab class from each element
      buttons.forEach( button => {
        button.classList.remove('active-btn')    
      });
      // Add a class of ".active-tab" to this.element
      this.element.classList.add('active-btn');
  
      // Select all of the elements with the .card class on them
      const panes = document.querySelectorAll('.service-pane');
      // Iterate through the NodeList setting the display style each one to 'none'
      panes.forEach(pane => {
          pane.style.display = "none";    
      });
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
      this.panes.forEach(pane => pane.selectPane());
    }
  }
  
class ButtonPane {
constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
}
selectPane(){
    // Update the style of this.element to display = null
    this.element.style.display = "block";
}

}
  
  // Create a reference to all ".tab" classes
  let buttons = document.querySelectorAll('.services-list-button');
  // Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
  buttons = Array.from(buttons).map( buttonItem => new ButtonLink(buttonItem));
  //Once you are complete, call the .select method on the first tab
  buttons[0].selectButton();