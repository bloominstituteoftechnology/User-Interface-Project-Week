class TabLink {
    constructor(element) {
        this.element = element;

        this.data = this.element.dataset.tab;

        this.tabContent = document.querySelector(`.tab-content div[data-tab='${this.data}']`);

        this.tabItem = new TabItem(this.tabContent);

        this.element.addEventListener('click', () => this.select())

    };

    select() {
        const tabs = document.querySelector('.tabs');

        Array.from(tabs.children).forEach(el => el.classList.remove('tab-selected'));

        this.element.classList.add('tab-selected');

        this.tabItem.select();
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
        this.hide(this.element);
    }

    hide(element) {
        TweenLite.to(element, 0, {autoAlpha: 0, display: 'none'});
    }

    select() {
        let links = document.querySelectorAll('.tab-content .wrapper');
        Array.from(links).forEach(el => this.hide(el));
        TweenLite.fromTo(this.element, .5, {opacity:0, marginLeft: "300px"}, {marginLeft: "0px", autoAlpha: 1, display: "flex"});
    }
}

let links = document.querySelector('.tabs');

links = Array.from(links.children).map(el => new TabLink(el));

links[0].select();

/*
links = Array.from(links.children).map(el => new Vue({
    el: el,
    data: {
        message: 'Hello Vue!'
    }
}));
*/
