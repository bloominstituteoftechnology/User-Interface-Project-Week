class Hamburger {
    constructor(element) {
        this.element = element;
        this.menuList = document.querySelector('.nav-menu');
        this.menuList = new MenuList(this.menuList);
        this.btnState = {
            default: 'img/nav-hamburger.png',
            active: 'img/nav-hamburger-close.png'
        };
        this.element.addEventListener('click', function () {
            if (this.element.getAttribute('src') === this.btnState.default) {
                this.element.src = this.btnState.active;
                this.menuList.show();
            }
            else {
                this.element.src = this.btnState.default;
                this.menuList.hide();
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





$(document).ready(function () {
    let scroll_start = 0;
    const startchange = $('.navbar-container');
    const offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-container").css('background-color', '#9DA7B1');
            } else {
                $('.navbar-container').css('background-color', 'transparent');
            }
        });
    }
});