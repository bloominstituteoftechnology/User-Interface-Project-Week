class ButtonLinks {
    constructor(el) {
        this.el = el;
        this.data = this.el.dataset.button;
        this.itemElement = document.querySelectorAll(`.button-item[data-button="${this.data}"]`);
        this.buttonItem = new ButtonItem(this.itemElement)
        this.el.addEventListener('click', () => {
            this.select();
        })
    };

    select() {
        const link = document.querySelectorAll('.button-link');
        Array.from(link).forEach(link => {
            link.classList.remove("button-link-selected");
        })
        this.el.classList.add("button-link-selected");
        this.buttonItem.select();
    }
} // End ButtonLinks


class ButtonItem {
    constructor(el) {
        this.el = el;
    };

    select() {

        let btnItems = document.querySelectorAll('.button-item');

        Array.from(btnItems).forEach(btnItem => {

            btnItem.classList.remove("button-item-selected");
        })
        console.log(this.el); 
    }
    
}

let buttonLinks = document.querySelectorAll('.button-link');

buttonLinks = Array.from(buttonLinks).map(buttonLinks => new ButtonLinks(buttonLinks));