//menu elements

//toggles the menu-open and sets the old nav opacity to zero
const toggleMenuOn = element => {
    newMenu.classList.toggle('menu-open');
    oldMenu.style.opacity = '0';
};

//toggles menu-open and sets the old menu opacity back to 1
const toggleMenuOff = element => {
    oldMenu.style.opacity = '1';
    newMenu.classList.toggle('menu-open');
};

// create reference to the new menu and the old menu classes
const newMenu = document.querySelector('.new-menu');
const oldMenu = document.querySelector('.oldmenu');

// create a reference to the .hamburger class
const hamburger = document.querySelector('.hamburger');

//adds event listener to the hamburger picture
hamburger.addEventListener('click', toggleMenuOn);

//toggles close the toggle Menu Class with the "X"
const menuClose = document.querySelector('.menuclose');
menuClose.addEventListener('click', toggleMenuOff);

//for buttons and pictures

class Button {
    constructor(element) {
        this.element = element;
        this.number = this.element.dataset.button;
        this.imageElement = document.querySelector(`.image[data-button = "${this.number}"]`);
        this.imageClass = new Image(this.imageElement);
        this.element.addEventListener('click', () => {
            this.clickHandler()
        })
    }

    clickHandler() {
        this.imageClass.imageToggle();
    }
}


class Image {
    constructor(element) {
        this.element = element;
    }

    imageToggle() {
        let images = document.querySelectorAll('.image')
        images.forEach(function (image) {
            image.classList.remove('image-selected')
        })
        this.element.classList.toggle('image-selected')
    }

}

let buttons = document.querySelectorAll('.servicebutton');
let buttonsArray = Array.from(buttons).map((button) => {
    return new Button(button)
});
let images = document.querySelectorAll('.image')
images = Array.from(images);
buttonsArray[0].clickHandler();
