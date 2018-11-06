(function() {
  class Tabs {
    constructor(tabLinks) {
      this.element = tabLinks;
      this.links = Array.from(
        this.element.querySelectorAll('.tabs-link')
        ).map( link => new TabLink(link));
      this.selectedLink = this.links[0];
      this.selectedLink.select();
      this.links.forEach( link => {
        link.element.addEventListener('click', () => {
          this.selectedLink.deselect();
          this.selectedLink = link;
          this.selectedLink.select();
        })
      })
    }
  }

  class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on the Link
      this.data = this.element.dataset.tab;

      // Using the custom data attribute get the associated Item element
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.itemElement);
    };
    select() {
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
    deselect() {
      this.element.classList.remove('tabs-link-selected');
      this.tabItem.deselect();
    }
  }

  class TabItem {
    constructor(element) {
      this.element = element;
    }
    select() {
      this.element.classList.remove('hidden'); 
      this.element.style.opacity = 0;
      TweenLite.to(this.element, 2, {autoAlpha: 1, ease:Power1.easeOut});
    }
    deselect() {
      this.element.classList.add('hidden');
    }
  }

  // DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
  // links[0].select();

  const links = new Tabs(document.querySelector('.tabs-links'));
})();