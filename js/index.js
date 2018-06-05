// JS goes hereclass Tabs
class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll(".tabs-link");
    this.links = Array.from(this.links).map( link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() { 
    this.activeLink.select();
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`);
  }
}

class TabsLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabsItem = this.parent.getTab(this.element.dataset.tab);  
    this.tabsItem = new TabsItem(this.tabsItem);
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();  
    });
  }

  select() {
    this.element.classList.add("tabs-link-selected");// Add a class named "tabs-link-selected" to the element
    this.tabsItem.select();// Notice that we are using the select method on tabsItem   
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected"); // Remove a class named "tabs-link-selected" from the element
    this.tabsItem.deselect();// Notice that we are using the deselect method on tabsItem    
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("tabs-item-selected");// Add a class named "tabs-item-selected" to the element 
    
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");// Remove a class named "tabs-item-selected" from the element 
    // Congrats, you finished all the instruction, check out your tab navigator!
  }
}



let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map( element => new Tabs(element));