// JS goes here


// Step 3: Create TabLink class definition and pass in the link reference to the DOM element
class TabLink {
    // constructor
    constructor(link) {
      // Step 4: Match the data-set values between our link and the content 
      // data attribute from link
      this.tabContent = document.querySelector(`.content[data-tab='${link.dataset.tab}']`);
      
      // Step 5: Create a new content object from our matched data-set content tab
      this.tabContent = new Content(this.tabContent);
      // arrow function using implicit (automatic) value of where itw as called.  We call this "lexical scope."
      
      // Step 8: Add event Listener for our link and pass in the implicit binding of the 'this' keyword using an arrow function
      link.addEventListener('click', () => this.linkClick() );
    }
    // methods
    // Step 10: Have the tabContent toggle off and on based on our Content class's method
    linkClick() {
      this.tabContent.toggleContent();
    }
  }
  
  // Step 6: Create Content class definition and pass in the tabContent reference to the DOM element
  class Content {
    constructor(tabElement) {
      //console.log(tabElement);
      // Step 7: Properly set up the 'this' keyword for the Content class using our tabElement
      this.tabElement = tabElement;
    }
    // methods
    // Step 9: Create a method that can be called to toggle our tabElement off and on
    toggleContent() {
        const items = document.querySelectorAll('.content')
        
        items.forEach(item => item.classList.remove('change'));

        this.tabElement.classList.add('change');
    }
  }
  // Step 1: Get all the elements from the DOM into a NodeList
  const links = document.querySelectorAll('.link');
  // Step 2: Iterate over each element from our NodeList and create a new class called TabLink. 
  links.forEach( link => new TabLink(link));
  // let links = document.getElementsByClassName('link');
  // links = Array.from(links).forEach( link => console.log(link));
  
  
  // Psuedo Example for data-*
  // DOM elements -> NodeList -> TabLink Class -> Finds the custom data-tab -> Uses the custom data-tab to identify the correct tabContent