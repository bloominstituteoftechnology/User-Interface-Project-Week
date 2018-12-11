

// Nav Bar responsiveness
const navbar = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const navbarImage = document.querySelector('.hamburger img');
let clicked = false;

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show-nav');
    header.classList.toggle('transparent-bg');
    swapImage();
})

//Service -> Tabs
class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab; 
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      this.itemElement = new TabItem(this.itemElement);
      this.element.addEventListener('click', () => {this.select(element)});
    };
  
    select() {
      const links = document.querySelectorAll('.tabs-link');
      links.forEach(link => {
        link.classList.remove('tabs-link-selected');
      });
      this.element.classList.add('tabs-link-selected'); 
      this.itemElement.select();   
    }
  }
  
  class TabItem {
    constructor(element) {
      this.tabItem = element;
    }
  
    select() {
      const items = document.querySelectorAll('.tabs-item');
      items.forEach(item => {
        item.classList.remove('tabs-item-selected');
      });
      this.tabItem.classList.add('tabs-item-selected');
    }
  }
  
  const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));


  //Functions
  
  function swapImage() {
    
    if(clicked === true){
      navbarImage.src = '/img/nav-hamburger.png';
      clicked = false;
      console.log('this should revert it back to original state')
    }
    else{
      clicked = true;
      navbarImage.src = '/img/nav-hamburger-close.png';
      
      console.log('this should change it to closed icon')
    }
  }