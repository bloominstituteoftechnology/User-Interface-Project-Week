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
console.log(this.tabData);

    // find all elements with the .tab--content class that correspond to the tab data attribute
    // (there should only be one for each tab)
    this.tabContent = document.querySelectorAll(`.tab--content[data-tab='${this.tabData}']`);
    console.log(this.tabContent);


    // Map over tabContents array and convert to TabContent
    this.tabContent = Array.from(this.tabContent).map(content => new TabContent(content));
console.log(this.tabContent);
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

    // select all of the contents elements
    const contents = document.querySelectorAll('.tab--content');
console.log(this.contents);
    // iterate through the nodelist setting display to none
    contents.forEach(content => content.style.display= 'none');

    // call selectContent on all of the contents
    this.contents.forEach(content => selectContent());
  }
}

class TabContent {
  constructor(element) {
    this.element = element;
    console.log(this.element);
  }
  selectContent() {
    this.element.style.display = '';
  }
}

let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(tab => new TabNavigatorLink(tab));

tabs[0].selectTab();