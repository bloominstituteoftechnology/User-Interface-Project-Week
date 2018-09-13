class TabLink {

 constructor(link){
     this.link = link;
   
     this.data = this.link.dataset.tab;
    
     this.itemContent = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

     this.tabItem = new TabItem(this.itemContent);
     this.link.addEventListener ('click', () => {
         this.active()
       
     });
    
 }
active(){
    const links = document.querySelectorAll('.tab-link');
    Array.from(links).map(link => link.classList.remove('tab-link-selected'));

    this.link.classList.toggle('tab-link-selected');

    this.tabItem.active();
}

}

class TabItem {
    constructor(item){

        this.item = item;
    }

    active () {

        let item = document.querySelectorAll('.tabs-item');
    
        Array.from(item).map(items => items.classList.remove('tabs-item-selected'));

        this.item.classList.toggle('tabs-item-selected');
    
    }
}


//Get all the tab links
let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map((link) => new TabLink(link));
links[0].active();

