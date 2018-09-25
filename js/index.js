// JS goes here

//Navigation for home-page

const burgerBtn = document.querySelector('.burger');
const myHomepage = document.querySelector('.container');
const copyRight = document.querySelector('.copyright');
const openNav = document.querySelector('.open-nav');
const closeBtn = document.querySelector('.opened-nav');
burgerBtn.addEventListener('click', ()=> {
    myHomepage.style.display = "none";
    copyRight.style.display = "none";
    openNav.style.display = "block";
} )

closeBtn.addEventListener('click', ()=> {
    myHomepage.style.display = "block";
    copyRight.style.display = "block";
    openNav.style.display = "none";
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
            info.classList.remove("display");
        });

        this.buttonElements.classList.add("display");
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