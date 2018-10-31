// JS goes here

//Navigation Button
const navButton = document.querySelector('.burger-button');
const menu = document.querySelector('.expanding-menu');
let buttonImgs = navButton.querySelectorAll('img');
const aTags = Array.from(menu.querySelectorAll('a'));

navButton.addEventListener('click',()=>{
    // menu.classList.toggle('hidden');
    buttonImgs[0].classList.toggle('current-btn');
    buttonImgs[1].classList.toggle('current-btn');

    if(!menu.classList.contains('hidden')){
        setTimeout(()=>aTags.forEach(tag => tag.style.display = 'none'),300);

        TweenMax.to(menu,0.6,{height: 0, onComplete: ()=> {
            menu.removeAttribute('style');
            menu.classList.toggle('hidden');
            buttonImgs[1].classList.remove('current-btn');
            buttonImgs[0].classList.add('current-btn');
            aTags.forEach(tag => tag.removeAttribute('style'));
        }});
    }

    else{
        menu.classList.toggle('hidden');
        TweenMax.from(menu,0.6,{height: 0, ease: Bounce.easeOut, onComplete: () => {
            menu.removeAttribute('style');
            buttonImgs[0].classList.remove('current-btn');
            buttonImgs[1].classList.add('current-btn');           
        }});
    }
});

//End of Nav Button
class Tab {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        this.content = document.querySelector(`.tab-content[data-tab='${this.data}']`);
        this.tabContent = new TabContent (this.content);

        this.element.addEventListener('click',()=>this.select());
    };
    select() {
        // remove tab-selected class from all tabs
        let tabs = document.querySelectorAll('.tab');
        Array.from(tabs).forEach(tab => tab.classList.remove('selected-tab'));
        this.element.classList.add('selected-tab');
        this.tabContent.select();
    }
}
class TabContent {
    constructor(banana){
        this.element = banana;
    }
    select () {
        let contentList = document.querySelectorAll('.tab-content');
        Array.from(contentList).forEach(content=>content.classList.remove('selected-content'));
        this.element.classList.add('selected-content');
    }
}

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new Tab(tab));
