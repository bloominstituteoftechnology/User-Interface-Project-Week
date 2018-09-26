// JS goes here

//Upon click, which the hamburger image to 'close' and change nav display: none => flex;

let hamburger = document.querySelector('.nav-ham');
let nav = document.querySelector('nav');

hamburger.addEventListener('click', fromHam, {once: true});

function fromHam(){
    if(hamburger.src = '/img/nav-hamburger.png'){
        hamburger.src = '/img/nav-hamburger-close.png';
        nav.style.display = 'flex';
        hamburger.addEventListener('click', toHam, {once: true} );
    }
}

function toHam(){
    if(hamburger.src = '/img/nav-hamburger-close.png'){
        hamburger.src = '/img/nav-hamburger.png';
        nav.style.display = 'none';
        hamburger.addEventListener('click', fromHam, {once: true});
    }
}

class Tab {
    constructor(element){

        this.element = element;


        this.element.addEventListener('click', )

    }
}

class TabItem {
    constructor(element){

    }
}


