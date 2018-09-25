


// START OF NAV BAR
openButton = document.querySelector('#toOpen');
closeButton = document.querySelector('#toClose')
dropdownPage = document.querySelector('.dropdown');

openButton.addEventListener('click', function(){
openButton.style.display = 'none'
closeButton.style.display = 'flex'
dropdownPage.style.display = 'flex'
});

closeButton.addEventListener('click', function(){
    closeButton.style.display = 'none'
    openButton.style.display = 'flex'
    dropdownPage.style.display = 'none'
}); 
// END OF NAV BAR

// Start of Services Tabs Section
class Tab {
    constructor(element) {
      this.element = element;
      this.links = this.element.querySelectorAll('.button');
      this.links = Array.from(this.links).map( link => {
        return new TabLink(link, this);
      });
      this.activeLink = this.links[0];
      this.activeLink.select();
    }
  
    activate(link) {
      this.activeLink.deselect();
      this.activeLink = link;
    }
    getTab(dataValue) {
      return this.element.querySelector(`.infoBox[data-tab='${dataValue}']`);
    }
  }
  
  class TabLink {
    constructor(element, parent) {
      this.element = element;
      this.tabs = parent;
      this.tabItem = parent.getTab(element.dataset.tab);
      this.tabItem = new TabItem(this.tabItem);
      
      this.element.addEventListener('click', () => {
        this.tabs.activate(this);
        this.select();
      });
    }
    
    select() {
      this.element.classList.add('button-selected');
      this.tabItem.select();
    }
    deselect() {
      this.element.classList.remove('button-selected');
      this.tabItem.deselect();
    }
  }
  
  class TabItem {
    constructor(element) {
    this.element = element;
    }
    select() {
      console.log('testing');
    this.element.classList.add('infoBox-selected');
    }
    deselect() {
    this.element.classList.remove('infoBox-selected');
  }
  }
  
  
  let tabs = document.querySelectorAll('.tabspage');
  
  tabs = Array.from(tabs).map(tab => {
    return new Tab(tab);
  });
  console.log(tabs);
//End of Services Tabs Section