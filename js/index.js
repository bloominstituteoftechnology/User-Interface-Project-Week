// JS goes here
class Tabs{
    constructor(element)
{
this.element = element;
console.log(element); 
// create a reference to the ".tabs-link" class nested in your tab object
this.links = this.element.querySelectorAll(".tabs-link");
//this step will map over the array creating new TabsLink class instances of each link.
this.links = Array.from(this.links).map(link =>{
    return new TabsLink(link,this);
});
//set the active link to the first item in the array
this.activeLink = this.links[0];
//invoke the init() method
this.init();
}

init(){
//invoke the select() method on activeLink
this.activeLink.select();
}

updateActive(newActive){
//invoke the method deselect() on activeLink
this.activeLink.deselect();
//assign this.activeLink to the active link (newActive)
this.activeLink = newActive;
}

getTab(data) {
//return a reference to the element's data attribute
return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
}
}

class TabsLink{
    //pass in the link reference along with a reference to the parent class
    constructor(link,parent){
    this.link = link;
    //assign this.tabs to parent
    this.tabs = parent;
    //using the method from the parent class above pass in a reference to the custom data attribute.
    this.tabsItem = parent.getTab(this.link.dataset.tab);
    //create a new TabsItem object that passes in a tabsItem value that you just created above
    this.tabsItem = new TabsItem(this.tabsItem);
    this.link.addEventListener('click', () => {
        this.tabs.updateActive(this);
        //invoke the select() method on this
        this.select();
    });
};

select(){
    // add a class named "tabs-link-selected" to the link
    this.link.classList.add("tabs-link-selected");
    //use the select() method on tabsItem
    this.tabsItem.select();
}

deselect(){
    //remove a class named "tabs-link-selected" from the link
    this.link.classList.remove("tabs-link-selected");
    //use the deselect() method on tabsItem
    this.tabsItem.deselect();
}
}

class TabsItem{
    constructor(element){
        this.element=element;
    }

select(){
    //add a class named "tabs-item-selected" to the element
    this.element.classList.add("tabs-item-selected");
}

deselect(){
    //remove a class named "tabs-item-selected" to the element
    this.element.classList.remove("tabs-item-selected");
    //end of classes
}
}



//Create a Reference to the ".tabs" classes
let tabs = document.querySelectorAll(".tabs");
//map through each tabs element and create a new Tabs object.
tabs = Array.from(tabs).map(tab => new Tabs(tab));


// ----------- script for menu toggle -------------

const openMenu = () => {
    //toggle the "menu--open" class on the menu reference
    menu.style.display = "flex";
};

const closeMenu = () => {
    menu.style.display = "none";
};

//start here:  create a reference to the "nav" class
const menu = document.querySelector(".nav1");
console.log(menu);

//create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', ()=> {
    console.log("menu-button was clicked")
});

//create a reference to the ".close-button" class
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener('click',() =>{
    console.log("close-button was clicked")
});

//using the menu button reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', openMenu);

//using the close button reference, add a click handler that calls closeMenu
closeButton.addEventListener('click', closeMenu);