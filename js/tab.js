////////////////////////
// JS for tab component
////////////////////////

class TabLink {
  constructor(element) {
    // assign this.element to the element reference
    this.element = element;
    console.log(this.element);

    // Get the tab data attribute and save the value here
    this.tabData = this.element.dataset.tab;
    console.log(this.tabData);
    // Get card specific to data attribute
    this.card = document.querySelector(`.card[data-tab="${this.tabData}"]`);
    // pass card to new Tab Card class
    this.card = new TabCard(this.card);
    console.log(this.card);
    // Add a click event that invokes selectTab
    this.element.addEventListener('click', () => {
      this.selectTab();
    });
    console.log('\n');
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll('.tab');
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach((tab) => tab.classList.remove('active-tab'));
    // Add a class of ".active-tab" to this.element
    this.element.classList.add('active-tab');

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll('.card');
    // Set all cards to display none
    cards.forEach((card) => (card.style.display = 'none'));
    // Invoke function on specific card
    this.card.selectCard();
  }
}

class TabCard {
  constructor(element) {
    // Assign this.element to the passed in element.
    this.element = element;
    console.log(this.element);
  }
  selectCard() {
    // Update the style of this.element to display = flex
    this.element.style.display = 'flex';
    console.log(this.element);
  }
}

// Create a reference to all ".tab" classes
let tabs = document.querySelectorAll('.tab');
// Map over the array and convert each tab reference into a new TabLink object.  Pass in the tab object to the Tabs class.
tabs = Array.from(tabs).map((tabItem) => new TabLink(tabItem));

//Once you are complete, call the .select method on the first tab
tabs[0].selectTab();
