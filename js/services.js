//services.js
class TabLink {
    constructor(element) {
        this.element = element;
        this.tab = this.element.dataset.tab;
        this.tabsItem = document.querySelector(`.tabs-item[data-tab="${this.tab}"]`);
        this.tabsItemClass = new TabItem(this.tabsItem);
        this.element.addEventListener('click', () => {this.select()});
    }

    select(){
        this.tabsItemClass.selectToggle();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    selectToggle() {
        let links = document.querySelectorAll('.tabs-item');
        console.log(links)
        Array.from(links).map((element) => element.classList.remove('tabs-item-selected'));
        this.element.classList.toggle('tabs-item-selected');
    }
}

//step 1 grab all .tabs-link classes, convert nodeList to array, 
//map over elements to create new instance of TabsLinks

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map((element)=> {return new TabLink(element)});

links[1].select();