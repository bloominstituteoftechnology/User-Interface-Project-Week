class Button {
    constructor(element) {
        this.element = element;
        this.number = this.element.dataset.button;
        this.imageElement = document.querySelector(
            `.image[data-button = "${this.number}"]`
        );
        this.imageClass = new Image(this.imageElement);
        this.element.addEventListener('click', () => {
            this.clickHandler();
        });
    }

    clickHandler() {
        let buttons = document.querySelectorAll('.servicebutton');
        buttons = Array.from(buttons);
        buttons.forEach(function (item) {
            item.classList.remove('currentbutton');
        });

        this.element.classList.add('currentbutton')
        this.imageClass.imageToggle();
    }
}

class Image {
    constructor(element) {
        this.element = element;
    }

    imageToggle() {
        let images = document.querySelectorAll('.image');
        images.forEach(function (image) {
            image.classList.remove('image-selected');
        });
        this.element.classList.toggle('image-selected');
    }
}

let buttons = document.querySelectorAll('.servicebutton');
let buttonsArray = Array.from(buttons).map(button => {
    return new Button(button);
});
let images = document.querySelectorAll('.image');
images = Array.from(images);

buttonsArray[0].clickHandler();