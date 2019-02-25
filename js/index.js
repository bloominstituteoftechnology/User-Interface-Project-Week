// JS goes here
//Navigation Overlay
//Open nav when clickimg on hamburger
function openNav() {
  document.querySelector(".nav-overlay").style.width = "100%";
  document.querySelector(".menu-button-close").style.display = "block";
  document.querySelector(".menu-button-expand").style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.querySelector(".nav-overlay").style.width = "0%";
  document.querySelector(".menu-button-close").style.display = "none";
  document.querySelector(".menu-button-expand").style.display = "block";
}

//Services Tab Component
class Tab {
  constructor(tab) {
    this.tab = tab;

    //Getting the custom data attrs on tab
    this.data = this.tab.dataset.tab;

    // Using the custom data attribute get the associated Item element
    //selecting each tab using the [data-somthing] for specificty
    this.contentElement = document.querySelector(
      `.content[data-tab='${this.data}']`
    );

    //Using the data attrs, create a new instance of the TabContent class
    this.contentElement = new TabContent(this.contentElement);

    this.tab.addEventListener("click", () => this.select());
  }
  select() {
    // Get all of the elements with the tab class
    const tabs = document.querySelectorAll(".tab");
    // Using a loop or the forEach method remove the 'active-tab' class from all of the links
    //This removed
    Array.from(tabs).forEach(tab => tab.classList.remove("active-tab"));

    // Add a class named "tabs-link-selected" to this link
    this.tab.classList.add("active-tab");

    // Call the select method on the item associated with this link
    this.contentElement.showContent();
  }
}

class TabContent {
  constructor(content) {
    this.content = content;
  }

  showContent() {
    const contents = document.querySelectorAll(".content");

    //Removing the class "active-content" from each element
    Array.from(contents).forEach(content =>
      content.classList.remove("active-content")
    );

    //Add a class name "active-content" to this element
    this.content.classList.add("active-content");
  }
}

const tabs = document.querySelectorAll(".tab").forEach(tab => new Tab(tab));
