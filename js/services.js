class TabLink {
    constructor(element){
     this.element=element;
     this.tabData = this.element.dataset.tab; 
      if(this.tabData==='all'){
        this.info = document.querySelectorAll(`.info`);
      } else {this.info = document.querySelectorAll(`.info[data-tab='${this.tabData}'`);
    }
    this.info = Array.from(this.info).map(info => new TabCard(info));
    this.element.addEventListener('click',()=>{this.selectTab();
    });
  }
  selectTab(){
    const buttons = document.querySelectorAll('.buttons');
      buttons.forEach(function(each){
        each.classList.remove('active-tab');
    })
      this.element.classList.add('active-tab');
    const information = document.querySelectorAll('.info') ;
      information.forEach(function(each){
      each.style.display='none';
    })
    this.info.forEach(info => info.selectCard());
  }
}
class TabCard {
    constructor(element){
      this.element=element;
    }
    selectCard(){
      this.element.style.display=null;
    }
  
  }
let tabs = document.querySelectorAll('.buttons');
tabs = Array.from(tabs).map(tabs=>new TabLink(tabs))
tabs[0].selectTab();
let hamburger = document.getElementById("hamburger");
let dropDown = document.getElementById("drop-down")
let navSpecs = document.getElementById("nav-specifics") 
let navContent = document.getElementById("nav-content")
let navBar = document.getElementById("nav-bar")
let closeBtn = document.getElementById("close-btn")
hamburger.addEventListener("click",function(){
  navContent.style.width="100%";
  navBar.style.display="relative";
  
})
closeBtn.addEventListener("click",function(){
  navContent.style.width="0%";
  navContent.style.left="0%";
})