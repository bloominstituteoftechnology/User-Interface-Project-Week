class Menu {
    constructor(element) {
        this.element = element;
        this.buttonOpen = this.element.querySelector('.menu-button-open');
        this.buttonClose = this.element.querySelector('.menu-button-close');
        console.log(this.buttonClose);
        this.content = this.element.querySelector('.menu-content');
        this.buttonOpen.addEventListener('click', () => { this.toggleOpen() });
        this.buttonClose.addEventListener('click', () => { this.toggleClose() });
    }
    toggleOpen() {
        this.content.classList.toggle('menu-hidden');
        this.buttonOpen.classList.add('menu-button-hidden');
        this.buttonClose.classList.remove('menu-button-hidden');
    }

    toggleClose() {
        this.content.classList.toggle('menu-hidden');
        this.buttonOpen.classList.remove('menu-button-hidden');
        this.buttonClose.classList.add('menu-button-hidden');
    }
}

let menus = document.querySelectorAll('.menu');

menus = Array.from(menus).map( menu => new Menu(menu));



let boxes = document.querySelectorAll('.box');
console.log(boxes)


boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('shake');
    });
});



// class Menu {
//     constructor(element) {
//         this.element = element;
//         this.button = this.element.querySelector('.menu-button');
//         this.content = this.element.querySelector('.menu-content');
//         this.button.addEventListener('click', () => { this.toggleContent() });
//     }
//     toggleContent() {
//         this.content.classList.toggle('menu-hidden');
//     }
// }

// let menus = document.querySelectorAll('.menu');

// menus = Array.from(menus).map( menu => new Menu(menu));



// let tests = document.querySelectorAll('p');
// console.log(tests)
// tests.forEach(function(item) {
//     item.addEventListener("click", function() {
//         item.style.color = 'green'
//     });
// });