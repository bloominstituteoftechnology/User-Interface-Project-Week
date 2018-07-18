// JS goes here
class Tabs {
    constructor (element) {
        this.element=element;
        console.log(this.element);
        
    }
}
let tabs=document.querySelectorAll('.tabs');
tabs=Array.from(tabs).map((tab)=>new Tabs(tab));

console.log(tabs)