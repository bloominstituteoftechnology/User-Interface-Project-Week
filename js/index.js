class Tabs {
    constructor (element) {
        this.element=element;
        this.links=document.querySelectorAll('.tab-link');
        this.links=Array.from(this.links).map(link=>{return new TabLink(link,this);});
        this.activeLink=this.links[0];
        this.init();
    }
    init() {
        this.activeLink.select();
    }
    updateActive(newActiveLink) {
        this.activeLink.deselect();
        this.activeLink=newActiveLink;
    }
    getTab(data) {
        return this.element.querySelector(`.tab-item[data-tab="${data}"]`);
    }
}
class TabLink{
    constructor(link,parent) {
        this.link=link;
        this.tab=parent;
        this.tabItem=parent.getTab(this.link.dataset.tab);
        this.tabItem=new TabItem(this.tabItem);
        this.link.addEventListener('click',()=>{this.tab.updateActive(this);this.select(this)});
    }
    select(){
        this.link.classList.add('selected');
        this.tabItem.select();
    }
    deselect(){
        this.link.classList.remove('selected');
        this.tabItem.deselect();
    }
}
class TabItem{
    constructor(element){
        this.element=element;
    }
    select(){
        TweenLite.to(this.element, .3, {css:{className:'+=selected'}});
    }
    deselect(){
        TweenLite.to(this.element, .3, {css:{className:'-=selected'}})
    }
}
let tabs=document.querySelectorAll('.tabs');
tabs=Array.from(tabs).map((tab)=>new Tabs(tab));

