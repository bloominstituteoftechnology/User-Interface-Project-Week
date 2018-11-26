class TabLink{
    constructor(e){
        this.e = e
        this.data = this.e.dataset.tab
        console.log(this.data);
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
        console.log(this.itemElement);
        this.tabItem = new TabItem(this.itemElement)
        console.log(this.tabItem);

        this.e.addEventListener('click', () => this.select());
    }
    select(){
        const links = document.querySelectorAll('.tab-link');

        links.forEach(item => {
            item.classList.remove('tab-link-selected');
        })

        this.e.classList.add('tab-link-selected')

        this.tabItem.select();
    }
}

class TabItem{
    constructor(e){
        this.e = e;
    }
    select(){
        const items = document.querySelectorAll('.tabs-item');
        console.log(items)

        items.forEach(item => {
            item.classList.remove('tabs-item-selected')
        });

        this.e.classList.add('tabs-item-selected');
    }
}

let links = document.querySelectorAll('.tab-link').forEach(link => {
    new TabLink(link);
})