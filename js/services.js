class BtnLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.button;
        this.btnItems = document.querySelector(`.button-item[data-button="${this.data}"]`);
        this.buttonItem = new ButtonLinks(this.btnItems);
        this.element.addEventListener('click', () => {
            this.selectBtn();
        })

    }

    selectBtn() {
        const links = document.querySelectorAll('.button-link');

        links.forEach(link => {
            link.classList.remove('active')
        });

        this.element.classList.add('active');

        this.buttonItem.selectBtn();
    }
}

class ButtonLinks {
    constructor(element) {
        this.element = element;
    }

    selectBtn() {
        let items = document.querySelectorAll('.button-item');
        Array.from(items).forEach(items => {
            items.classList.remove("button-item-selected");
        })

        this.element.classList.add("button-item-selected");
        console.log(this.element);
    }
}

let btnLinks = document.querySelectorAll('.button-link');

btnLinks = Array.from(btnLinks).map(btnLinks => new BtnLink(btnLinks));
