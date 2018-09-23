class Dropdown {
    constructor(element){
      this.element = element;
      this.open = document.querySelector(".menu-button");
      this.content = document.querySelector(".menu-content");
      this.close = document.querySelector(".close-button");

      this.open.addEventListener("click", () => {this.toggleContent()
      this.open.classList.add('hide');
      this.close.classList.remove('hide');})
      

      this.close.addEventListener("click", () =>{this.toggleContent()
      this.close.classList.add('hide');
      this.open.classList.remove('hide');})
    }

    toggleContent() {
      this.content.classList.toggle('menu-hidden');
    }
  }

  let dropdowns = new Dropdown();
  



  class Tab {
    constructor(element) {
      this.element = element;
      this.links = this.element.querySelectorAll('.tabs-link');
      this.links = Array.from(this.links).map(link => {
        return new TabLink(link, this);
      });
      this.activeLink = this.links[0];
      this.activeLink.select();
      
    }
    activate(link){
      this.activeLink.deselect();
      this.activeLink = link;
    }

    getTab(dataValue){
      return this.element.querySelector(`.tabs-item[data-tab='${dataValue}']`);
    }
  }
  
  class TabLink {
    constructor(element, parent){
      this.element = element;
      this.tabs = parent;
      this.tabItem = parent.getTab(element.dataset.tab);
      this.tabItem = new TabItem(this.tabItem);

      this.element.addEventListener('click', ()=>{
        this.tabs.activate(this);
        this.select();
        
      });
    }
    select(){
      this.element.classList.add("tabs-link-selected");
      this.tabItem.select();
    }
    deselect(){
      this.element.classList.remove("tabs-link-selected");
      this.tabItem.deselect();
    }
  }
  

  class TabItem{
    constructor(element){
      this.element= element;
    }
    select(){
      this.element.classList.add('tabs-content-selected');
    }
    deselect(){
      this.element.classList.remove('tabs-content-selected');
    }
  }

  let tabs = document.querySelectorAll(".content");
  
  tabs = Array.from(tabs).map(tab => {
    return new Tab(tab)
  });
 