// JS goes here

class Tabs {
    constructor(element) {
        this.element = element;
        console.log(this.element)
    }
    select() {
        let selected = document.querySelectorAll(".one");
        console.log(selected);
        selected.addEventListener("mouseover", () => {
            console.log(this.selected);
        });
    }

}

let tabs = document.querySelectorAll('.view');
tabs = Array.from(tabs).map( tab => new Tabs(tab));
