// JS goes here

//Upon click, which the hamburger image to 'close' and change nav display: none => flex;

let hamburger = document.querySelector('.nav-ham');
let nav = document.querySelector('nav');
let headNav = document.querySelector('.nav');

hamburger.addEventListener('click', fromHam, {once: true});

function fromHam(){
    if(hamburger.src = '/img/nav-hamburger.png'){
        hamburger.src = '/img/nav-hamburger-close.png';
        nav.style.display = 'flex';
        headNav.style.opacity = '.95';
        hamburger.addEventListener('click', toHam, {once: true} );
    }
}

function toHam(){
    if(hamburger.src = '/img/nav-hamburger-close.png'){
        hamburger.src = '/img/nav-hamburger.png';
        nav.style.display = 'none';
        headNav.style.opacity = '1';
        hamburger.addEventListener('click', fromHam, {once: true});
    }
}
// ----- SERVICE PAGE COMPONENTS ----- \\

//TAB COMPONENT
class Tab {
    constructor(element){

        this.element = element;
        console.log(this.element);
        this.name = element.name;
        console.log(this.name);
        this.data = element.dataset.tab;
        console.log(this.data);
        this.content = document.querySelector(`.content[data-tab="${this.data}"]`);
        this.tabContent = new TabContent(this.content);
        


        this.element.addEventListener('click', () => { this.select()}); 

    }

    select(){
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach( function(item){
            item.classList.remove('tab-selected');
        });
        event.target.classList.add("tab-selected");

        this.tabContent.select();
    }
}

//TAB CONTENT COMPONENT
class TabContent {
    constructor(content){

        this.content = content;
        
        

    }

    select(){
        let allTabContent = document.querySelectorAll(".content");
        
        allTabContent.forEach( item => 
           item.classList.remove('shown'));

        this.content.classList.add('shown');   
    }
}


let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map((item) => new Tab(item));

let tabContent = document.querySelectorAll(".content");





//IMAGE SWAPS 
/* background-image: url("/img/home/home-the-blocks-img.png");
            background-image: url("/img/home/home-mobile-villas-img.png");
            background-image: url("/img/home/home-mobile-outskirts-img.png"); */

let outskirts = document.querySelector('.outskirts');
let outskirtsSrc = '/img/home/home-mobile-outskirts-img.png';
let villasSrc = '/img/home/home-mobile-villas-img.png';
let blocksSrc = '/img/home/home-the-blocks-img.png';

outskirts.addEventListener();

/* const imgSwap = (img, src) => {


}
 */






console.log(tabs);

/* console.log(tabContent[0].children[0].innerText);

console.log(tabs[0]); */


