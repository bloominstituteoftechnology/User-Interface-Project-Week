// JS goes here

//Navigation hamburger menu
const hamburgerButton = document.querySelector(".hamburger-img");

const closeButton = document.querySelector(".hamburger-close-img");
closeButton.classList.add("display-off");

const dropdownContent = document.querySelector(".dropdown-content");
dropdownContent.classList.add("display-off");

hamburgerButton.addEventListener('click', (event) => {
    hamburgerButton.classList.add("display-off");
    closeButton.classList.remove("display-off");
    dropdownContent.classList.remove("display-off");    
});
closeButton.addEventListener('click', (event) => {
    hamburgerButton.classList.remove("display-off");
    closeButton.classList.add("display-off");
    dropdownContent.classList.add("display-off");    
});


//Services tabs on Services page


let serviceTabTitle = document.querySelector(".tab-title");

let serviceDescriptionImg = document.querySelector(".tab-description-img");

class ServicesTab{
    constructor(element){
        this.element = element;
        this.element.addEventListener('click', (event) => {
            //Update title of service description to the tab clicked
            serviceTabTitle.innerText = this.element.innerText;

            //Update image of service description to the appropriate image
            //set up arrays of service types and service images
            const serviceArray=["Pre-Construction","Construction","Design Build","Sustainability"];
            const serviceImgArray = [
                "services-tab-pre-construction-img.png",
                "services-tab-construction-img.png",
                "services-tab-design-build-img.png",
                "services-tab-sustainability-img.png"
            ];
            
            //Determine which service image to display
            let iterator = -1;
            let arrayIndex = 0;          
            do{
                iterator++;
                if (this.element.innerText === serviceArray[iterator]){
                    arrayIndex = iterator;
                }               
            } while(this.element.innerText !== serviceArray[iterator] && iterator < serviceArray.length)
            serviceDescriptionImg.src = `./img/services/${serviceImgArray[arrayIndex]}`;

            //Ensure only the selected tab has the appropriate background color
            const allServiceTabs = document.querySelectorAll(".services-tab");
            Array.from(allServiceTabs).forEach( serviceTab => serviceTab.classList.remove("tab-selected"));
            this.element.classList.add("tab-selected");
        });
    }
}

let servicesTabArray = document.querySelectorAll(".services-tab");

servicesTabs = Array.from(servicesTabArray).map(servicesTab => new ServicesTab(servicesTab));


