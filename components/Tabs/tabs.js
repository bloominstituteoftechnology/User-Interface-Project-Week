// const tabLinks = document.querySelectorAll('.link');
// console.log(tabLinks);

// tabLinks.forEach(link, ()=>{
//     link.addEventListener('click', ()=>{
// console.log('clicked');
// })});

class TabLink{
    constructor(element){
        // Assigning this keyword
        this.element = element;
        this.header = this.element.textContent;
        this.title = document.querySelector('.tab-title');
        this.image = document.querySelector('.tab-image img');
        this.element.addEventListener('click', ()=>this.select());
     }
    // Methods
    select(){
       this.title.textContent = this.header;
       this.image.src=`img/services/services-tab-${this.header.toLowerCase()}-img.png`;
       }
    }



const links = document.querySelectorAll('.link').forEach(link => new TabLink(link));
console.log(links)