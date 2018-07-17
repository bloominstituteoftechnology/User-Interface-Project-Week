// JS goes here

//for Navbar
const pages = ["Home","Services","Contact"];
const navButton = document.querySelector("#navButton");
const navBar = document.querySelector(".navBar");
const navRow = document.querySelector(".navRow");


const openCloseToggle = () =>{
    if(navButton.classList[0] === "navButtonOpen"){
        navButton.src = "img/nav-hamburger-close.png";
        navButton.classList.remove('navButtonOpen');
        const navArea = document.createElement('div')
        navArea.classList.add('navExpanded')

    let htmlConstructor = "";
    htmlConstructor +=`<div class='navItems'>`;
        pages.forEach(function(element) {
            if(document.title === element){
                htmlConstructor +=`<a class='navText pageSelected' href='#'>${element}</a>`;
            }
            else{
            htmlConstructor +=`<a class='navText' href='#'>${element}</a>`;
            }
        });

        htmlConstructor +=`</div>`;

        navArea.innerHTML=htmlConstructor;

        navRow.appendChild(navArea);

    }
    else{
        navButton.src = "img/nav-hamburger.png";
        navButton.classList.add('navButtonOpen');
        let fish = navRow.removeChild(document.querySelector(".navExpanded"));

    }
    

}

navButton.addEventListener("click", openCloseToggle);


//tab selector for services page

const tabArray= [{

    name:"Pre-Construction",
    img:"img/services/services-tab-pre-construction-img.png",
    text:'<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>'
},
{
    name:"Construction",
    img:"img/services/services-tab-construction-img.png",
    text:'<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>'
},{
    name:"Design Build",
    img:"img/services/services-tab-design-build-img.png",
    text:'<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>'
},{
    name:"Sustainability",
    img:"img/services/services-tab-sustainability-img.png",
    text:'<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>'
}];



const tabs = document.querySelector(".tabSelectionRow");

let activeTab = 0;

let tabButtons = tabs.querySelectorAll(".tabButton");
const changeSelected = (newButtonSelection) =>{

    if (activeTab !== "newButtonSelection"){
        tabButtons[activeTab].classList.remove("selectedTab");
        tabButtons[newButtonSelection].classList.add("selectedTab");
        activeTab = newButtonSelection;
    }


}

changeSelected(activeTab);
const updateActive = (passin) =>{
    document.querySelector(".tabTitle").innerHTML = `${tabArray[passin].name}`;
    document.querySelector(".tabText").innerHTML = `${tabArray[passin].text}`;
    document.querySelector(".tabImage").src=`${tabArray[passin].img}`;
    
    changeSelected(passin);
}

tabButtons.forEach(function (x,index){

    x.addEventListener("click", function(){
        updateActive(index);

    })})
