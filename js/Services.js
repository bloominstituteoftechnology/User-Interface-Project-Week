
// Creating clas for seperate links to match the item content
class TabLink {

    constructor(link){
       // This link will combined all links on the page
       this.link = link;
      
       //this data holds the dataset matches
        this.data = this.link.dataset.tab;
       // Find the dataset match with item content and link tabs
        this.itemContent = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
   
        //Create a new content for each tab selected
        this.tabItem = new TabItem(this.itemContent);
   
        // Each tab thats click show the matched content.
        this.link.addEventListener ('click', () => {
            this.active()
          
        });
       
    }
    // Activate the content with CSS style
   active(){
       //Grab all the tab lins and remove the CSS style if its there
       const links = document.querySelectorAll('.tab-link');
       Array.from(links).map(link => link.classList.remove('tab-link-selected'));
   
       // Toggle new link with the css style
       this.link.classList.toggle('tab-link-selected');
   
      //Show which content is selected
       this.tabItem.active();
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
   
   