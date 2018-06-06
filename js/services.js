// JS goes here 


//**************SERVICES TAB COMPONENT*******************//

// // When the user scrolls the page, execute myFunction 
// window.onscroll = function () {
//     customFunc()
// }; 

// // Get the navbar
// let navbar = document.getElementById("navbar");


// // Get the offset position of the navbar
// let sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function customFunc() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// //**************NAV SYSTEM PART 2*******************//

// let burgerIcon = document.getElementsByClassName("nav-hamburger2");




// the Tabs class below is used to create an object from the array item representation of the .tabs node 
// the tabsArrayItem is the reference node turnt array item that is passed into the Tabs class
class Tabs { 
  constructor(element) {
    this.element = element;

    //// create a reference to the ".tabs-link" class nested in your tab object
    // this.links = document.querySelectorAll(".tabs-link");
    // ************solution code used the below*********************
    this.links = this.element.querySelectorAll(".button-tab");
    //// This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
    // similar to below, this.links is set equal to an array of objects of the TabsLink class. The tabs-link reference that was turned into an array item is passed into the TabsLink constructor. 
    // also passed into the TabsLink constructor is the object made from this constructor (i.e. the Tabs class object that was created in the last line in the code (i.e. the .tabs node turnt array item) )
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
    // this.activeLink = this.newActive;
    // ************solution code used the below*********************
    this.activeLink = newActive;
  }

  getTab(data) {
    //// return a reference to the element's data attribute
    // this.element = this.activeLink.querySelector[`.tabs-link[data-tab= "${`]
    // this.element = this.activeLink.querySelector("div[data-tab]");
    // this.element = this.activeLink.querySelector(`div[${data}-tab`);

   
    // return this.element;
    // ************solution code used the below*********************
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
  }

}

// passed into this constructor are the array item representing the .tabs-link node and the object of class Tabs that was created at the bottom-most line of code when we passed in the .tabs node item turnt array item 
class TabsLink {
  //// notice that we passesd in the element reference as well as a reference to the parent class.
  // the "element" that's passed in the the node list references of the four .tabs-link classes in the document
  // the "parent" that's passed in is the object of class Tabs that was created at the bottom-most line of code when we passed in the .tabs node item turnt array item 
  constructor(element, parent) {
    this.element = element;

    //// assign this.tabs to parent
    // this.tabs is assigned to the parent which is an object. there is only one of these objects because there was only one .tabs class used in the document
    this.tabs = parent;

    //// Using the method from the parent class above, pass in a reference to the custom data attribute.  
    // this.tabsItem = this.parent.getTab();
    // ************solution code used the below*********************
    this.tabsItem = parent.getTab(this.element.dataset.tab);
    //// Create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      // invoke the select() method on this
      this.select();
    });
  };

  select() {
    //// Add a class named "tabs-link-selected" to the element
    this.element.classList.add("tabs-link-selected");
    //// Notice that we are using the select method on tabsItem
    this.tabsItem.select();
  }

  deselect() {
    ////Remove a class named "tabs-link-selected" from the element
    this.element.classList.remove("tabs-link-selected"); 
    //// Notice that we are using the deselect method on tabsItem
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    //// Add a class named "tabs-item-selected" to the element 
    this.element.classList.add("tabs-item-selected");
    
  }

  deselect() {
    //// Remove a class named "tabs-item-selected" from the element 
    this.element.classList.remove("tabs-item-selected");
    //// Congrats, you finished all the instruction, check out your tab navigator!
  }
}


//// START HERE: create a reference to the ".tabs" classes
// here we're assigning tabs to the .tabs reference nodes in the DOM
let tabs = document.querySelectorAll(".button-tabs");

//// map through each tabs element and create a new Tabs object.  Be sure to pass in a reference to the tab when creating the Tabs object.
// the tabs variable on the LHS is assigned to a new value
// on the RHS, the tabs nodelist from above is converted to an array
// the array of reference nodes is then mapped into a function that takes in an element from the array and passes it into the Tabs class. This happends for each element in the array. 
// at this point, tabs is an array of objects of the Tabs class 
tabs = Array.from(tabs).map(tabsArrayItem => new Tabs(tabsArrayItem));
