
class DropDown {
    constructor (args){
        this.itemArray = args.titles;
        this.dropdown = args.beatDrop;
        this.dropdownButton = args.dropdownButton;
        this.closeButton = args.closeButton;
        this.items = this.createItems(this.itemArray);  
        this.appendList(this.dropdown, this.items);
        console.log(this.dropdownButton);
        this.dropdownButton.addEventListener('click', ()=> {
            this.toggleDropDown(this.dropdown);
        });
        this.closeButton.addEventListener('click', ()=>{
            this.toggleDropDown(this.dropdown)
        });
    }

    createItems(items, parent){
        let temp = items.map((elem) => {
            return new DropDownItem(elem, parent);
        });
        temp = temp.map((elem)=>{
            return elem.createItem();
        });
        return temp;
    }

    appendList(duper, list){
        console.log("duper", duper);
        console.log( list[0]);
        
        list.forEach((elem)=>{
            console.log("elem", elem);
            duper.appendChild(elem);
        });
    }

    toggleDropDown(dropdown){
        
        dropdown.classList.toggle('beat-drop-hidden');
        console.log(dropdown.classList);
    }


}

class DropDownItem {
    constructor(elem, parent){
        this.title = elem.title;   
        this.url = elem.url;
        this.class = "drop-down-item";
        this.dataAttr = "title";
    }
    createItem(){
        let a = document.createElement('a');
        a.setAttribute('href', this.url);
        a.setAttribute(`data-${this.dataAttr}`, this.dataAttr);
        a.setAttribute('class', this.class);
        if(this.title === "KEWL" || this.title === "ERIK"){
            a.setAttribute('target', "_blank");
        }
        a.innerHTML = this.title;
        this.a = a;
        return a;
    }
}

class BeatDropBtn {
    constructor (args){
        this.dropdownButton = args.dropdownButton;
    }
}

const tags = {
    beatDrop : document.querySelector('.beat-drop'),
    dropdownButton: document.querySelector('.beat-drop-button'),
    closeButton: document.querySelector('.close-button'),
    titles : [
    {
        title: "HOME",
        url: "/Users/erikkimsey/Desktop/lambda/User-Interface-Project-Week/index.html"
    },
    {
        title: "SERVICES",
        url: "/Users/erikkimsey/Desktop/lambda/User-Interface-Project-Week/services.html"
    },
    {
        title: "KEWL",
        url: "https://en.wikipedia.org/wiki/Cybernetic_Culture_Research_Unit"
    },
    {
        title: "ERIK",
        url: "http://erikkimsey.com"
    }
]
};


const drop = new DropDown(tags);