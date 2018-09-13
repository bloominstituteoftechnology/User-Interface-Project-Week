class TabLink {

 constructor(link){
     this.link = link;
     console.log(link)

    
 }




}


//Get all the tab links
let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map((link) => new TabLink(link));

