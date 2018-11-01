// JS goes here


//Expanded nav bar
const navExpanded = document.querySelector('#nav');
const hamburger = document.querySelector('#hamburger');
const headerWrapper = document.querySelector('.header-wrapper');
const navCloseBtn =  document.querySelector('#nav-close');

hamburger.addEventListener('click', function() {
    // headerWrapper.classList.add('nav-hidden');
    // navExpanded.classList.add('nav-open');

    TweenLite.to(navExpanded, .5, {className:'+=nav-open', opacity: 1});
    TweenLite.to(headerWrapper, .5, {opacity: 0});

   
});

navCloseBtn.addEventListener('click', function(){
    // navExpanded.classList.remove('nav-open');
    // headerWrapper.classList.remove('nav-hidden');

    TweenLite.to(navExpanded, 1, {opacity: 0, onComplete: () => {
      navExpanded.classList.remove('nav-open');
      TweenLite.to(headerWrapper, .2, {opacity: 1});
    }});

})


//Tab links componenet
class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;
      
      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
      
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
      
      // Add a click event listener on this instance, calling the select method on click
      this.element.addEventListener('click', () => { this.select(event) }); 
  
    };
  
    select(event) {
      // Get all of the elements with the tabs-link class
    
      const links = document.querySelectorAll('.tab-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      Array.from(links).forEach(link => link.classList.remove('tab-link-selected'));
      Array.from(links).forEach(link => link.classList.remove('tab-link-selected-autumn')); 

      // Add a class named "tabs-link-selected" to this link
      if(this.element.classList.contains('autumn')){
        //this.element.classList.add('tab-link-selected-autumn');
        TweenLite.to(this.element, .6, {className:'+=tab-link-selected-autumn'});
      }else {
        //this.element.classList.add('tab-link-selected');
        TweenLite.to(this.element, .6, {className:'+=tab-link-selected'});
      }

      
      // Call the select method on the item associated with this link
        this.tabItem.select();
        event.preventDefault();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const tabsItems = document.querySelectorAll('.tab-item');
      // Remove the class "tabs-item-selected" from each element
      Array.from(tabsItems).forEach(item => item.classList.remove('tab-item__selected'));
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tab-item__selected');
      
  
    }
  }
  
  
  
  let links = document.querySelectorAll('.tab-link');
  
  links = Array.from(links).map( link => new TabLink(link));
  
  links[0].select();


