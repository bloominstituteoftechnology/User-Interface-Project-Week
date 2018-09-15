
class TabLink{
    constructor(element){
      this.element = element; 

      this.tabData = this.element.dataset.tab; 
        console.log(this.tabData); 

      
    }
}


let buttons = document.querySelectorAll(".buttons"); 

buttons = Array.from(buttons).map(button => new TabLink(button)); 
 