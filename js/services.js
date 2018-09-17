
let tabLink = document.querySelectorAll(".tabs-link");

class Tablinks {
    constructor(el){
        this.el = el;
        this.tab = this.el.dataset.tab;
        this.tabInfoEl = document.querySelector(`.tabs-item[data-tab="${this.tab}"]`);
        this.tabInfo = new TabInfo(this.tabInfoEl);
        this.el.addEventListener('click', () =>     {this.clickHandler()});
    }
    clickHandler(){
        this.el.classList.toggle("tabsBackgroundColorSelected");
        this.el.classList.toggle("tabsColorSelected");
        this.tabInfo.toggle('tabsBackgroundColorSelected');
        
    }

}

class TabInfo {
    constructor(el){
        this.el = el;
    }


    toggle(){

        for(let i=0; i < this.tabInfo.length; i++){
            this.tabInfo.style.display = "none";
        }

            this.el.classList.toggle("tabs-show")
    }

}

tabLink = Array.from(tabLink).map((tablinks) => {return new Tablinks(tablinks)});

