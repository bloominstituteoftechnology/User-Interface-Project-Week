// Design of the hover on the navbar button

icon = document.getElementsByClassName(".icon");
body = document.querySelector("body");



// 3. Create a class definition that receives our DOM element from the NodeList
class TabLink {
    constructor(link) {
      // setup a reference to our this context and pointed it to our DOM element
      this.link = link;
      // stored our custom data-* attribute value
      this.linkData = this.link.dataset.tab;
      // Using our stored custom data-tab value, we then traverse the DOM to find out which content element we are going to use
      this.tabContent = document.querySelector(`.content[data-tab="${this.linkData}"]`);
      // Create a new Content object based on the content DOM element
      this.tabContent = new Content(this.tabContent);
      // add the click event to the tab link element
      this.link.addEventListener('click', () => {this.linkClick()});
      
    }
    // methods
    linkClick(){
      // reference the toggleContent method on the Content class
      this.tabContent.toggleContent();
    }
  }
  
  // Step 4: Create a class definition that creates a new tab content object from our this.tabContent reference.
  class Content {
    constructor(tabContent) {
      // set up a reference to tabContent this context
      this.tabContent = tabContent;
    }
    // methods
    toggleContent() {
      // toggling off or on a class named change 
      this.tabContent.classList.toggle('change');
    }
  }
  // 1. Get all of our DOM elements in a NodeList
  const tabLinks = document.querySelectorAll('.link');
  // 2. Iterate over each node and create a new constructor from that node and then return that node with new abilities
  tabLinks.forEach( link => new TabLink(link));
  // NOTE: we are using the fancy arrow syntax which allows for implicit return keyword usage.
  
  