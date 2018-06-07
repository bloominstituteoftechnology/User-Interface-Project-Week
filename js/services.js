


// the Tabs class below is used to create an object from the array item representation of the .buttonTabs node 
// the buttonTabsArrayItem is the reference node turnt array item that is passed into the Tabs class
class Tabs { 
  constructor(element) {
    this.element = element;

    //// create a reference to the ".button-tabs-link" class nested in your tab object
    this.links = this.element.querySelectorAll(".button-tabs-link");
    //// This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    // similar to below, this.links is set equal to an array of objects of the TabsLink class. The button-tab-link reference that was turned into an array item is passed into the TabsLink constructor. 
    // also passed into the TabsLink constructor is the object made from this constructor (i.e. the Tabs class object that was created in the last line in the code (i.e. the .button-tabs node turnt array item) )
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this);
    });

    //// Set the active link to the first item in the array
    this.activeLink = this.links[0];

    //// Nothing to update here, just notice we are invoking the init() method
    this.init();
  }

  init() { 
    //// invoke the method select() on activeLink
    this.activeLink.select();
  }

  updateActive(newActive) {
    //// invoke the method deselect() on activeLink
    this.activeLink.deselect();
    //// assign this.activeLink to the new active link (newActive)
    this.activeLink = newActive;
  }

  getTab(data) {
    //// return a reference to the element's data attribute
    return this.element.querySelector(`.button-tabs-item[data-btn="${data}"]`)
  }

}

class TabsLink {
  //// notice that we passesd in the element reference as well as a reference to the parent class.
  // the "element" that's passed in the the node list references of the four items in the document with the .button-tab-link classes.
  // the "parent" that's passed in is the object of class Tabs that was created at the bottom-most line of code when we passed in the .button-tabs node item turnt array item 
  constructor(element, parent) {
    this.element = element;

    //// assign this.buttonTabs to parent
    // this.buttonTabs is assigned to the parent which is an object. there is only one of these objects because there was only one item with the .buttonTabs in the document. (????)
    this.buttonTabs = parent;

    //// Using the method from the parent class above, pass in a reference to the custom data attribute.  
    this.buttonTabsItem = parent.getTab(this.element.dataset.btn);
    
    //// Create a new TabsItem object that passes in a buttonTabsItem value that you just created above
    this.buttonTabsItem = new TabsItem(this.buttonTabsItem);
    this.element.addEventListener('click', () => {
      this.buttonTabs.updateActive(this);
      // invoke the select() method on this
      this.select();
    });
  };

  select() {
    //// Add a class named "button-tabs-link-selected" to the element
    this.element.classList.add("button-tabs-link-selected");
    //// Notice that we are using the select method on buttonTabsItem
    this.buttonTabsItem.select();
  }

  deselect() {
    ////Remove a class named "button-tabs-link-selected" from the element
    this.element.classList.remove("button-tabs-link-selected"); 
    // //// Notice that we are using the deselect method on buttonTabsItem
    this.buttonTabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    //// Add a class named "button-tabs-item-selected" to the element 
    this.element.classList.add("button-tabs-item-selected");
    
  }

  deselect() {
    //// Remove a class named "tabs-item-selected" from the element 
    this.element.classList.remove("button-tabs-item-selected");
    //// Congrats, you finished all the instruction, check out your tab navigator!
  }
}


//// START HERE: create a reference to the ".button-tabs" classes
// here we're assigning tabs to the .button-tabs reference nodes in the DOM
let buttonTabs = document.querySelectorAll(".button-tabs");

//// map through each .button-tabs element and create a new Tabs object.  Be sure to pass in a reference to the button-tabs when creating the Tabs object.
// the tabs variable on the LHS is assigned to a new value
// on the RHS, the button-tabs nodelist from above is converted to an array
// the array of reference nodes is then mapped into a function that takes in an element from the array and passes it into the Tabs class. This happends for each element in the array. 
// at this point, button-tabs is an array of objects(?) of the Tabs class 
buttonTabs = Array.from(buttonTabs).map(buttonTabsArrayItem => new Tabs(buttonTabsArrayItem));
