// JS goes here

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let tabItems = document.querySelectorAll('.project-detail');

    // Remove the class "project-detail-selected" from each element
    Array.from(tabItems).forEach( el => {
      el.classList.remove('project-detail-selected');
    });
    // Add a class named "project-detail-selected" to this element
    this.element.classList.add('project-detail-selected'); 
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.project-detail[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tab class
    const links = document.querySelectorAll('.tab');

    // Using a loop or the forEach method remove the 'tab-selected' class from all of the links
    Array.from(links).forEach( el => {
      el.classList.remove('tab-selected');
    });

    // Add a class named "tab-selected" to this link
    this.element.classList.add('tab-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

let links = document.querySelectorAll('.tab');
links = Array.from(links).map( (tab) => new TabLink(tab));
links[0].select();

new Vue({
  el: '#editor',
  data: {
    input: '*Hi!* You can write in **Markdown** 👇🏼 and it will be turned into styled text over there 👉🏼'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})

/* Open */
function openNav() {
  document.querySelector(".dropdown").style.height = "100%";
}

/* Close */
function closeNav() {
  document.querySelector(".dropdown").style.height = "0%";
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let tabItems = document.querySelectorAll('.service-detail');

    // Remove the class "service-detail-selected" from each element
    Array.from(tabItems).forEach( el => {
      el.classList.remove('service-detail-selected');
    });
    // Add a class named "service-detail-selected" to this element
    this.element.classList.add('service-detail-selected'); 
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.service-detail[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs class
    const links = document.querySelectorAll('.tab');

    // Using a loop or the forEach method remove the 'tabs-selected' class from all of the links
    Array.from(links).forEach( el => {
      el.classList.remove('tab-selected');
    });

    // Add a class named "tabs-selected" to this link
    this.element.classList.add('tab-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

let links = document.querySelectorAll('.tab');
links = Array.from(links).map( (tab) => new TabLink(tab));
links[0].select();


class Dropdown {
    constructor(element) {
      // assign this.element to the dropdown element
      this.element = element;
      // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector('.toggle-overlay')
      this.closebutton = this.element.querySelector('.closebutton')
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector('.aside');
      this.closebuttoncontent = document.querySelector('.aside');
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', (event) => { this.toggleContent(event) })
      this.closebutton.addEventListener('click', (event) => { this.closeContent(event) })
      // Instructor note, the reason we must wrap the toggleContent method in an anonymous function is that 'this' in toggleContent
      // would refer to the button, NOT the current instance of the class. 
    }
  
    toggleContent(event) {
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle('open');
    }
  
    closeContent(event) {
      // Toggle the ".dropdown-hidden" class off and on
      this.closebuttoncontent.classList.toggle('open');
    }
  }
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('header');
  dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

