// JS goes here

const navItems=document.querySelector(".nav-items");
const nav=document.querySelector("nav");

const  burger=document.querySelector(".burger");

const toggleNav=function(){
    navItems.classList.toggle("nav-items-on");
    nav.classList.toggle("nav--open");
    navItems.classList.toggle("nav-items");
}

burger.addEventListener('click', toggleNav);

//tabs

class TabLink{
    constructor(element){
        this.element=element;
        console.log(element);
        this.tabData = element.dataset.tabname;
        console.log(this.tabData);
        this.serviceDescription=document.querySelector(`.service-description[data-tabname="${this.tabData}"]`);
        this.serviceDescription=(new TabDescription(this.serviceDescription));
        this.element.addEventListener('click',this.selectTab.bind(this));
  }
  selectTab(){
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(function(item){
        item.classList.remove("active-tab");
      });
      event.target.classList.add("active-tab");
      const serviceDescriptions=document.querySelectorAll(".service-description");
      
      serviceDescriptions.forEach(function(item){
        item.style.display="none";
      });
      this.serviceDescription.selectService();
      }
  }

  class TabDescription{
      constructor(element){
        this.element=element;
      }
      selectService(){
        this.element.style.display=null;
      }
  }

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(function(tab){new TabLink(tab)});

// tabs[1].selectTab();
