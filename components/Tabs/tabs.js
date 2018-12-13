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
       this.deselect();
       let mini = window.matchMedia("(max-width: 500px)");
       this.title.textContent = this.header;
       this.element.classList.add('selected')
       if(mini.matches){
        if(this.header === "Design Build"){
            this.image.src=`img/services/services-tab-mobile-design-build-img.png`;
           } else{
           this.image.src=`img/services/services-tab-mobile-${this.header.toLowerCase()}-img.png`;
           }
       }
       else{
       if(this.header === "Design Build"){
        this.image.src=`img/services/services-tab-design-build-img.png`;
       } else{
       this.image.src=`img/services/services-tab-${this.header.toLowerCase()}-img.png`;
       }
        }
    }
    deselect(){
        const links = document.querySelectorAll('.link');
        Array.from(links).forEach((link)=>{
            link.classList.remove("selected");
        })
    }
    }



const links = document.querySelectorAll('.link').forEach(link => new TabLink(link));
console.log(links)