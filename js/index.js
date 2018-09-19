// NAV




// // TABS
// class TabLink {
//     constructor(el) {
//         this.el = el;
//         this.data = this.el.dataset.tab;
//         this.itemElement = document.querySelectorAll(`.tab-content[data-tab="${this.data}"]`);
//         this.tabItem = new TabItem(this.itemElement);
//         this.el.addEventListener('click', () => {
//             this.select()
//         });
//         this.el.addEventListener('click', () => {
//             this.deselect()
//         })
//     };

//     select() {
//         const buttons = document.querySelectorAll('.tab');
//         this.element.classList.add('selected');
//         this.tabItem.select();
//     };

//     deselect() {
//         const clicked = document.querySelector('.selected');

//     };
// }

// class TabItem {
//     constructor(el) {
//         this.el = el;
//     }
//     select() {
//        const tabs = document.querySelectorAll('.tab-content');
//        Array.from(tabs).forEach((item) => {
//            item.classList.remove('clicked');
//        });

//        this.el.classList.add('clicked');
//     }
// }

// let buttons = document.querySelectorAll('.tab');
// buttons = Array.from(buttons).map((el) =>{
//     return new TabLink;
// })
// buttons[0].select();
   