class Dropdown {
  constructor(element) {
    this.element = element;

    this.button = this.element.querySelector(".menu-button");

    this.content = this.element.querySelector(".hidden-menu-content");

    this.button.addEventListener('click', (event) => {this.toggleContent(event)
    })
  }

  toggleContent(event) {
    this.content.classList.toggle("hidden-menu-content--open");
    // this.button.classList.toggle("");
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));


// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   hiddenMenuContent.classList.toggle("hidden-menu-content--open")
// }

// // Start Here: Create a reference to the ".menu" class
// const hiddenMenuContent = document.querySelector('.hidden-menu-content');

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu


// menuButton.addEventListener('click', toggleMenu);
