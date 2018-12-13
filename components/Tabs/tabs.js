
class TabTopic {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.contentElement = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.contentElement);
        this.element.addEventListener('click', () => {this.select()})
    }
    select (){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active-tab'));
        this.element.classList.toggle('active-tab');
        this.tabContent.select();
    }
}

class TabContent {
    constructor(element){
        this.element = element;
    }
    select() {
        const content = document.querySelectorAll('.tab-content');
        content.forEach(item => item.classList.remove('tab-selected'));
        this.element.classList.toggle('tab-selected');
    }
}

const tabs = document.querySelectorAll('.tab').forEach( tab => new TabTopic(tab));
