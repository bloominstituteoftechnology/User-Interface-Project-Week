// JS goes here
// Meni JS

const hamburger = document.querySelector(".ham");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function() {
  nav.classList.toggle("nav-off");
  header.classList.toggle("header-open");

  if (nav.classList.contains("nav-off")) {
    hamburger.src = "../img/nav-hamburger.png";
    TweenMax.to(header, 3, {
      ease: Power2.easeOut,
      height: "5rem"
    });

    TweenMax.fromTo(nav, 1, {
      opacity: 100,
      marginBottom: "33vh",
      height: "33vh",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    {
      ease: Expo.easeIn,
      height: 0,
      margin: 0,
      opacity: 0
    }
    );


  } else {
    hamburger.src = "../img/nav-hamburger-close.png";
    TweenMax.fromTo(
      header,
      3,
      {
        height: "5rem"
      },
      {
        ease: Power2.easeOut,
        height: "100vh"
      }
    );
    TweenMax.fromTo(nav, 1, {
      height: 0,
      margin: 0,
      opacity: 0
    },
    {
      ease: Power4.easeOut,
      opacity: 100,
      marginBottom: "33vh",
      height: "33vh",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
    );
  }
  console.log(nav.classList);
  console.log(hamburger.src);
});

// Service Tab Selector
class TabLink {
  constructor(tabElement) {
    // assign this.tabElement to the tabElement DOM reference
    this.tabElement = tabElement;
    // console.log(this.tabElement);
    // Get the `data-tab` value from this.tabElement and store it here
    this.tabData = this.tabElement.dataset.tab;
    // console.log(this.tabData);
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:
    this.cards = document.querySelectorAll(
      `.tabs-item[data-tab='${this.tabData}']`
    );

    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class.
    this.cards = Array.from(this.cards).map(item => new TabCard(item));

    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    // Select all elements with the .tab class on them
    const tabs = document.querySelectorAll(".tabs-link");

    // Iterate through the NodeList removing the .active-tab class from each element
    tabs.forEach(item => {
      item.classList.remove("active-tab");
    });

    // Select all of the elements with the .card class on them
    const cards = document.querySelectorAll(".tabs-item");

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(item => {
      return item.classList.remove("active-item");
    });

    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add("active-tab");

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
    this.srcImg = this.cardElement.querySelector("img");

    if (this.cardElement.dataset.tab == 1 && window.innerWidth > 900) {
      this.srcImg.src = "../img/services/services-tab-pre-construction-img.png";
    } else if (this.cardElement.dataset.tab == 1 && window.innerWidth <= 900) {
      this.srcImg.src =
        "../img/services/services-tab-mobile-pre-construction-img.png";
    }

    const que = window.matchMedia("(min-width: 900px)");
    que.addListener(this.widthChange.bind(this));
    console.log(window.innerWidth);
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.classList.add("active-item");
  }
  widthChange(que) {
    if (this.cardElement.dataset.tab == 1) {
      if (que.matches && window.innerWidth > 900) {
        this.srcImg.src =
          "../img/services/services-tab-pre-construction-img.png";
      } else {
        this.srcImg.src =
          "../img/services/services-tab-mobile-pre-construction-img.png";
      }
    } else if (this.cardElement.dataset.tab == 2) {
      if (que.matches) {
        this.srcImg.src = "../img/services/services-tab-construction-img.png";
      } else {
        this.srcImg.src =
          "../img/services/services-tab-mobile-construction-img.png";
      }
    } else if (this.cardElement.dataset.tab == 3) {
      if (que.matches) {
        this.srcImg.src = "../img/services/services-tab-design-build-img.png";
      } else {
        this.srcImg.src =
          "../img/services/services-tab-mobile-design-build-img.png";
      }
    } else if (this.cardElement.dataset.tab == 4) {
      if (que.matches) {
        this.srcImg.src = "../img/services/services-tab-sustainability-img.png";
      } else {
        this.srcImg.src =
          "../img/services/services-tab-mobile-sustainability-img.png";
      }
    }
  }
}

let tabs = document.querySelectorAll(".tabs-link");

tabs = Array.from(tabs).map(item => new TabLink(item));
