
class DropDown {
    constructor ([...names]){
        this.itemNames = [...names];
        // this.dropdown = document.querySelector('.beat-drop');
        // this.listItemContainer = `<div class="menu-items"></div>`;  
        // this.dropdown.append(this.listItemContainer);      
        this.items = this.createItems(this.itemNames);
        console.log(this.items);
        
        
        // this.appendedList = this.appendList(this.listItemContainer, this.items);
    }

    createItems(items){
        let temp = items.map((elem) => {
            return new DropDownItem(elem);
        });
        console.log(typeof temp[0].name);
        temp = temp.map((elem)=>{
            return elem.createItem(elem.name);
        });
        return temp;
    }


}

class DropDownItem {
    constructor(name){
        this.name = name;   
    }
    createItem(name){
        return `<div class="drop-down-item data-name="${name}">${name}</div>`;
    }
}

const names = ['silly', 'billy', 'fo', 'rilly'];
const drop = new DropDown(names);



