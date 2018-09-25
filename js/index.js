// JS goes here
let menuButton = document.querySelector('.nav-bar img');
menuButton.addEventListener('click', () => {
   menu.classList.toggle('nav-bar-active');
   menuButton.src.includes('img/nav-hamburger.png') ? menuButton.src = 'img/nav-hamburger-close.png' : menuButton.src = 'img/nav-hamburger.png';
})
let menu = document.querySelector('.nav-bar');
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
}

class TabLink {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.services-content[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => {
            this.select();
        });
    }
    select() {
        let links = document.querySelectorAll('.button');
        links.forEach(link => link.classList.remove('tabs-link-selected'));
        this.element.classList.add('tabs-link-selected');
        this.tabItem.select();
    }
}
class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        let items = document.querySelectorAll('.services-content');
        items.forEach(item => item.classList.remove('tabs-item-selected'));
        console.log('before',this.element.classList);
        this.element.classList.add('tabs-item-selected');
        console.log('after',this.element.classList);
        
    }
}





let links = document.querySelectorAll('.button');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();