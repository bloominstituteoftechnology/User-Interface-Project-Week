
class TabLink{
    constructor(element){
        this.element = element;

        this.data = this.element.dataset.tab;

        this.itemElement = document.querySelector(`.tab-item[data-tab='${this.data}']`);
        console.log(this.itemElement)

        this.tabItem = new TabItem(this.itemElement);
        console.log(this.tabItem);

        this.element.addEventListener('click', () => {
            this.select()
        });
    }

    select (){
    const links = document.querySelectorAll('.tabs-link');
    console.log(links)

    Array.from(links).forEach( link => link.classList.remove('tabs-link-selected'));
    
    this.element.classList.add('tabs-link-selected');

    this.tabItem.select();
    }
}

class TabItem {
    constructor (element) {
        this.element = element;
    }

    select (){
    const items = document.querySelectorAll('.tab-item');

    Array.from(items).forEach( item => item.classList.remove('tab-item-selected'));
    console.log(items);

    this.element.classList.add('tab-item-selected')
    }
}

let links = document.querySelectorAll('.tabs-link').forEach(tabLink => new TabLink(tabLink));