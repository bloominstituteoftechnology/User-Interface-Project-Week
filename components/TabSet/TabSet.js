
class ServiceTab {
  constructor(element) {

    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = element;

    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;

    // Select the description with matching this.tabData value
    this.desc = document.querySelector(`.tabDesc[data-tab='${this.tabData}']`);
    
  }

}

class TabSet {
  constructor() {
    // Create the serviceTab components
    this.tabs = Array.from(document.querySelectorAll('.tab')).map(tab => new ServiceTab(tab));

    // Keep track of the selected tab
    this.clickedTab = this.tabs.filter(tab => tab.tabElement.classList.contains('selectedTab'))[0];

    // Add a click event on each ServiceTab that selects the appropriate tab
    this.tabs.forEach(tab => tab.tabElement.addEventListener('click', () => this.clickHandler(tab)));
  }

  // Function to handle selection on tab click
  clickHandler(serviceTab) {
    //Unselect the previous tab
    this.clickedTab.tabElement.classList.remove('selectedTab');

    //Select the clicked tab
    serviceTab.tabElement.classList.add('selectedTab');

    // Hide previous description
    this.clickedTab.desc.classList.remove('selected');

    // Update the selected tab
    this.clickedTab = serviceTab;

    // Show the description for the new tab
    this.clickedTab.desc.classList.add('selected');

  }
}


new TabSet();