
//Services tabs on Services page
const serviceArray=["Pre-Construction","Construction","Design Build","Sustainability"]

const serviceImgArray=[
    "services-tab-pre-construction-img.png",
    "services-tab-construction-img.png",
    "services-tab-design-build-img.png",
    "services-tab-sustainability-img"
]

class ServicesTab{
    constructor(element){
        this.element = element;

        let serviceTabTitle = document.querySelector(".tab-title");
        console.log(servicesTabTitle);

        this.element.addEventListener('click', (event) =>{
            serviceTabTitle = this.element.innerText;
            
        });
    }
}

let servicesTabArray = document.querySelectorAll(".services-tab");

servicesTabs = Array.from(servicesTabArray).map(servicesTab => new ServicesTab(servicesTab));
