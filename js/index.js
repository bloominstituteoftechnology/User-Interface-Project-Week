// Services Buttons
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