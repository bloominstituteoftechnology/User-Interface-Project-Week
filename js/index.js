// JS goes here

class TabButton {
    constructor(element){
        this.element = element;
        console.log(`${this.element}`);

        this.data = this.element.dataset.tab;
        console.log(`this.data is ${this.data}`);

        // this.infoElement = document.querySelectorAll(`.Tab-Info[data-info="1"]`);
        this.infoElement = document.querySelectorAll(`.Tab-Info[data-info="${this.data}"]`);
        console.log(`this.infoElement is ${this.infoElement}`);

        this.tabInfo = new TabInfo(this.infoElement);
        console.log(`this.tabInfo is ${this.tabInfo}`);

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

        this.tabInfo.select();

        })
    }
}

class TabInfo {
    constructor(element){
        this.element = element;
    }
    select() {
        let info = document.querySelectorAll('.Tab-Info');
        Array.from(info).forEach(function(item){
            item.classList.remove('')
        });
        this.element.classList.add('tab-info-selected');
    }
}

let tabs = document.querySelectorAll('.Tab-Button');
console.log(`tabs is ${tabs}`);
tabs = Array.from(tabs).map(item => new TabButton(item));

tabs[0].select();