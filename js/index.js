// JS goes here

// Navigation button handler
const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav-button');
const navLinks = document.querySelector('.nav-links');

let fullMenu = false;

navButton.addEventListener('click', () =>{
    nav.classList.toggle('full-nav-bar');

    if(fullMenu){
        navButton.src = "img/nav-hamburger.png";
        fullMenu = !fullMenu;
    }

    else{
        navButton.src = "img/nav-hamburger-close.png";
        fullMenu = !fullMenu;
    }

    let navLinksHeight = ((window.innerHeight - 55 * 2) / window.innerHeight) * 100;
    navLinks.style.height = `${navLinksHeight}vh`;
});


// Tab buttons
class Tab{
    constructor(element){
        this.element = element;
        this.data = element.dataset.tab;
        this.tabContent = new Content(document.querySelector(`.content[data-tab="${this.data}"]`));
        this.element.addEventListener('click', () =>{
            this.clicked();
        });
    }

    clicked(){
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(function(element){
            element.classList.remove('selected');
        });

        this.element.classList.add('selected');

        this.tabContent.clicked();
    }
}

class Content{
    constructor(element){
        this.element = element;
    }

    clicked(){
        const content = document.querySelectorAll('.content');

        content.forEach(function(element){
            element.classList.remove('display-content');
        });

        this.element.classList.add('display-content');
    }
}

const tabs = Array.from(document.querySelectorAll('.tab')).map(function(element){
    return new Tab(element);
});

tabs[0].clicked();