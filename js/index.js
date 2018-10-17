// JS goes here

// Services Buttons
class ButtonServices {
    constructor(element) {
        // 4 - assign the new element that's coming in to the local element.
        this.element = element;

        // 5 - get the data from the button item on the item passed in.
        this.data = this.element.dataset.buttonitem;

        // sample logging
        console.log(this.data);

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
            button.classList.remove('select-services');
        })
        this.element.classList.add('select-services');
    }
}

// 1 - get the list of buttons 
let buttons = document.querySelectorAll('.msbtn-item');

// 2 - Iterate over all the buttons and create a new button services item
buttons = Array.from(buttons).map(button => new ButtonServices(button));

buttons[0].select();