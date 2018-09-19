// JS goes here
/************Expanded Menu******************************************* */
class Menu{
  constructor(element){
    this.element = element;
    this.button = document.querySelector('header .header-wrapper img');
    console.log(this.button)
    this.header = document.querySelector('header');
    this.header.style.height = '40px';
    this.button.addEventListener('click', () =>{this.expand()});

  }

  expand(){
    this.element.classList.toggle('show');
    if(this.element.classList =="show"){
      this.button.src ="/img/nav-hamburger-close.png";
      this.header.style.height ="100%"
    }
    else if(this.element.classList ==""){
      this.button.src ="/img/nav-hamburger.png";
      this.header.style.height = '40px';
    }
    
  }
  
}

let nav = document.querySelector('header nav');
nav = new Menu(nav);



// class Menu{
//   constructor(element){
//     this.element = element;
//     this.button = document.querySelector('header img');
//     this.button.addEventListener('click', () =>{this.expand()});
//   }

  // expand(){
    // this.element.classList.toggle('show');
    // if(this.element.classList =="show"){
    //   this.button.src ="/img/nav-hamburger-close.png";
    // }
    // else if(this.element.classList ==""){
    //   this.button.src ="/img/nav-hamburger.png";
    // }
  // }

// }

// let nav = document.querySelector('nav')
// nav = new Menu(nav)

/************************Tabs Servicees Pages*************************** */
class TabLink{
  constructor(link){
    this.link = link;
    this.data = this.link.dataset.tab;
    //console.log(this.data);
    this.itemLink = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    //console.log(this.itemLink);
    this.tabItem = new LinkItem(this.itemLink);
    this.link.addEventListener('click', () =>{this.selectTab()})
  }

  selectTab(){
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).map(link => {
      link.classList.remove('tabs-link-selected')
    });
    this.link.classList.add('tabs-link-selected');
    this.tabItem.selectItem();
  }
}

class LinkItem{
  constructor(item){
    this.item = item;
  }
  selectItem(){
   const items = document.querySelectorAll('.tabs-item');
   Array.from(items).map(item =>{
     item.classList.remove('tabs-item-selected');
   })
   this.item.classList.add('tabs-item-selected');
  
  }
}

let links = document.querySelectorAll('.tabs-link')
links = Array.from(links).map(link =>{ return new TabLink(link)});
console.log(links);
links[0].selectTab();