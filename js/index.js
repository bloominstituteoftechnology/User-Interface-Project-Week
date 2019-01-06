// JS goes here
class TabLink {
  constructor(element) {
    this.element = element;

    // Get the custom data attribute on teh Link
    this.data = this.element.dataset.tab;
    // Using the custom data attribute ge tthe associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', () => {
      // Call the select method you define below
      this.select();
    });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => {
      link.classList.remove('tabs-link-selected')
    });

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    })
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');
  }
}

// ======================================================== OVERLAY START ===========================================================================
const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  openMenu.classList.toggle("close-menu");
  closeMenu.classList.toggle("close-menu");
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  openMenu.classList.toggle("close-menu");
  closeMenu.classList.toggle("close-menu");
}

// ======================================================= OVERLAY END ===============================================================================



let links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));