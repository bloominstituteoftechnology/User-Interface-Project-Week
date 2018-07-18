// JS goes here
// Dropdowns

class Dropdown {
    constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".dropdown-btn");
    this.content= this.element.querySelector(".dropdown-content");
    this.button.addEventListener("click" , () => {this.toggleContent()});
    
    }
    toggleContent() {
        this.content.classList.toggle("dropdown-hidden");
    }
}

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));

//Tabs

class Tabs {
    constructor(element) {
    this.element = elment;
    this.links = this.element.querySelectorAll()
}
}


