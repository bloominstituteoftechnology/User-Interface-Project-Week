
class DropDown {
    constructor ([...elems]){
        this.itemArray = [...elems];
        this.dropdown = document.querySelector('.beat-drop');
        // this.listItemContainer = `<div class="menu-items"></div>`;  
        // this.dropdown.append(this.listItemContainer);      
        this.items = this.createItems(this.itemArray);
        console.log(this.items);
        this.appendList(this.dropdown, this.items);
    }

    createItems(items){
        let temp = items.map((elem) => {
            return new DropDownItem(elem);
        });
        temp = temp.map((elem)=>{
            console.log(elem);
            
            return elem.createItem();
        });
        return temp;
    }

    appendList(duper, list){
        list.forEach((elem)=>{
            duper.appendChild(elem);
        });
    }


}

class DropDownItem {
    constructor(elem){
        this.title = elem.title;   
        this.url = elem.url;
    }
    createItem(){
        return `<a href="${this.url}" class="drop-down-item data-name="${this.title}">${this.title}</div>`;
    }

}

const tags = [
    {
        title: "silly",
        url: "https://en.wikipedia.org/wiki/Cybernetic_Culture_Research_Unit"
    },
    {
        title: "billy",
        url: "https://en.wikipedia.org/wiki/Cybernetic_Culture_Research_Unit"
    },
    {
        title: "fo",
        url: "https://en.wikipedia.org/wiki/Cybernetic_Culture_Research_Unit"
    },
    {
        title: "rilly",
        url: "https://en.wikipedia.org/wiki/Cybernetic_Culture_Research_Unit"
    }
];
const names = ['silly', 'billy', 'fo', 'rilly'];
const drop = new DropDown(tags);



