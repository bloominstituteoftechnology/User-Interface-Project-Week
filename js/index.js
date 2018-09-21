// JS goes here

/* Nav bar expansion code */
const navButton = document.getElementById("NavImg");
const navExpansion = document.querySelector(".NavExpansion");
console.log(navExpansion.style.display)


navButton.onclick = function (event) {
//Expanded nav display.
    let displayState = navExpansion.style.display;
    switch (displayState) {
        case "flex":
        navExpansion.style.display = "";
        break;

        case "":
        navExpansion.style.display = "flex";
        break;
    }
    console.log (displayState);

//Button icon change.
    switch (navButton.getAttribute('src')) {
        case "/img/nav-hamburger.png":
        this.setAttribute('src', '/img/nav-hamburger-close.png');
        break;

        case "/img/nav-hamburger-close.png":
        this.setAttribute('src', '/img/nav-hamburger.png');
        break;
}
console.log(this.getAttribute('src'));
}

/**********************Services*************************/
let leadTabs = document.querySelectorAll('.button');
const serviceH2 = document.querySelector('.service_h2')
const serviceImage = document.querySelector('.image');
const serviceText = document.querySelector(".service_text");

class Button {
    constructor(el) {
        this.el = el;
        this.el.dataset.number = el.dataset.number;
        this.el.addEventListener('click', () => { this.buttonClick() 
        });
    }

    buttonClick() {
        //change header
        serviceH2.innerHTML=this.el.innerHTML;
        //Change image
        switch (this.el.dataset.number) {
            case "1":
            serviceImage.setAttribute('src', '/img/services/services-tab-pre-construction-img.png'); 
            break;
            case "2":
            serviceImage.setAttribute('src', '/img/services/services-tab-construction-img.png');
            break;
            case "3":
            serviceImage.setAttribute('src', '/img/services/services-tab-design-build-img.png');
            break;
            case "4":
            serviceImage.setAttribute('src', '/img/services/services-tab-sustainability-img.png');
            break;
        }
        console.log(this.el.dataset.number);
        console.log(serviceImage.getAttribute("src"));
    }
}

leadTabs = Array.from(leadTabs).map(el => new Button(el));