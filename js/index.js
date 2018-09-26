// JS goes here
let btn = document.querySelector('.nav-button');
let navItems = document.querySelector('.nav-items');

btn.addEventListener('click', () => navToggle());

const navToggle =() =>{
    navItems.classList.toggle('active');
    if (navItems.classList.contains('active')){
    btn.src = 'img/nav-hamburger-close.png';
    }
    else {
        btn.src = 'img/nav-hamburger.png';
    }
}

class Content{
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
    }
}



let contents = document.querySelectorAll('.tabbed-content');

contents = Array.from(contents).map(x => new Content(x))



class Tab{
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.tab;
        contents.forEach(x => {
            if (x.data == this.data){
                this.content = x.element;
                return;
            }
        })
        this.element.addEventListener('click', () => this.selector())
    }
    selector(){

        tabs.forEach(x => {
            x.element.classList.remove('active-tab');
            x.content.classList.remove('active-content');
        })
        this.element.classList.toggle('active-tab');
        this.content.classList.toggle('active-content');
    }
}





let tabs = document.querySelectorAll('.tab');

tabs = Array.from(tabs).map(x => new Tab(x));

