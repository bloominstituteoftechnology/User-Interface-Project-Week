class Tabs {
    constructor(element) {
        this.element = element;
        this.tabs = this.element.querySelectorAll(".tab");
        //create link for each tab using TabLink class
        this.tabs = Array.from(this.tabs).map( tab => new TabLink(tab, this));
        this.activeTab = this.tabs[0];
        this.init();
    }
    // initialize this.element
    init(){
        this.activeTab;
    }
    updateActive(tabElement){
        this.activeTab.deselectTab();
        this.activeTab = tabElement;
    }
    getCards(data){
        return document.querySelector(`.card[data-tab="${data}"]`);
    }
}

// link Tab to Card
class TabLink {
    constructor(element, parent){
        this.element = element;
        this.parent = parent;
        //use parent method to link tab to card by defining matching dataset
        this.card = this.parent.getCards(this.element.dataset.tab);
        // 
        // this.cards = Array.from(this.cards).map(card => 
        this.card = new TabCard(this.card);
        // assigns event listener to tab
        this.element.addEventListener("click", () => this.selectTab());
    }
    selectTab(){
        //sets active tab
        this.parent.updateActive(this);
        this.element.classList.add("active-tab");
        // selects card with TabCard method !card not cards
        this.cards.selectCard();
    }
    //inverse if selectTab
    deselectTab(){
        this.element.classList.remove("active-tab");
        this.cards.deselectCard();
    }

}

//
class TabCard {
    constructor(element){
        this.element = element;
    }
    selectCard(){
        this.element.style.display = null;
    }
    deselectCard(){
        this.element.style.display = 'none';
    }
}

//card constructor 
function createCard(cardData) {
    const newCardDiv = document.createElement('div');
    newCardDiv.classList.add('card');
    newCardDiv.setAttribute('data-tab', cardData.subject);

    const header = document.createElement('h2');
    header.textContent = cardData.header;
    newCardDiv.appendChild(header);

    const row = document.createElement('div');
    newCardDiv.appendChild(row);

    const text = document.createElement('div');
    row.appendChild(text);

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = cardData.paragraph1;
    text.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph1.textContent = cardData.paragraph2;
    text.appendChild(paragraph2);

    const image = document.createElement('img');
    image.setAttribute('src', cardData.image);
    row.appendChild(image);
       
}

//Card Objects 
createCard({
    subject: "construction",
    header: "Construction",
    paragraph1: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    paragraph2: "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.",
    image: "img/services/services-tab-construction-img.png"
});

createCard({
    subject: "design-build",
    header: "Design Build",
    paragraph1: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    paragraph2: "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.",
    image: "img/services/services-tab-design-build-img.png"
});

createCard({
    subject: "sustainability",
    header: "Sustainability",
    paragraph1: "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.",
    paragraph2: "Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking. Completely pursue scalable customer service through sustainable potentialities.",
    image: "img/services/services-tab-sustainability-img.png"
})


//tab selector
let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tab => new Tabs(tab));