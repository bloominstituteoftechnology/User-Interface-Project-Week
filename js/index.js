class TopMenu {
    constructor(element) {
        this.element = element;
        this.topMenu = this.element.querySelector('.tm-item');
        this.btnopen = this.element.querySelector('.menu-btn-open');
        this.btnclose = this.element.querySelector('.menu-btn-close');
        this.btnopen.addEventListener('click', (event) => { this.topMenuShow(event) });
        this.btnclose.addEventListener('click', (event) => { this.topMenuHide(event) });
    }

    topMenuShow(event) {
        this.topMenu.classList.remove('tm-hidden');
    }

    topMenuHide(event) {
        this.topMenu.classList.add('tm-hidden');
    }
}

let topMenuItem = document.querySelectorAll('.container');
topMenuItem = Array.from(topMenuItem).map(item => new TopMenu(item));

class ButtonServices {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.buttonitem;
        this.item = document.querySelector(`.bottom-services-content[data-buttonitem="${this.data}"]`);
        this.buttonServicesItem = new ButtonServicesItem(this.item);
        this.element.addEventListener('click', () => {
            this.select();
        });
    };
    select() {
        const buttons = document.querySelectorAll('.msbtn-item');
        buttons.forEach(button => {
            button.classList.remove('button-selected');
        });
        this.element.classList.add('button-selected');
        this.buttonServicesItem.select();
    }
}

class ButtonServicesItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        const buttons = document.querySelectorAll('.bottom-services-content');
        buttons.forEach(button => {
            button.classList.add('hidden');
        })
        this.element.classList.remove('hidden');
    }
}

let buttons = document.querySelectorAll('.msbtn-item');
buttons = Array.from(buttons).map(button => new ButtonServices(button));
buttons[0].select();