// NAV XXXXXXX

const showNav = () => {
    
    menu.classList.toggle("menu--open");
  }

const menu = document.querySelector(".menu");

const hamButton= document.querySelectorAll(".nav-button");
for(let i =0; i < hamButton.length; i++) {
      hamButton[i].addEventListener("click", showNav);

}


// XXXXXXXXXXXXXXXXXXXXXXXXXXX
//        SERVICES TAB NAVIGATION 

class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;  
      this.itemElement = document.querySelector(`.tabs-item[data-tab= '${this.data}']`) ;
      this.tabItem = new TabItem(this.itemElement);
     this.element.addEventListener("click", () => { this.select(); });
    };
  
  
  select() {
    
    const links = document.querySelectorAll(".tabs-link");
   
    links.forEach( link => {
        link.classList.remove('tabs-link-selected')
      });
  
    this.element.classList.add("tabs-link-selected")
 
    this.tabItem.select()
    
  }
  };
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
     
      const items = document.querySelectorAll(".tabs-item");
     
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
       
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  
  
  
  links = document.querySelectorAll(".tabs-link");
  links.forEach(function (link) {
    return new TabLink(link)
  });

  //  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  //           FIXED HEADER

  window.onscroll = function() {myFunction()};
  let header = document.getElementById("myHeader");
  let sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }