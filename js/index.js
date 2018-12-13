

// class TabLink{
//     constructor(element){
//         this.element = element;

//         this.data = this.element.dataset.tab;

//         this.itemElement = document.querySelector(`.tab-item[data-tab = "${this.data}"]`);

//         this.itemElement = new TabItem(this,item);

//         this.element.addEventListener('click', () => {
//             this.select()
//         });
//     };
//     select(){
//         const links = document.querySelectorAll('.tablink');

//         Array.from(links).forEach(links => links.classList.remove('tab-link-selected'));

//         this.element.classList.add('tab-link-selected');

//         this.itemElement.select();  
//     }
// }

// class TabItem {
//     constructor(element){
//         this.element = element;
//     }

//     select(){
//         const items = document.querySelectorAll('.tab-item');

//        Array.from(items).forEach(items => items.classList.remove('tab-item-selected'));
//         this.element.classList.add('tab-item-selected');
//     }
// }

// links = document.querySelectorAll('.tablink');
// links.forEach(element => new TabLink(element));

