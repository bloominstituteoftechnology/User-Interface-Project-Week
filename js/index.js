// JS goes here

//TABS

class Tabs {
    constructor(element) {
      this.element = element;
      // create a reference to the ".tabs-link" class nested in your tab object
      this.links = this.element.querySelectorAll(".tabs-link");
      // This step will map over the array creating new TabsLink class instances of each link.  No need to update anything here, just study what is going on.  Notice that we are creating another new object using the TabsLink class.
      this.links = Array.from(this.links).map( link => {
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
    }
  
    getTab(data) {
      // return a reference to the element's data attribute
      return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
    }
  
  }
  
  class TabsLink {
    // notice that we passesd in the element reference as well as a reference to the parent class.
    constructor(element, parent) {
      this.element = element;
      // assign this.tabs to parent
      this.tabs = parent;
      // Using the method from the parent class above, pass in a reference to the custom data attribute.  
      this.tabsItem = parent.getTab(this.element.dataset.tab);
      // Create a new TabsItem object that passes in a tabsItem value that you just created above
      this.tabsItem = new TabsItem(this.tabsItem);
  
      this.element.addEventListener('click', () => {
        this.tabs.updateActive(this);
        // invoke the select() method on this
        this.select();
      });
    };
  
    select() {
      // Add a class named "tabs-link-selected" to the element
      this.element.classList.add("tabs-link-selected");
      // Notice that we are using the select method on tabsItem
      this.tabsItem.select();
    }
  
    deselect() {
      // Remove a class named "tabs-link-selected" from the element
      this.element.classList.remove("tabs-link-selected"); 
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
  tabs = Array.from(tabs).map( tab => new Tabs(tab));
  


// DROPDOWN / NAVIGATION

class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");

    this.hamburger = this.element.querySelector(".hamburger");
    this.hamburgerOpen = this.element.querySelector(".hamburger-open");
    this.hamburgerClosed = this.element.querySelector(".hamburger-closed");

    // Add a click handler to the button reference and call the toggleContent method.
    this.buttonClick = this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    let dropdownContent = this.content;
    let hamburgerOpen = this.hamburgerOpen;
    let hamburgerClosed = this.hamburgerClosed;

    if (Array.from(dropdownContent.classList).includes("dropdown-hidden")) {
      TweenMax.set(dropdownContent, {height: "100vh", overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"});
      TweenMax.from(dropdownContent, .6, {height: 0, overflow: "hidden", display: "none"});
      
      TweenMax.set(hamburgerOpen, {opacity:0});
      TweenMax.from(hamburgerOpen, 0.25, {opacity: 1});
      
      TweenMax.set(hamburgerClosed, {opacity: 1});
      TweenMax.from(hamburgerClosed, 0.25, {opacity: 0});
      dropdownContent.classList.remove("dropdown-hidden");
    }
    else if (!Array.from(dropdownContent.classList).includes("dropdown-hidden")) {
      TweenMax.set(hamburgerOpen, {opacity: 1});
      TweenMax.from(hamburgerOpen, 0.25, {opacity:0});

      TweenMax.set(hamburgerClosed, {opacity: 0});
      TweenMax.from(hamburgerClosed, 0.25, {opacity: 1});

      dropdownContent.classList.add("dropdown-hidden");
      TweenMax.to(dropdownContent, .366, {height: 0, overflow: "hidden", display: "none"});
      TweenMax.from(dropdownContent, {height: "100vh", overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"});
    }
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

let hamburger = document.querySelector('.hamburger');
hamburger = Array.from(hamburger).map( hamburger => new Hamburger(hamburger));



// NAV BACKGROUND TRANSITIONS FROM TRANSPARENT TO GRAY ON SCROLL:

window.onscroll = function() {myFunction()};

let myNav = document.getElementById("myNavTransition");
let sticky = myNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    myNav.classList.add("custom-sticky");

  } else {
    myNav.classList.remove("custom-sticky");
  }
}