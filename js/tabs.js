//Corey Gumbs
//9/26/2018


////Tabs Component


class Tab{
    constructor(tabElement){
        this.tabElement = tabElement;
        
        this.dataElement = this.tabElement.dataset.tab
        
        this.dataItem = document.querySelector(`.tabs-content[data-tab="${this.dataElement}"]`);
       
        this.tabItem = new TabContent(this.dataItem);

        this.tabElement.addEventListener("click", () =>{
            this.selectTab();
        });
    }

    selectTab(){
        const tabBtns = document.querySelectorAll(".tabs-btn");
        
        tabBtns.forEach(link => {
          link.classList.remove("tabs-btn-selected");
        })

        this.tabElement.classList.add("tabs-btn-selected");
        this.tabItem.selectTabItem();
    }
}


class TabContent{
    constructor(element){
        this.element = element;
    }

    selectTabItem(){
        const tabItems = document.querySelectorAll(".tabs-content");

        tabItems.forEach(item => {
            item.classList.remove("tabs-item-selected");
        })

        this.element.classList.add("tabs-item-selected");
        console.log(this.element);
    }
}


let tabBtns  = document.querySelectorAll(".tabs-btn");

tabBtns = Array.from(tabBtns).map(tab => new Tab(tab));

//console.log(tabBtns);

