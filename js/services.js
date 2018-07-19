const tabArray = [{

        name: "Pre-Construction",
        img: "img/services/services-tab-pre-construction-img.png",
        text: '<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>',
        srcset: 'img/services/services-tab-pre-construction-img.png 400w, img/services/services-tab-mobile-pre-construction-img.png 290w',
        sizes: '(max-width: 768px) 290px,400px)'
    },
    {
        name: "Construction",
        img: "img/services/services-tab-construction-img.png",
        text: '<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>',
        srcset: 'img/services/services-tab-construction-img.png 400w, img/services/services-tab-mobile-construction-img.png 290w',
        sizes: '(max-width: 768px) 290px,400px)'
    }, {
        name: "Design Build",
        img: "img/services/services-tab-design-build-img.png",
        text: '<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>',
        srcset: 'img/services/services-tab-design-build-img.png 400w, img/services/services-tab-mobile-design-build-img.png 290w',
        sizes: '(max-width: 768px) 290px,400px)'
    }, {
        name: "Sustainability",
        img: "img/services/services-tab-sustainability-img.png",
        text: '<p >  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <br><p >Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>',
        srcset: 'img/services/services-tab-sustainability-img.png 400w, img/services/services-tab-mobile-sustainability-img.png 290w',
        sizes: '(max-width: 768px) 290px,400px)'
    }
];



const tabs = document.querySelector(".tabSelectionRow");

let activeTab = 0;

let tabButtons = tabs.querySelectorAll(".tabButton");
const changeSelected = (newButtonSelection) => {

    if (activeTab !== "newButtonSelection") {
        tabButtons[activeTab].classList.remove("selectedTab");
        tabButtons[newButtonSelection].classList.add("selectedTab");
        activeTab = newButtonSelection;
    }


}

const updateActive = (passin) => {
    changeSelected(passin);
    document.querySelector(".fadeRow").classList.add('fade');

    setTimeout(function () {
        document.querySelector(".tabTitle").innerHTML = `${tabArray[passin].name}`;
        document.querySelector(".tabText").innerHTML = `${tabArray[passin].text}`;
        document.querySelector(".tabImage").src = `${tabArray[passin].img}`;
        document.querySelector(".tabImage").srcset = `${tabArray[passin].srcset}`;
        document.querySelector(".tabImage").sizes = `${tabArray[passin].sizes}`;
    }, 500);
    setTimeout(function () {
        document.querySelector(".fadeRow").classList.remove('fade');

    }, 1000);
}
tabButtons.forEach(function (x, index) {

    x.addEventListener("click", function () {
        updateActive(index);

    })
})