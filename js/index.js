// JS goes here

const menu = document.querySelector(".menu-toggle");
const hamburger = document.querySelectorAll(".hamburger");
const nav = document.querySelector("nav");

menu.addEventListener("click", function() {
  nav.classList.toggle("nav-toggle");
});

// function navigationToggle() {
//   const hamburger = document.querySelector(".menu-toggle");
//   const nav = document.querySelector("nav");

//   hamburger.addEventListener("click", function() {
//     nav.classList.toggle("nav-toggle");
//   });
// }

// navigationToggle();

class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;

    // else if `all` is false, only select the cards with matching this.tabData values
    this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => {
      this.selectTab();
      console.log(this.tabData);
    });
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tab");
    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(tab => tab.classList.remove("active-tab"));
    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".card");
    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => (card.style.display = "none"));
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard(cards));
  }
}

class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }
}

let tabs = document.querySelectorAll(".tab");

tabs = Array.from(tabs).map(tab => new TabLink(tab));
