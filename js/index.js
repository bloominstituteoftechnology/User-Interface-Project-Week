// JS goes here

//Navigation Dropdown

class Dropdown {
    constructor(element) {
        this.element = element;

        this.button = this.element.querySelector('.Menu-Bars');

        this.close = this.element.querySelector('.close')

        this.content = this.element.querySelector('.menu-background');

        this.hidden = this.element.querySelector('header');

        this.button.addEventListener('click', ()=>{
            this.drop();
        });

        this.close.addEventListener('click', ()=>{
            this.drop();
        })
    }

    drop(){
        this.content.classList.toggle('dropdown-hidden');
        this.hidden.classList.toggle('header-hidden');
    }
}

let dropdown = document.querySelector('body');
dropdown = new Dropdown(dropdown);

//Services Tab Functionality
class TabButton {
    constructor(element){
        this.element = element;
        // console.log(`${this.element}`);

        this.data = this.element.dataset.tab;
        // console.log(`this.data is ${this.data}`);

        this.infoElement = document.querySelector(`.Tab-Info[data-info="${this.data}"]`);
        // console.log(`this.infoElement is ${this.infoElement}`);

        this.tabInfo = new TabInfo(this.infoElement);
        // console.log(`this.tabInfo is ${this.tabInfo}`);

        this.element.addEventListener('click', ()=>{this.select()});
    }

    select() {
        let tabs = document.querySelectorAll('.Tab-Button');

        Array.from(tabs).forEach(function(item){
            item.classList.remove('tab-button-selected');
        });

        this.element.classList.add('tab-button-selected');

        let infos = document.querySelectorAll('.Tab-Info');
        infos.forEach(function(item){
            item.style = 'display: none';
        })

        this.tabInfo.select();

    }
}

class TabInfo {
    constructor(element){
        this.element = element;
    }
    select() {
        let info = document.querySelectorAll('.Tab-Info');
        Array.from(info).forEach(function(item){
            item.style = 'display: none';
        });

        this.element.style = 'display: block';
    }
} 

let tabs = document.querySelectorAll('.Tab-Button');
console.log(`tabs is ${tabs}`);
tabs = Array.from(tabs).map(item => new TabButton(item));

tabs[0].select();