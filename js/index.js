class Navbar {
    constructor(element, locY, delay) {

        this.element = element;
        this.locY = locY;
        this.delay = delay;
        this.timer;


        this.timer = window.setTimeout(function () {
            window.onscroll = () => {
               
                if (window.scrollY <= this.locY) {
                    this.element.classList.remove('change-navbar');
                }
                else {
                    this.element.classList.add('change-navbar');
                }
            }
        }.bind(this), this.delay);
    }
}
class Hamburger {
    constructor(element) {
        this.element = element;

        this.navbar = document.querySelector('.navbar-container');
        this.navbar = new Navbar(this.navbar, 25, 1000);

        this.menuList = document.querySelector('.nav-menu');
        this.menuList = new MenuList(this.menuList);

        this.btnState = {
            hamburger: 'img/nav-hamburger.png',
            closeX: 'img/nav-hamburger-close.png'
        };
        this.body = document.querySelector('body');

        this.element.addEventListener('click', function () {
            if (this.element.getAttribute('src') === this.btnState.hamburger) {
                this.element.src = this.btnState.closeX;
                this.menuList.show();
                
                this.body.style.overflowY = 'hidden';

            }
            else {
                this.element.src = this.btnState.hamburger;
                this.menuList.hide();
                this.body.style.overflowY = 'auto';
                          
            }
        }.bind(this));
    }
}

class MenuList {
    constructor(element) {
        this.element = element;
    }
    show() {
        this.element.style.display = 'flex';
    }
    hide() {
        this.element.style.display = 'none';
    }
}

let hamburgerBtn = document.querySelector('.btn-hamburger');
hamburgerBtn = new Hamburger(hamburgerBtn);




class TabNavigator {
    constructor(element) {
        this.element = element;
        this.tabLinks = this.element.querySelectorAll('.tab-link');
        this.tabLinks = Array.from(this.tabLinks).map(tabLink => new TabLink(tabLink, this));
        this.activeTab = this.tabLinks[0];
        this.init();
    }

    init() {
        this.activeTab.select();
    }
    updateActive(newActive) {
        this.activeTab.deselect();
        this.activeTab = newActive;
    }
    getSlide(data) {
        return document.querySelectorAll(`.slide[data-topic=${data}]`);
    }
}

class TabLink {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;

        this.slides = this.parent.getSlide(this.element.dataset.topic);
        this.slides = Array.from(this.slides).map(slide => new Slide(slide));
        this.element.addEventListener('click', function () {
            this.select();
        }.bind(this));

    }

    select() {
        this.parent.updateActive(this);
        this.element.classList.add('tab-active');
        this.slides.forEach(slide => slide.show());
    }
    deselect() {
        this.element.classList.remove('tab-active');
        this.slides.forEach(slide => slide.hide());
    }
}

class Slide {
    constructor(element) {
        this.element = element;
    }
    show() {
        this.element.style.display = 'block';
    }
    hide() {
        this.element.style.display = 'none';
    }
}
let tabNavs = document.querySelectorAll('.tab-navigator');
console.log(tabNavs);
tabNavs = Array.from(tabNavs).map(tabNav => new TabNavigator(tabNav));

