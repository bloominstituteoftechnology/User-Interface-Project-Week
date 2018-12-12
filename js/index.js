class TabLink {
    constructor(element) {
      this.element = element;
      this.data = this.element.dataset.tab;
      this.itemElement = document.querySelector(
        `.tabs-box[data-tab="${this.data}"]`
      );
      this.itemElement = new TabItem(this.itemElement);
      this.element.addEventListener("click", () => this.select());
    }
  
    select() {
      const tabs = document
        .querySelectorAll(".tab")
        .forEach(link => link.classList.remove("tab--selected"));
      this.element.classList.add("tab--selected");
      this.itemElement.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document
        .querySelectorAll(".tabs-box")
        .forEach(item => item.classList.remove("tabs-box--view"));
      this.element.classList.add("tabs-box--view");
    }
  }
  
  const tabs = document
    .querySelectorAll(".tab")
    .forEach(link => new TabLink(link));
  
  //   select() {
  //     // Get all of the elements with the tabs-link class
  //     // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
  //     this.deselect();
  //     TweenMax.to(this.element, 1, { className: "+=tabs-link-selected" }); // Add a class named "tabs-link-selected" to this link
  
  //     // Call the select method on the item associated with this link
  //     this.itemElement.select();
  //   }
  
  //   deselect() {
  //     const links = document.querySelectorAll(".tabs-link");
  //     links.forEach(function(link) {
  //       if (link.classList.contains("tabs-link-selected")) {
  //         TweenMax.to(link, 1, { className: "-=tabs-link-selected" });
  //       } else {
  //       }
  //     });
  //   }
  // }
  