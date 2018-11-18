class Button {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;
        this.data = this.buttonElement.dataset.tab;
        this.tab = document.querySelector(`.services-tab-components[data-tab ='${this.data}']`);
        this.tab = new Tab(this.tab);
        this.buttonElement.addEventListener('click', this.buttonSelect.bind(this))
    }

    buttonSelect() {
        const buttons = document.querySelectorAll('.services-btn');
        buttons.forEach(button => {
            button.classList.remove('btn-selected');
        });
        this.buttonElement.classList.add('btn-selected');
        console.log(this.buttonElement);
        this.tab.tabSelect()

    }
}


class Tab {
    constructor(tabElement) {
        this.tabElement = tabElement;

    }

    tabSelect() {
        const tabs = document.querySelectorAll('.services-tab-components');
        tabs.forEach(tab => {
            tab.classList.remove('show-tab');
        });
        this.tabElement.classList.add('show-tab');
        console.log(this.tabElement);
    }
}


let buttons = document.querySelectorAll('.services-btn');
buttons.forEach(button => new Button(button));

