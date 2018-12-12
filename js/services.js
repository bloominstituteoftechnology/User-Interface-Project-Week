// class TabLink{
//     constructor(element){
//         this.element = element;

//         this.data = this.element.dataset.tab;

//         this.itemElement = document.querySelector(`.tab-item[data-tab = "${this.data}"]`);

//         this.item = new TabItem(this.itemElement);

//         this.element.addEventListener('click', () => {
//             this.select()
//         });
//     };
//     select(){
//         let links = document.querySelectorAll('.tablink');

//         links = Array.from(links).forEach(links => links.classList.remove('tab-link-selected'));

//         this.element.classList.add('tab-link-selected');

//         this.item.select();  
//     }
// }

// class TabItem {
//     constructor(element){
//         this.element = element;
//     }

//     select(){
//         let items = document.querySelectorAll('.tab-item');

//         items = Array.from(items).forEach(items => items.classList.remove('tab-item-selected'));
//         this.element.classList.add('tab-item-selected');
//     }
// }

// links = document.querySelectorAll('.tablink').forEach(element => new TabLink(element));

