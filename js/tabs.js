class TabLink {
    constructor(element)
    {
        this.element = element;
        let tabId = this.element.dataset.tab;
        this.tabArea = document.querySelectorAll(`.tab-item-container[data-tab='${tabId}']`);
        this.tabArea = Array.from(this.tabArea).map((element) =>{return new TabItem(element)})
        this.element.addEventListener('click',this.selectTab.bind(this));
    }
    selectTab(){
        let tabs = document.querySelectorAll('.tab-container-tab');
        tabs.forEach(element => {element.classList.remove('active-tab')})
        this.element.classList.add('active-tab');

        let allTabAreas = document.querySelectorAll('.tab-item-container');
        allTabAreas.forEach((element)=> {element.classList.add('hidden')});
        this.tabArea.forEach(e=>e.selectTabArea());
    }
}

class TabItem{
    constructor(element){
        this.element = element;
    }
    selectTabArea(){
        this.element.classList.toggle('hidden');
      }    
}

let tabs = document.querySelectorAll('.tab-container-tab');
tabs = Array.from(tabs).map((el => { new TabLink(el)}))

let allTabAreas = document.querySelectorAll('.tab-item-container');
allTabAreas.forEach(e=>{
    e.classList.add('hidden')
})
allTabAreas[0].classList.remove('hidden')

let allTabs = document.querySelectorAll('.tab-container-tab');
allTabs[0].classList.add('active-tab')
