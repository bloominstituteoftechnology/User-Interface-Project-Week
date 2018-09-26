// JS goes here


//\\//\\//\\//\\//\\//\\//\\
//
// Navigation Modal
//
//\\//\\//\\//\\//\\//\\//\\

// listen to hamburger for click



// if no modal -> overlay navigation modal



// else -> hide navigation modal






//\\//\\//\\//\\//\\//\\//\\
//
// Tab navigator
//
//\\//\\//\\//\\//\\//\\//\\
class TabNavigatorLink {
  constructor(element) {
    // assign this.element to the element reference
    this.element = element;

    // get the tab data attribute and save the value
    this.tabData = this.element.dataset.tab;

    // find the element with the .tab--content class that corresponds to the tab data attribute
    this.item = document.querySelector(`.tab--content[data-tab='${this.tabData}']`);

    // creat a new instance of the TabContent from that item    
    this.tabContent = new TabContent(this.item);

    // add click event that invokes selectTab
    this.element.addEventListener('click', (e) => { this.selectTab(e) });
  }

  selectTab() {
    // select all elements with the .tab class
    const tabs = document.querySelectorAll('.tab');

    
    // remove the .tab--selected class from each of them
    tabs.forEach(tab => tab.classList.remove('tab--selected'));

    // add .tab--selected to this.element
    this.element.classList.add('tab--selected');

    this.tabContent.selectContent();
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
  }
  selectContent() {
    const items = document.querySelectorAll('.tab--content');
    items.forEach( item => {item.classList.add('hide-content')});
    this.element.classList.remove('hide-content');
    console.log(this.element);
  }
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabNavigatorLink(tab));

tabs[0].selectTab();