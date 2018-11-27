class TabPanel{
    constructor(element){
        this.element = element;
        console.log(element);

        //data set named tab from the tab element
        this.data = this.element.dataset.tab;

        //corresponding panels with the tabs
        this.panel = document.querySelector(`.tab-panel-container .panel[data-tab='${this.data}']`)
    

        this.element.addEventListener('click',e=>{
            this.select();
        })
    }
    select(){
        
        //get all tabs
        const tabs = document.querySelectorAll('.tabs .tab');
        //remove class
        Array.from(tabs).forEach(tab=>{
            tab.classList.remove('tab-selected');
        })
        //add selected class
        this.element.classList.add('tab-selected');

        //get all panels
        const panels = document.querySelectorAll('.panels .panel');
        //remove calss from all panels
        Array.from(panels).forEach(panel=>{
            panel.classList.remove('display');
        })
        //add display class to panel
        this.panel.classList.add('display')
    }

    
}

let links = document.querySelectorAll('.tabs .tab').forEach(tab=>{
    new TabPanel(tab);
})