// JS goes here

const menuO = document.querySelector('.open');
const menuC = document.querySelector('.close');
const bottom = document.querySelector('.bottom');
let menuI = document.querySelectorAll('.bottom a')


class ItemLink {
    constructor(element){
        this.element = element;

        this.element.addEventListener('mouseover', () => {this.element.style.color = 'black';});
        this.element.addEventListener('mouseout', () => {this.element.style.color = 'white';});

      }
}

menuI = Array.from(menuI).map((item) => {return new ItemLink(item)});


function MenuO () {
        menuO.style.display = 'none';
        menuC.style.display = 'block';
        bottom.style.display = 'flex';
 
}

function MenuC () {
    menuC.style.display = 'none';
    menuO.style.display = 'block';
    bottom.style.display = 'none';

}


menuO.addEventListener('click',function() {MenuO()})

menuC.addEventListener('click',function() {MenuC()})

bottom.addEventListener('mouseleave',function() {MenuC()})