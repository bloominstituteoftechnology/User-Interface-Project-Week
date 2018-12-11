

// -------- js for tab selector: services page
class TabSelector {
  constructor(element) {
    // assign this.element to the tab-selector element
    this.element = element;
    // create an array of tabs-link objects, use built-in map function of Array.from to call new TabLink
    this.tabLinkObjs = Array
      .from(this.element.querySelectorAll('.tabs-link')
      , element => new TabLink(element));
    // store the data property of the selected TabLink
    this.tabSelection = null;
    this.tabLinkObjs.forEach(tabLink => {
      if (tabLink.element.classList.contains("tabs-link-selected")) {
        this.tabSelection = tabLink.data;
      }
    });
    // console.log("tabSelection = ", this.tabSelection);
  }

  deselectPrevious(newSelection) {
    // deselect previous selection
    this.tabLinkObjs.forEach(tabLink => {
      if(tabLink.data === this.tabSelection) {
        tabLink.deselect();
      }
    });
    // store new selection
    this.tabSelection = newSelection;
  }
}

class TabLink {
  constructor(element) {
  // Assign this.element to the passed in DOM element
  this.element = element;
  
  // Get the custom data attribute on the Link
  this.data = this.element.dataset.tab;
  
  // Using the custom data attribute get the associated Item element
  this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
  
  // Using the Item element, create a new instance of the TabItem class
  this.tabItem = new TabItem(this.itemElement);

  // Add a click event listener on this instance, calling the select method on click
  this.element.addEventListener('click', () => {this.select()});

  // return created TabLink to Tabs
  }

  select() {
    // remove previously selected link (calls tabItem.deselect())
    tabSelector.deselectPrevious(this.data);
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    // deselect this.element, deselect associated tabItem
    this.element.classList.remove("tabs-link-selected");
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // add class "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    // remove class "tabs-item-selected" from this element
    this.element.classList.remove("tabs-item-selected");
  }
}

let tabSelector = new TabSelector(document.querySelector('.services-tab-selector'));