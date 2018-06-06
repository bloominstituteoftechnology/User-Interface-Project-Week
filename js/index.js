// JS goes here

class Dropdown {
    constructor(element) {

      this.element = element;

      this.button = this.element.querySelector('.dropdown-button');
      this.content = this.element.querySelector('.dropdown-content');
      // this.close = this.element.querySelector('close-btn');
      this.button.addEventListener("click", () => { this.toggleContent() });
      // this.close.addEventListener("click", () => { this.toggleClose() });
    }
  
    toggleContent() {
      this.content.classList.toggle("dropdown-hidden");
      this.button.classList.toggle("dropdown-hidden");
      console.log("does this work")
    }

    // toggleClose() {
    //   this.content.classList.toggle("dropdown-hidden");
    //   console.log("does this work")
    // }
  }
  
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

// JOSH CODE


// let overlay = document.querySelector(".overlay");
// let menuBtn = document.querySelector(".nav-btn");
// let closeBtn = document.querySelector(".close-btn");

// console.log(menuBtn)

// menuBtn.addEventListener('click', function() {
//   // I want overlay to display block now
//   overlay.style.display = "block";
// });

// closeBtn.addEventListener('click', function() {
//   // I want overlay to display none now
//   overlay.style.display = "none";
// });