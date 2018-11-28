// JS goes here

// Navigation Button
const toggleNav = () => {
    i++;

    if ((i%1) === 0 ) {
        navBar.style.height = '575px';
        navLinks.style.display = 'inline-block';
    } if ((i%2) === 0) {
        navBar.style.height = '100%';
        navLinks.style.display = 'none';
    }
    console.log(i);
  }
  
  // identify the button
  const menu = document.querySelector('.nav-button');

  // identify item to turn "off"/change
  const navBar = document.querySelector('.nav-section');
  const navLinks = document.querySelector('.nav-expanded-links');
  const integrity = document.querySelector('.integrity');

  let i = 1;

  menu.addEventListener('click', () => { toggleNav()})
  
  
  // Tab filtering  

  class TabLink {
    constructor(itemOption){
      this.itemOption = itemOption;
      
      this.tabData = this.itemOption.dataset.tab; 
      
      this.items = document.querySelectorAll(`.item[data-tab='${this.tabData}']`);

      this.itemOption.addEventListener('click', () => { this.selectTab() });
    }
  
    selectTab(){
  
      const itemContents = document.querySelectorAll('.item');
      const imageContents = document.querySelectorAll('.itemImg');


      itemContents.forEach(function(itemContents) {
        itemContents.classList.remove('active') 
      });

      imageContents.forEach(function(imageContents) {
        imageContents.classList.remove('active') 
      });
      
      const itemsSelected = document.querySelectorAll(`.item[data-tab='${this.tabData}']`);
      const imageSelected = document.querySelectorAll(`.itemImg[data-tab='${this.tabData}']`);


      itemsSelected.forEach(function(itemsSelected) {
        itemsSelected.classList.add('active') 
      });

      imageSelected.forEach(function(imageSelected) {
        imageSelected.classList.add('active') 
      });
    }
  }
  

  let items = document.querySelectorAll('.item-option').forEach(function(item) {
    return new TabLink(item)
  });
  