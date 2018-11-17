// JS goes here
class ButtonLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        console.log(`this.data is ${this.data}`);

        this.itemElement = document.querySelector(`.button-item[data-tab = "${this.data}"]`);

        this.buttonItem = new ButtonItem(this.itemElement);
        console.log(`this.buttonItem is ${this.buttonItem}`);

        this.element.addEventListener('click', () => { this.select() });
    };
    select(){
        const links = document.querySelectorAll('.button-link');
        Array.from(links).forEach(link => link.classList.remove('button-link-selected'));
        this.element.classList.add('button-link-selected');
        this.buttonItem.select();
    }
}

class ButtonItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        let items = document.querySelectorAll('.button-item');
        Array.from(items).forEach(item => item.classList.remove('button-item-selected'));
        this.element.classList.add('button-item-selected');
    }
}

let links = document.querySelectorAll('.button-link');
links = Array.from(links).map(link => new ButtonLink(link));
links[0].select();