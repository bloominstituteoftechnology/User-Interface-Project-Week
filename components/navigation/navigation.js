class Navigation {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.menu-button');
        this.content = this.element.querySelector('.menu-content');
        this.button.addEventListener('click', (e) => this.toggleContent(e));
    }
    toggleContent(e){
        this.content.classList.toggle('menu-hidden');
        if(e.target.src.includes("close")){
            e.target.src = "img/nav-hamburger.png";
            TweenMax.to(this.content, .5, {width: '0%', height: '0%', right: '28%'});
            console.log(this.content.style.right);
        } else {
            e.target.src = "img/nav-hamburger-close.png"
            TweenMax.to(this.content, .5, {width: '100%', height: '100%', right: '0%'});
            console.log(this.content.style.right);
        }
    }
}

const menus = document.querySelectorAll('.navigation').forEach( menu => new Navigation(menu)); 