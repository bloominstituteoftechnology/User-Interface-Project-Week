// JS goes here

//Navigation for home-page
let burgerBtn = document.querySelector(".burger");
let homePage = document.querySelector(".main");
let footerSection = document.querySelector(".footer-content");
let navPage = document.querySelector(".open-nav");
let mainImg = document.querySelector(".jumbotron");
let navMenu = document.querySelector(".nav-menu");

let openedBurgerBtn = document.querySelector(".opened-nav");

openedBurgerBtn.addEventListener("click", ()=> {
    navPage.style.display = "none";
    homePage.style.display = "block";
    navMenu.style.display = "block";
    footerSection.style.display = "flex";
    mainImg.style.position = "relative";

})

burgerBtn.addEventListener("click", ()=> {
    homePage.style.display = "none";
    footerSection.style.display = "none";
    navMenu.style.display = "none";
    mainImg.style.position = "absolute";
    navPage.style.display = "block";
    navPage.style.position = "absolute";
    navPage.style.zIndex = "2";
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
serviceBtn[0].clickMethod();