

const navOpa = () => {
    nav.style.backgroundColor = "#9DA7B1";
    nav.style.opacity = .95;
}
const nav = document.querySelector(".navigation")
window.addEventListener("scroll", navOpa);

const togglenavPage = () => {
    console.log("i was clicked")
    navpage.classList.toggle("navpage--open");
    navButton.classList.toggle("hamburger--close");
    closeBtn.classList.toggle("closebtn--open");
}
const toggleClose = () => {  
    closeBtn.classList.toggle("closebtn--open");
    navpage.classList.toggle("navpage--open");
    navButton.classList.toggle("hamburger--close"); 
}

const navpage = document.querySelector(".navpage");
console.log(navpage)
const navButton = document.querySelector(".hamburger");
console.log(navButton)
const closeBtn = document.querySelector(".closebtn");
navButton.addEventListener("click", togglenavPage);
closeBtn.addEventListener("click", toggleClose);


class Linker {
    constructor(element) {
        this.element = element;
        this.buttons = this.element.querySelectorAll(".button-link");
        this.buttons = Array.from(this.buttons).map(buttonlink => new ButtonLink(buttonlink, this));
        this.activeButton = this.buttons[0];
        this.init();
    }
    init(){
        this.activeButton.select();
    }
    updateActive(newActive) {
        this.activeButton.deselect();
        this.activeButton = newActive;
    }
    getButton(data){
        return this.element.querySelector(`.info[data-button="${data}"]`);
    }
}

class ButtonLink {
    constructor (element, parent) {
        this.element = element;
        this.linker = parent;
        this.link = parent.getButton(this.element.dataset.button)
        this.buttonItem = new ButtonItem(this.link);
        this.element.addEventListener('click', ()=>{
            this.linker.updateActive(this);
            this.select();
        });
    };
    select() {
        this.element.classList.add("button-link-selected");
        this.buttonItem.select();
    }
    deselect() {
        this.element.classList.remove("button-link-selected");
        this.buttonItem.deselect();
    }
}

class ButtonItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add("button-item-selected");
    }
    deselect() {
        this.element.classList.remove("button-item-selected");
    }
}

let linker = document.querySelectorAll(".linker");
linker = Array.from(linker).map(linkerRef => new Linker(linkerRef));