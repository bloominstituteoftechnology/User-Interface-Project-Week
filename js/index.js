// JS goes here

let menu = document.querySelector('.menu')
let menuItems = document.querySelector('.menu-items')

// const toggleMenu = () => {
//   if(menu.classList.contains('menu--close')){
//     menu.classList.remove('menu--close');
//     menu.classList.add('menu--open');
//   }
//   else if(menu.classList.contains('menu--open')){
//     menu.classList.remove('menu--open');
//     menu.classList.add('menu--close');
//   }
// }

let slide = TweenMax.from(menuItems, 0.5, {paused: true, y:-50, autoAlpha: 0, ease:Power1.easeOut})

menu.addEventListener('click', () =>{
  if(slide.reversed()){
    slide.play();
    menu.classList.add('menu--open');
  }
  else{
    slide.reverse();
    menu.fadeOut(1600);
    menu.classList.remove('menu--open');
  }
});

//==============menu GSAP=================

class Tabs{
  constructor(element){
    this.element = element;
    this.link = document.querySelectorAll('.tabs-link');
    this.link = Array.from(this.link).map(link => {return new TabsLink(link, this)});
    this.activeLink = this.link[0];
    this.init();
  }
  init(){
    this.activeLink.select();
  }
  updateActive(newActive){
    this.activeLink.deselect();
    this.activeLink = newActive;
  }
  getTab(data){
    return document.querySelector(`.tabs-item[data-tab="${data}"]`)
  }
}

class TabsLink{
  constructor(link, parent){
    this.link = link;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', ()=> {
      this.tabs.updateActive(this);
      this.select();
    });
  }
  select(){
    this.link.classList.add('tabs-link-selected');
    this.tabsItem.select();
  }
  deselect(){
    this.link.classList.remove('tabs-link-selected');
    this.tabsItem.deselect();
  }
}
class TabsItem{
  constructor(element){
    this.element = element;
  }
  select(){
    this.element.classList.add('tabs-item-selected');
  }
  deselect(){
    this.element.classList.remove('tabs-item-selected');
  }
}//TabsItem

let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map(tab => new Tabs(tab));

//===============tabs=================








