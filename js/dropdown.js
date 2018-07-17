
class DropDown {
    constructor ([...names]){
        this.itemNames = [...names];
        console.log(this.itemNames);   
        
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



