class Tabs {
    constructor(element) {
      this.element = element;
      // create a reference to the ".tabs-link" class nested in your tab object
      this.links = element.querySelectorAll(".tabs-link");
      // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
      //we're using "return" here because we are using curly braces with our map methods. 
      //link is getting passed in like normal and represents the "Tab 1", Tab 2, etc, and then we're passing in "this" representing the parent aka the whole container.
      this.links = Array.from(this.links).map(link => {
        return new TabsLink(link, this);
      });
      // Set the active link to the first item in the array
      this.activeLink = this.links[0];
      // Nothing to update here, just notice we are invoking the init() method
      this.init();
    }
  
    init() {
      // invoke the method select() on activeLink
      this.activeLink.select();
    }
  
    updateActive(newActive) {
      // invoke the method deselect() on activeLink
      this.activeLink.deselect();
      // assign this.activeLink to the new active link (newActive)
      this.activeLink = newActive;
      //MAY NEED TO REMOVE "this" in line above, not sure
    }
  
    getTab(data) {
      // return a reference to the element's data attribute
      return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
  
  }
  
  class TabsLink {
    // notice that we passed in the link reference as well as a reference to the parent class.
    constructor(link, parent) {
      //assign this.link to link
      this.link = link;
      // assign this.tabs to parent
      this.tabs = parent;
      // Using the method from the parent class above, pass in a reference to the custom data attribute.  
      this.tabsItem = parent.getTab(this.link.dataset.tab);
      // Create a new TabsItem object that passes in a tabsItem value that you just created above
      this.tabsItem = new TabsItem(this.tabsItem);
      //NOT SURE ABOUT LINE ABOVE
      this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        // invoke the select() method on this
        this.select();
      });
    };
  
    select() {
      // Add a class named "tabs-link-selected" to the link
      this.link.classList.add("tabs-link-selected");
      // Notice that we are using the select method on tabsItem
      this.tabsItem.select();
    }
  
    deselect() {
      // Remove a class named "tabs-link-selected" from the link
      this.link.classList.remove("tabs-link-selected");
      // Notice that we are using the deselect method on tabsItem
      this.tabsItem.deselect();
    }
  }
  
  class TabsItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Add a class named "tabs-item-selected" to the element 
      this.element.classList.add("tabs-item-selected");
    }
  
    deselect() {
      // Remove a class named "tabs-item-selected" from the element 
      this.element.classList.remove("tabs-item-selected");
      // Congrats, you finished all the instruction, check out your tab navigator!
    }
  }
  
  
  // START HERE: create a reference to the ".tabs" classes
  let tabs = document.querySelectorAll(".tabs");
  // map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
  tabs = Array.from(tabs).map(tab => new Tabs(tab));
  
  
  