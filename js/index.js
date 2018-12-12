// JS goes here


//===== NAV Menu 

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  menuBtnClose.classList.toggle("menu-btn-close");
  menuBtn.classList.toggle('menu-btn-close');

}

const menu = document.querySelector('.menu');

const menuBtn = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.menu-btn-close');


menuBtn.addEventListener('click', () => {
  toggleMenu();
  
})

menuBtnClose.addEventListener('click', () => {
  toggleMenu();

})




// ===== Tabs

class TabLink {
  constructor(tabLink) {
    this.tabLink = tabLink;
    

    this.data = this.tabLink.dataset.tab;
    

    this.tabSelected = document.querySelector(`.tab-item[data-tab="${this.data}"]`);
  


    console.log(this.tabSelected);


    this.tabItem = new TabItem(this.tabSelected);
    // console.log(this.tabItem);
    
    this.tabLink.addEventListener('click', () => { this.select() });


  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tab-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => link.classList.remove('tab-link-selected'))

    // Add a class named "tabs-link-selected" to this link
    this.tabLink.classList.add('tab-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
    console.log('tab fired')
  }



}



class TabItem {
  constructor(tabElement) {
    
    this.tabElement = tabElement;
      
  }

  select() {
    
    const items = document.querySelectorAll('.tab-item');
    // console.log(items);

    
    items.forEach(item => item.classList.remove('tab-item-selected'));
    
    this.tabElement.classList.add('tab-item-selected');
    // console.log(this.tabItem);
  }

}




const links = document.querySelectorAll('.tab-link').forEach( link => new TabLink(link));


