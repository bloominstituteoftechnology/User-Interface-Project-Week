// JS goes here




const full = document.querySelector('.fullmenu')
const menubutton = document.querySelector('.menubtn');
const menuclose =  document.querySelector('.menucontent');
const menuclosebtn = document.querySelector('.menu-close');


full.addEventListener('click', function(){
    menubutton.classList.toggle('menu-toggle');
    menuclose.classList.toggle('menu-toggle');
 
});

menuclosebtn.addEventListener('click', function() {
    display = none;
});


// Tabs 



class TabLink {
    constructor(tabElement) {
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;
        this.item = document.querySelectorAll(`.tab-item[data-tab='${this.tabData}']`);
        this.item = Array.from(this.item).map(items => new TabItem(items))
        this.tabElement.addEventListener('click', () => {this.selectTab()});
    };

    selectTab() {
        const items = document.querySelectorAll('.tab-item');
        items.forEach(item => {
            item.style.display = 'none';
        });
        this.item.forEach(element => element.selectItem());
    
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    selectItem() {
       this.element.style.display = 'flex';
    }

}

let tabs = document.querySelectorAll('.tab');

tabs= Array.from(tabs).map(element => new TabLink(element));




