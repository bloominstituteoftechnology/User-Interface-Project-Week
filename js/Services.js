 
 
 
 
 // Creating clas for seperate links to match the item content
class TabLink {

    constructor(link){
       // This link will combined all links on the page
       this.link = link;
      
    }
}
 // Created Class for each content to show 
class TabItem {
    constructor(item){
        //This item is all the content for each tab
        this.item = item;
    }

    active () {
         // get each content from the dom
        let item = document.querySelectorAll('.tabs-item');
        //Map and remove CSS style if its selected
        Array.from(item).map(items => items.classList.remove('tabs-item-selected'));
        
        // Toggle the CSS Style when linked tab is selected
        this.item.classList.toggle('tabs-item-selected');
    
    }
}

//Get all the tab links
let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map((link) => new TabLink(link));

//Create the index for the first item to stay selected
links[0].active();