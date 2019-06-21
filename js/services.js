class TopicTab{
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.item = document.querySelector(`.topic-item[data-tab="${this.data}"]`);
        this.topicItem = new TopicItem(this.item);
        this.element.addEventListener('click', () => {this.activeTab()});
    }
    activeTab(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });

        this.element.classList.add('active-tab');
        this.topicItem.activeItem();
        
    }
}//TopicTab Class

class TopicItem{
    constructor(element){
        this.element = element;
    }
    activeItem(){
        const items = document.querySelectorAll('.topic-item');
        items.forEach(item =>{
            item.classList.remove('active-item');
        });
        this.element.classList.add('active-item');
    }
}





let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new TopicTab(tab));

tabs[0].activeTab();