// JS goes here

//dropdown menu
const openMenu = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelector('.nav-open');
openMenu.addEventListener('click', () =>{
   openMenu.style.display = 'none';
   closeMenu.style.display = 'block'
   navBar.style.height = '100%';
   navLinks.style.display = "block";
 
})

closeMenu.addEventListener('click', () =>{
    openMenu.style.display = '';
    closeMenu.style.display = '';
    navBar.style.height = '';
    navLinks.style.display = '';
  
    
 })
 




// ///tab section on services page
class TabLink{
    constructor(element){
        //assigning each link being passed into the constructot under the variable of this.element
        this.element = element;
        //gathering the corresponding data-set 
        this.data = element.dataset.tab;
        //linking the tab-img/item with the tab that has a corresponding dat-set attribute
        this.itemElement = document.querySelector(`.tab-content-container[data-tab = "${this.data}"]`);
        //creating new class item for each tab-img selected
        this.tabItem = new TabItem(this.itemElement);
        //adding event listener which will call the select function wihen eachtab link is clicked
        this.element.addEventListener('click', () => { this.select() });
    }
    select(){
        const links = document.querySelectorAll('.tab-link');
        //creating an array of tab links --removing the tab-selected styling form each
        Array.from(links).forEach(link => {
            link.classList.remove('tab-link-selected');
        });
        //adding the tab-selected styling to only th clicked on element
        this.element.classList.add('tab-link-selected');
        //call select method on item
        this.tabItem.select();
    }
}

class TabItem{
    constructor(element){
        this.element = element;
    }
    select(){
        let items = document.querySelectorAll('.tab-content-container');
        Array.from(items).forEach(item => {
            item.classList.remove('tab-content-selected');
        });
        console.log(this.element);
        this.element.classList.add('tab-content-selected');
        
    }
}



let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link =>
    new TabLink(link));



links[0].select();