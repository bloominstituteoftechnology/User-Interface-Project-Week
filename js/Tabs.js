/*
  Our Tabs class is a container for a complete Tabs environment, with Tab Links and lower content to be displayed
*/

class Tabs {
  constructor(element){
    this.element = element;
    this.tabs = document.querySelectorAll('.tab');
    this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this) );
    this.activeTab = this.tabs[0];
    this.init();
  }

  init(){
    this.activeTab.selectTab();
  }

  //updtateActive deselects the current tab element and replaces its reference with the passed in tab
  updateActive(tabElement){
    this.activeTab.deselectTab();
    this.activeTab = tabElement;
  }

  getArticle(data){
    return document.querySelector(`.article[data-tab="${data}"]`);
  }
}

class TabLink {
  constructor(element, parent){
    // assign this.element to the element reference
    this.element = element;
    //console.log(this.element);
    // assign this.parent to the parent reference
    this.parent = parent;
    // Nothing to update here, notice we are accessing the parent's method getCards(), nothing to update here
    this.article = this.parent.getArticle(this.element.dataset.tab);
    //console.log(this.cards);
    // Map over the cards array and convert each card reference into a new TabCard object. Pass in the card object to the TabCard class.
    this.article = new Article(this.article);
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => { this.selectTab()});
  }

  selectTab(){
    // Notice we are invoking updateActive on the parent class of TabLink, nothing to update here
    this.parent.updateActive(this);
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');
    //console.log(this.element.classList);
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
    this.article.selectArticle();
  }

  deselectTab(){
    // Remove the class ".active-tab" from this.element
    this.element.classList.remove('active-tab');
    //console.log(this.element.classList);
    // Notice we are looping through the this.cards array and invoking deselectCard() from the TabCard class, nothing to update here
    this.article.deselectArticle();
  }
}

class Article {
  constructor(element){
    // Assign this.element to the passed in element.
    this.element = element;
  }
  selectArticle(){
    // Update the style of this.element to display = null
    //this.element.style.display = null;
    this.element.classList.add("article-selected");
  }
  deselectArticle(){
    // Update the style of this.element to display = "none"
    //this.element.style.display = "none";
    this.element.classList.remove("article-selected");
    //console.log(this.element.style);
  }
}

// Create a reference to ".tabs"
let tabs = document.querySelectorAll(".tabs");
// Map over the array and convert each tab reference into a new Tabs object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map(tab => new Tabs(tab));
