// nav bar
const toggleMenu = () => {
  dropButton.classList.toggle('none');
  dropButton2.classList.toggle('drop-button2');
}
const tweenOn = () => {
  TweenMax.to('header', 1, { height: "100%" })
  TweenMax.to('header', 1, { opacity: .9 })
  TweenMax.to('.home-links', 1, { height: 500 })
  TweenMax.to('.home-links', 1, { display: 'block' })
  TweenMax.to('.home-links', 1, { opacity: .9 })
}

const tweenOff = () => {
  TweenMax.to('header', 1, { height: 30 })
  TweenMax.to('header', 1, { opacity: 1 })
  TweenMax.to('.home-links', 1, { height: 0 })
  TweenMax.to('.home-links', .6, { opacity: '0' })
  TweenMax.to('.home-links', .6, { display: 'none' })
}

//tween
TweenMax.staggerFrom('div', .5, { opacity: 0, scale:.8,}, .03)
TweenMax.to('body', .4, { opacity: 1 })

// class reference
const header = document.querySelector('header');
const homeLinks = document.querySelector('.home-links');



// button reference
const dropButton = document.querySelector(".drop-button");
const dropButton2 = document.querySelector(".drop-button2");

// click and toggle

dropButton.addEventListener('click', toggleMenu);
dropButton2.addEventListener('click', toggleMenu);
dropButton.addEventListener('click', tweenOn);
dropButton2.addEventListener('click', tweenOff);

//Tabs

class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select());
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(element => element.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let items1 = document.querySelectorAll('.tabs-item')
    // Remove the class "tabs-item-selected" from each element
    Array.from(items1).forEach(element => element.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
    TweenMax.from('.tabs-item', 1, { opacity: 0 })
    TweenMax.to('.tabs-item', .6, { opacity: 1 })
    TweenMax.from('.tabs-item', 1, { scale: 0.9 })
    TweenMax.to('.tabs-item', .6, { scale: 1 })

  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(linksItem => new TabLink(linksItem));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
links[0].select();