const hamburgerIMG = document.querySelector('.hamburgerIMG');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

hamburgerIMG.addEventListener('click', ()=>{
    menu.classList.toggle('menu-hidden');
    hamburgerIMG.classList.toggle('display-none');
    close.classList.toggle('display-none');
});

close.addEventListener('click', ()=>{
    menu.classList.toggle('menu-hidden');
    hamburgerIMG.classList.toggle('display-none');
    close.classList.toggle('display-none');
});

class Button{
    constructor(button){
        this.button = button;
        this.button.addEventListener('click', ()=>{
            this.toggleContent();
        })
    }
    toggleContent(){
        this.classList.toggle('.button-clicked');
        console.log('hi');
    }
}

let buttons = document.querySelectorAll('.button');
buttons = Array.from(buttons).map(button => new Button(button));


