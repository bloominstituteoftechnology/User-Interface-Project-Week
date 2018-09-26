// JS goes here
class TabLink{
    constructor(element){
        this.element = element;
        console.log(this.element);

        this.data =this.element.dataset.tab;
        console.log(this.data);
        this.serviceElement = document.querySelector(`.tab-services[data-tab='${this.data}']`);
        

        this.tabItem= new TabItem(this.serviceElement);
        console.log(this.tabItem);

        this.element.addEventListener('click', (event)=>{ 
            this.select(event)}
        );
    }


    select(event){
        const links = document.querySelectorAll('.service-tab');

        Array.from(links).forEach(link => link.classList.remove('service-tab-selected'));
        
        this.element.classList.add('service-tab-selected');

        this.tabItem.select('tab-services-selected');

    }
}

class TabItem{
    constructor(element){
        this.element = element;
    }

    select(){
        let items = document.querySelectorAll('.tab-services');

        Array.from(items).forEach(item => item.classList.remove('tab-services-selected'));
        this.element.classList.add('tab-services-selected');
    }
}








let tabs = document.querySelectorAll('.service-tab');

tabs = Array.from(tabs).map(tab => new TabLink(tab));
tabs[0].select();