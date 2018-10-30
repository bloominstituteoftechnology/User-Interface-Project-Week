//nav
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navImg = document.querySelector('.nav-btn');

navImg.addEventListener('click',() => {
    navMenu.classList.toggle('hide')
    nav.classList.toggle('nav-expand')
    if(navImg.src === 'file:///C:/Users/Brandon/School/User-Interface-Project-Week/img/nav-hamburger-close.png'){
    navImg.src = 'img/nav-hamburger.png';
}
else{
    navImg.src = 'img/nav-hamburger-close.png'
}  
})


//services tabs
class Tabs {
    constructor(tab){
        this.tab = tab;
        this.data = this.tab.dataset.tab;
        this.item = document.querySelector(`.tab-content[data-tab=${this.data}]`);
        this.tabContent = new TabContent(this.item);
        this.tab.addEventListener('click',() => this.select());
console.log(this.item)
    };
    select(){
        const tabs = document.querySelectorAll('.tab');
        
        tabs.forEach(tab =>{
            if(tab.dataset.tab !== this.data){
                tab.classList.remove('selected-tab');
            }
        });
        this.tab.classList.add('selected-tab');
        this.tabContent.select();
    }
}

class TabContent{
    constructor(tabContent){
        this.tabContent = tabContent
    }
    select(){
        const contents = document.querySelectorAll('.tab-content');
        console.log(this.tabContent.classList);
        contents.forEach(content =>{
            if(content.dataset.tab !== this.data){
                content.classList.add("hide");
                content.classList.remove('tab-content');
            }
            this.tabContent.classList.remove('hide');
            this.tabContent.classList.add('tab-content');
        })
    }
}

let tabs = document.querySelectorAll('.tab');
tabs= Array.from(tabs).map(tab=>new Tabs(tab));