// NAV
const nav = document.querySelector('.nav');
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.links');

// class NavDrop {
//     constructor(el) {
//         this.el = el;
//         this.button = this.el.querySelector('.burger');
//         this.nav = this.el.querySelector('.nav');
        
//         this.button.addEventListener('click', () => {
//             this.toggle();
//         })
//     }
//     toggle(){
//         this.nav.classList.toggle("links");
//         if(this.nav.classList.length > 1) {
//             this.el.style.height = "50px";
//             this.button.src = "img/nav-hamburger.png";
//         } else {
//             this.el.style.height = "0px";
//         }
//     }
// }

// const drop = document.querySelector('.header');
// new NavDrop(drop);








// TABS
class TabLink {
    constructor(el) {
        this.el = el;
        this.data = this.el.dataset.tab;
        this.itemElement = document.querySelectorAll(`.tab-content[data-tab="${this.data}"]`);
        this.tabItem = new TabItem(this.itemElement);
        this.el.addEventListener('click', () => {
            this.select()
        });
    }

    select() {
        const buttons = document.querySelectorAll('.tab');
        buttons.forEach(item => item.classList.remove('.selected'));
        this.element.classList.add('.selected');
        this.tabItem.select();
    }
}

class TabItem {
    constructor(el) {
        this.el = el;
    }
    select() {
       const tabs = document.querySelectorAll('.tab-content');
       tabs.forEach(item => item.style.display = 'none');
       this.el.style.display = 'block';
    }
}

let links = document.querySelectorAll('.tab');
links = Array.from(links).map(el => new TabLink(el));
links[0].select();
   