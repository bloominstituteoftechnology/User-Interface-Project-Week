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













console.log(tabs);

/* console.log(tabContent[0].children[0].innerText);

console.log(tabs[0]); */


