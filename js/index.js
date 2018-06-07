// JS goes here

class Tabs {
    constructor(element) {
        this.element = element;
        console.log(this.element)
        // console.log(element);
        element.addEventListener('click', () => {
            console.log(element);
           
           });
    }

}



let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map( tab => new Tabs(tab));
