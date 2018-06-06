

const navOpa = () => {
    nav.style.backgroundColor = "#9DA7B1";
    nav.style.opacity = .95;
}
const nav = document.querySelector(".navigation")
window.addEventListener("scroll", navOpa);


const togglenavPage = () => {
    console.log("i was clicked")
    navpage.classList.toggle("navpage--open");  
    closeBtn.classList.toggle("closebtn--open");
    // navButton.classList.toggle("hamburger--close");
}

const toggleClose = () => {   
    // navButton.classList.toggle("hamburger--close");
    navpage.classList.toggle("navpage--open");
}


const navpage = document.querySelector(".navpage");

const navButton = document.querySelector(".hamburger");

const closeBtn = document.querySelector(".closebtn");

navButton.addEventListener("click", togglenavPage);

closeBtn.addEventListener("click", toggleClose);

console.log("hello")





class Buttons {
    constructor(element) {
        this.element = element;
        console.log(element);
        this.buttons = this.element.querySelectorAll(".button-link");
        console.log(this.buttons);
        this.buttons = Array.from(this.buttons).map(buttonlink => new ButtonLink(buttonlink, this));
        this.activeButton = this.buttons[0];
        this.init();
    }
    init(){
        this.activeButton.select();
    }
    updateActive(newActive) {
        this.activeLink.deselect();
        this.activeLink = newActive;
    }
    getButton(data){
        return this.element.querySelector(`.info[data-button="${data}"]`);
    }
}

class ButtonLink {
    constructor (element, parent) {
        this.element = element;
        console.log(this.element);
        this.button = parent;
        this.link = parent.getButton(this.element.dataset.button)
        this.buttonItem = new ButtonItem(this.link);
        this.element.addEventListener('click', ()=>{
            this.button.updateActive(this);
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



let buttons = document.querySelectorAll(".buttonslinks");
console.log(buttons)
buttons = Array.from(buttons).map(buttonRef => new Buttons(buttonRef));