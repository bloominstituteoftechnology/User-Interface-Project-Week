//NAV
class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector('.burger');
        this.content = this.element.querySelector('.links');
        this.button.addEventListener('click', () =>
    this.toggleContent())
    }

    toggleContent() {
        this.content.classList.toggle('dropdown-hidden');
    }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

// //SERVICES TABS
// class TabLink {
//     constructor(element) {
//        this.element = element;
//        this.data = this.element.dataset.tab;
//        this.itemElement = document.querySelectorAll(`.tab-content[data-tab="${this.data}"]`);
//        this.tabItem = new TabItem(this.itemElement);
//        this.element.addEventListener('click', () => {
//            this.select()});
//     };

//     select() {
//         const links = document.querySelectorAll('.tab');
//         Array.from(links).forEach((element) => {
//             element.classList.remove('tab-selected');
//         })       
//         this.element.classList.add('tab-selected');
//         this.tabItem.select();
//     }
// }

// class TabItem {
//     constructor(element) {
//         this.element = element;
//     }

//     select() {
//         const items = document.querySelectorAll('.tab-content');
//         Array.from(items).forEach((element) => {
//             element.classList.remove('tab-content-selected');
//         });
//         this.element.classList.add('tab-content-selected');
//     }
// }

// let links = document.querySelectorAll('.tab');
// links = Array.from(links).map((element) => {
//     return new TabLink(element);
// });

// links[0].select();



