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
        headNav.style.opacity = '1';
        /* headNav.style.backgroundColor = 'unset'; */
        hamburger.addEventListener('click', toHam, {once: true} );
    }
}

function toHam(){
    if(hamburger.src = '/img/nav-hamburger-close.png'){
        hamburger.src = '/img/nav-hamburger.png';
        nav.style.display = 'none';
        headNav.style.opacity = '1';
        headNav.style.backgroundColor = '#9FA9B3';
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







/* const imgSwap = (img, src) => {


}
 */






console.log(tabs);

/* console.log(tabContent[0].children[0].innerText);

console.log(tabs[0]); */

//INTRO ANIMATIONS
let intro = document.querySelector('.intro-bg');
let s = document.querySelector('.letter1');
let and = document.querySelector('.letter2');
let j = document.querySelector('.letter3');
let building = document.querySelector('.building');
let designing = document.querySelector('.designing');
let future = document.querySelector('.future');

const endIntro = () => {
    intro.style.display = "none";
}

TweenMax.from(j, 1, {x: 300, opacity: 0, ease: Back.easeInOut.config(1.7), delay: 1.5});
TweenMax.from(s, 1, {x: -300, opacity: 0, ease: Back.easeInOut.config(1.7), delay: 2});
TweenMax.from(and, 1, {scale: .2, opacity: 0, ease: Power0.easeNone, delay: 3});
TweenMax.from(building, 1, {scale: .2, opacity: 0, ease: Power0.easeNone, delay: 3});
TweenMax.from(designing, .8, {x: 800, opacity: 0, ease: Back.easeInOut.config(1.7), delay: 3.2});
TweenMax.from(future, .8, {x: -800, opacity: 0, ease: Back.easeInOut.config(1.7), delay: 3.2});
TweenMax.from(building, .5, {rotation: 720, ease: Power0.easeNone, delay: 4});
TweenMax.to(building, .5, {scale: 50, x: 1000, ease: Power0.easeNone, delay: 4.5, onComplete: endIntro});


