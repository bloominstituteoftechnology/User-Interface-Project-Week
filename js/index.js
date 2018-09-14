// JS goes here
class TabLink{
    contructor(element){
        //assigning each link being passed into the constructot under the variable of this.element
        this.element = element;
        //gathering the corresponding data-set 
        this.data = element.dataset.tab;
        //linking the tab-img/item with the tab that has a corresponding dat-set attribute
        this.itemElement = document.querySelector(`.tab-content-section[data-set = "${this.data}"]`);
        //creating new class item for each tab-img selected
        this.tabItem = new tabItem(this.itemElement);
        //adding event listener which will call the select function wihen eachtab link is clicked
        this.element.addEventListener('click', () => {this.select()});//still unsure why there are no curly brackets being used here

    }
    selct(){
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
        let items = document.querySelectorAll('tab-img');
        Array.from(items).forEach(item => {
            item.classList.remove('tab-content-section');
        });
        this.element.classList.add('tab-content-section');
        
    }
}



let links = document.querySelectorAll('.tab-link');
links = Array.from(links).map(link =>{
    new TabLink(link);
})

function openNavBar(){
    document.querySelector('.openNav').style.height = "100%";
}
function closeNavBar(){
    document.querySelector('openNav').style.height = "0%";
}