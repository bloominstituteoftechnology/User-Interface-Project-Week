// JS goes here

//Navigation hamburger menu
const hamburgerButton = document.querySelector(".hamburger-img");

const closeButton = document.querySelector(".hamburger-close-img");
closeButton.classList.add("display-off");

const dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.classList.add("display-off");

hamburgerButton.addEventListener('click', (event) => {
    hamburgerButton.classList.toggle("display-off");
    closeButton.classList.toggle("display-off");
    dropdownContent.classList.toggle("display-off");    
});
closeButton.addEventListener('click', (event) => {
    hamburgerButton.classList.toggle("display-off");
    closeButton.classList.toggle("display-off");
    dropdownContent.classList.toggle("display-off");    
});


//Services tabs on Services page
const serviceArray=["Pre-Construction","Construction","Design Build","Sustainability"]

const serviceImgArray=[
    "services-tab-pre-construction-img.png",
    "services-tab-construction-img.png",
    "services-tab-design-build-img.png",
    "services-tab-sustainability-img"
]

let serviceTabTitle = document.querySelector(".tab-title");

let serviceDescriptionImg = document.querySelector(".tab-description-img");

class ServicesTab{
    constructor(element){
        this.element = element;
        console.log(this.element[index]);
        this.element.addEventListener('click', (event) => {
            serviceTabTitle.innerText = this.element.innerText;
            console.log(serviceTabTitle.innerText);
            serviceDescriptionImg.src = `$serviceImgArray[this.element.index]`;
            console.log(serviceDescriptionImg.src);
        });
    }
}

let servicesTabArray = document.querySelectorAll(".services-tab");

servicesTabs = Array.from(servicesTabArray).map(servicesTab => new ServicesTab(servicesTab));


