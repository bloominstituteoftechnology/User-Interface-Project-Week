// JS goes here

//NAVIGATION BAR
// document.addEventListener('click', function clickFunc() {
//     // console.log('hey') ;
//     alert('DON\'T TOUCH ME!!!!');
// });
// document.getElementById('my-body-id').onscroll = function() {
//     console.log('yo') ;
//     // alert('yo!') ;
// };

window.addEventListener('scroll', function () {
    console.log('scrolling!');
    // console.log('scrolling!' + ' ~ ' + window.scrollY);
    // console.log(document.title);

    if (this.document.title === "S&J Architects-Home") {

        if (window.scrollY > 550) {
            document.querySelector('.my-navbar').setAttribute("style", 'background: #D8D8D8;  opacity: 0.95; z-index: 1');

        } else if (window.scrollY === 0 || window.scrollY < 550) {
            document.querySelector('.my-navbar').setAttribute("style", 'opacity: 1; background: null;');
        }

    } else {
        if (window.scrollY > 200) {
            document.querySelector('.my-navbar').setAttribute("style", 'background: #D8D8D8;  opacity: 0.95; z-index: 1');

        } else if (window.scrollY === 0 || window.scrollY < 200) {
            document.querySelector('.my-navbar').setAttribute("style", 'opacity: 1; background: null;');
        }
    }
});


//SERVICES PAGE
class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll('.tabs-link-button');
        this.links = Array.from(this.links).map(link => {
            return new TabsLink(link, this);
        });
        this.activeLink = this.links[0];
        this.init();
    }
    init() {
        this.activeLink.select();
    }
    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }
    getTab(data) {
        return this.element.querySelector(`.tabs-item[data-tab='${data}']`);
    }
}

class TabsLink {
    constructor(element, parent) {
        this.element = element;
        this.tabs = parent;
        this.tabsItem = parent.getTab(this.element.dataset.tab);
        this.tabsItem = new TabsItem(this.tabsItem);
        this.element.addEventListener('click', () => {
            this.tabs.updateActive(this);
            this.select();
        });
    }
    select() {
        this.element.classList.add('tabs-link-button-selected');
        this.tabsItem.select();
    }
    deselect() {
        this.element.classList.remove('tabs-link-button-selected');
        this.tabsItem.deselect();
    }
}

class TabsItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add('tabs-item-selected');
    }
    deselect() {
        this.element.classList.remove('tabs-item-selected');
    }
}


let tabs = document.querySelectorAll('.tabs-container');
tabs = Array.from(tabs).map(tab => new Tabs(tab));