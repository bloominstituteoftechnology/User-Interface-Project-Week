// JS goes here
// document.querySelectorAll(".cta-service .btn")
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu')

var a = 3; 
console.log(document.querySelectorAll(".services .btn"));

class TabCompotent {
    constructor(element) {
        this.element = element;
        this.data = element.dataset.tab;
        this.linkedTitle = document.querySelector(`.service-title[data-tab='${this.data}']`)
        this.titleItem = new TitleItems(this.linkedTitle)
        this.element.addEventListener('click', () => this.select())
    }
    select() {
        console.log('hi');
        let buttons = document.querySelectorAll('.services .btn');
        buttons.forEach(element => {element.classList.remove('btn-active')});
        this.element.classList.toggle('btn-active')
        this.titleItem.select();        
    }
}

class TitleItems{
    constructor(element) {
        this.element = element;        
    }
    select() {
        let titleItems = document.querySelectorAll('.service-title')
        titleItems.forEach(element => element.style.display = "none")
        this.element.style.display = 'block';
    }
}

let buttons = Array.from(document.querySelectorAll(".services .btn")).map(element => new TabCompotent(element));
(document.querySelector('.service-title').style.display = 'block');
(document.querySelector(".services .btn").classList.add('btn-active'));

// document.querySelectorAll(".services .btn").forEach((element , i , arr) => element.addEventListener('click', () => {
//     arr.forEach(element => element.classList.remove('btn-active'))
//     element.classList.toggle("btn-active")})) 




console.log(document.querySelectorAll('.hamburger'));    

hamburger.addEventListener('click', (event) => {
    
    menu.classList.toggle('menu-open');
    if(menu.classList.contains('menu-open')){
        menu.style.display = 'block';
        hamburger.src = "img/nav-hamburger-close.png";
    }else{
        hamburger.src = "img/nav-hamburger.png"
        menu.style.display = 'none';
    };
} )

