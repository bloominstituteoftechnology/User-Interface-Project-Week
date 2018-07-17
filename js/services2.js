
class Tab {
    constructor(elem){
        this.elem = elem;
        this.btnLinks = document.querySelectorAll('.tab');
        this.btnLinks = Array.from(this.btnLinks).map((btnLink) => {
            console.log(btnLink);
            
            return new TabBtn(btnLink, this);
        });
        this.activeBtn = this.btnLinks[0];
        this.init();
    }

    init(){
        this.activeBtn.select();

class Tabs {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('.tabs-link');
    this.links = Array.from(this.links).map(link => {
      return new TabsLink(link, this);
    });
    this.activeLink = this.links[0];
    this.init();
  }

  init() {
    this.activeLink.select()
  }

  updateActive(newActive) {
    this.activeLink.deselect();
    this.activeLink = newActive;
  }

  getTab(data) {
    return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
  }

}

class TabsLink {
  constructor(link, parent) {
    this.link = link;
    this.tabs = parent;
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select()
    });
  };

  select() {
    this.link.classList.add('tabs-link-selected')
    this.tabsItem.select();
  }

  deselect() {
    this.link.classList.remove('tabs-link-selected');
    this.tabsItem.deselect();
  }
}

class TabsItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.element.classList.remove('tabs-item-selected');
  }
}


let tabs = document.querySelectorAll('.tabs');
tabs = Array.from(tabs).map( tab => new Tabs(tab));
    }

    getContent(data){
        return this.elem.querySelectorAll(`.tab-content[data-content=${data}]`);
    }

    updateActive(nuActive){
        this.activeBtn.deselect();
        this.activeBtn = nuActive;
    }


}

class TabBtn {
    constructor(btn, parent){
        this.btn = btn;
        this.parent = parent;
        // console.log("this btn", this.btn);
        
        this.btnContents = this.parent.getContent(this.btn.dataset.content);
        // console.log("contents from data ", this.btnContents);
        
        this.btnContents = Array.from(this.btnContents).map((btnContent)=>{
            return new BtnContent(btnContent);
        });
        this.btn.addEventListener('click', () => {
            this.select();
            this.parent.updateActive(this);
        });
    }

    select(){
        this.btn.classList.add('active-tab');
        this.btnContents.forEach((content) => {content.selectContent()});
    }

    deselect(){
        this.btn.classList.remove('active-tab');
        this.btnContents.forEach((content)=>{content.deselectContent()});
    }
}

class BtnContent {
    constructor(btn){
        this.btnContent = btn;
        console.log("btn Content ", this.btnContent);
        
    }

    selectContent(){
        this.btnContent.classList.add('selected-content');
    }
    deselectContent(){
        this.btnContent.classList.remove('selected-content');
    }
}

let tab = document.querySelectorAll('.tabs');
tab = Array.from(tab).map((tab) => {
    return new Tab(tab);
});
console.log(tab);

