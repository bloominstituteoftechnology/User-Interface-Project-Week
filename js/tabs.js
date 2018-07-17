class Tabs {
    constructor(element) {
        this.element = element;
        this.tabs = this.element.querySelectorAll(".tab");
        this.tabs = Array.from(this.tabs).map(tab => new TabLink(tab, this));
        this.activeTab = this.tabs[0];
        // console.log(this.activeTab);
        this.init();
    }
    init(){
        this.activeTab;
    }
    updateActive(tabElement){
        this.activeTab.deselectTab();
        this.activeTab = tabElement;
    }
    getCard(data){
        return document.querySelector(`.card[data-tab="${data}"]`);
    }       
}

class TabLink {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.card = this.parent.getCard(this.element.dataset.tab);
        this.card = new TabCard(this.card);
        this.element.addEventListener("click", () => this.selectTab());
    }
    selectTab(){
        this.parent.updateActive(this);
        this.element.classList.add("active-tab");
        this.card.selectCard();
    }
    deselectTab(){
        this.element.classList.remove("active-tab");
        this.card.deselectCard();
    }
}

class TabCard {
    constructor(element) {
        this.element = element;
        console.log(this.element);
    }
    selectCard(){
        this.element.style.display = null;
        this.element.classList.add("active");
    }
    deselectCard(){
        this.element.style.display = 'none';
        this.element.classList.remove("active");
    }
}


//tab selector
let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));
