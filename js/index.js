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
        TweenLite.to(this.element, 0.1, {css:{className:'+=selected'}});
    }
    deselect(){
        TweenLite.to(this.element, 0.1, {css:{className:'-=selected'}})
    }
}
let tabs=document.querySelectorAll('.tabs');
tabs=Array.from(tabs).map(tab=>new Tabs(tab));
class DropDown {
    constructor(element) {
        this.element=element;
        this.closedButton=this.element.querySelector('.dropdown-button-closed');
        this.openButton=this.element.querySelector('.dropdown-button-open');
        this.content=document.querySelector('.dropdown-content');
        this.closedButton.addEventListener('click',()=>this.toggleDropDownMenu())
        this.openButton.addEventListener('click',()=>this.toggleDropDownMenu());
    }
    toggleDropDownMenu() {
        if (this.content.classList.contains('dropdown-hidden')) {
            TweenLite.to(this.content, 0.3, {css:{className:'-=dropdown-hidden'}, ease: Elastic.easeOut} );
            this.closedButton.style.display='none';
            this.openButton.style.display='block';
          } else {
            TweenLite.to(this.content, 0.3, {css:{className:'+=dropdown-hidden'}, ease: Elastic.easeIn} );
            this.openButton.style.display='none';
            this.closedButton.style.display='block';
          }
    }
}
let dropdowns=document.querySelectorAll('.dropdown');
dropdowns=Array.from(dropdowns).map(dropdown=>new DropDown(dropdown));

