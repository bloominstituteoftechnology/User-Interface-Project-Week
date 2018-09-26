//Corey Gumbs
//9/26/2018


////Tabs Component


class Tab{
    constructor(tabElement){
        this.tabElement = tabElement;
        this.dataElement = this.tabElement.dataset.tab
        this.dataItem = document.querySelector(`.tabs-content[data-tab="${this.dataElement}"]`);
        

        this.tabElement.addEventListener("click", () =>{
            console.log(this.dataItem);
        });
    }
}


let tabBtns  = document.querySelectorAll(".tabs-btn");

tabBtns = Array.from(tabBtns).map(tab => new Tab(tab));

//console.log(tabBtns);

