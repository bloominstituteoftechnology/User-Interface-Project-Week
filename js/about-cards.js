class TabLink {
    constructor(tabElement){
        // assign this.tabElement to the tabElement DOM reference
        this.tabElement = tabElement;
        
        // Get the `data-tab` value from this.tabElement and store it here
        this.teamData = tabElement.dataset.team;

        // Add a click event that invokes this.selectTab
        this.tabElement.addEventListener("click", e => this.selectTab(e));
    }

    selectTab(e){
        // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
        
        // Check to see if this.tabData is equal to 'all'
        if(this.teamData === "all"){
            // If `all` is true, select all cards regardless of their data attribute values
            this.cards = document.querySelectorAll(".about__cards__item");
        } else {
            // else if `all` is false, only select the cards with matching this.tabData values
            this.cards = document.querySelectorAll(`.about__cards__item[data-team="${this.teamData}"]`);
            console.log(this.cards)
        }

        // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
        this.cards = Array.from(this.cards).map(card => new TabCard(card));

        // Select all elements with the .tab class on them
        const tabs = document.querySelectorAll(".about__tabs__teams__item");
        
        // Iterate through the NodeList removing the .active-tab class from each element
        tabs.forEach(tab => tab.classList.remove("about__tabs__teams__item--active-team"));

        // Select all of the elements with the .card class on them
        const cards = document.querySelectorAll(".about__cards__item");

        // Iterate through the NodeList setting the display style each one to 'none'
        cards.forEach(card => card.style.display = "none");
        
        // Add a class of ".active-tab" to this.tabElement
        this.tabElement.classList.add("about__tabs__teams__item--active-team");

        // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        this.cards.forEach(card => card.selectCard(e));
    }
}

class TabCard {
    constructor(cardElement){
        // Assign this.cardElement to the cardElement DOM reference
        this.cardElement = cardElement;
    }
    selectCard(e){
        // Update the style of this.cardElement to display = "flex"
        this.cardElement.style.display = "flex";
        TweenMax.fromTo(this.cardElement, 1, {
            opacity: 0
        }, {
            opacity: 1
        });
    }
}

let tabs = document.querySelectorAll(".about__tabs__teams__item");
tabs.forEach(tab => new TabLink(tab));
  
  
// // FOR ADDING A NEW ARTICLE
// // ========================

// const postArticleButton = document.querySelector(".submitArticleBtn");
// postArticleButton.addEventListener("click", e => addArticle(e));

// function addArticle(e) {
//     // Selectors and value assignments
//     // -------------------------------

//     const cardsArea = document.querySelector(".cards-container");

//     const authorField = document.querySelector(".formArticleAuthor");
//     const titleField = document.querySelector(".formArticleTitle");
//     const topicField = document.querySelector(".formArticleTopicList");

//     const newCardAuthor = authorField.value;
//     const newCardTitle = titleField.value;

//     // Input validation first
//     if (newCardAuthor === "") {
//         alert("Provide your name first.");
//     } else if (newCardTitle === "") {
//         alert("Provide a title first.");
//     } else if (topicField.selectedIndex === 0) {
//         alert("Select a topic first");
//     } else {
//         const topicOptions = topicField.querySelectorAll("option");
//         const newCardTopic = topicOptions[topicField.selectedIndex].value;

//         const activeTab = document.querySelector(".active-tab");

//         // Build DOM elements
//         // ------------------

//         const cardElement = document.createElement("div");
//         cardElement.classList.add("card");
//         cardElement.setAttribute("data-tab", newCardTopic);

//         const headlineElement = document.createElement("div");
//         headlineElement.classList.add("headline");
//         headlineElement.textContent = newCardTitle;

//         const authorElement = document.createElement("div");
//         authorElement.classList.add("author");

//         const imgContainerElement = document.createElement("div");
//         imgContainerElement.classList.add("img-container");

//         const authorDisplayElement = document.createElement("span");
//         authorDisplayElement.textContent = `By ${newCardAuthor}`;

//         profileImgElement = document.createElement("img");
//         profileImgElement.src = "./assets/anon.png";

//         imgContainerElement.appendChild(profileImgElement);

//         authorElement.appendChild(imgContainerElement);
//         authorElement.appendChild(authorDisplayElement);

//         cardElement.appendChild(headlineElement);
//         cardElement.appendChild(authorElement);

//         cardsArea.appendChild(cardElement);

//         if (newCardTopic !== activeTab.textContent
//             && activeTab.dataset.tab != "all") {
//         cardElement.style.display = "none";
//         } else {
//         TweenMax.fromTo(cardElement, 1, {
//             opacity: 0
//         }, {
//             opacity: 1
//         });
//         }

//         // Clear all fields
//         // ----------------

//         authorField.value = "";
//         titleField.value = ""
//         topicField.selectedIndex = 0;
//     }
// }