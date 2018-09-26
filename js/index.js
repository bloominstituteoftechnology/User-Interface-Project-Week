// JS goes here

//Navigation for home-page
const burgerBtn = document.querySelector(".burger");
const openedBurger = document.querySelector(".opened-nav")
let navPage = document.querySelector(".open-nav");
let mainPage = document.querySelector(".main-nav");

burgerBtn.addEventListener("click", ()=> {
    navPage.classList.toggle("display-toggle");
    mainPage.style.display = "none";
})

openedBurger.addEventListener("click", ()=> {
    navPage.classList.toggle("display-toggle");
    mainPage.style.display = "block";
})





// Service page button functionality
class Button {
    constructor (buttonElements) {
        this.buttonElements = buttonElements;
        this.tabData = this.buttonElements.dataset.tab;
        this.elementData = document.querySelector(`.info-container[data-tab='${this.tabData}']`);
        this.infoElements = new Info(this.elementData);
        this.buttonElements.addEventListener('click', ()=> {this.clickMethod()});

    }

    clickMethod() {
        let infoContainer = document.querySelectorAll('.buttonss');

        Array.from(infoContainer).forEach(info => {
            info.classList.remove("display-background");
        });

        this.buttonElements.classList.add("display-background");
        this.infoElements.clickMethod();
    }
}


class Info {
    constructor(elements) {

    
    this.elements = elements;
}

clickMethod() {
    let items = document.querySelectorAll('.info-container');

    Array.from(items).forEach(item => {
        item.classList.remove('display');
    })

    this.elements.classList.add('display');
}

}



















let serviceBtn = document.querySelectorAll(".buttonss");

serviceBtn = Array.from(serviceBtn).map(buttonElements => new Button(buttonElements))
serviceBtn[1].clickMethod();